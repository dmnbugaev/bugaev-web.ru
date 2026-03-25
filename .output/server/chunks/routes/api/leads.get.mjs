import { c as defineEventHandler, u as useRuntimeConfig } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const leads_get = defineEventHandler((event) => {
  const config = useRuntimeConfig(event);
  const token = config.telegramBotToken || process.env.NUXT_TELEGRAM_BOT_TOKEN || process.env.TELEGRAM_BOT_TOKEN;
  const chatId = config.telegramChatId || process.env.NUXT_TELEGRAM_CHAT_ID || process.env.TELEGRAM_CHAT_ID;
  return {
    ok: !!(token && chatId),
    token: token ? `${token.slice(0, 10)}...` : null,
    chatId: chatId || null,
    message: token && chatId ? "\u041A\u043E\u043D\u0444\u0438\u0433\u0443\u0440\u0430\u0446\u0438\u044F \u0432 \u043F\u043E\u0440\u044F\u0434\u043A\u0435. \u0424\u043E\u0440\u043C\u0430 \u0433\u043E\u0442\u043E\u0432\u0430 \u043A \u0440\u0430\u0431\u043E\u0442\u0435." : "\u0422\u043E\u043A\u0435\u043D \u0438\u043B\u0438 chat_id \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u044B. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 .env \u0438 \u043F\u0435\u0440\u0435\u0437\u0430\u043F\u0443\u0441\u0442\u0438\u0442\u0435 npm run dev."
  };
});

export { leads_get as default };
//# sourceMappingURL=leads.get.mjs.map
