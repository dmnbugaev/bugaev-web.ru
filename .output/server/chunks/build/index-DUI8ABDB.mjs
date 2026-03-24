import { _ as __nuxt_component_0, a as _sfc_main$a } from './Footer-DbrxVFel.mjs';
import { defineComponent, mergeProps, createVNode, resolveDynamicComponent, ref, unref, h, reactive, withCtx, createTextVNode, readonly, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderVNode, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { u as useHead } from './v3-Bj3M-984.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = [
      { value: "50+", label: "\u0441\u0430\u043B\u043E\u043D\u043E\u0432 \u0432 \u0440\u0430\u0431\u043E\u0442\u0435" },
      { value: "3\xD7", label: "\u0440\u043E\u0441\u0442 \u0437\u0430\u043F\u0438\u0441\u0435\u0439" },
      { value: "1 \u043C\u0435\u0441", label: "\u0434\u043E \u0437\u0430\u043F\u0443\u0441\u043A\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u044B" }
    ];
    const priceIncludes = [
      "\u0421\u0430\u0439\u0442-\u0432\u0438\u0437\u0438\u0442\u043A\u0430: SEO, \u043C\u043E\u0431\u0430\u0439\u043B, \u043E\u043D\u043B\u0430\u0439\u043D-\u0437\u0430\u043F\u0438\u0441\u044C",
      "\u0423\u043C\u043D\u044B\u0439 Telegram-\u0431\u043E\u0442 (\u0437\u0430\u043F\u0438\u0441\u044C, \u043E\u0442\u0437\u044B\u0432\u044B, \u043F\u0440\u043E\u0433\u0440\u0435\u0432)",
      "\u0412\u0435\u0434\u0435\u043D\u0438\u0435 Instagram \u0438 Telegram-\u043A\u0430\u043D\u0430\u043B\u0430",
      "CRM YCLIENTS: \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0438 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F",
      "\u041B\u0438\u0447\u043D\u044B\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0432 Telegram"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "hero",
        class: "relative overflow-hidden flex flex-col",
        style: { "background": "var(--surface)", "height": "100svh", "min-height": "580px", "padding-top": "72px" }
      }, _attrs))}><div class="absolute pointer-events-none" style="${ssrRenderStyle({ "top": "0", "right": "0", "width": "420px", "height": "420px", "border-radius": "50%", "background": "var(--accent-dim)", "filter": "blur(90px)", "transform": "translate(30%, -10%)" })}"></div><div class="absolute pointer-events-none" style="${ssrRenderStyle({ "bottom": "10%", "left": "-60px", "width": "240px", "height": "240px", "border-radius": "50%", "background": "rgba(143,175,138,0.05)", "filter": "blur(70px)" })}"></div><div class="section-container relative z-10 flex-1 flex flex-col justify-center py-6 sm:py-10"><div class="grid lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_340px] gap-8 xl:gap-16 items-center"><div><h1 data-animate="fade-up" data-delay="150" style="${ssrRenderStyle({ "font-family": "'Syne', sans-serif", "font-weight": "800", "line-height": "0.92", "letter-spacing": "-0.04em", "color": "var(--ink)", "font-size": "clamp(2.5rem, 7vw, 6rem)", "margin-bottom": "1.25rem" })}"> Digital\u2011\u043E\u0442\u0434\u0435\u043B<br> \u0438\xA0SMM \u0434\u043B\u044F<br><span style="${ssrRenderStyle({ "color": "var(--accent)" })}">\u0441\u0430\u043B\u043E\u043D\u0430</span><br> \u043F\u043E\u0434 \u043A\u043B\u044E\u0447 </h1><p data-animate="fade-up" data-delay="250" style="${ssrRenderStyle({ "font-size": "clamp(0.875rem, 1.5vw, 1rem)", "line-height": "1.65", "color": "var(--ink-3)", "max-width": "400px", "margin-bottom": "1.75rem" })}"> \u0415\u0434\u0438\u043D\u0430\u044F \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0430 50\xA0000\xA0\u20BD/\u043C\u0435\u0441 \u2014 \u0443\u0434\u0430\u043B\u0451\u043D\u043D\u044B\u0439 digital\u2011\u043E\u0442\u0434\u0435\u043B \u0438 SMM \u0434\u043B\u044F \u0441\u0430\u043B\u043E\u043D\u0430 \u043A\u0440\u0430\u0441\u043E\u0442\u044B \u0432 \u041C\u043E\u0441\u043A\u0432\u0435. \u0420\u043E\u0441\u0442 \u0437\u0430\u044F\u0432\u043E\u043A \u0441 \u043F\u0435\u0440\u0432\u043E\u0433\u043E \u043C\u0435\u0441\u044F\u0446\u0430. </p><div class="flex flex-wrap gap-3 mb-5 sm:mb-7" data-animate="fade-up" data-delay="350"><a href="#contact" class="btn-primary"> \u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 <span style="${ssrRenderStyle({ "font-size": "1.1em", "line-height": "1" })}">\u2192</span></a><a href="#features" class="btn-outline"> \u0423\u0437\u043D\u0430\u0442\u044C \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435 </a></div><div class="hidden sm:flex flex-wrap gap-2" data-animate="fade-up" data-delay="450"><!--[-->`);
      ssrRenderList(stats, (stat) => {
        _push(`<div class="flex items-center gap-2 px-3.5 py-2 rounded-full" style="${ssrRenderStyle({ "background": "var(--surface-warm)", "border": "1px solid var(--border)" })}"><span class="mono text-sm font-bold" style="${ssrRenderStyle({ "color": "var(--ink)" })}">${ssrInterpolate(stat.value)}</span><span class="text-xs" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}">${ssrInterpolate(stat.label)}</span></div>`);
      });
      _push(`<!--]--></div></div><div class="hidden lg:flex flex-col gap-3 flex-shrink-0" data-animate="fade-left" data-delay="300"><div class="relative overflow-hidden rounded-2xl p-6 xl:p-7" style="${ssrRenderStyle({ "background": "var(--ink)", "color": "white" })}"><div style="${ssrRenderStyle({ "position": "absolute", "top": "-60px", "right": "-60px", "width": "200px", "height": "200px", "border-radius": "50%", "background": "rgba(143,175,138,0.10)", "pointer-events": "none" })}"></div><p class="mono text-xs mb-4 relative z-10" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.35)", "letter-spacing": "0.09em", "text-transform": "uppercase" })}"> \u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0430 / \u043C\u0435\u0441\u044F\u0446 </p><div class="flex items-end gap-1.5 mb-5 relative z-10"><span style="${ssrRenderStyle({ "font-family": "'Syne', sans-serif", "font-weight": "800", "font-size": "clamp(2.8rem, 4vw, 3.6rem)", "line-height": "1", "letter-spacing": "-0.04em" })}">50 000</span><span class="text-xl font-semibold mb-1.5" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.4)" })}">\u20BD</span></div><ul class="space-y-2 mb-5 relative z-10"><!--[-->`);
      ssrRenderList(priceIncludes, (item) => {
        _push(`<li class="flex items-start gap-2.5 text-sm" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.7)" })}"><span class="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style="${ssrRenderStyle({ "background": "rgba(143,175,138,0.25)" })}"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l1.5 1.5 3.5-3" stroke="#8FAF8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span> ${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul><a href="#contact" class="relative z-10 flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200" style="${ssrRenderStyle({ "background": "var(--accent)", "color": "var(--ink)" })}"> \u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 <span>\u2197</span></a></div><div class="rounded-2xl px-5 py-3.5 flex items-center justify-between" style="${ssrRenderStyle({ "background": "var(--surface-warm)", "border": "1px solid var(--border)" })}"><div><p class="mono text-xs mb-0.5" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}">\u0412\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 \u0432 \u043F\u0435\u0440\u0432\u044B\u0439 \u043C\u0435\u0441\u044F\u0446</p><p class="text-sm font-semibold" style="${ssrRenderStyle({ "color": "var(--ink)" })}">\u0411\u0435\u0437 \u0434\u043E\u043F\u043B\u0430\u0442 \u0437\u0430 \u0437\u0430\u043F\u0443\u0441\u043A</p></div><span class="text-xl" style="${ssrRenderStyle({ "color": "var(--accent)" })}">\u2713</span></div></div></div><div class="lg:hidden mt-5" data-animate="fade-up" data-delay="500"><div class="flex items-center justify-between rounded-2xl px-5 py-4" style="${ssrRenderStyle({ "background": "var(--ink)" })}"><div><p class="mono text-xs mb-0.5" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.35)" })}">\u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0430 / \u043C\u0435\u0441\u044F\u0446</p><span style="${ssrRenderStyle({ "font-family": "'Syne', sans-serif", "font-weight": "800", "font-size": "1.6rem", "line-height": "1", "letter-spacing": "-0.03em", "color": "white" })}">50 000 \u20BD</span></div><a href="#contact" class="btn-accent text-sm px-4 py-2.5 whitespace-nowrap"> \u0417\u0430\u044F\u0432\u043A\u0430 \u2192 </a></div></div></div><div class="absolute bottom-0 left-0 right-0 h-20 pointer-events-none" style="${ssrRenderStyle({ "background": "linear-gradient(to bottom, transparent, var(--surface))" })}"></div></section>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Hero.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Features",
  __ssrInlineRender: true,
  setup(__props) {
    const ic = (paths) => defineComponent({
      render: () => h(
        "svg",
        { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none" },
        paths.map(
          ([tag, attrs]) => h(tag, { stroke: "currentColor", "stroke-width": 1.5, "stroke-linecap": "round", "stroke-linejoin": "round", ...attrs })
        )
      )
    });
    const IconWebsite = ic([
      ["rect", { x: 2, y: 3, width: 20, height: 15, rx: 2 }],
      ["path", { d: "M8 21h8M12 18v3" }],
      ["path", { d: "M2 7h20" }]
    ]);
    const IconBot = ic([
      ["rect", { x: 4, y: 8, width: 16, height: 13, rx: 2 }],
      ["path", { d: "M12 2v6M9 2h6" }],
      ["circle", { cx: 9, cy: 14, r: 1.5, stroke: "none", fill: "currentColor" }],
      ["circle", { cx: 15, cy: 14, r: 1.5, stroke: "none", fill: "currentColor" }],
      ["path", { d: "M8 17.5h8" }]
    ]);
    const IconSocial = ic([
      ["circle", { cx: 18, cy: 5, r: 2.5 }],
      ["circle", { cx: 6, cy: 12, r: 2.5 }],
      ["circle", { cx: 18, cy: 19, r: 2.5 }],
      ["path", { d: "M8.5 10.8l7-3.6M8.5 13.2l7 3.6" }]
    ]);
    const IconCRM = ic([
      ["rect", { x: 2, y: 3, width: 9, height: 9, rx: 1.5 }],
      ["rect", { x: 13, y: 3, width: 9, height: 9, rx: 1.5 }],
      ["rect", { x: 2, y: 13, width: 9, height: 9, rx: 1.5 }],
      ["path", { d: "M17.5 16v3M16 17.5h3" }]
    ]);
    const IconManager = ic([
      ["path", { d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" }],
      ["circle", { cx: 12, cy: 7, r: 4 }]
    ]);
    const features = [
      {
        icon: IconWebsite,
        title: "\u0421\u0430\u0439\u0442-\u0432\u0438\u0437\u0438\u0442\u043A\u0430 \u043D\u0430 Nuxt.js",
        description: "\u041B\u0435\u043D\u0434\u0438\u043D\u0433 \u043F\u043E\u0434 \u0443\u0441\u043B\u0443\u0433\u0438 \u0441\u0430\u043B\u043E\u043D\u0430 \u0438\u043B\u0438 \u043A\u043B\u0438\u043D\u0438\u043A\u0438: \u0446\u0435\u043D\u044B, \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B, \u043E\u043D\u043B\u0430\u0439\u043D-\u0437\u0430\u043F\u0438\u0441\u044C. \u041C\u043E\u0431\u0438\u043B\u044C\u043D\u0430\u044F \u0430\u0434\u0430\u043F\u0442\u0430\u0446\u0438\u044F, \u0431\u044B\u0441\u0442\u0440\u0430\u044F \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430 \u0438 \u0431\u0430\u0437\u043E\u0432\u0430\u044F SEO-\u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u044F \u2014 \u043A\u043B\u044E\u0447\u0438, \u043C\u0435\u0442\u0430-\u0442\u0435\u0433\u0438, \u0441\u0442\u0440\u0443\u043A\u0442\u0443\u0440\u0430.",
        tags: ["Nuxt.js", "SEO", "\u041E\u043D\u043B\u0430\u0439\u043D-\u0437\u0430\u043F\u0438\u0441\u044C"],
        highlight: false
      },
      {
        icon: IconBot,
        title: "Telegram-\u0431\u043E\u0442 \u043D\u0430 Python (aiogram)",
        description: "\u041E\u043D\u043B\u0430\u0439\u043D-\u0437\u0430\u043F\u0438\u0441\u044C, \u0430\u0432\u0442\u043E\u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F \u043E \u0432\u0438\u0437\u0438\u0442\u0435, \u0441\u0431\u043E\u0440 \u043E\u0442\u0437\u044B\u0432\u043E\u0432 \u0438 \u0430\u0432\u0442\u043E\u0432\u043E\u0440\u043E\u043D\u043A\u0430 \u0441 \u043F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u043C\u0438 \u0446\u0435\u043F\u043E\u0447\u043A\u0430\u043C\u0438. \u0421\u043D\u0438\u0436\u0430\u0435\u0442 \u043D\u0435\u044F\u0432\u043A\u0438 \u043D\u0430 30\u201340%.",
        tags: ["Python", "\u0410\u0432\u0442\u043E\u0437\u0430\u043F\u0438\u0441\u044C", "\u041F\u0440\u043E\u0433\u0440\u0435\u0432"],
        highlight: false
      },
      {
        icon: IconSocial,
        title: "\u0412\u0435\u0434\u0435\u043D\u0438\u0435 Instagram \u0438 Telegram-\u043A\u0430\u043D\u0430\u043B\u0430",
        description: "3\u20134 \u043F\u043E\u0441\u0442\u0430 \u0432 \u043D\u0435\u0434\u0435\u043B\u044E: \u0441\u043E\u0432\u0435\u0442\u044B, \u0430\u043A\u0446\u0438\u0438, \xAB\u0434\u043E/\u043F\u043E\u0441\u043B\u0435\xBB, \u043D\u043E\u0432\u043E\u0441\u0442\u0438 \u0441\u0430\u043B\u043E\u043D\u0430. \u0412\u0438\u0437\u0443\u0430\u043B \u0432 Canva \u043F\u043E\u0434 \u0431\u044C\u044E\u0442\u0438-\u043D\u0438\u0448\u0443, \u043E\u0442\u0432\u0435\u0442\u044B \u043D\u0430 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438, \u0441\u0442\u043E\u0440\u0438\u0442\u0435\u043B\u043B\u0438\u043D\u0433 \u0440\u0430\u0437 \u0432 \u043D\u0435\u0434\u0435\u043B\u044E.",
        tags: ["Instagram", "Telegram", "Reels"],
        highlight: false
      },
      {
        icon: IconCRM,
        title: "CRM YCLIENTS \u0438 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438",
        description: "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435 \u0438 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 CRM, \u043F\u0435\u0440\u0435\u043D\u043E\u0441 \u0431\u0430\u0437\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432. \u0421\u0432\u044F\u0437\u043A\u0430 \u0441\u0430\u0439\u0442 \u2192 \u0431\u043E\u0442 \u2192 CRM, \u0431\u0430\u0437\u043E\u0432\u0430\u044F \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u043F\u043E \u0437\u0430\u044F\u0432\u043A\u0430\u043C \u0438 \u0437\u0430\u043F\u0438\u0441\u044F\u043C.",
        tags: ["YCLIENTS", "\u0410\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430", "\u0418\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044F"],
        highlight: false
      },
      {
        icon: IconManager,
        title: "\u041B\u0438\u0447\u043D\u044B\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0432 Telegram",
        description: "\u041E\u0434\u0438\u043D \u0447\u0435\u043B\u043E\u0432\u0435\u043A \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0438\u0440\u0443\u0435\u0442 \u0432\u0435\u0441\u044C digital. \u0421\u0432\u044F\u0437\u044C \u043F\u043E \u0440\u0430\u0431\u043E\u0447\u0438\u043C \u0432\u043E\u043F\u0440\u043E\u0441\u0430\u043C, \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u043F\u043E \u0430\u043A\u0446\u0438\u044F\u043C \u0438 \u0442\u0440\u0435\u043D\u0434\u0430\u043C, \u0435\u0436\u0435\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u043E\u0442\u0447\u0451\u0442\u044B \u2014 6 \u0434\u043D\u0435\u0439 \u0432 \u043D\u0435\u0434\u0435\u043B\u044E.",
        tags: ["\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 6/7", "\u041E\u0442\u0447\u0451\u0442\u044B", "\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044F"],
        highlight: true
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "features",
        class: "relative py-24",
        style: { "background": "var(--dark)" }
      }, _attrs))}><div class="section-container"><div class="mb-16"><div class="mb-5" data-animate="fade-down"><span class="badge-dark">\u0421\u043E\u0441\u0442\u0430\u0432 \u043F\u0430\u043A\u0435\u0442\u0430</span></div><h2 class="section-title-light mb-4" data-animate="fade-up" data-delay="100"> \u0427\u0442\u043E \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443<br><span style="${ssrRenderStyle({ "color": "var(--accent)" })}">50\xA0000\xA0\u20BD \u0432 \u043C\u0435\u0441\u044F\u0446</span></h2><p class="section-subtitle-light max-w-lg" data-animate="fade-up" data-delay="200"> 5 \u043D\u0430\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0439 \u0432 \u043E\u0434\u043D\u043E\u0439 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0435 \u2014 \u043A\u043E\u043C\u043F\u043B\u0435\u043A\u0441\u043D\u044B\u0439 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433 \u0434\u043B\u044F \u0441\u0430\u043B\u043E\u043D\u0430 \u043A\u0440\u0430\u0441\u043E\u0442\u044B \u0431\u0435\u0437 \u0441\u043A\u0440\u044B\u0442\u044B\u0445 \u0434\u043E\u043F\u043B\u0430\u0442 </p></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
      ssrRenderList(features, (feature, index) => {
        _push(`<div class="p-7 flex flex-col gap-4 rounded-2xl cursor-default transition-transform duration-300 hover:-translate-y-1" style="${ssrRenderStyle(feature.highlight ? "background: var(--accent); border: 1px solid transparent;" : "background: var(--dark-card); border: 1px solid rgba(255,255,255,0.06);")}" data-animate="fade-up"${ssrRenderAttr("data-delay", String(80 + index * 80))}><span class="mono text-xs tracking-widest" style="${ssrRenderStyle(feature.highlight ? "color: rgba(15,15,15,0.45)" : "color: rgba(255,255,255,0.22)")}">${ssrInterpolate(String(index + 1).padStart(2, "0"))}</span><div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="${ssrRenderStyle(feature.highlight ? "background: rgba(15,15,15,0.10); color: var(--ink);" : "background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.65);")}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(feature.icon), null, null), _parent);
        _push(`</div><div class="flex-1"><h3 class="text-base font-semibold mb-2" style="${ssrRenderStyle(feature.highlight ? "color: var(--ink)" : "color: #FFFFFF")}">${ssrInterpolate(feature.title)}</h3><p class="text-sm leading-relaxed" style="${ssrRenderStyle(feature.highlight ? "color: rgba(15,15,15,0.6)" : "color: rgba(255,255,255,0.42)")}">${ssrInterpolate(feature.description)}</p></div><div class="flex flex-wrap gap-1.5 pt-3" style="${ssrRenderStyle(feature.highlight ? "border-top: 1px solid rgba(15,15,15,0.12)" : "border-top: 1px solid rgba(255,255,255,0.07)")}"><!--[-->`);
        ssrRenderList(feature.tags, (tag) => {
          _push(`<span class="text-xs px-2.5 py-1 rounded-full mono" style="${ssrRenderStyle(feature.highlight ? "background: rgba(15,15,15,0.10); color: rgba(15,15,15,0.65)" : "background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.45)")}">${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div><div class="mt-10 text-center py-5 rounded-2xl" style="${ssrRenderStyle({ "border": "1px solid rgba(255,255,255,0.07)", "background": "rgba(255,255,255,0.02)" })}" data-animate="fade-up" data-delay="600"><p class="text-base" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.4)" })}"> \u0412\u0441\u0451 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u043E \u0432 \u043E\u0434\u043D\u0443 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u2014 <span class="font-bold text-lg" style="${ssrRenderStyle({ "color": "var(--accent)" })}">50\xA0000\xA0\u20BD/\u043C\u0435\u0441</span>, \u0431\u0435\u0437 \u0441\u043A\u0440\u044B\u0442\u044B\u0445 \u0434\u043E\u043F\u043B\u0430\u0442 </p></div></div></section>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Features.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "HowItWorks",
  __ssrInlineRender: true,
  setup(__props) {
    const steps = [
      {
        week: "\u0428\u0430\u0433 1",
        title: "\u0417\u0430\u044F\u0432\u043A\u0430 \u0438 \u043E\u043D\u043B\u0430\u0439\u043D-\u0432\u0441\u0442\u0440\u0435\u0447\u0430",
        description: "\u0417\u0430\u043F\u043E\u043B\u043D\u044F\u0435\u0442\u0435 \u043A\u043E\u0440\u043E\u0442\u043A\u0443\u044E \u0444\u043E\u0440\u043C\u0443 \u0438\u043B\u0438 \u043F\u0438\u0448\u0435\u0442\u0435 \u0432 Telegram. \u041F\u0440\u043E\u0432\u043E\u0434\u0438\u043C \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0430\u0443\u0434\u0438\u0442 \u0438 30-\u043C\u0438\u043D\u0443\u0442\u043D\u044B\u0439 \u0441\u043E\u0437\u0432\u043E\u043D \u2014 \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0435\u043C \u0432\u0430\u0448 \u0441\u0430\u043B\u043E\u043D \u0438 \u0441\u0442\u0430\u0432\u0438\u043C \u0446\u0435\u043B\u0438.",
        points: [
          "\u0411\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0430\u0443\u0434\u0438\u0442 digital-\u043F\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0438\u044F",
          "\u0410\u043D\u0430\u043B\u0438\u0437 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432 \u0432 \u0432\u0430\u0448\u0435\u043C \u0440\u0430\u0439\u043E\u043D\u0435",
          "\u0421\u043E\u0433\u043B\u0430\u0441\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438 \u0438 \u0441\u0440\u043E\u043A\u043E\u0432"
        ]
      },
      {
        week: "\u0428\u0430\u0433 2",
        title: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0441\u0430\u0439\u0442\u0430, \u0431\u043E\u0442\u0430 \u0438 \u0441\u043E\u0446\u0441\u0435\u0442\u0435\u0439",
        description: "\u0417\u0430\u043F\u0443\u0441\u043A\u0430\u0435\u043C \u0441\u0430\u0439\u0442-\u0432\u0438\u0437\u0438\u0442\u043A\u0443 \u043D\u0430 Nuxt.js, \u043D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C Telegram-\u0431\u043E\u0442 \u0441 \u0430\u0432\u0442\u043E\u0437\u0430\u043F\u0438\u0441\u044C\u044E \u0438 \u043F\u0440\u043E\u0433\u0440\u0435\u0432\u043E\u043C, \u0433\u043E\u0442\u043E\u0432\u0438\u043C \u043F\u0435\u0440\u0432\u044B\u0439 \u043A\u043E\u043D\u0442\u0435\u043D\u0442-\u043F\u043B\u0430\u043D \u0434\u043B\u044F \u0441\u043E\u0446\u0441\u0435\u0442\u0435\u0439.",
        points: [
          "\u0421\u0430\u0439\u0442 \u0441 SEO, \u043C\u043E\u0431\u0430\u0439\u043B\u043E\u043C \u0438 \u043E\u043D\u043B\u0430\u0439\u043D-\u0437\u0430\u043F\u0438\u0441\u044C\u044E",
          "Telegram-\u0431\u043E\u0442: \u0437\u0430\u043F\u0438\u0441\u044C, \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F, \u043E\u0442\u0437\u044B\u0432\u044B",
          "\u0412\u0438\u0437\u0443\u0430\u043B \u0438 \u043F\u0435\u0440\u0432\u044B\u0435 \u043F\u043E\u0441\u0442\u044B \u0432 Instagram"
        ]
      },
      {
        week: "\u0428\u0430\u0433 3",
        title: "\u0412\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 CRM \u0438 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0439",
        description: "\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0430\u0435\u043C \u0438 \u043D\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C CRM YCLIENTS, \u043F\u0435\u0440\u0435\u043D\u043E\u0441\u0438\u043C \u0431\u0430\u0437\u0443 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432, \u0441\u0432\u044F\u0437\u044B\u0432\u0430\u0435\u043C \u0441\u0430\u0439\u0442 \u2192 \u0431\u043E\u0442 \u2192 CRM \u0432 \u0435\u0434\u0438\u043D\u0443\u044E \u0441\u0438\u0441\u0442\u0435\u043C\u0443.",
        points: [
          "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 CRM \u043F\u043E\u0434 \u0432\u0430\u0448 \u043F\u0440\u0430\u0439\u0441 \u0438 \u0443\u0441\u043B\u0443\u0433\u0438",
          "\u041F\u0435\u0440\u0435\u043D\u043E\u0441 \u0431\u0430\u0437\u044B \u0438 \u0438\u0441\u0442\u043E\u0440\u0438\u044F \u0437\u0430\u043F\u0438\u0441\u0435\u0439",
          "\u0411\u0430\u0437\u043E\u0432\u0430\u044F \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u043F\u043E \u0437\u0430\u044F\u0432\u043A\u0430\u043C"
        ]
      },
      {
        week: "\u0415\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u043E",
        title: "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 \u0438 \u0440\u043E\u0441\u0442",
        description: "\u0412\u0435\u0434\u0451\u043C \u043A\u043E\u043D\u0442\u0435\u043D\u0442, \u043E\u0442\u0432\u0435\u0447\u0430\u0435\u043C \u043D\u0430 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438, \u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0438\u0440\u0443\u0435\u043C \u043A\u0430\u043D\u0430\u043B\u044B \u043F\u043E \u0434\u0430\u043D\u043D\u044B\u043C. \u0415\u0436\u0435\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u043E\u0442\u0447\u0451\u0442\u044B \u0432 Telegram \u2014 \u0432\u0438\u0434\u0438\u0442\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0432 \u0446\u0438\u0444\u0440\u0430\u0445.",
        points: [
          "3\u20134 \u043F\u043E\u0441\u0442\u0430 \u0432 \u043D\u0435\u0434\u0435\u043B\u044E, \u0441\u0442\u043E\u0440\u0438\u0441",
          "\u0415\u0436\u0435\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u043E\u0442\u0447\u0451\u0442\u044B",
          "\u0420\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0430\u0446\u0438\u0438 \u043F\u043E \u0430\u043A\u0446\u0438\u044F\u043C \u0438 \u0442\u0440\u0435\u043D\u0434\u0430\u043C"
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "how-it-works",
        class: "py-24",
        style: { "background": "var(--surface)" }
      }, _attrs))}><div class="section-container"><div class="mb-16"><div class="mb-5" data-animate="fade-down"><span class="badge">\u041F\u0440\u043E\u0446\u0435\u0441\u0441 \u0437\u0430\u043F\u0443\u0441\u043A\u0430</span></div><h2 class="section-title mb-4" data-animate="fade-up" data-delay="100"> \u041A\u0430\u043A \u044D\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442:<br>4 \u043F\u0440\u043E\u0441\u0442\u044B\u0445 \u0448\u0430\u0433\u0430 </h2><p class="section-subtitle max-w-md" data-animate="fade-up" data-delay="200"> \u041D\u0435 \u043D\u0443\u0436\u043D\u043E \u0440\u0430\u0437\u0431\u0438\u0440\u0430\u0442\u044C\u0441\u044F \u0432 digital \u2014 \u043C\u044B \u0432\u0435\u0434\u0451\u043C \u0432\u0430\u0441 \u0437\u0430 \u0440\u0443\u043A\u0443 \u043E\u0442 \u0437\u0430\u044F\u0432\u043A\u0438 \u0434\u043E \u043F\u0435\u0440\u0432\u044B\u0445 \u0437\u0430\u043F\u0438\u0441\u0435\u0439 \u0447\u0435\u0440\u0435\u0437 \u0441\u0430\u0439\u0442 \u0438 \u0431\u043E\u0442\u0430. \u0412\u0441\u0451 \u043F\u0440\u043E\u0441\u0442\u043E \u0438 \u043F\u043E\u043D\u044F\u0442\u043D\u043E. </p></div><div class="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5" data-animate="fade-up" data-delay="280"><!--[-->`);
      ssrRenderList(steps, (step, index) => {
        _push(`<div class="card p-8 flex flex-col gap-5 relative">`);
        if (index < steps.length - 1) {
          _push(`<div class="absolute top-12 -right-2.5 hidden lg:flex items-center" style="${ssrRenderStyle({ "z-index": "1" })}"><div class="w-5 h-px" style="${ssrRenderStyle({ "background": "var(--border)" })}"></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="flex items-center gap-4"><div class="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 mono text-lg font-bold" style="${ssrRenderStyle({ "background": "var(--ink)", "color": "#FFFFFF" })}">${ssrInterpolate(String(index + 1).padStart(2, "0"))}</div></div><p class="mono text-xs tracking-widest uppercase" style="${ssrRenderStyle({ "color": "var(--accent-text)" })}">${ssrInterpolate(step.week)}</p><div><h3 class="text-lg font-bold mb-2" style="${ssrRenderStyle({ "color": "var(--ink)", "letter-spacing": "-0.02em" })}">${ssrInterpolate(step.title)}</h3><p class="text-sm leading-relaxed" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}">${ssrInterpolate(step.description)}</p></div><ul class="space-y-2"><!--[-->`);
        ssrRenderList(step.points, (point) => {
          _push(`<li class="flex items-start gap-2.5 text-sm" style="${ssrRenderStyle({ "color": "var(--ink-2)" })}"><span class="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style="${ssrRenderStyle({ "background": "var(--accent)" })}"></span> ${ssrInterpolate(point)}</li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div><div class="md:hidden relative flex flex-col"><div class="absolute left-5 top-0 bottom-0 w-px" style="${ssrRenderStyle({ "background": "linear-gradient(180deg, transparent, var(--border) 10%, var(--border) 90%, transparent)" })}"></div><!--[-->`);
      ssrRenderList(steps, (step, index) => {
        _push(`<div class="relative flex gap-5 pb-9" data-animate="fade-right"${ssrRenderAttr("data-delay", String(100 + index * 120))}><div class="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mono text-sm font-bold z-10" style="${ssrRenderStyle({ "background": "var(--ink)", "color": "#FFFFFF" })}">${ssrInterpolate(String(index + 1).padStart(2, "0"))}</div><div class="flex-1 card p-5"><p class="mono text-xs tracking-widest uppercase mb-2" style="${ssrRenderStyle({ "color": "var(--accent-text)" })}">${ssrInterpolate(step.week)}</p><h3 class="text-base font-bold mb-1.5" style="${ssrRenderStyle({ "color": "var(--ink)", "letter-spacing": "-0.02em" })}">${ssrInterpolate(step.title)}</h3><p class="text-sm leading-relaxed" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}">${ssrInterpolate(step.description)}</p></div></div>`);
      });
      _push(`<!--]--></div><div class="mt-12" data-animate="fade-up" data-delay="500"><a href="#contact" class="btn-primary text-base"> \u041D\u0430\u0447\u0430\u0442\u044C \u0437\u0430 1 \u0434\u0435\u043D\u044C <span style="${ssrRenderStyle({ "font-size": "1.1em" })}">\u2192</span></a></div></div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/HowItWorks.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ForWho",
  __ssrInlineRender: true,
  setup(__props) {
    const ic = (paths) => defineComponent({
      render: () => h(
        "svg",
        { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none" },
        paths.map(
          ([tag, attrs]) => h(tag, { stroke: "currentColor", "stroke-width": 1.5, "stroke-linecap": "round", "stroke-linejoin": "round", ...attrs })
        )
      )
    });
    const IconSalon = ic([["path", { d: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" }], ["path", { d: "M9 22V12h6v10" }]]);
    const IconClinic = ic([["rect", { x: 3, y: 6, width: 18, height: 14, rx: 2 }], ["path", { d: "M12 10v6M9 13h6" }], ["path", { d: "M8 6V4a1 1 0 011-1h6a1 1 0 011 1v2" }]]);
    const IconStudio = ic([["circle", { cx: 12, cy: 8, r: 4 }], ["path", { d: "M12 14c-5 0-8 2.5-8 4v1h16v-1c0-1.5-3-4-8-4z" }]]);
    const IconNails = ic([["path", { d: "M7 4C5.4 4 4 5.4 4 7v10a3 3 0 006 0V7c0-1.6-1.4-3-3-3z" }], ["path", { d: "M17 4c-1.6 0-3 1.4-3 3v10a3 3 0 006 0V7c0-1.6-1.4-3-3-3z" }]]);
    const IconBrow = ic([["path", { d: "M2 14c3-5 7-7 10-7s7 2 10 7" }], ["circle", { cx: 12, cy: 14, r: 2 }]]);
    const IconDent = ic([["path", { d: "M12 3c-2.5 0-5 1.5-5 4 0 3 1.5 5 2 8 .5 2 3 2 3 2s2.5 0 3-2c.5-3 2-5 2-8 0-2.5-2.5-4-5-4z" }]]);
    const pains = [
      {
        problem: "\u041D\u0435\u0442 \u0432\u0440\u0435\u043C\u0435\u043D\u0438 \u0432\u0435\u0441\u0442\u0438 \u0441\u043E\u0446\u0441\u0435\u0442\u0438 \u2014 \u0440\u0443\u043A\u0438 \u043D\u0435 \u0434\u043E\u0445\u043E\u0434\u044F\u0442, \u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u0432\u044B\u0445\u043E\u0434\u0438\u0442 \u0445\u0430\u043E\u0442\u0438\u0447\u043D\u043E",
        solution: "\u041C\u044B \u0432\u0435\u0434\u0451\u043C Instagram \u0438 Telegram \u0432\u043C\u0435\u0441\u0442\u043E \u0432\u0430\u0441: 3\u20134 \u043F\u043E\u0441\u0442\u0430 \u0432 \u043D\u0435\u0434\u0435\u043B\u044E, \u043E\u0442\u0432\u0435\u0442\u044B \u043D\u0430 \u043A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0438, \u0441\u0442\u043E\u0440\u0438\u0441 \u2014 \u0432\u0430\u0448\u0435 \u0443\u0447\u0430\u0441\u0442\u0438\u0435 10\u201315 \u043C\u0438\u043D\u0443\u0442."
      },
      {
        problem: "\u041D\u0435\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u043E\u0433\u043E \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0430 \u2014 \u043A\u043B\u0438\u0435\u043D\u0442\u044B \u043F\u0440\u0438\u0445\u043E\u0434\u044F\u0442 \xAB\u0441\u0430\u0440\u0430\u0444\u0430\u043D\u043E\u043C\xBB, \u043D\u043E\u0432\u044B\u0445 \u043D\u0435 \u043F\u0440\u0438\u0431\u0430\u0432\u043B\u044F\u0435\u0442\u0441\u044F",
        solution: "\u0412\u044B\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043C \u043F\u043E\u043B\u043D\u044B\u0439 digital-\u0446\u0438\u043A\u043B: \u0441\u0430\u0439\u0442 \u2192 \u0441\u043E\u0446\u0441\u0435\u0442\u0438 \u2192 \u0431\u043E\u0442 \u2192 CRM. \u041F\u0440\u0438\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0432 \u0441\u0430\u043B\u043E\u043D \u043A\u0440\u0430\u0441\u043E\u0442\u044B \u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0441\u044F \u043F\u0440\u0435\u0434\u0441\u043A\u0430\u0437\u0443\u0435\u043C\u044B\u043C."
      },
      {
        problem: "\u0411\u043E\u044F\u0437\u043D\u044C \u0443\u0434\u0430\u043B\u0451\u043D\u0449\u0438\u043A\u043E\u0432 \u2014 \u043D\u0435\u043F\u043E\u043D\u044F\u0442\u043D\u043E, \u0447\u0442\u043E \u043E\u043D\u0438 \u0434\u0435\u043B\u0430\u044E\u0442 \u0438 \u0435\u0441\u0442\u044C \u043B\u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",
        solution: "\u0415\u0436\u0435\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u043E\u0442\u0447\u0451\u0442\u044B \u0432 Telegram, \u0432\u0438\u0434\u0438\u0442\u0435 \u043A\u0430\u0436\u0434\u043E\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0438 \u0446\u0438\u0444\u0440\u044B. \u041B\u0438\u0447\u043D\u044B\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043D\u0430 \u0441\u0432\u044F\u0437\u0438 6 \u0434\u043D\u0435\u0439 \u0432 \u043D\u0435\u0434\u0435\u043B\u044E."
      },
      {
        problem: "\u0420\u0430\u0437\u0440\u043E\u0437\u043D\u0435\u043D\u043D\u044B\u0435 \u043F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A\u0438 \u2014 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u0441\u0430\u0439\u0442, \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E SMM, \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E \u0440\u0435\u043A\u043B\u0430\u043C\u0430 \u0438 \u0432\u0441\u0451 \u043D\u0435 \u0441\u0432\u044F\u0437\u0430\u043D\u043E",
        solution: "\u041E\u0434\u0438\u043D \u043F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A, \u0435\u0434\u0438\u043D\u0430\u044F \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C. \u0421\u0430\u0439\u0442, \u0431\u043E\u0442, \u0441\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 CRM \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u0432 \u0441\u0432\u044F\u0437\u043A\u0435 \u043F\u043E\u0434 \u043A\u043B\u044E\u0447."
      }
    ];
    const whoList = [
      { icon: IconSalon, text: "\u0421\u0430\u043B\u043E\u043D \u043A\u0440\u0430\u0441\u043E\u0442\u044B \u043B\u044E\u0431\u043E\u0433\u043E \u0444\u043E\u0440\u043C\u0430\u0442\u0430", sub: "\u041F\u0430\u0440\u0438\u043A\u043C\u0430\u0445\u0435\u0440\u0441\u043A\u0438\u0435, \u0431\u0430\u0440\u0431\u0435\u0440\u0448\u043E\u043F\u044B, beauty-\u0441\u0442\u0443\u0434\u0438\u0438" },
      { icon: IconClinic, text: "\u041A\u043E\u0441\u043C\u0435\u0442\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u043B\u0438\u043D\u0438\u043A\u0430", sub: "\u041C\u0435\u0434\u0438\u0446\u0438\u043D\u0441\u043A\u0430\u044F \u0438 \u044D\u0441\u0442\u0435\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u043A\u043E\u0441\u043C\u0435\u0442\u043E\u043B\u043E\u0433\u0438\u044F" },
      { icon: IconStudio, text: "\u0421\u0442\u0443\u0434\u0438\u044F \u0431\u0440\u043E\u0432\u0435\u0439 \u0438 \u0440\u0435\u0441\u043D\u0438\u0446", sub: "\u0423\u0437\u043A\u043E\u0441\u043F\u0435\u0446\u0438\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0435 beauty-\u0443\u0441\u043B\u0443\u0433\u0438" },
      { icon: IconNails, text: "\u041D\u043E\u0433\u0442\u0435\u0432\u0430\u044F \u0441\u0442\u0443\u0434\u0438\u044F / SPA", sub: "\u041C\u0430\u043D\u0438\u043A\u044E\u0440, \u043F\u0435\u0434\u0438\u043A\u044E\u0440, \u0432\u0435\u043B\u043D\u0435\u0441-\u0446\u0435\u043D\u0442\u0440\u044B" },
      { icon: IconBrow, text: "\u0411\u0440\u043E\u0432\u0438\u0441\u0442\u044B \u0438 \u043B\u044D\u0448\u043C\u0435\u0439\u043A\u0435\u0440\u044B", sub: "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0435 \u043C\u0430\u0441\u0442\u0435\u0440\u0430 \u0438 \u0441\u0442\u0443\u0434\u0438\u0438" },
      { icon: IconDent, text: "\u0421\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043A\u043B\u0438\u043D\u0438\u043A\u0438", sub: "\u0427\u0430\u0441\u0442\u043D\u044B\u0435 \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u044B \u0438 \u043C\u043D\u043E\u0433\u043E\u043F\u0440\u043E\u0444\u0438\u043B\u044C\u043D\u044B\u0435 \u0446\u0435\u043D\u0442\u0440\u044B" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "for-who",
        class: "py-24",
        style: { "background": "var(--surface-warm)" }
      }, _attrs))}><div class="section-container"><div class="mb-14"><div class="mb-5" data-animate="fade-down"><span class="badge">\u0414\u043B\u044F \u043A\u043E\u0433\u043E \u044D\u0442\u0430 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0430</span></div><h2 class="section-title mb-4" data-animate="fade-up" data-delay="100"> \u0423\u0437\u043D\u0430\u0451\u0442\u0435 \u0441\u0435\u0431\u044F? </h2><p class="section-subtitle max-w-xl" data-animate="fade-up" data-delay="200"> \u041D\u0435\u0431\u043E\u043B\u044C\u0448\u0438\u0435 \u0441\u0430\u043B\u043E\u043D\u044B \u043A\u0440\u0430\u0441\u043E\u0442\u044B, \u0441\u0442\u0443\u0434\u0438\u0438, \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u044B, \u043A\u043B\u0438\u043D\u0438\u043A\u0438 \u0438 \u0441\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0438\u0438 \u041C\u043E\u0441\u043A\u0432\u044B \u0438 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u2014 \u0434\u043B\u044F \u0442\u0435\u0445, \u043A\u0442\u043E \u0445\u043E\u0447\u0435\u0442 \u0441\u0438\u0441\u0442\u0435\u043C\u043D\u044B\u0439 \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433 \u0431\u0435\u0437 \u0433\u043E\u043B\u043E\u0432\u043D\u043E\u0439 \u0431\u043E\u043B\u0438 \u0441 \u043F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A\u0430\u043C\u0438. </p></div><div class="grid sm:grid-cols-2 gap-4 mb-10" data-animate="fade-up" data-delay="200"><!--[-->`);
      ssrRenderList(pains, (pain) => {
        _push(`<div class="card p-6 flex flex-col gap-3" style="${ssrRenderStyle({ "background": "var(--surface)" })}"><p class="text-sm font-semibold" style="${ssrRenderStyle({ "color": "var(--ink)" })}">${ssrInterpolate(pain.problem)}</p><div class="flex items-center gap-2"><div class="h-px flex-1" style="${ssrRenderStyle({ "background": "var(--border)" })}"></div><span style="${ssrRenderStyle({ "color": "var(--accent)", "font-size": "0.8rem" })}">\u2193</span><div class="h-px flex-1" style="${ssrRenderStyle({ "background": "var(--border)" })}"></div></div><p class="text-sm" style="${ssrRenderStyle({ "color": "var(--accent-text)", "font-weight": "600" })}">${ssrInterpolate(pain.solution)}</p></div>`);
      });
      _push(`<!--]--></div><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10" data-animate="fade-up" data-delay="400"><!--[-->`);
      ssrRenderList(whoList, (item) => {
        _push(`<div class="card p-5 flex items-center gap-4" style="${ssrRenderStyle({ "background": "var(--surface)" })}"><div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="${ssrRenderStyle({ "background": "var(--accent-dim)", "color": "var(--accent-text)" })}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), null, null), _parent);
        _push(`</div><div><p class="font-semibold text-sm" style="${ssrRenderStyle({ "color": "var(--ink)" })}">${ssrInterpolate(item.text)}</p><p class="text-xs mt-0.5" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}">${ssrInterpolate(item.sub)}</p></div></div>`);
      });
      _push(`<!--]--></div><div class="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6" style="${ssrRenderStyle({ "background": "var(--surface)", "border": "1px solid var(--border)" })}" data-animate="fade-up" data-delay="400"><div><h3 class="text-xl font-bold mb-2" style="${ssrRenderStyle({ "color": "var(--ink)", "letter-spacing": "-0.02em" })}">\u0413\u043E\u0442\u043E\u0432\u044B \u043E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u0432\u0430\u0448 \u0441\u0430\u043B\u043E\u043D?</h3><p class="text-sm" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}"> \u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443 \u2014 \u043F\u0440\u043E\u0432\u0435\u0434\u0451\u043C \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u044B\u0439 \u0430\u0443\u0434\u0438\u0442 \u0438 \u0441\u043E\u0441\u0442\u0430\u0432\u0438\u043C \u043F\u043B\u0430\u043D \u043F\u0440\u043E\u0434\u0432\u0438\u0436\u0435\u043D\u0438\u044F </p></div><div class="flex flex-col sm:flex-row gap-3 flex-shrink-0"><a href="#contact" class="btn-primary whitespace-nowrap"> \u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 </a><a href="https://t.me/bugaev_web" target="_blank" rel="noopener noreferrer" class="btn-outline whitespace-nowrap"> Telegram \u2197 </a></div></div></div></section>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ForWho.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Pricing",
  __ssrInlineRender: true,
  setup(__props) {
    const includedFeatures = [
      "\u0421\u0430\u0439\u0442-\u0432\u0438\u0437\u0438\u0442\u043A\u0430 \u043D\u0430 Nuxt.js (\u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 + \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430)",
      "Telegram-\u0431\u043E\u0442 \u043D\u0430 Python",
      "\u0412\u0435\u0434\u0435\u043D\u0438\u0435 2 \u0441\u043E\u0446\u0441\u0435\u0442\u0435\u0439 (\u043F\u043E\u0441\u0442\u044B + \u0441\u0442\u043E\u0440\u0438\u0441 + Reels)",
      "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430 CRM YCLIENTS",
      "\u0421\u0432\u044F\u0437\u043A\u0430 \u043A\u0430\u043D\u0430\u043B\u043E\u0432 \u0432 \u0435\u0434\u0438\u043D\u0443\u044E \u0432\u043E\u0440\u043E\u043D\u043A\u0443",
      "\u0415\u0436\u0435\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0430\u044F \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u0438 \u043E\u0442\u0447\u0451\u0442\u044B",
      "\u041B\u0438\u0447\u043D\u044B\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0432 Telegram (6 \u0434\u043D\u0435\u0439/\u043D\u0435\u0434)",
      "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 \u042F\u043D\u0434\u0435\u043A\u0441.\u041C\u0435\u0442\u0440\u0438\u043A\u0438 \u0438 \u0446\u0435\u043B\u0435\u0439",
      "Email-\u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433 (\u0434\u043E 2 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0438/\u043C\u0435\u0441)",
      "\u0415\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0441\u0435\u0441\u0441\u0438\u044F",
      "\u041D\u0435\u043E\u0433\u0440\u0430\u043D\u0438\u0447\u0435\u043D\u043D\u044B\u0435 \u043F\u0440\u0430\u0432\u043A\u0438 \u043F\u043E \u043A\u043E\u043D\u0442\u0435\u043D\u0442\u0443",
      "\u0425\u043E\u0441\u0442\u0438\u043D\u0433 \u0438 \u0434\u043E\u043C\u0435\u043D \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u044B"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "pricing",
        class: "py-24",
        style: { "background": "var(--surface)" }
      }, _attrs))}><div class="section-container"><div class="text-center mb-12"><div class="flex justify-center mb-5" data-animate="fade-down"><span class="badge">\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C</span></div><h2 class="section-title mb-3" data-animate="fade-up" data-delay="100"> \u041E\u0434\u0438\u043D \u0442\u0430\u0440\u0438\u0444 \u2014 \u043C\u0430\u043A\u0441\u0438\u043C\u0443\u043C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430 </h2><p class="section-subtitle max-w-md mx-auto" data-animate="fade-up" data-delay="200"> \u0411\u0435\u0437 \u0441\u043A\u0440\u044B\u0442\u044B\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439, \u0431\u0435\u0437 \xAB\u0431\u0430\u0437\u043E\u0432\u043E\u0433\u043E\xBB \u0438 \xAB\u0440\u0430\u0441\u0448\u0438\u0440\u0435\u043D\u043D\u043E\u0433\u043E\xBB \u2014 \u0442\u043E\u043B\u044C\u043A\u043E \u0432\u0441\u0451 \u0438 \u0441\u0440\u0430\u0437\u0443 </p></div><div class="max-w-2xl mx-auto" data-animate="zoom-in" data-delay="280"><div class="relative overflow-hidden rounded-3xl p-8 md:p-12" style="${ssrRenderStyle({ "background": "var(--surface)", "border": "1px solid var(--border)", "box-shadow": "0 4px 40px rgba(0,0,0,0.07)" })}"><div class="absolute top-0 left-0 right-0 h-0.5" style="${ssrRenderStyle({ "background": "var(--accent)" })}"></div><div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10 pt-3"><div><span class="badge inline-flex mb-3">\u0412\u0441\u0451 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u043E</span><h3 class="text-xl font-bold" style="${ssrRenderStyle({ "color": "var(--ink)", "letter-spacing": "-0.02em" })}">\u041F\u043E\u0434\u043F\u0438\u0441\u043A\u0430 \xAB\u041F\u043E\u043B\u043D\u044B\u0439 \u043F\u0430\u043A\u0435\u0442\xBB</h3><p class="text-sm mt-1" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}">\u0414\u043B\u044F \u0441\u0430\u043B\u043E\u043D\u043E\u0432 \u043A\u0440\u0430\u0441\u043E\u0442\u044B \u0438 beauty-\u043A\u043B\u0438\u043D\u0438\u043A</p></div><div class="sm:text-right sm:flex-shrink-0"><div class="flex items-end gap-1 sm:justify-end"><span class="font-bold leading-none" style="${ssrRenderStyle({ "font-family": "'Syne', sans-serif", "font-size": "3.8rem", "color": "var(--ink)", "letter-spacing": "-0.04em" })}">50 000</span><span class="text-2xl font-semibold mb-1.5" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}">\u20BD</span></div><p class="mono text-xs tracking-widest uppercase" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}">\u0432 \u043C\u0435\u0441\u044F\u0446 \xB7 \u0431\u0435\u0437 \u041D\u0414\u0421</p></div></div><div class="h-px mb-8" style="${ssrRenderStyle({ "background": "var(--border)" })}"></div><div class="grid sm:grid-cols-2 gap-3 mb-8"><!--[-->`);
      ssrRenderList(includedFeatures, (feature) => {
        _push(`<div class="flex items-start gap-3"><div class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style="${ssrRenderStyle({ "background": "var(--accent-dim)" })}"><svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2 4-4" stroke="#5A7A56" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><span class="text-sm" style="${ssrRenderStyle({ "color": "var(--ink-2)" })}">${ssrInterpolate(feature)}</span></div>`);
      });
      _push(`<!--]--></div><div class="flex items-start gap-3 p-4 rounded-xl mb-8" style="${ssrRenderStyle({ "background": "var(--surface-warm)", "border": "1px solid var(--border)" })}"><div class="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style="${ssrRenderStyle({ "background": "var(--accent-dim)" })}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" stroke="#5A7A56" stroke-width="1.5" stroke-linejoin="round"></path><path d="M9 12l2 2 4-4" stroke="#5A7A56" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><p class="text-sm leading-relaxed" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}"><span class="font-semibold" style="${ssrRenderStyle({ "color": "var(--ink)" })}">\u0412\u0441\u0451 \u0432\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 \u0432 \u043F\u0435\u0440\u0432\u044B\u0439 \u043C\u0435\u0441\u044F\u0446</span> \u2014 \u0443\u0436\u0435 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u043E \u0432 \u0430\u0431\u043E\u043D\u0435\u043C\u0435\u043D\u0442. \u0411\u0435\u0437 \u0434\u043E\u043F\u043B\u0430\u0442 \u0437\u0430 \u0437\u0430\u043F\u0443\u0441\u043A. </p></div><div class="flex flex-col sm:flex-row gap-3"><a href="#contact" class="btn-primary flex-1 justify-center text-base py-4"> \u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 <span style="${ssrRenderStyle({ "font-size": "1.1em" })}">\u2192</span></a><a href="https://t.me/bugaev_web" target="_blank" rel="noopener noreferrer" class="btn-outline flex-1 justify-center text-base py-4"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"></path></svg> \u041E\u0431\u0441\u0443\u0434\u0438\u0442\u044C \u0432 Telegram </a></div></div><p class="text-center text-xs mt-4 mono" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}" data-animate="fade-up" data-delay="400"> \u041E\u043F\u043B\u0430\u0442\u0430 \u0435\u0436\u0435\u043C\u0435\u0441\u044F\u0447\u043D\u043E. \u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043F\u043E \u0434\u043E\u0433\u043E\u0432\u043E\u0440\u0443. \u0412\u044B\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u043C \u0441\u0447\u0451\u0442 \u0438 \u0430\u043A\u0442. </p></div></div></section>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pricing.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Advantages",
  __ssrInlineRender: true,
  setup(__props) {
    const whyItems = [
      {
        problem: "\u041D\u0430\u043D\u0438\u043C\u0430\u0442\u044C SMM-\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430, \u043C\u0430\u0440\u043A\u0435\u0442\u043E\u043B\u043E\u0433\u0430 \u0438 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0430 \u043F\u043E \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438",
        solution: "\u041E\u0434\u0438\u043D \u043F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A, \u0435\u0434\u0438\u043D\u0430\u044F \u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043D\u043D\u043E\u0441\u0442\u044C",
        detail: "SMM \u2014 \u043E\u0442 60 \u043A, \u043C\u0430\u0440\u043A\u0435\u0442\u043E\u043B\u043E\u0433 \u2014 \u043E\u0442 80 \u043A, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u2014 \u043E\u0442 100 \u043A. \u0418\u0442\u043E\u0433\u043E 240 000+ \u20BD/\u043C\u0435\u0441 \u0431\u0435\u0437 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0439. \u041D\u0430\u0448\u0430 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0430 \u2014 50 000 \u20BD, \u0432\u0441\u0451 \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u043E."
      },
      {
        problem: "\u0414\u043E\u043B\u0433\u0438\u0439 \u0441\u0442\u0430\u0440\u0442 \u0438 \u043D\u0435\u0442 \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430",
        solution: "\u0417\u0430\u043F\u0443\u0441\u043A \u0437\u0430 2\u20134 \u043D\u0435\u0434\u0435\u043B\u0438 \u0431\u0435\u0437 \u0434\u043E\u043F\u043B\u0430\u0442",
        detail: "\u0412\u043D\u0435\u0434\u0440\u0435\u043D\u0438\u0435 \u0432 \u043F\u0435\u0440\u0432\u044B\u0439 \u043C\u0435\u0441\u044F\u0446 \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443. \u0421\u0430\u0439\u0442, \u0431\u043E\u0442, CRM \u0438 \u0441\u043E\u0446\u0441\u0435\u0442\u0438 \u0433\u043E\u0442\u043E\u0432\u044B \u043A \u0440\u0430\u0431\u043E\u0442\u0435 \u0431\u0435\u0437 \u0440\u0430\u0437\u043E\u0432\u044B\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439 \u0437\u0430 \u0437\u0430\u043F\u0443\u0441\u043A."
      },
      {
        problem: "\u041F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A\u0438 \u043D\u0435 \u043F\u043E\u043D\u0438\u043C\u0430\u044E\u0442 \u0431\u044C\u044E\u0442\u0438-\u0441\u043F\u0435\u0446\u0438\u0444\u0438\u043A\u0443",
        solution: "\u042D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u0430 \u0438\u043C\u0435\u043D\u043D\u043E \u0432 \u0431\u044C\u044E\u0442\u0438 \u0438 \u043C\u0435\u0434\u0438\u0446\u0438\u043D\u0435",
        detail: "\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0441 \u0441\u0430\u043B\u043E\u043D\u0430\u043C\u0438 \u043A\u0440\u0430\u0441\u043E\u0442\u044B, \u0441\u0442\u0443\u0434\u0438\u044F\u043C\u0438, \u043A\u043B\u0438\u043D\u0438\u043A\u0430\u043C\u0438 \u0438 \u0441\u0442\u043E\u043C\u0430\u0442\u043E\u043B\u043E\u0433\u0438\u044F\u043C\u0438 \u041C\u043E\u0441\u043A\u0432\u044B. \u0417\u043D\u0430\u0435\u043C \u043D\u0438\u0448\u0443, \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0442\u043E\u0432 \u0438 \u0447\u0442\u043E \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442."
      },
      {
        problem: "\u041D\u0435\u043F\u043E\u043D\u044F\u0442\u043D\u043E, \u0447\u0442\u043E \u043F\u0440\u043E\u0438\u0441\u0445\u043E\u0434\u0438\u0442 \u0438 \u0435\u0441\u0442\u044C \u043B\u0438 \u044D\u0444\u0444\u0435\u043A\u0442",
        solution: "\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u0430\u044F \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u0438 \u043E\u0442\u0447\u0451\u0442\u044B",
        detail: "\u0415\u0436\u0435\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u043E\u0442\u0447\u0451\u0442\u044B \u0432 Telegram: \u0437\u0430\u044F\u0432\u043A\u0438, \u0437\u0430\u043F\u0438\u0441\u0438, \u043E\u0445\u0432\u0430\u0442\u044B, \u043A\u043E\u043D\u0432\u0435\u0440\u0441\u0438\u0438. \u0412\u0438\u0434\u0438\u0442\u0435 \u043A\u0430\u0436\u0434\u043E\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0438 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 \u0432 \u0446\u0438\u0444\u0440\u0430\u0445."
      }
    ];
    const teamStats = [
      { value: "50+", label: "\u041A\u043B\u0438\u0435\u043D\u0442\u043E\u0432\n\u0432 \u0440\u0430\u0431\u043E\u0442\u0435" },
      { value: "4.9\u2605", label: "\u0421\u0440\u0435\u0434\u043D\u044F\u044F\n\u043E\u0446\u0435\u043D\u043A\u0430" },
      { value: "3\xD7", label: "\u0420\u043E\u0441\u0442\n\u0437\u0430\u043F\u0438\u0441\u0435\u0439" },
      { value: "96%", label: "\u041F\u0440\u043E\u0434\u043B\u0435\u0432\u0430\u044E\u0442\n\u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "advantages",
        class: "py-24 relative",
        style: { "background": "var(--dark)" }
      }, _attrs))}><div class="section-container"><div class="mb-16"><div class="mb-5" data-animate="fade-down"><span class="badge-dark">\u041D\u0430\u0448\u0438 \u043F\u0440\u0435\u0438\u043C\u0443\u0449\u0435\u0441\u0442\u0432\u0430</span></div><h2 class="section-title-light mb-4" data-animate="fade-up" data-delay="100"> \u041F\u043E\u0447\u0435\u043C\u0443 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0430<br><span style="${ssrRenderStyle({ "color": "var(--accent)" })}">\u0432\u044B\u0433\u043E\u0434\u043D\u0435\u0435</span>, \u0447\u0435\u043C \u043D\u0430\u043D\u0438\u043C\u0430\u0442\u044C </h2><p class="section-subtitle-light max-w-md" data-animate="fade-up" data-delay="200"> \u041F\u043E\u0441\u0447\u0438\u0442\u0430\u0439\u0442\u0435 \u0441\u0430\u043C\u0438: \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0439 SMM\u2011\u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u2014 \u043E\u0442 60 000 \u20BD/\u043C\u0435\u0441, \u043C\u0430\u0440\u043A\u0435\u0442\u043E\u043B\u043E\u0433 \u2014 \u043E\u0442 80 000 \u20BD, \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A \u2014 \u043E\u0442 100 000 \u20BD. \u0418\u043B\u0438 \u0432\u0441\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0430 \u0437\u0430 50 000 \u20BD \u043F\u043E\u0434 \u043A\u043B\u044E\u0447. </p></div><div class="relative rounded-2xl overflow-hidden mb-14" style="${ssrRenderStyle({ "border": "1px solid rgba(255,255,255,0.07)" })}" data-animate="zoom-in" data-delay="280"><div class="grid grid-cols-1 sm:grid-cols-2 gap-px" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.06)" })}"><!--[-->`);
      ssrRenderList(whyItems, (item, i) => {
        _push(`<div class="p-8 lg:p-10 flex flex-col gap-4" style="${ssrRenderStyle({ "background": "var(--dark)" })}"><p class="mono text-xs tracking-widest uppercase" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.25)" })}"> \u041F\u0440\u043E\u0431\u043B\u0435\u043C\u0430 </p><h3 class="font-bold" style="${ssrRenderStyle({ "font-family": "'Syne', sans-serif", "font-size": "clamp(1rem, 1.5vw, 1.2rem)", "letter-spacing": "-0.02em", "color": "rgba(255,255,255,0.7)", "line-height": "1.3" })}">${ssrInterpolate(item.problem)}</h3><div class="flex items-center gap-3"><div class="flex-1 h-px" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.07)" })}"></div><span style="${ssrRenderStyle({ "color": "var(--accent)", "font-size": "1.1rem" })}">\u2193</span><div class="flex-1 h-px" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.07)" })}"></div></div><p class="font-bold text-base" style="${ssrRenderStyle({ "color": "var(--accent)", "letter-spacing": "-0.015em" })}">${ssrInterpolate(item.solution)}</p><p class="text-sm leading-relaxed" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.35)" })}">${ssrInterpolate(item.detail)}</p></div>`);
      });
      _push(`<!--]--></div><div class="absolute inset-0 items-center justify-center pointer-events-none hidden sm:flex" style="${ssrRenderStyle({ "z-index": "10" })}"><div class="px-6 py-4 rounded-2xl text-center shadow-xl" style="${ssrRenderStyle({ "background": "var(--accent)" })}"><p class="mono font-bold text-sm tracking-widest uppercase" style="${ssrRenderStyle({ "color": "var(--ink)" })}">\u041F\u043E\u0447\u0435\u043C\u0443 \u043C\u044B</p></div></div></div><div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14" data-animate="fade-up" data-delay="350"><!--[-->`);
      ssrRenderList(teamStats, (stat) => {
        _push(`<div class="rounded-2xl p-5 text-center" style="${ssrRenderStyle({ "background": "var(--dark-card)", "border": "1px solid rgba(255,255,255,0.06)" })}"><div class="font-bold mb-1" style="${ssrRenderStyle({ "font-family": "'Syne', sans-serif", "font-size": "2rem", "line-height": "1", "letter-spacing": "-0.03em", "color": "var(--accent)" })}">${ssrInterpolate(stat.value)}</div><div class="text-xs leading-snug" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.35)", "white-space": "pre-line" })}">${ssrInterpolate(stat.label)}</div></div>`);
      });
      _push(`<!--]--></div><div class="rounded-3xl p-10 text-center" style="${ssrRenderStyle({ "background": "var(--accent)" })}" data-animate="fade-up" data-delay="450"><h3 class="text-2xl font-bold mb-3" style="${ssrRenderStyle({ "color": "var(--ink)", "letter-spacing": "-0.03em" })}">\u0412\u0430\u0448 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 digital-\u043E\u0442\u0434\u0435\u043B \u2014 \u0443\u0436\u0435 \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0435\u043C \u043C\u0435\u0441\u044F\u0446\u0435</h3><p class="text-base mb-8" style="${ssrRenderStyle({ "color": "rgba(15,15,15,0.6)" })}"> 50 000 \u20BD/\u043C\u0435\u0441 \u2014 \u0431\u0435\u0437 \u0440\u0430\u0437\u043E\u0432\u044B\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439, \u0431\u0435\u0437 \u0437\u0430\u043C\u043E\u0440\u043E\u0447\u0435\u043A \u0441 \u043F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A\u0430\u043C\u0438, \u0441 \u043F\u043E\u043D\u044F\u0442\u043D\u044B\u043C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u043C \u043F\u043E \u0437\u0430\u044F\u0432\u043A\u0430\u043C \u0438 \u0437\u0430\u043F\u0438\u0441\u044F\u043C </p><div class="flex flex-col sm:flex-row gap-3 justify-center"><a href="#contact" class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200" style="${ssrRenderStyle({ "background": "var(--ink)", "color": "#FFFFFF" })}"> \u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 <span style="${ssrRenderStyle({ "font-size": "1.1em" })}">\u2192</span></a><a href="https://t.me/bugaev_web" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200" style="${ssrRenderStyle({ "background": "rgba(15,15,15,0.10)", "color": "var(--ink)", "border": "1.5px solid rgba(15,15,15,0.15)" })}"> \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0432 Telegram </a></div></div></div></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Advantages.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Testimonials",
  __ssrInlineRender: true,
  setup(__props) {
    const testimonials = [
      {
        text: "\u0420\u0430\u043D\u044C\u0448\u0435 \u0442\u0440\u0430\u0442\u0438\u043B\u0430 2 \u0447\u0430\u0441\u0430 \u0432 \u0434\u0435\u043D\u044C \u043D\u0430 \u0441\u043E\u0446\u0441\u0435\u0442\u0438 \u0438 \u0432\u0441\u0451 \u0440\u0430\u0432\u043D\u043E \u0432\u044B\u0445\u043E\u0434\u0438\u043B\u043E \u043F\u043B\u043E\u0445\u043E. \u0422\u0435\u043F\u0435\u0440\u044C \u0432\u0435\u0434\u0435\u043D\u0438\u0435 Instagram \u0438 Telegram \u043E\u0442\u0434\u0430\u043B\u0430 Bugaev Web \u2014 \u043F\u043E\u0434\u043F\u0438\u0441\u0447\u0438\u043A\u0438 \u0440\u0430\u0441\u0442\u0443\u0442, \u0437\u0430\u043F\u0438\u0441\u0435\u0439 \u0441\u0442\u0430\u043B\u043E \u0431\u043E\u043B\u044C\u0448\u0435. \u0421\u0430\u0439\u0442 \u043E\u043A\u0443\u043F\u0438\u043B\u0441\u044F \u0432 \u043F\u0435\u0440\u0432\u0443\u044E \u043D\u0435\u0434\u0435\u043B\u044E.",
        result: "+40% \u0437\u0430\u043F\u0438\u0441\u0435\u0439 \u0447\u0435\u0440\u0435\u0437 \u0441\u0430\u0439\u0442 \u0437\u0430 1 \u043C\u0435\u0441\u044F\u0446",
        name: "\u0410\u043D\u043D\u0430 \u0421\u043E\u043A\u043E\u043B\u043E\u0432\u0430",
        role: "\u0412\u043B\u0430\u0434\u0435\u043B\u0438\u0446\u0430, \u0441\u0442\u0443\u0434\u0438\u044F \xABPrism Beauty\xBB, \u041C\u043E\u0441\u043A\u0432\u0430, \u041C\u0438\u0442\u0438\u043D\u043E",
        initials: "\u0410\u0421",
        color1: "#8FAF8A",
        color2: "#5A7A56"
      },
      {
        text: "\u0414\u0443\u043C\u0430\u043B\u0430, \u0447\u0442\u043E digital \u2014 \u044D\u0442\u043E \u0441\u043B\u043E\u0436\u043D\u043E \u0438 \u0434\u043E\u0440\u043E\u0433\u043E. \u041E\u043A\u0430\u0437\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E \u0437\u0430 50 000 \u20BD \u043F\u043E\u043B\u0443\u0447\u0430\u0435\u0448\u044C \u043F\u043E\u043B\u043D\u043E\u0446\u0435\u043D\u043D\u044B\u0439 \u043E\u0442\u0434\u0435\u043B \u043C\u0430\u0440\u043A\u0435\u0442\u0438\u043D\u0433\u0430. Telegram-\u0431\u043E\u0442 \u0441\u0430\u043C \u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432, \u044F \u0437\u0430\u043D\u0438\u043C\u0430\u044E\u0441\u044C \u043A\u043E\u0441\u043C\u0435\u0442\u043E\u043B\u043E\u0433\u0438\u0435\u0439, \u0430 \u043D\u0435 \u0441\u043E\u0446\u0441\u0435\u0442\u044F\u043C\u0438.",
        result: "\u0417\u0430\u043F\u0438\u0441\u044C \u0447\u0435\u0440\u0435\u0437 \u0431\u043E\u0442 \u2014 35% \u0432\u0441\u0435\u0445 \u043D\u043E\u0432\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432",
        name: "\u041C\u0430\u0440\u0438\u043D\u0430 \u041A\u043E\u0432\u0430\u043B\u0451\u0432\u0430",
        role: "\u041A\u043E\u0441\u043C\u0435\u0442\u043E\u043B\u043E\u0433, \u043A\u0430\u0431\u0438\u043D\u0435\u0442 \xAB\u042D\u0441\u0442\u0435\u0442\u0438\u043A\u0430\xBB, \u041C\u043E\u0441\u043A\u0432\u0430, \u0411\u0443\u0442\u043E\u0432\u043E",
        initials: "\u041C\u041A",
        color1: "#C9B8A8",
        color2: "#9E7B7B"
      },
      {
        text: "CRM \u043D\u0430\u0441\u0442\u0440\u043E\u0438\u043B\u0438 \u0437\u0430 \u043D\u0435\u0434\u0435\u043B\u044E, \u043F\u0435\u0440\u0435\u043D\u0435\u0441\u043B\u0438 \u0432\u0441\u044E \u0431\u0430\u0437\u0443. \u041A\u043B\u0438\u0435\u043D\u0442\u044B \u0442\u0435\u043F\u0435\u0440\u044C \u043F\u043E\u043B\u0443\u0447\u0430\u044E\u0442 \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0435 \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F, \u043E\u0442\u043C\u0435\u043D\u044B \u0443\u043F\u0430\u043B\u0438 \u0441 25% \u0434\u043E 8%. \u0410 \u044F \u0432\u0438\u0436\u0443 \u0446\u0438\u0444\u0440\u044B \u043A\u0430\u0436\u0434\u0443\u044E \u043D\u0435\u0434\u0435\u043B\u044E \u0432 \u043E\u0442\u0447\u0451\u0442\u0435 \u2014 \u043F\u043E\u043D\u044F\u0442\u043D\u043E, \u043E\u0442\u043A\u0443\u0434\u0430 \u0438\u0434\u0443\u0442 \u0437\u0430\u044F\u0432\u043A\u0438.",
        result: "\u041E\u0442\u043C\u0435\u043D\u044B \u0437\u0430\u043F\u0438\u0441\u0435\u0439 \u0441\u043D\u0438\u0437\u0438\u043B\u0438\u0441\u044C \u0441 25% \u0434\u043E 8%",
        name: "\u0414\u043C\u0438\u0442\u0440\u0438\u0439 \u041E\u0440\u043B\u043E\u0432",
        role: "\u0412\u043B\u0430\u0434\u0435\u043B\u0435\u0446, \u0431\u0430\u0440\u0431\u0435\u0440\u0448\u043E\u043F \xABNordCut\xBB, \u041C\u043E\u0441\u043A\u0432\u0430, \u041B\u044E\u0431\u043B\u0438\u043D\u043E",
        initials: "\u0414\u041E",
        color1: "#3A3A3A",
        color2: "#8FAF8A"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "testimonials",
        class: "py-24",
        style: { "background": "var(--surface)" }
      }, _attrs))}><div class="section-container"><div class="mb-14"><div class="mb-5" data-animate="fade-down"><span class="badge">\u041E\u0442\u0437\u044B\u0432\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432</span></div><h2 class="section-title mb-3" data-animate="fade-up" data-delay="100"> \u0427\u0442\u043E \u043F\u043E\u043B\u0443\u0447\u0430\u044E\u0442 \u0441\u0430\u043B\u043E\u043D\u044B \u0447\u0435\u0440\u0435\u0437 1\u20133 \u043C\u0435\u0441\u044F\u0446\u0430 </h2><p class="section-subtitle" data-animate="fade-up" data-delay="200"> \u0420\u0435\u0430\u043B\u044C\u043D\u044B\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0438\u0437 \u041C\u043E\u0441\u043A\u0432\u044B \u0438 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u043E\u0439 \u043E\u0431\u043B\u0430\u0441\u0442\u0438 \u2014 \u0431\u0435\u0437 \u043B\u0438\u0448\u043D\u0438\u0445 \u043E\u0431\u0435\u0449\u0430\u043D\u0438\u0439 </p></div><div class="grid md:grid-cols-3 gap-5"><!--[-->`);
      ssrRenderList(testimonials, (t, index) => {
        _push(`<div class="card p-6 flex flex-col gap-4 relative overflow-hidden" data-animate="fade-up"${ssrRenderAttr("data-delay", String(100 + index * 120))}><div class="absolute top-3 right-5 select-none pointer-events-none" style="${ssrRenderStyle({ "font-size": "72px", "line-height": "1", "color": "rgba(143,175,138,0.10)", "font-family": "'Syne', sans-serif", "font-weight": "800" })}">&quot;</div><div class="flex gap-0.5"><!--[-->`);
        ssrRenderList(5, (i) => {
          _push(`<svg width="13" height="13" viewBox="0 0 14 14" fill="var(--accent)"><path d="M7 1l1.8 3.6L13 5.4l-3 2.9.7 4.1L7 10.5l-3.7 1.9.7-4.1-3-2.9 4.2-.8z"></path></svg>`);
        });
        _push(`<!--]--></div><blockquote class="text-sm leading-relaxed flex-1 relative z-10" style="${ssrRenderStyle({ "color": "var(--ink-2)" })}"> &quot;${ssrInterpolate(t.text)}&quot; </blockquote><div class="px-3 py-2 rounded-xl text-sm font-semibold" style="${ssrRenderStyle({ "background": "var(--accent-dim)", "color": "var(--accent-text)", "border": "1px solid rgba(143,175,138,0.18)" })}">${ssrInterpolate(t.result)}</div><div class="h-px" style="${ssrRenderStyle({ "background": "var(--border)" })}"></div><div class="flex items-center gap-3"><div class="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold text-white" style="${ssrRenderStyle(`background: linear-gradient(135deg, ${t.color1}, ${t.color2});`)}">${ssrInterpolate(t.initials)}</div><div><div class="text-sm font-semibold" style="${ssrRenderStyle({ "color": "var(--ink)" })}">${ssrInterpolate(t.name)}</div><div class="text-xs" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}">${ssrInterpolate(t.role)}</div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Testimonials.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "FAQ",
  __ssrInlineRender: true,
  setup(__props) {
    const openIndex = ref(0);
    const faqItems = [
      {
        question: "\u0410 \u0435\u0441\u043B\u0438 \u0443 \u043D\u0430\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044C Instagram?",
        answer: "\u041E\u0442\u043B\u0438\u0447\u043D\u043E \u2014 \u043D\u0430\u0447\u043D\u0451\u043C \u0441 \u0430\u0443\u0434\u0438\u0442\u0430 \u0442\u043E\u0433\u043E, \u0447\u0442\u043E \u0435\u0441\u0442\u044C. \u0414\u043E\u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435, \u0432\u044B\u0441\u0442\u0440\u043E\u0438\u043C \u043A\u043E\u043D\u0442\u0435\u043D\u0442-\u043F\u043B\u0430\u043D \u0438 \u0443\u043B\u0443\u0447\u0448\u0438\u043C \u0432\u043E\u0432\u043B\u0435\u0447\u0451\u043D\u043D\u043E\u0441\u0442\u044C. \u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0443\u0434\u0430\u043B\u044F\u0435\u043C, \u0432\u0441\u0451 \u0442\u043E\u043B\u044C\u043A\u043E \u0443\u043B\u0443\u0447\u0448\u0430\u0435\u043C."
      },
      {
        question: "\u0410 \u0435\u0441\u043B\u0438 \u0443 \u043D\u0430\u0441 \u043D\u0435\u0442 \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u044B\u0445 \u0444\u043E\u0442\u043E?",
        answer: "\u041D\u0435 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430. \u041C\u044B \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u043C \u0441 \u0422\u0417 \u043D\u0430 \u0441\u044A\u0451\u043C\u043A\u0443, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0435 \u0444\u043E\u0442\u043E \u0440\u0430\u0431\u043E\u0442 \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0441\u0442\u043E\u043A. \u0412\u0430\u0448\u0435 \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u2014 \u0438\u0437\u0440\u0435\u0434\u043A\u0430 \u043F\u0440\u0438\u0441\u044B\u043B\u0430\u0442\u044C \u0444\u043E\u0442\u043E \u043D\u043E\u0432\u044B\u0445 \u0440\u0430\u0431\u043E\u0442. 10\u201315 \u043C\u0438\u043D\u0443\u0442 \u0432 \u043D\u0435\u0434\u0435\u043B\u044E."
      },
      {
        question: "\u0410 \u0435\u0441\u043B\u0438 \u043C\u044B \u043D\u0430\u0445\u043E\u0434\u0438\u043C\u0441\u044F \u043D\u0435 \u0432 \u0446\u0435\u043D\u0442\u0440\u0435 \u041C\u043E\u0441\u043A\u0432\u044B?",
        answer: "\u0411\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E \u043D\u0430\u0448\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u2014 \u0441\u0430\u043B\u043E\u043D\u044B \u0432 \u0441\u043F\u0430\u043B\u044C\u043D\u044B\u0445 \u0440\u0430\u0439\u043E\u043D\u0430\u0445 \u041C\u043E\u0441\u043A\u0432\u044B \u0438 \u041F\u043E\u0434\u043C\u043E\u0441\u043A\u043E\u0432\u044C\u0435: \u041C\u0438\u0442\u0438\u043D\u043E, \u0411\u0443\u0442\u043E\u0432\u043E, \u041B\u044E\u0431\u043B\u0438\u043D\u043E, \u0425\u0438\u043C\u043A\u0438, \u041F\u043E\u0434\u043E\u043B\u044C\u0441\u043A. \u0414\u043B\u044F \u0442\u0430\u043A\u0438\u0445 \u043B\u043E\u043A\u0430\u0446\u0438\u0439 SEO \u0438 \u0433\u0435\u043E\u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u0445\u043E\u0440\u043E\u0448\u043E \u2014 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0446\u0438\u044F \u043D\u0438\u0436\u0435, \u0430 \u0437\u0430\u043F\u0440\u043E\u0441\u044B \u0442\u0438\u043F\u0438\u0447\u043D\u044B\u0435."
      },
      {
        question: "\u0410 \u0435\u0441\u043B\u0438 \u043C\u044B \u0437\u0430\u0445\u043E\u0442\u0438\u043C \u0443\u0439\u0442\u0438?",
        answer: "\u0411\u0435\u0437 \u0448\u0442\u0440\u0430\u0444\u043E\u0432. \u0423\u0432\u0435\u0434\u043E\u043C\u0438\u0442\u0435 \u0437\u0430 14 \u0434\u043D\u0435\u0439 \u2014 \u0438 \u0434\u043E\u0433\u043E\u0432\u043E\u0440 \u0437\u0430\u043A\u0440\u044B\u0442. \u0421\u0430\u0439\u0442, \u0431\u043E\u0442, \u0431\u0430\u0437\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0438 \u0432\u0435\u0441\u044C \u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0443 \u0432\u0430\u0441. \u041C\u044B \u043D\u0435 \u0434\u0435\u0440\u0436\u0438\u043C \u0434\u0430\u043D\u043D\u044B\u0435 \u0432 \u0437\u0430\u043B\u043E\u0436\u043D\u0438\u043A\u0430\u0445."
      },
      {
        question: "\u041A\u0430\u043A \u0431\u044B\u0441\u0442\u0440\u043E \u0431\u0443\u0434\u0443\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B?",
        answer: "\u041F\u0435\u0440\u0432\u044B\u0435 \u0437\u0430\u043F\u0438\u0441\u0438 \u0447\u0435\u0440\u0435\u0437 \u0431\u043E\u0442 \u0438 \u0441\u0430\u0439\u0442 \u2014 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 2\u20134 \u043D\u0435\u0434\u0435\u043B\u044C \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u043F\u0443\u0441\u043A\u0430. \u0420\u043E\u0441\u0442 \u0432 \u0441\u043E\u0446\u0441\u0435\u0442\u044F\u0445 \u0438 SEO-\u0442\u0440\u0430\u0444\u0438\u043A \u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0442\u0441\u044F \u0437\u0430\u043C\u0435\u0442\u043D\u044B \u0447\u0435\u0440\u0435\u0437 1\u20133 \u043C\u0435\u0441\u044F\u0446\u0430. \u0422\u043E\u0447\u043D\u044B\u0435 \u043F\u0440\u043E\u0433\u043D\u043E\u0437\u044B \u0434\u0430\u0451\u043C \u043F\u043E\u0441\u043B\u0435 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0433\u043E \u0430\u0443\u0434\u0438\u0442\u0430."
      },
      {
        question: "\u041D\u0430\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u044D\u0442\u043E \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E \u0441 \u0442\u043E\u0447\u043A\u0438 \u0437\u0440\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432?",
        answer: "\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0441\u0442\u0440\u043E\u0433\u043E \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 152-\u0424\u0417 \u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445. \u0414\u043E\u0441\u0442\u0443\u043F \u043A CRM \u0438 \u0431\u0430\u0437\u0435 \u2014 \u0442\u043E\u043B\u044C\u043A\u043E \u0443 \u0432\u0430\u0441 \u0438 \u0432\u0430\u0448\u0435\u0433\u043E \u043B\u0438\u0447\u043D\u043E\u0433\u043E \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430. NDA \u043F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C \u0434\u043E \u043D\u0430\u0447\u0430\u043B\u0430 \u0440\u0430\u0431\u043E\u0442. \u0414\u0430\u043D\u043D\u044B\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u043D\u0438\u043A\u0443\u0434\u0430 \u043D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442\u0441\u044F."
      },
      {
        question: "\u0427\u0442\u043E \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u0438 \u043D\u0435\u0442 \u043B\u0438 \u0441\u043A\u0440\u044B\u0442\u044B\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439?",
        answer: "\u0412 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u0437\u0430 50 000 \u20BD/\u043C\u0435\u0441 \u0432\u0445\u043E\u0434\u0438\u0442 \u043F\u043E\u043B\u043D\u044B\u0439 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u043F\u0430\u043A\u0435\u0442 \u0431\u0435\u0437 \u043A\u0430\u043A\u0438\u0445-\u043B\u0438\u0431\u043E \u0441\u043A\u0440\u044B\u0442\u044B\u0445 \u0434\u043E\u043F\u043B\u0430\u0442:",
        points: [
          "\u0421\u0430\u0439\u0442-\u0432\u0438\u0437\u0438\u0442\u043A\u0430 \u043D\u0430 Nuxt.js \u2014 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u043A\u0430",
          "Telegram-\u0431\u043E\u0442 \u0441 \u0430\u0432\u0442\u043E\u0437\u0430\u043F\u0438\u0441\u044C\u044E, \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F\u043C\u0438 \u0438 \u043F\u0440\u043E\u0433\u0440\u0435\u0432\u043E\u043C",
          "\u0412\u0435\u0434\u0435\u043D\u0438\u0435 Instagram \u0438 Telegram-\u043A\u0430\u043D\u0430\u043B\u0430 (\u043F\u043E\u0441\u0442\u044B, \u0441\u0442\u043E\u0440\u0438\u0441)",
          "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 CRM YCLIENTS \u0438 \u0438\u043D\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u0438",
          "\u0415\u0436\u0435\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u043E\u0442\u0447\u0451\u0442\u044B \u0438 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u043F\u043E \u0437\u0430\u044F\u0432\u043A\u0430\u043C",
          "\u041B\u0438\u0447\u043D\u044B\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u0432 Telegram (6 \u0434\u043D\u0435\u0439 \u0432 \u043D\u0435\u0434\u0435\u043B\u044E)",
          "\u0425\u043E\u0441\u0442\u0438\u043D\u0433 \u0438 \u0434\u043E\u043C\u0435\u043D \u0432\u043A\u043B\u044E\u0447\u0435\u043D\u044B"
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "faq",
        class: "py-24",
        style: { "background": "var(--surface-warm)" }
      }, _attrs))}><div class="section-container"><div class="text-center mb-14"><div class="flex justify-center mb-5" data-animate="fade-down"><span class="badge">\u0412\u043E\u043F\u0440\u043E\u0441\u044B \u0438 \u043E\u0442\u0432\u0435\u0442\u044B</span></div><h2 class="section-title mb-3" data-animate="fade-up" data-delay="100"> \u041E\u0442\u0432\u0435\u0447\u0430\u0435\u043C \u043D\u0430 \u0447\u0430\u0441\u0442\u044B\u0435 \u0432\u043E\u043F\u0440\u043E\u0441\u044B </h2><p class="section-subtitle" data-animate="fade-up" data-delay="200"> \u0415\u0441\u043B\u0438 \u043D\u0435 \u043D\u0430\u0448\u043B\u0438 \u043E\u0442\u0432\u0435\u0442 \u2014 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u043C \u0432 Telegram, \u043E\u0442\u0432\u0435\u0442\u0438\u043C \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0447\u0430\u0441\u0430 </p></div><div class="max-w-3xl mx-auto flex flex-col gap-2" data-animate="fade-up" data-delay="300"><!--[-->`);
      ssrRenderList(faqItems, (item, index) => {
        _push(`<div class="overflow-hidden rounded-2xl transition-all duration-200" style="${ssrRenderStyle(unref(openIndex) === index ? "background: var(--surface); border: 1px solid rgba(143,175,138,0.25); box-shadow: 0 2px 20px rgba(143,175,138,0.08);" : "background: var(--surface); border: 1px solid var(--border);")}"><button class="w-full flex items-center justify-between gap-4 p-6 text-left"><div class="flex items-start gap-4 flex-1"><span class="flex-shrink-0 w-7 h-7 rounded-full mono text-xs font-bold flex items-center justify-center mt-0.5 transition-all duration-200" style="${ssrRenderStyle(unref(openIndex) === index ? "background: var(--ink); color: #FFFFFF;" : "background: var(--accent-dim); color: var(--accent-text);")}">${ssrInterpolate(String(index + 1).padStart(2, "0"))}</span><span class="font-semibold text-base leading-snug" style="${ssrRenderStyle({ "color": "var(--ink)" })}">${ssrInterpolate(item.question)}</span></div><div class="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-200" style="${ssrRenderStyle(unref(openIndex) === index ? "background: var(--accent-dim); border: 1px solid rgba(143,175,138,0.22);" : "background: var(--surface-warm); border: 1px solid var(--border);")}"><svg width="13" height="13" viewBox="0 0 13 13" fill="none" style="${ssrRenderStyle({ transform: unref(openIndex) === index ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s ease" })}"><path d="M2 4.5l4.5 4 4.5-4"${ssrRenderAttr("stroke", unref(openIndex) === index ? "var(--accent-text)" : "var(--ink-3)")} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></button><div class="${ssrRenderClass([{ open: unref(openIndex) === index }, "accordion-content"])}"><div class="px-6 pb-6 pt-0 pl-[4.25rem]"><div class="h-px mb-4" style="${ssrRenderStyle({ "background": "var(--border)" })}"></div><p class="text-sm leading-relaxed" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}">${ssrInterpolate(item.answer)}</p>`);
        if (item.points && item.points.length) {
          _push(`<ul class="mt-3 space-y-2"><!--[-->`);
          ssrRenderList(item.points, (point) => {
            _push(`<li class="flex items-start gap-2 text-sm" style="${ssrRenderStyle({ "color": "var(--ink-2)" })}"><span class="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5" style="${ssrRenderStyle({ "background": "var(--accent)" })}"></span> ${ssrInterpolate(point)}</li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div><div class="mt-10 text-center" data-animate="fade-up" data-delay="450"><p class="text-sm mb-3" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}">\u041E\u0441\u0442\u0430\u043B\u0438\u0441\u044C \u0432\u043E\u043F\u0440\u043E\u0441\u044B?</p><a href="https://t.me/bugaev_web" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-150" style="${ssrRenderStyle({ "color": "var(--ink)" })}"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"></path></svg> \u0417\u0430\u0434\u0430\u0442\u044C \u0432\u043E\u043F\u0440\u043E\u0441 \u0432 Telegram <span>\u2197</span></a></div></div></section>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FAQ.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const utmParams = ref({
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_term: "",
  utm_content: ""
});
const useUtm = () => {
  const parseAndStore = () => {
    return;
  };
  const clearUtm = () => {
    utmParams.value = {
      utm_source: "",
      utm_medium: "",
      utm_campaign: "",
      utm_term: "",
      utm_content: ""
    };
  };
  const getUtmForForm = () => {
    const result = {};
    Object.keys(utmParams.value).forEach((key) => {
      if (utmParams.value[key]) {
        result[key] = utmParams.value[key];
      }
    });
    return result;
  };
  return {
    utmParams: readonly(utmParams),
    parseAndStore,
    clearUtm,
    getUtmForForm
  };
};
const FORM_ENDPOINT = "/api/leads";
const useFormSubmit = () => {
  const { getUtmForForm } = useUtm();
  const isSubmitting = ref(false);
  const isSuccess = ref(false);
  const isError = ref(false);
  const errorMessage = ref("");
  const errors = ref({});
  const validatePhone = (phone) => {
    const cleaned = phone.replace(/[\s\-\(\)\.]/g, "");
    return /^(\+7|7|8)\d{10}$/.test(cleaned);
  };
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
  };
  const validate = (data) => {
    const newErrors = {};
    if (!data.name.trim()) {
      newErrors.name = "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043C\u044F";
    } else if (data.name.trim().length < 2) {
      newErrors.name = "\u0418\u043C\u044F \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 2 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432";
    } else if (data.name.trim().length > 100) {
      newErrors.name = "\u0418\u043C\u044F \u0441\u043B\u0438\u0448\u043A\u043E\u043C \u0434\u043B\u0438\u043D\u043D\u043E\u0435";
    }
    if (!data.phone.trim()) {
      newErrors.phone = "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u043D\u043E\u043C\u0435\u0440 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430";
    } else if (!validatePhone(data.phone)) {
      newErrors.phone = "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043D\u043E\u043C\u0435\u0440 (+7 \u0438\u043B\u0438 8 + 10 \u0446\u0438\u0444\u0440)";
    }
    if (!data.email.trim()) {
      newErrors.email = "\u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0443\u043A\u0430\u0436\u0438\u0442\u0435 email";
    } else if (!validateEmail(data.email)) {
      newErrors.email = "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 email \u0430\u0434\u0440\u0435\u0441";
    }
    errors.value = newErrors;
    return Object.keys(newErrors).length === 0;
  };
  const clearErrors = () => {
    errors.value = {};
    isError.value = false;
    errorMessage.value = "";
  };
  const clearError = (field) => {
    errors.value = { ...errors.value, [field]: void 0 };
  };
  const submit = async (data) => {
    clearErrors();
    if (!validate(data)) return false;
    isSubmitting.value = true;
    isSuccess.value = false;
    isError.value = false;
    const utmData = getUtmForForm();
    const payload = {
      ...data,
      name: data.name.trim(),
      phone: data.phone.trim(),
      email: data.email.trim().toLowerCase(),
      salon: data.salon.trim(),
      ...utmData,
      submitted_at: (/* @__PURE__ */ new Date()).toISOString(),
      page_url: ""
    };
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });
      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        throw new Error(
          err.message || `\u041E\u0448\u0438\u0431\u043A\u0430 \u0441\u0435\u0440\u0432\u0435\u0440\u0430: ${response.status}`
        );
      }
      isSuccess.value = true;
      if (false) ;
      return true;
    } catch (err) {
      isError.value = true;
      errorMessage.value = err instanceof Error ? err.message : "\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0442\u043F\u0440\u0430\u0432\u043A\u0435. \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430 \u0438\u043B\u0438 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u043C \u0432 Telegram.";
      return false;
    } finally {
      isSubmitting.value = false;
    }
  };
  const reset = () => {
    isSubmitting.value = false;
    isSuccess.value = false;
    isError.value = false;
    errorMessage.value = "";
    errors.value = {};
  };
  return {
    isSubmitting: readonly(isSubmitting),
    isSuccess: readonly(isSuccess),
    isError: readonly(isError),
    errorMessage: readonly(errorMessage),
    errors: readonly(errors),
    submit,
    validate,
    clearErrors,
    clearError,
    reset
  };
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LeadForm",
  __ssrInlineRender: true,
  setup(__props) {
    const { utmParams: utmParams2 } = useUtm();
    const { isSubmitting, isSuccess, isError, errorMessage, errors } = useFormSubmit();
    const form = reactive({ name: "", phone: "", email: "", salon: "" });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "contact",
        class: "py-24",
        style: { "background": "var(--surface)" }
      }, _attrs))} data-v-929b8dc7><div class="section-container" data-v-929b8dc7><div class="max-w-2xl mx-auto" data-v-929b8dc7><div class="text-center mb-10" data-v-929b8dc7><div class="flex justify-center mb-5" data-animate="fade-down" data-v-929b8dc7><span class="badge" data-v-929b8dc7>\u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u0441\u0442\u0430\u0440\u0442</span></div><h2 class="section-title mb-3" data-animate="fade-up" data-delay="100" data-v-929b8dc7> \u0412\u0430\u0448 \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0439 digital-\u043E\u0442\u0434\u0435\u043B \u0438 SMM \u2014 \u0437\u0430 50\xA0000\xA0\u20BD/\u043C\u0435\u0441 </h2><p class="section-subtitle" data-animate="fade-up" data-delay="200" data-v-929b8dc7> \u0411\u0435\u0437 \u0440\u0430\u0437\u043E\u0432\u044B\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439 \u0437\u0430 \u0437\u0430\u043F\u0443\u0441\u043A, \u0431\u0435\u0437 \u0437\u0430\u043C\u043E\u0440\u043E\u0447\u0435\u043A \u0441 \u043F\u043E\u0434\u0440\u044F\u0434\u0447\u0438\u043A\u0430\u043C\u0438 \u2014 \u0434\u043B\u044F \u0441\u0430\u043B\u043E\u043D\u043E\u0432 \u043A\u0440\u0430\u0441\u043E\u0442\u044B \u0438 \u043A\u043B\u0438\u043D\u0438\u043A \u041C\u043E\u0441\u043A\u0432\u044B. \u041E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0437\u0430\u044F\u0432\u043A\u0443 \u0438 \u043C\u044B \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 \u0447\u0430\u0441\u0430. </p></div><div class="rounded-3xl p-8 md:p-10" style="${ssrRenderStyle({ "background": "var(--surface)", "border": "1px solid var(--border)", "box-shadow": "0 4px 40px rgba(0,0,0,0.06)" })}" data-animate="fade-up" data-delay="300" data-v-929b8dc7>`);
      if (unref(isSuccess)) {
        _push(`<div class="success-notification text-center py-10" data-v-929b8dc7><div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style="${ssrRenderStyle({ "background": "var(--accent-dim)", "border": "2px solid rgba(143,175,138,0.3)" })}" data-v-929b8dc7><svg width="26" height="26" viewBox="0 0 26 26" fill="none" data-v-929b8dc7><path d="M4 13l6 6 12-12" stroke="var(--accent-text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-929b8dc7></path></svg></div><h3 class="text-2xl font-bold mb-3" style="${ssrRenderStyle({ "color": "var(--ink)", "letter-spacing": "-0.02em" })}" data-v-929b8dc7>\u0417\u0430\u044F\u0432\u043A\u0430 \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0430!</h3><p class="text-base mb-8 leading-relaxed" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}" data-v-929b8dc7> \u041C\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0432\u0430\u0448\u0443 \u0437\u0430\u044F\u0432\u043A\u0443 \u0438 \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0441 \u0432\u0430\u043C\u0438 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 <strong style="${ssrRenderStyle({ "color": "var(--ink)" })}" data-v-929b8dc7>\u043E\u0434\u043D\u043E\u0433\u043E \u0447\u0430\u0441\u0430</strong>. \u0418\u043B\u0438 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u043C \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E \u0432 Telegram. </p><div class="flex flex-col sm:flex-row gap-3 justify-center" data-v-929b8dc7><a href="https://t.me/bugaev_web" target="_blank" rel="noopener noreferrer" class="btn-primary" data-v-929b8dc7><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" data-v-929b8dc7><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" data-v-929b8dc7></path></svg> \u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0432 Telegram </a><button class="btn-outline" data-v-929b8dc7>\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0435\u0449\u0451 \u043E\u0434\u043D\u0443</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(isSuccess)) {
        _push(`<form novalidate data-v-929b8dc7><div class="space-y-5" data-v-929b8dc7><div class="grid sm:grid-cols-2 gap-5" data-v-929b8dc7><div data-v-929b8dc7><label class="block text-sm font-semibold mb-2" style="${ssrRenderStyle({ "color": "var(--ink)" })}" data-v-929b8dc7> \u0418\u043C\u044F <span style="${ssrRenderStyle({ "color": "#D94F4F" })}" data-v-929b8dc7>*</span></label><input${ssrRenderAttr("value", unref(form).name)} type="text" placeholder="\u0410\u043D\u043D\u0430" autocomplete="given-name" class="${ssrRenderClass(["form-input", unref(errors).name ? "error" : ""])}" data-v-929b8dc7>`);
        if (unref(errors).name) {
          _push(`<p class="mt-1.5 text-xs flex items-center gap-1" style="${ssrRenderStyle({ "color": "#D94F4F" })}" data-v-929b8dc7><svg width="11" height="11" viewBox="0 0 11 11" fill="none" data-v-929b8dc7><circle cx="5.5" cy="5.5" r="4.5" stroke="currentColor" stroke-width="1.3" data-v-929b8dc7></circle><path d="M5.5 3v2.5M5.5 7.5v.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" data-v-929b8dc7></path></svg> ${ssrInterpolate(unref(errors).name)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div data-v-929b8dc7><label class="block text-sm font-semibold mb-2" style="${ssrRenderStyle({ "color": "var(--ink)" })}" data-v-929b8dc7> \u0422\u0435\u043B\u0435\u0444\u043E\u043D <span style="${ssrRenderStyle({ "color": "#D94F4F" })}" data-v-929b8dc7>*</span></label><input${ssrRenderAttr("value", unref(form).phone)} type="tel" placeholder="+7 (999) 000-00-00" autocomplete="tel" class="${ssrRenderClass(["form-input", unref(errors).phone ? "error" : ""])}" data-v-929b8dc7>`);
        if (unref(errors).phone) {
          _push(`<p class="mt-1.5 text-xs flex items-center gap-1" style="${ssrRenderStyle({ "color": "#D94F4F" })}" data-v-929b8dc7><svg width="11" height="11" viewBox="0 0 11 11" fill="none" data-v-929b8dc7><circle cx="5.5" cy="5.5" r="4.5" stroke="currentColor" stroke-width="1.3" data-v-929b8dc7></circle><path d="M5.5 3v2.5M5.5 7.5v.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" data-v-929b8dc7></path></svg> ${ssrInterpolate(unref(errors).phone)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div data-v-929b8dc7><label class="block text-sm font-semibold mb-2" style="${ssrRenderStyle({ "color": "var(--ink)" })}" data-v-929b8dc7> Email <span style="${ssrRenderStyle({ "color": "#D94F4F" })}" data-v-929b8dc7>*</span></label><input${ssrRenderAttr("value", unref(form).email)} type="email" placeholder="anna@mysalon.ru" autocomplete="email" class="${ssrRenderClass(["form-input", unref(errors).email ? "error" : ""])}" data-v-929b8dc7>`);
        if (unref(errors).email) {
          _push(`<p class="mt-1.5 text-xs flex items-center gap-1" style="${ssrRenderStyle({ "color": "#D94F4F" })}" data-v-929b8dc7><svg width="11" height="11" viewBox="0 0 11 11" fill="none" data-v-929b8dc7><circle cx="5.5" cy="5.5" r="4.5" stroke="currentColor" stroke-width="1.3" data-v-929b8dc7></circle><path d="M5.5 3v2.5M5.5 7.5v.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" data-v-929b8dc7></path></svg> ${ssrInterpolate(unref(errors).email)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div data-v-929b8dc7><label class="block text-sm font-semibold mb-2" style="${ssrRenderStyle({ "color": "var(--ink)" })}" data-v-929b8dc7> \u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0441\u0430\u043B\u043E\u043D\u0430 / \u043A\u043B\u0438\u043D\u0438\u043A\u0438 <span class="font-normal" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}" data-v-929b8dc7>(\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)</span></label><input${ssrRenderAttr("value", unref(form).salon)} type="text" placeholder="\u0421\u0442\u0443\u0434\u0438\u044F Prism Beauty" autocomplete="organization" class="form-input" data-v-929b8dc7></div><input type="hidden" name="utm_source"${ssrRenderAttr("value", unref(utmParams2).utm_source)} data-v-929b8dc7><input type="hidden" name="utm_medium"${ssrRenderAttr("value", unref(utmParams2).utm_medium)} data-v-929b8dc7><input type="hidden" name="utm_campaign"${ssrRenderAttr("value", unref(utmParams2).utm_campaign)} data-v-929b8dc7><input type="hidden" name="utm_term"${ssrRenderAttr("value", unref(utmParams2).utm_term)} data-v-929b8dc7><input type="hidden" name="utm_content"${ssrRenderAttr("value", unref(utmParams2).utm_content)} data-v-929b8dc7>`);
        if (unref(isError)) {
          _push(`<div class="p-4 rounded-xl flex items-start gap-3" style="${ssrRenderStyle({ "background": "rgba(217,79,79,0.05)", "border": "1px solid rgba(217,79,79,0.18)" })}" data-v-929b8dc7><svg width="15" height="15" viewBox="0 0 15 15" fill="none" class="flex-shrink-0 mt-0.5" data-v-929b8dc7><circle cx="7.5" cy="7.5" r="6.5" stroke="#D94F4F" stroke-width="1.3" data-v-929b8dc7></circle><path d="M7.5 4.5v3M7.5 9.5v.5" stroke="#D94F4F" stroke-width="1.3" stroke-linecap="round" data-v-929b8dc7></path></svg><p class="text-sm" style="${ssrRenderStyle({ "color": "#D94F4F" })}" data-v-929b8dc7>${ssrInterpolate(unref(errorMessage))}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button type="submit"${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} class="btn-primary w-full text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none" data-v-929b8dc7>`);
        if (!unref(isSubmitting)) {
          _push(`<span class="flex items-center gap-2 justify-center" data-v-929b8dc7> \u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 <span style="${ssrRenderStyle({ "font-size": "1.1em" })}" data-v-929b8dc7>\u2192</span></span>`);
        } else {
          _push(`<span class="flex items-center gap-2 justify-center" data-v-929b8dc7><span class="spinner" data-v-929b8dc7></span> \u041E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u0435\u043C... </span>`);
        }
        _push(`</button></div><p class="text-xs text-center mt-4 leading-relaxed" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}" data-v-929b8dc7> \u041D\u0430\u0436\u0438\u043C\u0430\u044F \xAB\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443\xBB, \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u0441 `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/privacy",
          class: "underline",
          style: { "color": "var(--ink)" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438`);
            } else {
              return [
                createTextVNode("\u043F\u043E\u043B\u0438\u0442\u0438\u043A\u043E\u0439 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`. \u0414\u0430\u043D\u043D\u044B\u0435 \u043D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442\u0441\u044F \u0442\u0440\u0435\u0442\u044C\u0438\u043C \u043B\u0438\u0446\u0430\u043C. </p></form>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-6 text-center" data-animate="fade-up" data-delay="400" data-v-929b8dc7><p class="text-sm mb-2" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}" data-v-929b8dc7>\u041F\u0440\u0435\u0434\u043F\u043E\u0447\u0438\u0442\u0430\u0435\u0442\u0435 \u043E\u0431\u0449\u0430\u0442\u044C\u0441\u044F \u043D\u0430\u043F\u0440\u044F\u043C\u0443\u044E?</p><a href="https://t.me/bugaev_web" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-150" style="${ssrRenderStyle({ "color": "var(--ink)" })}" data-v-929b8dc7><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" data-v-929b8dc7><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" data-v-929b8dc7></path></svg> @bugaev_web \u2014 \u043D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0432 Telegram \u2197 </a></div></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/LeadForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-929b8dc7"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Bugaev Web \u2014 IT-\u043E\u0442\u0434\u0435\u043B + SMM \u0434\u043B\u044F \u0441\u0430\u043B\u043E\u043D\u043E\u0432 \u043A\u0440\u0430\u0441\u043E\u0442\u044B \u0437\u0430 50 000 \u20BD/\u043C\u0435\u0441",
      meta: [
        {
          name: "description",
          content: "\u041F\u043E\u043B\u043D\u044B\u0439 \u0446\u0438\u0444\u0440\u043E\u0432\u043E\u0439 \u043F\u0430\u043A\u0435\u0442 \u0434\u043B\u044F \u0441\u0430\u043B\u043E\u043D\u0430 \u043A\u0440\u0430\u0441\u043E\u0442\u044B: \u0441\u0430\u0439\u0442 \u043D\u0430 Nuxt.js, Telegram-\u0431\u043E\u0442, \u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0441\u043E\u0446\u0441\u0435\u0442\u0435\u0439, \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 CRM YCLIENTS, \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u0438 \u043B\u0438\u0447\u043D\u044B\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u2014 \u0432\u0441\u0451 \u0437\u0430 50 000 \u20BD \u0432 \u043C\u0435\u0441\u044F\u0446."
        },
        { property: "og:title", content: "Bugaev Web \u2014 IT-\u043E\u0442\u0434\u0435\u043B + SMM \u0434\u043B\u044F \u0441\u0430\u043B\u043E\u043D\u043E\u0432 \u043A\u0440\u0430\u0441\u043E\u0442\u044B" },
        { property: "og:description", content: "\u0421\u0430\u0439\u0442, Telegram-\u0431\u043E\u0442, \u0441\u043E\u0446\u0441\u0435\u0442\u0438, CRM YCLIENTS \u0438 \u0430\u043D\u0430\u043B\u0438\u0442\u0438\u043A\u0430 \u043F\u043E\u0434 \u043A\u043B\u044E\u0447 \u0437\u0430 50 000 \u20BD/\u043C\u0435\u0441" },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "ru_RU" },
        { property: "og:url", content: "https://bugaev-web.ru/" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "theme-color", content: "#ffffff" }
      ],
      link: [
        { rel: "canonical", href: "https://bugaev-web.ru/" }
      ],
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Bugaev Web",
            description: "IT-\u043E\u0442\u0434\u0435\u043B + SMM \u043F\u043E\u0434 \u043A\u043B\u044E\u0447 \u0434\u043B\u044F \u0441\u0430\u043B\u043E\u043D\u043E\u0432 \u043A\u0440\u0430\u0441\u043E\u0442\u044B \u0438 beauty-\u043A\u043B\u0438\u043D\u0438\u043A \u0437\u0430 50 000 \u20BD/\u043C\u0435\u0441",
            url: "https://bugaev-web.ru",
            telephone: "+79964145143",
            email: "dmnbugaev@gmail.com",
            priceRange: "50000\u20BD/\u043C\u0435\u0441\u044F\u0446",
            areaServed: "\u041C\u043E\u0441\u043A\u0432\u0430 \u0438 \u041C\u043E\u0441\u043A\u043E\u0432\u0441\u043A\u0430\u044F \u043E\u0431\u043B\u0430\u0441\u0442\u044C",
            openingHours: "Mo-Sa 09:00-21:00",
            sameAs: [
              "https://t.me/bugaev_web",
              "https://instagram.com/bugaev_web",
              "https://vk.com/bugaev_web"
            ],
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer service",
              telephone: "+79964145143",
              availableLanguage: "Russian"
            }
          })
        },
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "\u0410 \u0435\u0441\u043B\u0438 \u0443 \u043D\u0430\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044C Instagram?",
                acceptedAnswer: { "@type": "Answer", text: "\u041E\u0442\u043B\u0438\u0447\u043D\u043E \u2014 \u043D\u0430\u0447\u043D\u0451\u043C \u0441 \u0430\u0443\u0434\u0438\u0442\u0430 \u0442\u043E\u0433\u043E, \u0447\u0442\u043E \u0435\u0441\u0442\u044C. \u0414\u043E\u0440\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u043E\u0444\u043E\u0440\u043C\u043B\u0435\u043D\u0438\u0435, \u0432\u044B\u0441\u0442\u0440\u043E\u0438\u043C \u043A\u043E\u043D\u0442\u0435\u043D\u0442-\u043F\u043B\u0430\u043D \u0438 \u0443\u043B\u0443\u0447\u0448\u0438\u043C \u0432\u043E\u0432\u043B\u0435\u0447\u0451\u043D\u043D\u043E\u0441\u0442\u044C. \u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u0443\u0434\u0430\u043B\u044F\u0435\u043C, \u0432\u0441\u0451 \u0442\u043E\u043B\u044C\u043A\u043E \u0443\u043B\u0443\u0447\u0448\u0430\u0435\u043C." }
              },
              {
                "@type": "Question",
                name: "\u0410 \u0435\u0441\u043B\u0438 \u0443 \u043D\u0430\u0441 \u043D\u0435\u0442 \u043D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u044B\u0445 \u0444\u043E\u0442\u043E?",
                acceptedAnswer: { "@type": "Answer", text: "\u041D\u0435 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430. \u041C\u044B \u043F\u043E\u043C\u043E\u0433\u0430\u0435\u043C \u0441 \u0422\u0417 \u043D\u0430 \u0441\u044A\u0451\u043C\u043A\u0443, \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u0430\u043D\u043D\u044B\u0435 \u0444\u043E\u0442\u043E \u0440\u0430\u0431\u043E\u0442 \u0438 \u043A\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 \u0441\u0442\u043E\u043A. \u0412\u0430\u0448\u0435 \u0443\u0447\u0430\u0441\u0442\u0438\u0435 \u2014 \u0438\u0437\u0440\u0435\u0434\u043A\u0430 \u043F\u0440\u0438\u0441\u044B\u043B\u0430\u0442\u044C \u0444\u043E\u0442\u043E \u043D\u043E\u0432\u044B\u0445 \u0440\u0430\u0431\u043E\u0442. 10\u201315 \u043C\u0438\u043D\u0443\u0442 \u0432 \u043D\u0435\u0434\u0435\u043B\u044E." }
              },
              {
                "@type": "Question",
                name: "\u0410 \u0435\u0441\u043B\u0438 \u043C\u044B \u043D\u0430\u0445\u043E\u0434\u0438\u043C\u0441\u044F \u043D\u0435 \u0432 \u0446\u0435\u043D\u0442\u0440\u0435 \u041C\u043E\u0441\u043A\u0432\u044B?",
                acceptedAnswer: { "@type": "Answer", text: "\u0411\u043E\u043B\u044C\u0448\u0438\u043D\u0441\u0442\u0432\u043E \u043D\u0430\u0448\u0438\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u2014 \u0441\u0430\u043B\u043E\u043D\u044B \u0432 \u0441\u043F\u0430\u043B\u044C\u043D\u044B\u0445 \u0440\u0430\u0439\u043E\u043D\u0430\u0445 \u041C\u043E\u0441\u043A\u0432\u044B \u0438 \u041F\u043E\u0434\u043C\u043E\u0441\u043A\u043E\u0432\u044C\u0435: \u041C\u0438\u0442\u0438\u043D\u043E, \u0411\u0443\u0442\u043E\u0432\u043E, \u041B\u044E\u0431\u043B\u0438\u043D\u043E, \u0425\u0438\u043C\u043A\u0438, \u041F\u043E\u0434\u043E\u043B\u044C\u0441\u043A. \u0414\u043B\u044F \u0442\u0430\u043A\u0438\u0445 \u043B\u043E\u043A\u0430\u0446\u0438\u0439 SEO \u0438 \u0433\u0435\u043E\u043F\u0440\u0438\u0432\u044F\u0437\u043A\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u043E\u0441\u043E\u0431\u0435\u043D\u043D\u043E \u0445\u043E\u0440\u043E\u0448\u043E \u2014 \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0446\u0438\u044F \u043D\u0438\u0436\u0435, \u0430 \u0437\u0430\u043F\u0440\u043E\u0441\u044B \u0442\u0438\u043F\u0438\u0447\u043D\u044B\u0435." }
              },
              {
                "@type": "Question",
                name: "\u0410 \u0435\u0441\u043B\u0438 \u043C\u044B \u0437\u0430\u0445\u043E\u0442\u0438\u043C \u0443\u0439\u0442\u0438?",
                acceptedAnswer: { "@type": "Answer", text: "\u0411\u0435\u0437 \u0448\u0442\u0440\u0430\u0444\u043E\u0432. \u0423\u0432\u0435\u0434\u043E\u043C\u0438\u0442\u0435 \u0437\u0430 14 \u0434\u043D\u0435\u0439 \u2014 \u0438 \u0434\u043E\u0433\u043E\u0432\u043E\u0440 \u0437\u0430\u043A\u0440\u044B\u0442. \u0421\u0430\u0439\u0442, \u0431\u043E\u0442, \u0431\u0430\u0437\u0430 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u0438 \u0432\u0435\u0441\u044C \u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u043E\u0441\u0442\u0430\u044E\u0442\u0441\u044F \u0443 \u0432\u0430\u0441. \u041C\u044B \u043D\u0435 \u0434\u0435\u0440\u0436\u0438\u043C \u0434\u0430\u043D\u043D\u044B\u0435 \u0432 \u0437\u0430\u043B\u043E\u0436\u043D\u0438\u043A\u0430\u0445." }
              },
              {
                "@type": "Question",
                name: "\u041A\u0430\u043A \u0431\u044B\u0441\u0442\u0440\u043E \u0431\u0443\u0434\u0443\u0442 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u044B?",
                acceptedAnswer: { "@type": "Answer", text: "\u041F\u0435\u0440\u0432\u044B\u0435 \u0437\u0430\u043F\u0438\u0441\u0438 \u0447\u0435\u0440\u0435\u0437 \u0431\u043E\u0442 \u0438 \u0441\u0430\u0439\u0442 \u2014 \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 2\u20134 \u043D\u0435\u0434\u0435\u043B\u044C \u043F\u043E\u0441\u043B\u0435 \u0437\u0430\u043F\u0443\u0441\u043A\u0430. \u0420\u043E\u0441\u0442 \u0432 \u0441\u043E\u0446\u0441\u0435\u0442\u044F\u0445 \u0438 SEO-\u0442\u0440\u0430\u0444\u0438\u043A \u0441\u0442\u0430\u043D\u043E\u0432\u044F\u0442\u0441\u044F \u0437\u0430\u043C\u0435\u0442\u043D\u044B \u0447\u0435\u0440\u0435\u0437 1\u20133 \u043C\u0435\u0441\u044F\u0446\u0430. \u0422\u043E\u0447\u043D\u044B\u0435 \u043F\u0440\u043E\u0433\u043D\u043E\u0437\u044B \u0434\u0430\u0451\u043C \u043F\u043E\u0441\u043B\u0435 \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E\u0433\u043E \u0430\u0443\u0434\u0438\u0442\u0430." }
              },
              {
                "@type": "Question",
                name: "\u041D\u0430\u0441\u043A\u043E\u043B\u044C\u043A\u043E \u044D\u0442\u043E \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E \u0441 \u0442\u043E\u0447\u043A\u0438 \u0437\u0440\u0435\u043D\u0438\u044F \u0434\u0430\u043D\u043D\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432?",
                acceptedAnswer: { "@type": "Answer", text: "\u0420\u0430\u0431\u043E\u0442\u0430\u0435\u043C \u0441\u0442\u0440\u043E\u0433\u043E \u0432 \u0440\u0430\u043C\u043A\u0430\u0445 152-\u0424\u0417 \u043E \u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445. \u0414\u043E\u0441\u0442\u0443\u043F \u043A CRM \u0438 \u0431\u0430\u0437\u0435 \u2014 \u0442\u043E\u043B\u044C\u043A\u043E \u0443 \u0432\u0430\u0441 \u0438 \u0432\u0430\u0448\u0435\u0433\u043E \u043B\u0438\u0447\u043D\u043E\u0433\u043E \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u0430. NDA \u043F\u043E\u0434\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u043C \u0434\u043E \u043D\u0430\u0447\u0430\u043B\u0430 \u0440\u0430\u0431\u043E\u0442. \u0414\u0430\u043D\u043D\u044B\u0435 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u043D\u0438\u043A\u0443\u0434\u0430 \u043D\u0435 \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442\u0441\u044F." }
              },
              {
                "@type": "Question",
                name: "\u0427\u0442\u043E \u043A\u043E\u043D\u043A\u0440\u0435\u0442\u043D\u043E \u0432\u0445\u043E\u0434\u0438\u0442 \u0432 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u0438 \u043D\u0435\u0442 \u043B\u0438 \u0441\u043A\u0440\u044B\u0442\u044B\u0445 \u043F\u043B\u0430\u0442\u0435\u0436\u0435\u0439?",
                acceptedAnswer: { "@type": "Answer", text: "\u0412 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0443 \u0437\u0430 50 000 \u20BD/\u043C\u0435\u0441 \u0432\u0445\u043E\u0434\u0438\u0442: \u0441\u0430\u0439\u0442-\u0432\u0438\u0437\u0438\u0442\u043A\u0430 \u043D\u0430 Nuxt.js, Telegram-\u0431\u043E\u0442 \u0441 \u0430\u0432\u0442\u043E\u0437\u0430\u043F\u0438\u0441\u044C\u044E \u0438 \u043D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u044F\u043C\u0438, \u0432\u0435\u0434\u0435\u043D\u0438\u0435 Instagram \u0438 Telegram-\u043A\u0430\u043D\u0430\u043B\u0430, \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0430 CRM YCLIENTS, \u0435\u0436\u0435\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u043E\u0442\u0447\u0451\u0442\u044B, \u043B\u0438\u0447\u043D\u044B\u0439 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 6 \u0434\u043D\u0435\u0439 \u0432 \u043D\u0435\u0434\u0435\u043B\u044E, \u0445\u043E\u0441\u0442\u0438\u043D\u0433 \u0438 \u0434\u043E\u043C\u0435\u043D. \u0421\u043A\u0440\u044B\u0442\u044B\u0445 \u0434\u043E\u043F\u043B\u0430\u0442 \u043D\u0435\u0442." }
              }
            ]
          })
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0;
      const _component_Hero = _sfc_main$9;
      const _component_Features = _sfc_main$8;
      const _component_HowItWorks = _sfc_main$7;
      const _component_ForWho = _sfc_main$6;
      const _component_Pricing = _sfc_main$5;
      const _component_Advantages = _sfc_main$4;
      const _component_Testimonials = _sfc_main$3;
      const _component_FAQ = _sfc_main$2;
      const _component_LeadForm = __nuxt_component_9;
      const _component_Footer = _sfc_main$a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "min-h-screen",
        style: { "background": "var(--surface)" }
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Header, null, null, _parent));
      _push(`<main>`);
      _push(ssrRenderComponent(_component_Hero, null, null, _parent));
      _push(ssrRenderComponent(_component_Features, null, null, _parent));
      _push(ssrRenderComponent(_component_HowItWorks, null, null, _parent));
      _push(ssrRenderComponent(_component_ForWho, null, null, _parent));
      _push(ssrRenderComponent(_component_Pricing, null, null, _parent));
      _push(ssrRenderComponent(_component_Advantages, null, null, _parent));
      _push(ssrRenderComponent(_component_Testimonials, null, null, _parent));
      _push(ssrRenderComponent(_component_FAQ, null, null, _parent));
      _push(ssrRenderComponent(_component_LeadForm, null, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DUI8ABDB.mjs.map
