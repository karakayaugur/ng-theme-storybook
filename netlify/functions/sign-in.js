export async function handler(event, context) {
  const headers = { 'Content-Type': 'application/json' };

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ message: 'Method not allowed' }) };
  }

  const { email, password } = JSON.parse(event.body || '{}');

  if (email === 'ugur@example.com' && password === '123456') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Login successful', token: 'mock-jwt-token' }),
    };
  } else {
    return {
      statusCode: 401,
      headers,
      body: JSON.stringify({ message: 'Invalid email or password' }),
    };
  }
}
