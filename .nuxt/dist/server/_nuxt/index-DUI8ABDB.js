import { _ as __nuxt_component_0$1, a as _sfc_main$a } from "./Footer-DbrxVFel.js";
import { defineComponent, mergeProps, useSSRContext, createVNode, resolveDynamicComponent, h, ref, unref, readonly, reactive, withCtx, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderVNode, ssrRenderClass, ssrIncludeBooleanAttr, ssrRenderComponent } from "vue/server-renderer";
import { a as __nuxt_component_0, _ as _export_sfc } from "../server.mjs";
import { u as useHead } from "./v3-Bj3M-984.js";
import "D:/pr/bugaev_web/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "D:/pr/bugaev_web/node_modules/nuxt/node_modules/hookable/dist/index.mjs";
import "D:/pr/bugaev_web/node_modules/unctx/dist/index.mjs";
import "D:/pr/bugaev_web/node_modules/h3/dist/index.mjs";
import "vue-router";
import "D:/pr/bugaev_web/node_modules/defu/dist/defu.mjs";
import "D:/pr/bugaev_web/node_modules/ufo/dist/index.mjs";
import "D:/pr/bugaev_web/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Hero",
  __ssrInlineRender: true,
  setup(__props) {
    const stats = [
      { value: "50+", label: "салонов в работе" },
      { value: "3×", label: "рост записей" },
      { value: "1 мес", label: "до запуска системы" }
    ];
    const priceIncludes = [
      "Сайт-визитка: SEO, мобайл, онлайн-запись",
      "Умный Telegram-бот (запись, отзывы, прогрев)",
      "Ведение Instagram и Telegram-канала",
      "CRM YCLIENTS: настройка и интеграция",
      "Личный менеджер в Telegram"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "hero",
        class: "relative overflow-hidden flex flex-col",
        style: { "background": "var(--surface)", "height": "100svh", "min-height": "580px", "padding-top": "72px" }
      }, _attrs))}><div class="absolute pointer-events-none" style="${ssrRenderStyle({ "top": "0", "right": "0", "width": "420px", "height": "420px", "border-radius": "50%", "background": "var(--accent-dim)", "filter": "blur(90px)", "transform": "translate(30%, -10%)" })}"></div><div class="absolute pointer-events-none" style="${ssrRenderStyle({ "bottom": "10%", "left": "-60px", "width": "240px", "height": "240px", "border-radius": "50%", "background": "rgba(143,175,138,0.05)", "filter": "blur(70px)" })}"></div><div class="section-container relative z-10 flex-1 flex flex-col justify-center py-6 sm:py-10"><div class="grid lg:grid-cols-[1fr_320px] xl:grid-cols-[1fr_340px] gap-8 xl:gap-16 items-center"><div><h1 data-animate="fade-up" data-delay="150" style="${ssrRenderStyle({ "font-family": "'Syne', sans-serif", "font-weight": "800", "line-height": "0.92", "letter-spacing": "-0.04em", "color": "var(--ink)", "font-size": "clamp(2.5rem, 7vw, 6rem)", "margin-bottom": "1.25rem" })}"> Digital‑отдел<br> и SMM для<br><span style="${ssrRenderStyle({ "color": "var(--accent)" })}">салона</span><br> под ключ </h1><p data-animate="fade-up" data-delay="250" style="${ssrRenderStyle({ "font-size": "clamp(0.875rem, 1.5vw, 1rem)", "line-height": "1.65", "color": "var(--ink-3)", "max-width": "400px", "margin-bottom": "1.75rem" })}"> Единая подписка 50 000 ₽/мес — удалённый digital‑отдел и SMM для салона красоты в Москве. Рост заявок с первого месяца. </p><div class="flex flex-wrap gap-3 mb-5 sm:mb-7" data-animate="fade-up" data-delay="350"><a href="#contact" class="btn-primary"> Оставить заявку <span style="${ssrRenderStyle({ "font-size": "1.1em", "line-height": "1" })}">→</span></a><a href="#features" class="btn-outline"> Узнать подробнее </a></div><div class="hidden sm:flex flex-wrap gap-2" data-animate="fade-up" data-delay="450"><!--[-->`);
      ssrRenderList(stats, (stat) => {
        _push(`<div class="flex items-center gap-2 px-3.5 py-2 rounded-full" style="${ssrRenderStyle({ "background": "var(--surface-warm)", "border": "1px solid var(--border)" })}"><span class="mono text-sm font-bold" style="${ssrRenderStyle({ "color": "var(--ink)" })}">${ssrInterpolate(stat.value)}</span><span class="text-xs" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}">${ssrInterpolate(stat.label)}</span></div>`);
      });
      _push(`<!--]--></div></div><div class="hidden lg:flex flex-col gap-3 flex-shrink-0" data-animate="fade-left" data-delay="300"><div class="relative overflow-hidden rounded-2xl p-6 xl:p-7" style="${ssrRenderStyle({ "background": "var(--ink)", "color": "white" })}"><div style="${ssrRenderStyle({ "position": "absolute", "top": "-60px", "right": "-60px", "width": "200px", "height": "200px", "border-radius": "50%", "background": "rgba(143,175,138,0.10)", "pointer-events": "none" })}"></div><p class="mono text-xs mb-4 relative z-10" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.35)", "letter-spacing": "0.09em", "text-transform": "uppercase" })}"> Подписка / месяц </p><div class="flex items-end gap-1.5 mb-5 relative z-10"><span style="${ssrRenderStyle({ "font-family": "'Syne', sans-serif", "font-weight": "800", "font-size": "clamp(2.8rem, 4vw, 3.6rem)", "line-height": "1", "letter-spacing": "-0.04em" })}">50 000</span><span class="text-xl font-semibold mb-1.5" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.4)" })}">₽</span></div><ul class="space-y-2 mb-5 relative z-10"><!--[-->`);
      ssrRenderList(priceIncludes, (item) => {
        _push(`<li class="flex items-start gap-2.5 text-sm" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.7)" })}"><span class="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5" style="${ssrRenderStyle({ "background": "rgba(143,175,138,0.25)" })}"><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1.5 4l1.5 1.5 3.5-3" stroke="#8FAF8A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></span> ${ssrInterpolate(item)}</li>`);
      });
      _push(`<!--]--></ul><a href="#contact" class="relative z-10 flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-semibold transition-all duration-200" style="${ssrRenderStyle({ "background": "var(--accent)", "color": "var(--ink)" })}"> Оставить заявку <span>↗</span></a></div><div class="rounded-2xl px-5 py-3.5 flex items-center justify-between" style="${ssrRenderStyle({ "background": "var(--surface-warm)", "border": "1px solid var(--border)" })}"><div><p class="mono text-xs mb-0.5" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}">Внедрение в первый месяц</p><p class="text-sm font-semibold" style="${ssrRenderStyle({ "color": "var(--ink)" })}">Без доплат за запуск</p></div><span class="text-xl" style="${ssrRenderStyle({ "color": "var(--accent)" })}">✓</span></div></div></div><div class="lg:hidden mt-5" data-animate="fade-up" data-delay="500"><div class="flex items-center justify-between rounded-2xl px-5 py-4" style="${ssrRenderStyle({ "background": "var(--ink)" })}"><div><p class="mono text-xs mb-0.5" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.35)" })}">Подписка / месяц</p><span style="${ssrRenderStyle({ "font-family": "'Syne', sans-serif", "font-weight": "800", "font-size": "1.6rem", "line-height": "1", "letter-spacing": "-0.03em", "color": "white" })}">50 000 ₽</span></div><a href="#contact" class="btn-accent text-sm px-4 py-2.5 whitespace-nowrap"> Заявка → </a></div></div></div><div class="absolute bottom-0 left-0 right-0 h-20 pointer-events-none" style="${ssrRenderStyle({ "background": "linear-gradient(to bottom, transparent, var(--surface))" })}"></div></section>`);
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
        title: "Сайт-визитка на Nuxt.js",
        description: "Лендинг под услуги салона или клиники: цены, контакты, онлайн-запись. Мобильная адаптация, быстрая загрузка и базовая SEO-оптимизация — ключи, мета-теги, структура.",
        tags: ["Nuxt.js", "SEO", "Онлайн-запись"],
        highlight: false
      },
      {
        icon: IconBot,
        title: "Telegram-бот на Python (aiogram)",
        description: "Онлайн-запись, автонапоминания о визите, сбор отзывов и автоворонка с приветственными цепочками. Снижает неявки на 30–40%.",
        tags: ["Python", "Автозапись", "Прогрев"],
        highlight: false
      },
      {
        icon: IconSocial,
        title: "Ведение Instagram и Telegram-канала",
        description: "3–4 поста в неделю: советы, акции, «до/после», новости салона. Визуал в Canva под бьюти-нишу, ответы на комментарии, сторителлинг раз в неделю.",
        tags: ["Instagram", "Telegram", "Reels"],
        highlight: false
      },
      {
        icon: IconCRM,
        title: "CRM YCLIENTS и интеграции",
        description: "Подключение и настройка CRM, перенос базы клиентов. Связка сайт → бот → CRM, базовая аналитика по заявкам и записям.",
        tags: ["YCLIENTS", "Аналитика", "Интеграция"],
        highlight: false
      },
      {
        icon: IconManager,
        title: "Личный менеджер в Telegram",
        description: "Один человек координирует весь digital. Связь по рабочим вопросам, рекомендации по акциям и трендам, еженедельные отчёты — 6 дней в неделю.",
        tags: ["Поддержка 6/7", "Отчёты", "Стратегия"],
        highlight: true
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "features",
        class: "relative py-24",
        style: { "background": "var(--dark)" }
      }, _attrs))}><div class="section-container"><div class="mb-16"><div class="mb-5" data-animate="fade-down"><span class="badge-dark">Состав пакета</span></div><h2 class="section-title-light mb-4" data-animate="fade-up" data-delay="100"> Что входит в подписку<br><span style="${ssrRenderStyle({ "color": "var(--accent)" })}">50 000 ₽ в месяц</span></h2><p class="section-subtitle-light max-w-lg" data-animate="fade-up" data-delay="200"> 5 направлений в одной подписке — комплексный маркетинг для салона красоты без скрытых доплат </p></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"><!--[-->`);
      ssrRenderList(features, (feature, index) => {
        _push(`<div class="p-7 flex flex-col gap-4 rounded-2xl cursor-default transition-transform duration-300 hover:-translate-y-1" style="${ssrRenderStyle(feature.highlight ? "background: var(--accent); border: 1px solid transparent;" : "background: var(--dark-card); border: 1px solid rgba(255,255,255,0.06);")}" data-animate="fade-up"${ssrRenderAttr("data-delay", String(80 + index * 80))}><span class="mono text-xs tracking-widest" style="${ssrRenderStyle(feature.highlight ? "color: rgba(15,15,15,0.45)" : "color: rgba(255,255,255,0.22)")}">${ssrInterpolate(String(index + 1).padStart(2, "0"))}</span><div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="${ssrRenderStyle(feature.highlight ? "background: rgba(15,15,15,0.10); color: var(--ink);" : "background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.65);")}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(feature.icon), null, null), _parent);
        _push(`</div><div class="flex-1"><h3 class="text-base font-semibold mb-2" style="${ssrRenderStyle(feature.highlight ? "color: var(--ink)" : "color: #FFFFFF")}">${ssrInterpolate(feature.title)}</h3><p class="text-sm leading-relaxed" style="${ssrRenderStyle(feature.highlight ? "color: rgba(15,15,15,0.6)" : "color: rgba(255,255,255,0.42)")}">${ssrInterpolate(feature.description)}</p></div><div class="flex flex-wrap gap-1.5 pt-3" style="${ssrRenderStyle(feature.highlight ? "border-top: 1px solid rgba(15,15,15,0.12)" : "border-top: 1px solid rgba(255,255,255,0.07)")}"><!--[-->`);
        ssrRenderList(feature.tags, (tag) => {
          _push(`<span class="text-xs px-2.5 py-1 rounded-full mono" style="${ssrRenderStyle(feature.highlight ? "background: rgba(15,15,15,0.10); color: rgba(15,15,15,0.65)" : "background: rgba(255,255,255,0.07); color: rgba(255,255,255,0.45)")}">${ssrInterpolate(tag)}</span>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div><div class="mt-10 text-center py-5 rounded-2xl" style="${ssrRenderStyle({ "border": "1px solid rgba(255,255,255,0.07)", "background": "rgba(255,255,255,0.02)" })}" data-animate="fade-up" data-delay="600"><p class="text-base" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.4)" })}"> Всё включено в одну подписку — <span class="font-bold text-lg" style="${ssrRenderStyle({ "color": "var(--accent)" })}">50 000 ₽/мес</span>, без скрытых доплат </p></div></div></section>`);
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
        week: "Шаг 1",
        title: "Заявка и онлайн-встреча",
        description: "Заполняете короткую форму или пишете в Telegram. Проводим бесплатный аудит и 30-минутный созвон — разбираем ваш салон и ставим цели.",
        points: [
          "Бесплатный аудит digital-присутствия",
          "Анализ конкурентов в вашем районе",
          "Согласование стратегии и сроков"
        ]
      },
      {
        week: "Шаг 2",
        title: "Разработка сайта, бота и соцсетей",
        description: "Запускаем сайт-визитку на Nuxt.js, настраиваем Telegram-бот с автозаписью и прогревом, готовим первый контент-план для соцсетей.",
        points: [
          "Сайт с SEO, мобайлом и онлайн-записью",
          "Telegram-бот: запись, напоминания, отзывы",
          "Визуал и первые посты в Instagram"
        ]
      },
      {
        week: "Шаг 3",
        title: "Внедрение CRM и интеграций",
        description: "Подключаем и настраиваем CRM YCLIENTS, переносим базу клиентов, связываем сайт → бот → CRM в единую систему.",
        points: [
          "Настройка CRM под ваш прайс и услуги",
          "Перенос базы и история записей",
          "Базовая аналитика по заявкам"
        ]
      },
      {
        week: "Ежемесячно",
        title: "Поддержка и рост",
        description: "Ведём контент, отвечаем на комментарии, оптимизируем каналы по данным. Еженедельные отчёты в Telegram — видите результат в цифрах.",
        points: [
          "3–4 поста в неделю, сторис",
          "Еженедельные отчёты",
          "Рекомендации по акциям и трендам"
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "how-it-works",
        class: "py-24",
        style: { "background": "var(--surface)" }
      }, _attrs))}><div class="section-container"><div class="mb-16"><div class="mb-5" data-animate="fade-down"><span class="badge">Процесс запуска</span></div><h2 class="section-title mb-4" data-animate="fade-up" data-delay="100"> Как это работает:<br>4 простых шага </h2><p class="section-subtitle max-w-md" data-animate="fade-up" data-delay="200"> Не нужно разбираться в digital — мы ведём вас за руку от заявки до первых записей через сайт и бота. Всё просто и понятно. </p></div><div class="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5" data-animate="fade-up" data-delay="280"><!--[-->`);
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
      _push(`<!--]--></div><div class="mt-12" data-animate="fade-up" data-delay="500"><a href="#contact" class="btn-primary text-base"> Начать за 1 день <span style="${ssrRenderStyle({ "font-size": "1.1em" })}">→</span></a></div></div></section>`);
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
        problem: "Нет времени вести соцсети — руки не доходят, контент выходит хаотично",
        solution: "Мы ведём Instagram и Telegram вместо вас: 3–4 поста в неделю, ответы на комментарии, сторис — ваше участие 10–15 минут."
      },
      {
        problem: "Нет системного маркетинга — клиенты приходят «сарафаном», новых не прибавляется",
        solution: "Выстраиваем полный digital-цикл: сайт → соцсети → бот → CRM. Привлечение клиентов в салон красоты становится предсказуемым."
      },
      {
        problem: "Боязнь удалёнщиков — непонятно, что они делают и есть ли результат",
        solution: "Еженедельные отчёты в Telegram, видите каждое действие и цифры. Личный менеджер на связи 6 дней в неделю."
      },
      {
        problem: "Разрозненные подрядчики — отдельно сайт, отдельно SMM, отдельно реклама и всё не связано",
        solution: "Один подрядчик, единая ответственность. Сайт, бот, соцсети и CRM работают в связке под ключ."
      }
    ];
    const whoList = [
      { icon: IconSalon, text: "Салон красоты любого формата", sub: "Парикмахерские, барбершопы, beauty-студии" },
      { icon: IconClinic, text: "Косметологическая клиника", sub: "Медицинская и эстетическая косметология" },
      { icon: IconStudio, text: "Студия бровей и ресниц", sub: "Узкоспециализированные beauty-услуги" },
      { icon: IconNails, text: "Ногтевая студия / SPA", sub: "Маникюр, педикюр, велнес-центры" },
      { icon: IconBrow, text: "Бровисты и лэшмейкеры", sub: "Индивидуальные мастера и студии" },
      { icon: IconDent, text: "Стоматологические клиники", sub: "Частные кабинеты и многопрофильные центры" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "for-who",
        class: "py-24",
        style: { "background": "var(--surface-warm)" }
      }, _attrs))}><div class="section-container"><div class="mb-14"><div class="mb-5" data-animate="fade-down"><span class="badge">Для кого эта подписка</span></div><h2 class="section-title mb-4" data-animate="fade-up" data-delay="100"> Узнаёте себя? </h2><p class="section-subtitle max-w-xl" data-animate="fade-up" data-delay="200"> Небольшие салоны красоты, студии, кабинеты, клиники и стоматологии Москвы и Московской области — для тех, кто хочет системный маркетинг без головной боли с подрядчиками. </p></div><div class="grid sm:grid-cols-2 gap-4 mb-10" data-animate="fade-up" data-delay="200"><!--[-->`);
      ssrRenderList(pains, (pain) => {
        _push(`<div class="card p-6 flex flex-col gap-3" style="${ssrRenderStyle({ "background": "var(--surface)" })}"><p class="text-sm font-semibold" style="${ssrRenderStyle({ "color": "var(--ink)" })}">${ssrInterpolate(pain.problem)}</p><div class="flex items-center gap-2"><div class="h-px flex-1" style="${ssrRenderStyle({ "background": "var(--border)" })}"></div><span style="${ssrRenderStyle({ "color": "var(--accent)", "font-size": "0.8rem" })}">↓</span><div class="h-px flex-1" style="${ssrRenderStyle({ "background": "var(--border)" })}"></div></div><p class="text-sm" style="${ssrRenderStyle({ "color": "var(--accent-text)", "font-weight": "600" })}">${ssrInterpolate(pain.solution)}</p></div>`);
      });
      _push(`<!--]--></div><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10" data-animate="fade-up" data-delay="400"><!--[-->`);
      ssrRenderList(whoList, (item) => {
        _push(`<div class="card p-5 flex items-center gap-4" style="${ssrRenderStyle({ "background": "var(--surface)" })}"><div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style="${ssrRenderStyle({ "background": "var(--accent-dim)", "color": "var(--accent-text)" })}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.icon), null, null), _parent);
        _push(`</div><div><p class="font-semibold text-sm" style="${ssrRenderStyle({ "color": "var(--ink)" })}">${ssrInterpolate(item.text)}</p><p class="text-xs mt-0.5" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}">${ssrInterpolate(item.sub)}</p></div></div>`);
      });
      _push(`<!--]--></div><div class="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6" style="${ssrRenderStyle({ "background": "var(--surface)", "border": "1px solid var(--border)" })}" data-animate="fade-up" data-delay="400"><div><h3 class="text-xl font-bold mb-2" style="${ssrRenderStyle({ "color": "var(--ink)", "letter-spacing": "-0.02em" })}">Готовы обсудить ваш салон?</h3><p class="text-sm" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}"> Оставьте заявку — проведём бесплатный аудит и составим план продвижения </p></div><div class="flex flex-col sm:flex-row gap-3 flex-shrink-0"><a href="#contact" class="btn-primary whitespace-nowrap"> Оставить заявку </a><a href="https://t.me/bugaev_web" target="_blank" rel="noopener noreferrer" class="btn-outline whitespace-nowrap"> Telegram ↗ </a></div></div></div></section>`);
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
      "Сайт-визитка на Nuxt.js (разработка + поддержка)",
      "Telegram-бот на Python",
      "Ведение 2 соцсетей (посты + сторис + Reels)",
      "Настройка и поддержка CRM YCLIENTS",
      "Связка каналов в единую воронку",
      "Еженедельная аналитика и отчёты",
      "Личный менеджер в Telegram (6 дней/нед)",
      "Настройка Яндекс.Метрики и целей",
      "Email-маркетинг (до 2 рассылки/мес)",
      "Ежемесячная стратегическая сессия",
      "Неограниченные правки по контенту",
      "Хостинг и домен включены"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "pricing",
        class: "py-24",
        style: { "background": "var(--surface)" }
      }, _attrs))}><div class="section-container"><div class="text-center mb-12"><div class="flex justify-center mb-5" data-animate="fade-down"><span class="badge">Стоимость</span></div><h2 class="section-title mb-3" data-animate="fade-up" data-delay="100"> Один тариф — максимум результата </h2><p class="section-subtitle max-w-md mx-auto" data-animate="fade-up" data-delay="200"> Без скрытых платежей, без «базового» и «расширенного» — только всё и сразу </p></div><div class="max-w-2xl mx-auto" data-animate="zoom-in" data-delay="280"><div class="relative overflow-hidden rounded-3xl p-8 md:p-12" style="${ssrRenderStyle({ "background": "var(--surface)", "border": "1px solid var(--border)", "box-shadow": "0 4px 40px rgba(0,0,0,0.07)" })}"><div class="absolute top-0 left-0 right-0 h-0.5" style="${ssrRenderStyle({ "background": "var(--accent)" })}"></div><div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-10 pt-3"><div><span class="badge inline-flex mb-3">Всё включено</span><h3 class="text-xl font-bold" style="${ssrRenderStyle({ "color": "var(--ink)", "letter-spacing": "-0.02em" })}">Подписка «Полный пакет»</h3><p class="text-sm mt-1" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}">Для салонов красоты и beauty-клиник</p></div><div class="sm:text-right sm:flex-shrink-0"><div class="flex items-end gap-1 sm:justify-end"><span class="font-bold leading-none" style="${ssrRenderStyle({ "font-family": "'Syne', sans-serif", "font-size": "3.8rem", "color": "var(--ink)", "letter-spacing": "-0.04em" })}">50 000</span><span class="text-2xl font-semibold mb-1.5" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}">₽</span></div><p class="mono text-xs tracking-widest uppercase" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}">в месяц · без НДС</p></div></div><div class="h-px mb-8" style="${ssrRenderStyle({ "background": "var(--border)" })}"></div><div class="grid sm:grid-cols-2 gap-3 mb-8"><!--[-->`);
      ssrRenderList(includedFeatures, (feature) => {
        _push(`<div class="flex items-start gap-3"><div class="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style="${ssrRenderStyle({ "background": "var(--accent-dim)" })}"><svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2 4-4" stroke="#5A7A56" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><span class="text-sm" style="${ssrRenderStyle({ "color": "var(--ink-2)" })}">${ssrInterpolate(feature)}</span></div>`);
      });
      _push(`<!--]--></div><div class="flex items-start gap-3 p-4 rounded-xl mb-8" style="${ssrRenderStyle({ "background": "var(--surface-warm)", "border": "1px solid var(--border)" })}"><div class="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5" style="${ssrRenderStyle({ "background": "var(--accent-dim)" })}"><svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z" stroke="#5A7A56" stroke-width="1.5" stroke-linejoin="round"></path><path d="M9 12l2 2 4-4" stroke="#5A7A56" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div><p class="text-sm leading-relaxed" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}"><span class="font-semibold" style="${ssrRenderStyle({ "color": "var(--ink)" })}">Всё внедрение в первый месяц</span> — уже включено в абонемент. Без доплат за запуск. </p></div><div class="flex flex-col sm:flex-row gap-3"><a href="#contact" class="btn-primary flex-1 justify-center text-base py-4"> Оставить заявку <span style="${ssrRenderStyle({ "font-size": "1.1em" })}">→</span></a><a href="https://t.me/bugaev_web" target="_blank" rel="noopener noreferrer" class="btn-outline flex-1 justify-center text-base py-4"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"></path></svg> Обсудить в Telegram </a></div></div><p class="text-center text-xs mt-4 mono" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}" data-animate="fade-up" data-delay="400"> Оплата ежемесячно. Работаем по договору. Выставляем счёт и акт. </p></div></div></section>`);
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
        problem: "Нанимать SMM-менеджера, маркетолога и разработчика по отдельности",
        solution: "Один подрядчик, единая ответственность",
        detail: "SMM — от 60 к, маркетолог — от 80 к, разработчик — от 100 к. Итого 240 000+ ₽/мес без гарантий. Наша подписка — 50 000 ₽, всё включено."
      },
      {
        problem: "Долгий старт и нет гарантии результата",
        solution: "Запуск за 2–4 недели без доплат",
        detail: "Внедрение в первый месяц входит в подписку. Сайт, бот, CRM и соцсети готовы к работе без разовых платежей за запуск."
      },
      {
        problem: "Подрядчики не понимают бьюти-специфику",
        solution: "Экспертиза именно в бьюти и медицине",
        detail: "Работаем только с салонами красоты, студиями, клиниками и стоматологиями Москвы. Знаем нишу, конкурентов и что работает."
      },
      {
        problem: "Непонятно, что происходит и есть ли эффект",
        solution: "Прозрачная аналитика и отчёты",
        detail: "Еженедельные отчёты в Telegram: заявки, записи, охваты, конверсии. Видите каждое действие и результат в цифрах."
      }
    ];
    const teamStats = [
      { value: "50+", label: "Клиентов\nв работе" },
      { value: "4.9★", label: "Средняя\nоценка" },
      { value: "3×", label: "Рост\nзаписей" },
      { value: "96%", label: "Продлевают\nподписку" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "advantages",
        class: "py-24 relative",
        style: { "background": "var(--dark)" }
      }, _attrs))}><div class="section-container"><div class="mb-16"><div class="mb-5" data-animate="fade-down"><span class="badge-dark">Наши преимущества</span></div><h2 class="section-title-light mb-4" data-animate="fade-up" data-delay="100"> Почему подписка<br><span style="${ssrRenderStyle({ "color": "var(--accent)" })}">выгоднее</span>, чем нанимать </h2><p class="section-subtitle-light max-w-md" data-animate="fade-up" data-delay="200"> Посчитайте сами: отдельный SMM‑менеджер — от 60 000 ₽/мес, маркетолог — от 80 000 ₽, разработчик — от 100 000 ₽. Или вся команда за 50 000 ₽ под ключ. </p></div><div class="relative rounded-2xl overflow-hidden mb-14" style="${ssrRenderStyle({ "border": "1px solid rgba(255,255,255,0.07)" })}" data-animate="zoom-in" data-delay="280"><div class="grid grid-cols-1 sm:grid-cols-2 gap-px" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.06)" })}"><!--[-->`);
      ssrRenderList(whyItems, (item, i) => {
        _push(`<div class="p-8 lg:p-10 flex flex-col gap-4" style="${ssrRenderStyle({ "background": "var(--dark)" })}"><p class="mono text-xs tracking-widest uppercase" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.25)" })}"> Проблема </p><h3 class="font-bold" style="${ssrRenderStyle({ "font-family": "'Syne', sans-serif", "font-size": "clamp(1rem, 1.5vw, 1.2rem)", "letter-spacing": "-0.02em", "color": "rgba(255,255,255,0.7)", "line-height": "1.3" })}">${ssrInterpolate(item.problem)}</h3><div class="flex items-center gap-3"><div class="flex-1 h-px" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.07)" })}"></div><span style="${ssrRenderStyle({ "color": "var(--accent)", "font-size": "1.1rem" })}">↓</span><div class="flex-1 h-px" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.07)" })}"></div></div><p class="font-bold text-base" style="${ssrRenderStyle({ "color": "var(--accent)", "letter-spacing": "-0.015em" })}">${ssrInterpolate(item.solution)}</p><p class="text-sm leading-relaxed" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.35)" })}">${ssrInterpolate(item.detail)}</p></div>`);
      });
      _push(`<!--]--></div><div class="absolute inset-0 items-center justify-center pointer-events-none hidden sm:flex" style="${ssrRenderStyle({ "z-index": "10" })}"><div class="px-6 py-4 rounded-2xl text-center shadow-xl" style="${ssrRenderStyle({ "background": "var(--accent)" })}"><p class="mono font-bold text-sm tracking-widest uppercase" style="${ssrRenderStyle({ "color": "var(--ink)" })}">Почему мы</p></div></div></div><div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-14" data-animate="fade-up" data-delay="350"><!--[-->`);
      ssrRenderList(teamStats, (stat) => {
        _push(`<div class="rounded-2xl p-5 text-center" style="${ssrRenderStyle({ "background": "var(--dark-card)", "border": "1px solid rgba(255,255,255,0.06)" })}"><div class="font-bold mb-1" style="${ssrRenderStyle({ "font-family": "'Syne', sans-serif", "font-size": "2rem", "line-height": "1", "letter-spacing": "-0.03em", "color": "var(--accent)" })}">${ssrInterpolate(stat.value)}</div><div class="text-xs leading-snug" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.35)", "white-space": "pre-line" })}">${ssrInterpolate(stat.label)}</div></div>`);
      });
      _push(`<!--]--></div><div class="rounded-3xl p-10 text-center" style="${ssrRenderStyle({ "background": "var(--accent)" })}" data-animate="fade-up" data-delay="450"><h3 class="text-2xl font-bold mb-3" style="${ssrRenderStyle({ "color": "var(--ink)", "letter-spacing": "-0.03em" })}">Ваш персональный digital-отдел — уже в следующем месяце</h3><p class="text-base mb-8" style="${ssrRenderStyle({ "color": "rgba(15,15,15,0.6)" })}"> 50 000 ₽/мес — без разовых платежей, без заморочек с подрядчиками, с понятным результатом по заявкам и записям </p><div class="flex flex-col sm:flex-row gap-3 justify-center"><a href="#contact" class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200" style="${ssrRenderStyle({ "background": "var(--ink)", "color": "#FFFFFF" })}"> Оставить заявку <span style="${ssrRenderStyle({ "font-size": "1.1em" })}">→</span></a><a href="https://t.me/bugaev_web" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold transition-all duration-200" style="${ssrRenderStyle({ "background": "rgba(15,15,15,0.10)", "color": "var(--ink)", "border": "1.5px solid rgba(15,15,15,0.15)" })}"> Написать в Telegram </a></div></div></div></section>`);
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
        text: "Раньше тратила 2 часа в день на соцсети и всё равно выходило плохо. Теперь ведение Instagram и Telegram отдала Bugaev Web — подписчики растут, записей стало больше. Сайт окупился в первую неделю.",
        result: "+40% записей через сайт за 1 месяц",
        name: "Анна Соколова",
        role: "Владелица, студия «Prism Beauty», Москва, Митино",
        initials: "АС",
        color1: "#8FAF8A",
        color2: "#5A7A56"
      },
      {
        text: "Думала, что digital — это сложно и дорого. Оказалось, что за 50 000 ₽ получаешь полноценный отдел маркетинга. Telegram-бот сам записывает клиентов, я занимаюсь косметологией, а не соцсетями.",
        result: "Запись через бот — 35% всех новых клиентов",
        name: "Марина Ковалёва",
        role: "Косметолог, кабинет «Эстетика», Москва, Бутово",
        initials: "МК",
        color1: "#C9B8A8",
        color2: "#9E7B7B"
      },
      {
        text: "CRM настроили за неделю, перенесли всю базу. Клиенты теперь получают автоматические напоминания, отмены упали с 25% до 8%. А я вижу цифры каждую неделю в отчёте — понятно, откуда идут заявки.",
        result: "Отмены записей снизились с 25% до 8%",
        name: "Дмитрий Орлов",
        role: "Владелец, барбершоп «NordCut», Москва, Люблино",
        initials: "ДО",
        color1: "#3A3A3A",
        color2: "#8FAF8A"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "testimonials",
        class: "py-24",
        style: { "background": "var(--surface)" }
      }, _attrs))}><div class="section-container"><div class="mb-14"><div class="mb-5" data-animate="fade-down"><span class="badge">Отзывы клиентов</span></div><h2 class="section-title mb-3" data-animate="fade-up" data-delay="100"> Что получают салоны через 1–3 месяца </h2><p class="section-subtitle" data-animate="fade-up" data-delay="200"> Реальные результаты клиентов из Москвы и Московской области — без лишних обещаний </p></div><div class="grid md:grid-cols-3 gap-5"><!--[-->`);
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
        question: "А если у нас уже есть Instagram?",
        answer: "Отлично — начнём с аудита того, что есть. Доработаем оформление, выстроим контент-план и улучшим вовлечённость. Ничего не удаляем, всё только улучшаем."
      },
      {
        question: "А если у нас нет нормальных фото?",
        answer: "Не проблема. Мы помогаем с ТЗ на съёмку, используем правильно обработанные фото работ и качественный сток. Ваше участие — изредка присылать фото новых работ. 10–15 минут в неделю."
      },
      {
        question: "А если мы находимся не в центре Москвы?",
        answer: "Большинство наших клиентов — салоны в спальных районах Москвы и Подмосковье: Митино, Бутово, Люблино, Химки, Подольск. Для таких локаций SEO и геопривязка работают особенно хорошо — конкуренция ниже, а запросы типичные."
      },
      {
        question: "А если мы захотим уйти?",
        answer: "Без штрафов. Уведомите за 14 дней — и договор закрыт. Сайт, бот, база клиентов и весь контент остаются у вас. Мы не держим данные в заложниках."
      },
      {
        question: "Как быстро будут результаты?",
        answer: "Первые записи через бот и сайт — в течение 2–4 недель после запуска. Рост в соцсетях и SEO-трафик становятся заметны через 1–3 месяца. Точные прогнозы даём после бесплатного аудита."
      },
      {
        question: "Насколько это безопасно с точки зрения данных клиентов?",
        answer: "Работаем строго в рамках 152-ФЗ о персональных данных. Доступ к CRM и базе — только у вас и вашего личного менеджера. NDA подписываем до начала работ. Данные клиентов никуда не передаются."
      },
      {
        question: "Что конкретно входит в подписку и нет ли скрытых платежей?",
        answer: "В подписку за 50 000 ₽/мес входит полный цифровой пакет без каких-либо скрытых доплат:",
        points: [
          "Сайт-визитка на Nuxt.js — разработка и поддержка",
          "Telegram-бот с автозаписью, напоминаниями и прогревом",
          "Ведение Instagram и Telegram-канала (посты, сторис)",
          "Настройка CRM YCLIENTS и интеграции",
          "Еженедельные отчёты и аналитика по заявкам",
          "Личный менеджер в Telegram (6 дней в неделю)",
          "Хостинг и домен включены"
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "faq",
        class: "py-24",
        style: { "background": "var(--surface-warm)" }
      }, _attrs))}><div class="section-container"><div class="text-center mb-14"><div class="flex justify-center mb-5" data-animate="fade-down"><span class="badge">Вопросы и ответы</span></div><h2 class="section-title mb-3" data-animate="fade-up" data-delay="100"> Отвечаем на частые вопросы </h2><p class="section-subtitle" data-animate="fade-up" data-delay="200"> Если не нашли ответ — напишите нам в Telegram, ответим в течение часа </p></div><div class="max-w-3xl mx-auto flex flex-col gap-2" data-animate="fade-up" data-delay="300"><!--[-->`);
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
      _push(`<!--]--></div><div class="mt-10 text-center" data-animate="fade-up" data-delay="450"><p class="text-sm mb-3" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}">Остались вопросы?</p><a href="https://t.me/bugaev_web" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-150" style="${ssrRenderStyle({ "color": "var(--ink)" })}"><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"></path></svg> Задать вопрос в Telegram <span>↗</span></a></div></div></section>`);
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
      newErrors.name = "Пожалуйста, укажите ваше имя";
    } else if (data.name.trim().length < 2) {
      newErrors.name = "Имя должно содержать не менее 2 символов";
    } else if (data.name.trim().length > 100) {
      newErrors.name = "Имя слишком длинное";
    }
    if (!data.phone.trim()) {
      newErrors.phone = "Пожалуйста, укажите номер телефона";
    } else if (!validatePhone(data.phone)) {
      newErrors.phone = "Введите корректный номер (+7 или 8 + 10 цифр)";
    }
    if (!data.email.trim()) {
      newErrors.email = "Пожалуйста, укажите email";
    } else if (!validateEmail(data.email)) {
      newErrors.email = "Введите корректный email адрес";
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
          err.message || `Ошибка сервера: ${response.status}`
        );
      }
      isSuccess.value = true;
      if (false) ;
      return true;
    } catch (err) {
      isError.value = true;
      errorMessage.value = err instanceof Error ? err.message : "Ошибка при отправке. Попробуйте снова или напишите нам в Telegram.";
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
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "contact",
        class: "py-24",
        style: { "background": "var(--surface)" }
      }, _attrs))} data-v-929b8dc7><div class="section-container" data-v-929b8dc7><div class="max-w-2xl mx-auto" data-v-929b8dc7><div class="text-center mb-10" data-v-929b8dc7><div class="flex justify-center mb-5" data-animate="fade-down" data-v-929b8dc7><span class="badge" data-v-929b8dc7>Быстрый старт</span></div><h2 class="section-title mb-3" data-animate="fade-up" data-delay="100" data-v-929b8dc7> Ваш персональный digital-отдел и SMM — за 50 000 ₽/мес </h2><p class="section-subtitle" data-animate="fade-up" data-delay="200" data-v-929b8dc7> Без разовых платежей за запуск, без заморочек с подрядчиками — для салонов красоты и клиник Москвы. Оставьте заявку и мы свяжемся в течение часа. </p></div><div class="rounded-3xl p-8 md:p-10" style="${ssrRenderStyle({ "background": "var(--surface)", "border": "1px solid var(--border)", "box-shadow": "0 4px 40px rgba(0,0,0,0.06)" })}" data-animate="fade-up" data-delay="300" data-v-929b8dc7>`);
      if (unref(isSuccess)) {
        _push(`<div class="success-notification text-center py-10" data-v-929b8dc7><div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5" style="${ssrRenderStyle({ "background": "var(--accent-dim)", "border": "2px solid rgba(143,175,138,0.3)" })}" data-v-929b8dc7><svg width="26" height="26" viewBox="0 0 26 26" fill="none" data-v-929b8dc7><path d="M4 13l6 6 12-12" stroke="var(--accent-text)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-929b8dc7></path></svg></div><h3 class="text-2xl font-bold mb-3" style="${ssrRenderStyle({ "color": "var(--ink)", "letter-spacing": "-0.02em" })}" data-v-929b8dc7>Заявка отправлена!</h3><p class="text-base mb-8 leading-relaxed" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}" data-v-929b8dc7> Мы получили вашу заявку и свяжемся с вами в течение <strong style="${ssrRenderStyle({ "color": "var(--ink)" })}" data-v-929b8dc7>одного часа</strong>. Или напишите нам напрямую в Telegram. </p><div class="flex flex-col sm:flex-row gap-3 justify-center" data-v-929b8dc7><a href="https://t.me/bugaev_web" target="_blank" rel="noopener noreferrer" class="btn-primary" data-v-929b8dc7><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" data-v-929b8dc7><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" data-v-929b8dc7></path></svg> Написать в Telegram </a><button class="btn-outline" data-v-929b8dc7>Отправить ещё одну</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(isSuccess)) {
        _push(`<form novalidate data-v-929b8dc7><div class="space-y-5" data-v-929b8dc7><div class="grid sm:grid-cols-2 gap-5" data-v-929b8dc7><div data-v-929b8dc7><label class="block text-sm font-semibold mb-2" style="${ssrRenderStyle({ "color": "var(--ink)" })}" data-v-929b8dc7> Имя <span style="${ssrRenderStyle({ "color": "#D94F4F" })}" data-v-929b8dc7>*</span></label><input${ssrRenderAttr("value", unref(form).name)} type="text" placeholder="Анна" autocomplete="given-name" class="${ssrRenderClass(["form-input", unref(errors).name ? "error" : ""])}" data-v-929b8dc7>`);
        if (unref(errors).name) {
          _push(`<p class="mt-1.5 text-xs flex items-center gap-1" style="${ssrRenderStyle({ "color": "#D94F4F" })}" data-v-929b8dc7><svg width="11" height="11" viewBox="0 0 11 11" fill="none" data-v-929b8dc7><circle cx="5.5" cy="5.5" r="4.5" stroke="currentColor" stroke-width="1.3" data-v-929b8dc7></circle><path d="M5.5 3v2.5M5.5 7.5v.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" data-v-929b8dc7></path></svg> ${ssrInterpolate(unref(errors).name)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div data-v-929b8dc7><label class="block text-sm font-semibold mb-2" style="${ssrRenderStyle({ "color": "var(--ink)" })}" data-v-929b8dc7> Телефон <span style="${ssrRenderStyle({ "color": "#D94F4F" })}" data-v-929b8dc7>*</span></label><input${ssrRenderAttr("value", unref(form).phone)} type="tel" placeholder="+7 (999) 000-00-00" autocomplete="tel" class="${ssrRenderClass(["form-input", unref(errors).phone ? "error" : ""])}" data-v-929b8dc7>`);
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
        _push(`</div><div data-v-929b8dc7><label class="block text-sm font-semibold mb-2" style="${ssrRenderStyle({ "color": "var(--ink)" })}" data-v-929b8dc7> Название салона / клиники <span class="font-normal" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}" data-v-929b8dc7>(необязательно)</span></label><input${ssrRenderAttr("value", unref(form).salon)} type="text" placeholder="Студия Prism Beauty" autocomplete="organization" class="form-input" data-v-929b8dc7></div><input type="hidden" name="utm_source"${ssrRenderAttr("value", unref(utmParams2).utm_source)} data-v-929b8dc7><input type="hidden" name="utm_medium"${ssrRenderAttr("value", unref(utmParams2).utm_medium)} data-v-929b8dc7><input type="hidden" name="utm_campaign"${ssrRenderAttr("value", unref(utmParams2).utm_campaign)} data-v-929b8dc7><input type="hidden" name="utm_term"${ssrRenderAttr("value", unref(utmParams2).utm_term)} data-v-929b8dc7><input type="hidden" name="utm_content"${ssrRenderAttr("value", unref(utmParams2).utm_content)} data-v-929b8dc7>`);
        if (unref(isError)) {
          _push(`<div class="p-4 rounded-xl flex items-start gap-3" style="${ssrRenderStyle({ "background": "rgba(217,79,79,0.05)", "border": "1px solid rgba(217,79,79,0.18)" })}" data-v-929b8dc7><svg width="15" height="15" viewBox="0 0 15 15" fill="none" class="flex-shrink-0 mt-0.5" data-v-929b8dc7><circle cx="7.5" cy="7.5" r="6.5" stroke="#D94F4F" stroke-width="1.3" data-v-929b8dc7></circle><path d="M7.5 4.5v3M7.5 9.5v.5" stroke="#D94F4F" stroke-width="1.3" stroke-linecap="round" data-v-929b8dc7></path></svg><p class="text-sm" style="${ssrRenderStyle({ "color": "#D94F4F" })}" data-v-929b8dc7>${ssrInterpolate(unref(errorMessage))}</p></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button type="submit"${ssrIncludeBooleanAttr(unref(isSubmitting)) ? " disabled" : ""} class="btn-primary w-full text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none" data-v-929b8dc7>`);
        if (!unref(isSubmitting)) {
          _push(`<span class="flex items-center gap-2 justify-center" data-v-929b8dc7> Отправить заявку <span style="${ssrRenderStyle({ "font-size": "1.1em" })}" data-v-929b8dc7>→</span></span>`);
        } else {
          _push(`<span class="flex items-center gap-2 justify-center" data-v-929b8dc7><span class="spinner" data-v-929b8dc7></span> Отправляем... </span>`);
        }
        _push(`</button></div><p class="text-xs text-center mt-4 leading-relaxed" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}" data-v-929b8dc7> Нажимая «Отправить заявку», вы соглашаетесь с `);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/privacy",
          class: "underline",
          style: { "color": "var(--ink)" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`политикой конфиденциальности`);
            } else {
              return [
                createTextVNode("политикой конфиденциальности")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`. Данные не передаются третьим лицам. </p></form>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-6 text-center" data-animate="fade-up" data-delay="400" data-v-929b8dc7><p class="text-sm mb-2" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}" data-v-929b8dc7>Предпочитаете общаться напрямую?</p><a href="https://t.me/bugaev_web" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-150" style="${ssrRenderStyle({ "color": "var(--ink)" })}" data-v-929b8dc7><svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" data-v-929b8dc7><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" data-v-929b8dc7></path></svg> @bugaev_web — написать в Telegram ↗ </a></div></div></div></section>`);
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
      title: "Bugaev Web — IT-отдел + SMM для салонов красоты за 50 000 ₽/мес",
      meta: [
        {
          name: "description",
          content: "Полный цифровой пакет для салона красоты: сайт на Nuxt.js, Telegram-бот, ведение соцсетей, настройка CRM YCLIENTS, аналитика и личный менеджер — всё за 50 000 ₽ в месяц."
        },
        { property: "og:title", content: "Bugaev Web — IT-отдел + SMM для салонов красоты" },
        { property: "og:description", content: "Сайт, Telegram-бот, соцсети, CRM YCLIENTS и аналитика под ключ за 50 000 ₽/мес" },
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
            description: "IT-отдел + SMM под ключ для салонов красоты и beauty-клиник за 50 000 ₽/мес",
            url: "https://bugaev-web.ru",
            telephone: "+79964145143",
            email: "dmnbugaev@gmail.com",
            priceRange: "50000₽/месяц",
            areaServed: "Москва и Московская область",
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
                name: "А если у нас уже есть Instagram?",
                acceptedAnswer: { "@type": "Answer", text: "Отлично — начнём с аудита того, что есть. Доработаем оформление, выстроим контент-план и улучшим вовлечённость. Ничего не удаляем, всё только улучшаем." }
              },
              {
                "@type": "Question",
                name: "А если у нас нет нормальных фото?",
                acceptedAnswer: { "@type": "Answer", text: "Не проблема. Мы помогаем с ТЗ на съёмку, используем правильно обработанные фото работ и качественный сток. Ваше участие — изредка присылать фото новых работ. 10–15 минут в неделю." }
              },
              {
                "@type": "Question",
                name: "А если мы находимся не в центре Москвы?",
                acceptedAnswer: { "@type": "Answer", text: "Большинство наших клиентов — салоны в спальных районах Москвы и Подмосковье: Митино, Бутово, Люблино, Химки, Подольск. Для таких локаций SEO и геопривязка работают особенно хорошо — конкуренция ниже, а запросы типичные." }
              },
              {
                "@type": "Question",
                name: "А если мы захотим уйти?",
                acceptedAnswer: { "@type": "Answer", text: "Без штрафов. Уведомите за 14 дней — и договор закрыт. Сайт, бот, база клиентов и весь контент остаются у вас. Мы не держим данные в заложниках." }
              },
              {
                "@type": "Question",
                name: "Как быстро будут результаты?",
                acceptedAnswer: { "@type": "Answer", text: "Первые записи через бот и сайт — в течение 2–4 недель после запуска. Рост в соцсетях и SEO-трафик становятся заметны через 1–3 месяца. Точные прогнозы даём после бесплатного аудита." }
              },
              {
                "@type": "Question",
                name: "Насколько это безопасно с точки зрения данных клиентов?",
                acceptedAnswer: { "@type": "Answer", text: "Работаем строго в рамках 152-ФЗ о персональных данных. Доступ к CRM и базе — только у вас и вашего личного менеджера. NDA подписываем до начала работ. Данные клиентов никуда не передаются." }
              },
              {
                "@type": "Question",
                name: "Что конкретно входит в подписку и нет ли скрытых платежей?",
                acceptedAnswer: { "@type": "Answer", text: "В подписку за 50 000 ₽/мес входит: сайт-визитка на Nuxt.js, Telegram-бот с автозаписью и напоминаниями, ведение Instagram и Telegram-канала, настройка CRM YCLIENTS, еженедельные отчёты, личный менеджер 6 дней в неделю, хостинг и домен. Скрытых доплат нет." }
              }
            ]
          })
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Header = __nuxt_component_0$1;
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
export {
  _sfc_main as default
};
//# sourceMappingURL=index-DUI8ABDB.js.map
