// Vercel Serverless Function: /api/create-task
// Proxies the Manus API call server-side to avoid CORS restrictions in the browser.
// The Manus API key is stored here server-side and never exposed to the client.

const MANUS_API_KEY = 'sk-5LabL9v0IM42Fj-IzF_raL9d2wB1xfVsDK0idoqjIWPy1XX8X4AiHskXEqbLoDFMQTwTFKi9Av-o2cMj5LR7dsMT6PDS';
const MANUS_API_URL = 'https://api.manus.ai/v1/tasks';

export default async function handler(req, res) {
  // Set CORS headers on ALL responses (including preflight OPTIONS)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle CORS preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests beyond preflight
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Missing prompt' });
  }

  try {
    const response = await fetch(MANUS_API_URL, {
      method: 'POST',
      headers: {
        'API_KEY': MANUS_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        agentProfile: 'manus-1.6',
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data.message || 'Manus API error', details: data });
    }

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to reach Manus API', details: err.message });
  }
}
