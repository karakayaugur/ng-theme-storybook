import 'dotenv/config';
import { MongoClient, ObjectId } from 'mongodb';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const client = new MongoClient(process.env.MONGO_URI);

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { email, password } = JSON.parse(event.body);

  if (!email || !password) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Email and password required' }) };
  }

  try {
    await client.connect();
    const db = client.db('warmwarren');
    const users = db.collection('users');

    console.log(`Attempting sign in for email: ${email}`);

    const user = await users.findOne({ email });

    if (!user) return { statusCode: 401, body: JSON.stringify({ error: 'Invalid sign in info.' }) };

    const validPassword = await bcrypt.compare(password, user.passwordHash);
    if (!validPassword)
      return { statusCode: 401, body: JSON.stringify({ error: 'Invalid sign in info.' }) };

    const token = jwt.sign(
      { userId: user._id.toString(), email: user.email, role: user.role, tenantId: user.tenantId },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Login successful',
        token,
        user: { email: user.email, name: user.name, role: user.role, tenantId: user.tenantId },
      }),
    };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Internal server error' }) };
  } finally {
    await client.close();
  }
};
