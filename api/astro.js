export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { messages, system, image_base64, image_media_type } = req.body;
  if (!messages || !system) return res.status(400).json({ error: 'Missing required fields' });

  // Inject image into last user message if provided
  let finalMessages = [...messages];
  if (image_base64 && image_media_type) {
    const last = finalMessages[finalMessages.length - 1];
    finalMessages[finalMessages.length - 1] = {
      role: 'user',
      content: [
        { type: 'image', source: { type: 'base64', media_type: image_media_type, data: image_base64 } },
        { type: 'text', text: typeof last.content === 'string' ? last.content : last.content[0]?.text || '' }
      ]
    };
  }

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-opus-4-5',
        max_tokens: 1500,
        system,
        messages: finalMessages
      })
    });

    if (!response.ok) {
      const err = await response.json();
      return res.status(response.status).json({ error: err.error?.message || 'Anthropic API error' });
    }

    const data = await response.json();
    return res.status(200).json({ result: data.content[0].text });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
