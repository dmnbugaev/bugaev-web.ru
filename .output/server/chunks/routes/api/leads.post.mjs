import { c as defineEventHandler, r as readBody, e as createError } from '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';

const leads_post = defineEventHandler(async (event) => {
  const body = await readBody(event);
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    throw createError({
      statusCode: 500,
      statusMessage: "Telegram not configured. Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env"
    });
  }
  const utmLine = body.utm_source ? `
\u{1F4CA} UTM: ${body.utm_source}/${body.utm_medium || "\u2014"}/${body.utm_campaign || "\u2014"}` : "";
  const text = [
    "\u{1F3AF} <b>\u041D\u043E\u0432\u0430\u044F \u0437\u0430\u044F\u0432\u043A\u0430 \u0441 \u0441\u0430\u0439\u0442\u0430!</b>",
    "",
    `\u{1F464} <b>\u0418\u043C\u044F:</b> ${body.name}`,
    `\u{1F4DE} <b>\u0422\u0435\u043B\u0435\u0444\u043E\u043D:</b> ${body.phone}`,
    `\u2709\uFE0F <b>Email:</b> ${body.email}`,
    `\u{1F487} <b>\u0421\u0430\u043B\u043E\u043D:</b> ${body.salon || "\u2014"}`,
    "",
    `\u{1F4CD} <b>\u0418\u0441\u0442\u043E\u0447\u043D\u0438\u043A:</b> ${body.page_url}`,
    `\u{1F550} <b>\u0412\u0440\u0435\u043C\u044F:</b> ${new Date(body.submitted_at).toLocaleString("ru-RU", { timeZone: "Europe/Moscow" })}`,
    utmLine
  ].filter((line) => line !== "").join("\n");
  const tgResponse = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: "HTML"
      })
    }
  );
  if (!tgResponse.ok) {
    const err = await tgResponse.json().catch(() => ({}));
    throw createError({
      statusCode: 502,
      statusMessage: `Telegram API error: ${JSON.stringify(err)}`
    });
  }
  return { ok: true };
});

export { leads_post as default };
//# sourceMappingURL=leads.post.mjs.map
