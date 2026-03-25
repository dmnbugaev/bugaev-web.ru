import { c as defineEventHandler, u as useRuntimeConfig, e as createError, r as readBody } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const leads_post = defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  const token = config.telegramBotToken || process.env.NUXT_TELEGRAM_BOT_TOKEN || process.env.TELEGRAM_BOT_TOKEN;
  const chatId = config.telegramChatId || process.env.NUXT_TELEGRAM_CHAT_ID || process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    throw createError({ statusCode: 500, statusMessage: "Telegram \u043D\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043D" });
  }
  let body;
  try {
    body = await readBody(event);
  } catch {
    throw createError({ statusCode: 400, statusMessage: "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0434\u0430\u043D\u043D\u044B\u0445" });
  }
  const utmLine = body.utm_source ? `
\u{1F4CA} UTM: ${body.utm_source}/${body.utm_medium || "\u2014"}/${body.utm_campaign || "\u2014"}` : "";
  const text = [
    "\u{1F3AF} <b>\u041D\u043E\u0432\u0430\u044F \u0437\u0430\u044F\u0432\u043A\u0430 \u0441 \u0441\u0430\u0439\u0442\u0430!</b>",
    "",
    `\u{1F464} <b>\u0418\u043C\u044F:</b> ${body.name || "\u2014"}`,
    `\u{1F4DE} <b>\u0422\u0435\u043B\u0435\u0444\u043E\u043D:</b> ${body.phone || "\u2014"}`,
    `\u2709\uFE0F <b>Email:</b> ${body.email || "\u2014"}`,
    `\u{1F487} <b>\u0421\u0430\u043B\u043E\u043D:</b> ${body.salon || "\u2014"}`,
    "",
    `\u{1F4CD} \u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A: ${body.page_url || "\u2014"}`,
    utmLine
  ].filter((line) => line !== "").join("\n");
  let tgResponse;
  try {
    tgResponse = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: String(chatId), text, parse_mode: "HTML" })
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[leads] Telegram fetch error:", msg);
    throw createError({ statusCode: 502, statusMessage: `\u041D\u0435\u0442 \u0441\u0432\u044F\u0437\u0438 \u0441 Telegram: ${msg}` });
  }
  const tgData = await tgResponse.json().catch(() => ({}));
  console.log("[leads] Telegram response:", JSON.stringify(tgData));
  if (!tgResponse.ok) {
    throw createError({
      statusCode: 502,
      statusMessage: `Telegram API: ${JSON.stringify(tgData)}`
    });
  }
  return { ok: true };
});

export { leads_post as default };
//# sourceMappingURL=leads.post.mjs.map
