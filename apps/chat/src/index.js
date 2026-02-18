/**
 * CIV–MEM Chat: entry point. Starts HTTP server (health) and Telegram bot if configured.
 */

require('dotenv').config();

const express = require('express');
const telegram = require('./adapters/telegram');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ ok: true, service: 'civmem-chat' });
});

app.post('/chat', async (req, res) => {
  const { platform, user_id, message } = req.body;
  if (!platform || user_id == null || !message) {
    return res.status(400).json({ error: 'platform, user_id, message required' });
  }
  try {
    const engine = require('./engine');
    const out = await engine.run(platform, String(user_id), message);
    res.json(out);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, async () => {
  console.log(`CIV–MEM Chat listening on port ${PORT}`);
  if (process.env.TELEGRAM_BOT_TOKEN) {
    await telegram.start(process.env.TELEGRAM_BOT_TOKEN);
    console.log('Telegram bot started (polling). In groups: reply to the bot or @mention to use.');
  } else {
    console.log('TELEGRAM_BOT_TOKEN not set; Telegram bot disabled.');
  }
});
