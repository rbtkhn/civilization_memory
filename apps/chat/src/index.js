/**
 * CIV–MEM Chat: entry point. Starts HTTP server (health, /chat, optional Telegram webhook) and Telegram bot (polling or webhook).
 */

require('dotenv').config();

const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
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

const useWebhook = !!(process.env.TELEGRAM_BOT_TOKEN && process.env.WEBHOOK_BASE_URL);

if (process.env.TELEGRAM_BOT_TOKEN && useWebhook) {
  const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: false });
  const webhookUrl = process.env.WEBHOOK_BASE_URL.replace(/\/$/, '') + '/telegram-webhook';
  bot.setWebHook(webhookUrl).then(() => {
    console.log('Telegram webhook set:', webhookUrl);
  }).catch((err) => {
    console.error('Telegram setWebHook failed:', err);
  });
  app.post('/telegram-webhook', (req, res) => {
    telegram.handleWebhookUpdate(bot, req.body)
      .then(() => res.sendStatus(200))
      .catch((err) => {
        console.error('Webhook handler error:', err);
        res.status(500).send('Error');
      });
  });
}

app.listen(PORT, async () => {
  console.log(`CIV–MEM Chat listening on port ${PORT}`);
  if (process.env.TELEGRAM_BOT_TOKEN) {
    if (useWebhook) {
      console.log('Telegram: webhook mode. In groups: reply to the bot or @mention to use.');
    } else {
      await telegram.start(process.env.TELEGRAM_BOT_TOKEN);
      console.log('Telegram bot started (polling). In groups: reply to the bot or @mention to use.');
    }
  } else {
    console.log('TELEGRAM_BOT_TOKEN not set; Telegram bot disabled.');
  }
});
