/**
 * Telegram bot adapter: receive messages, call engine, send reply + inline keyboard (A–H).
 * In groups: only responds when @mentioned or when replying to the bot; one shared session per group.
 */

const TelegramBot = require('node-telegram-bot-api');
const engine = require('../engine');

const GROUP_TYPES = ['group', 'supergroup'];

function buildOptionsKeyboard(options) {
  if (!options || options.length === 0) return undefined;
  // Mode/entity choice: options have .id and .label, optionally .letter — show "A — Label" on button
  if (options[0].id !== undefined) {
    const buttonText = (o) => (o.letter ? `${o.letter} — ${o.label}` : o.label);
    return {
      inline_keyboard: [options.map((o) => ({ text: buttonText(o), callback_data: o.id }))],
    };
  }
  // A–H options: .letter and .label; two rows of letter buttons
  const row1 = options.slice(0, 4).map((o) => ({ text: o.letter, callback_data: o.letter }));
  const row2 = options.slice(4, 8).map((o) => ({ text: o.letter, callback_data: o.letter }));
  return {
    inline_keyboard: [row1, row2],
  };
}

function formatOptionsList(options) {
  if (!options || options.length === 0) return '';
  if (options[0].id !== undefined) {
    return options.map((o) => (o.letter ? `${o.letter} — ${o.label}` : `• ${o.label}`)).join('\n');
  }
  return options.map((o) => `${o.letter} — ${o.label}`).join('\n');
}

/** Session key: in groups use chat so everyone shares one thread; in private use user id. */
function sessionKey(chat, from) {
  return GROUP_TYPES.includes(chat.type) ? `chat:${chat.id}` : String(from.id);
}

/** In groups, only react when the bot is @mentioned or the message is a reply to the bot. */
function shouldRespondInGroup(msg, botUserId, botUsername) {
  const text = (msg.text || '').trim();
  if (!text) return false;
  const replyTo = msg.reply_to_message;
  if (replyTo && replyTo.from && replyTo.from.id === botUserId) return true;
  const mention = (msg.entities || []).find((e) => e.type === 'mention');
  if (mention && botUsername) {
    const mentioned = text.slice(mention.offset, mention.offset + mention.length);
    if (mentioned.toLowerCase() === `@${botUsername}`.toLowerCase()) return true;
  }
  return false;
}

/** Remove @botname from the start of text so the engine gets the actual command. */
function stripMention(text, botUsername) {
  if (!botUsername || !text) return text;
  const re = new RegExp(`^@${botUsername}\\s+`, 'i');
  return text.replace(re, '').trim();
}

async function handleMessage(bot, chatId, text, sessionKeyForEngine) {
  try {
    const reply = await bot.sendMessage(chatId, 'Thinking…', { parse_mode: 'HTML' });
    const { text: responseText, options } = await engine.run(
      'telegram',
      sessionKeyForEngine,
      text
    );
    const keyboard = buildOptionsKeyboard(options);
    const fullMessage =
      options && options.length > 0
        ? responseText + '\n\n' + formatOptionsList(options)
        : responseText;
    await bot.editMessageText(fullMessage, {
      chat_id: chatId,
      message_id: reply.message_id,
      parse_mode: 'HTML',
      reply_markup: keyboard,
    });
  } catch (err) {
    console.error('Engine or send error:', err);
    await bot.sendMessage(
      chatId,
      'Something went wrong. Check OPENAI_API_KEY and CIVMEM_CONTENT_ROOT. ' + err.message
    );
  }
}

async function start(token) {
  const bot = new TelegramBot(token, { polling: true });
  const me = await bot.getMe();
  const botUserId = me.id;
  const botUsername = me.username || '';

  bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const chat = msg.chat;
    const isGroup = GROUP_TYPES.includes(chat.type);
    let text = (msg.text || '').trim();
    if (!text) return;

    if (isGroup) {
      if (!shouldRespondInGroup(msg, botUserId, botUsername)) return;
      text = stripMention(text, botUsername);
      if (!text) return;
    }

    const sk = sessionKey(chat, msg.from);
    handleMessage(bot, chatId, text, sk);
  });

  bot.on('callback_query', async (query) => {
    const chatId = query.message.chat.id;
    const chat = query.message.chat;
    const letter = query.data;
    await bot.answerCallbackQuery(query.id);
    const sk = sessionKey(chat, query.from);
    handleMessage(bot, chatId, letter, sk);
  });

  return bot;
}

module.exports = { start, buildOptionsKeyboard, formatOptionsList };
