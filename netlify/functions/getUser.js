import 'dotenv/config';
import { MongoClient, ObjectId } from 'mongodb';
import jwt from 'jsonwebtoken';

const client = new MongoClient(process.env.MONGO_URI);

export const handler = async (event) => {
  if (event.httpMethod !== 'GET') return { statusCode: 405, body: 'Method Not Allowed' };

  const authHeader = event.headers.authorization || '';
  const token = authHeader.replace('Bearer ', '');

  if (!token) return { statusCode: 401, body: JSON.stringify({ error: 'Token required' }) };

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    await client.connect();
    const db = client.db('myAppDB');
    const users = db.collection('users');

    const tenantUsers = await users
      .find({ tenantId: decoded.tenantId })
      .project({ passwordHash: 0 })
      .toArray();

    return { statusCode: 200, body: JSON.stringify({ users: tenantUsers }) };
  } catch (err) {
    console.error(err);
    return { statusCode: 401, body: JSON.stringify({ error: 'Invalid or expired token' }) };
  } finally {
    await client.close();
  }
};
