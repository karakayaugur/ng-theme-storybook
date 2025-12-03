export async function handler(event, context) {
  const headers = { 'Content-Type': 'application/json' };

  if (event.httpMethod === 'GET') {
    return { statusCode: 200, headers, body: JSON.stringify({ message: 'Hello GET!' }) };
  }

  if (event.httpMethod === 'POST') {
    const data = JSON.parse(event.body || '{}');
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: `Hello POST, ${data.name || 'Guest'}!` }),
    };
  }

  return { statusCode: 405, headers, body: JSON.stringify({ message: 'Method not allowed' }) };
}
