import { defineComponent, ref, mergeProps, unref, useSSRContext, h, createVNode, resolveDynamicComponent } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderVNode } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const navLinks = [
      { href: "#features", label: "Что входит" },
      { href: "#how-it-works", label: "Как работаем" },
      { href: "#pricing", label: "Стоимость" },
      { href: "#faq", label: "FAQ" },
      { href: "#contact", label: "Контакты" }
    ];
    const isScrolled = ref(false);
    const mobileMenuOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: [
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          unref(isScrolled) ? "scrolled" : ""
        ]
      }, _attrs))} data-v-352e9b31><div class="section-container" data-v-352e9b31><div class="flex items-center justify-between h-14 md:h-16" data-v-352e9b31><a href="#" class="flex items-center gap-2.5 group" data-v-352e9b31><div class="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105" style="${ssrRenderStyle({ "background": "var(--accent)" })}" data-v-352e9b31><svg width="16" height="16" viewBox="0 0 18 18" fill="none" data-v-352e9b31><path d="M4 14L9 3L14 14H4Z" fill="var(--ink)" data-v-352e9b31></path><circle cx="9" cy="9.5" r="1.8" fill="var(--ink)" data-v-352e9b31></circle></svg></div><span class="text-base font-bold tracking-tight" style="${ssrRenderStyle({ "color": "var(--ink)", "font-family": "'Syne', sans-serif", "letter-spacing": "-0.02em" })}" data-v-352e9b31>Bugaev Web</span></a><nav class="hidden md:flex items-center gap-7" data-v-352e9b31><!--[-->`);
      ssrRenderList(navLinks, (link) => {
        _push(`<a${ssrRenderAttr("href", link.href)} class="text-sm font-medium transition-colors duration-150" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}" data-v-352e9b31>${ssrInterpolate(link.label)}</a>`);
      });
      _push(`<!--]--></nav><div class="flex items-center gap-3" data-v-352e9b31><a href="https://t.me/bugaev_web" target="_blank" rel="noopener noreferrer" class="hidden md:inline-flex btn-primary text-sm" style="${ssrRenderStyle({ "padding": "0.5rem 1.25rem" })}" data-v-352e9b31><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" data-v-352e9b31><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" data-v-352e9b31></path></svg> Telegram </a><button class="md:hidden flex flex-col items-center justify-center gap-1.5 w-9 h-9 rounded-lg transition-colors" style="${ssrRenderStyle(unref(mobileMenuOpen) ? "background: var(--surface-warm);" : "")}" aria-label="Открыть меню" data-v-352e9b31><span class="${ssrRenderClass(["block w-[18px] h-0.5 rounded-full transition-all duration-300", unref(mobileMenuOpen) ? "rotate-45 translate-y-2" : ""])}" style="${ssrRenderStyle({ "background": "var(--ink)" })}" data-v-352e9b31></span><span class="${ssrRenderClass(["block w-[18px] h-0.5 rounded-full transition-all duration-300", unref(mobileMenuOpen) ? "opacity-0 scale-x-0" : ""])}" style="${ssrRenderStyle({ "background": "var(--ink)" })}" data-v-352e9b31></span><span class="${ssrRenderClass(["block w-[18px] h-0.5 rounded-full transition-all duration-300", unref(mobileMenuOpen) ? "-rotate-45 -translate-y-2" : ""])}" style="${ssrRenderStyle({ "background": "var(--ink)" })}" data-v-352e9b31></span></button></div></div></div>`);
      if (unref(mobileMenuOpen)) {
        _push(`<div class="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden" data-v-352e9b31></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass(["mobile-menu fixed top-0 right-0 bottom-0 w-72 z-50 md:hidden", unref(mobileMenuOpen) ? "open" : ""])}" style="${ssrRenderStyle({ "background": "var(--surface)", "border-left": "1px solid var(--border)" })}" data-v-352e9b31><div class="flex items-center justify-between px-5 py-4" style="${ssrRenderStyle({ "border-bottom": "1px solid var(--border)" })}" data-v-352e9b31><div class="flex items-center gap-2.5" data-v-352e9b31><div class="w-7 h-7 rounded-lg flex items-center justify-center" style="${ssrRenderStyle({ "background": "var(--accent)" })}" data-v-352e9b31><svg width="14" height="14" viewBox="0 0 18 18" fill="none" data-v-352e9b31><path d="M4 14L9 3L14 14H4Z" fill="var(--ink)" data-v-352e9b31></path><circle cx="9" cy="9.5" r="1.8" fill="var(--ink)" data-v-352e9b31></circle></svg></div><span class="font-bold text-sm" style="${ssrRenderStyle({ "color": "var(--ink)", "font-family": "'Syne', sans-serif" })}" data-v-352e9b31>Bugaev Web</span></div><button class="w-8 h-8 flex items-center justify-center rounded-lg transition-colors" style="${ssrRenderStyle({ "background": "var(--surface-warm)" })}" data-v-352e9b31><svg width="14" height="14" viewBox="0 0 14 14" fill="none" data-v-352e9b31><path d="M1 1l12 12M13 1L1 13" stroke="var(--ink-3)" stroke-width="1.5" stroke-linecap="round" data-v-352e9b31></path></svg></button></div><nav class="p-4 flex flex-col gap-1" data-v-352e9b31><!--[-->`);
      ssrRenderList(navLinks, (link) => {
        _push(`<a${ssrRenderAttr("href", link.href)} class="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150" style="${ssrRenderStyle({ "color": "var(--ink-3)" })}" data-v-352e9b31>${ssrInterpolate(link.label)}</a>`);
      });
      _push(`<!--]--></nav><div class="absolute bottom-0 left-0 right-0 p-4" style="${ssrRenderStyle({ "border-top": "1px solid var(--border)" })}" data-v-352e9b31><a href="https://t.me/bugaev_web" target="_blank" rel="noopener noreferrer" class="btn-primary w-full justify-center text-sm" data-v-352e9b31><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" data-v-352e9b31><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" data-v-352e9b31></path></svg> Написать в Telegram </a></div></div></header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-352e9b31"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const IconTelegram = defineComponent({
      render: () => h("svg", { width: 14, height: 14, viewBox: "0 0 24 24", fill: "rgba(255,255,255,0.45)" }, [
        h("path", { d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z" })
      ])
    });
    const IconInstagram = defineComponent({
      render: () => h("svg", { width: 14, height: 14, viewBox: "0 0 24 24", fill: "none", stroke: "rgba(255,255,255,0.45)", "stroke-width": "1.5" }, [
        h("rect", { x: 2, y: 2, width: 20, height: 20, rx: 5 }),
        h("path", { d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" }),
        h("line", { x1: 17.5, y1: 6.5, x2: 17.51, y2: 6.5 })
      ])
    });
    const IconVK = defineComponent({
      render: () => h("svg", { width: 14, height: 14, viewBox: "0 0 24 24", fill: "rgba(255,255,255,0.45)" }, [
        h("path", { d: "M21.547 7h-3.29a.743.743 0 00-.655.392s-1.312 2.416-1.734 3.23C14.734 12.813 14 12.126 14 11.11V7.603A1.104 1.104 0 0012.896 6.5h-2.474a1.982 1.982 0 00-1.75.813s1.255-.204 1.255 1.49c0 .42.022 1.626.04 2.64a.73.73 0 01-1.272.503 21.54 21.54 0 01-2.498-4.543.693.693 0 00-.63-.403h-2.99a.508.508 0 00-.48.685C3.005 10.175 6.918 18 11.38 18h1.878a.742.742 0 00.742-.742v-1.572a.73.73 0 011.244-.515l2.636 2.647a1.1 1.1 0 00.776.32h2.692a1.097 1.097 0 00.769-1.855l-2.534-2.545a.73.73 0 010-1.03l2.537-2.95A1.1 1.1 0 0021.547 7z" })
      ])
    });
    const socials = [
      { label: "Telegram", href: "https://t.me/bugaev_web", icon: IconTelegram },
      { label: "Instagram", href: "https://instagram.com/bugaev_web", icon: IconInstagram },
      { label: "ВКонтакте", href: "https://vk.com/bugaev_web", icon: IconVK }
    ];
    const legalLinks = [
      { href: "/privacy", label: "Политика конфиденциальности" },
      { href: "/oferta", label: "Договор оферты" },
      { href: "/terms", label: "Соглашение" },
      { href: "/cookies", label: "Cookies" },
      { href: "/requisites", label: "Реквизиты" }
    ];
    const serviceLinks = [
      { label: "Сайт-визитка", href: "#features" },
      { label: "Telegram-бот", href: "#features" },
      { label: "Ведение соцсетей", href: "#features" },
      { label: "CRM YCLIENTS", href: "#features" },
      { label: "Стоимость", href: "#pricing" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ style: { "background": "var(--dark)" } }, _attrs))}><div class="section-container py-14 md:py-16"><div class="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12"><div class="max-w-xs"><a href="/" class="flex items-center gap-3 mb-4 group"><div class="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105" style="${ssrRenderStyle({ "background": "var(--accent)" })}"><svg width="16" height="16" viewBox="0 0 18 18" fill="none"><path d="M4 14L9 3L14 14H4Z" fill="var(--ink)"></path><circle cx="9" cy="9.5" r="1.8" fill="var(--ink)"></circle></svg></div><span class="font-bold text-base" style="${ssrRenderStyle({ "color": "#FFFFFF", "letter-spacing": "-0.02em", "font-family": "'Syne', sans-serif" })}">Bugaev Web</span></a><p class="text-sm leading-relaxed mb-6" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.35)" })}"> IT-отдел + SMM под ключ для салонов красоты и beauty-клиник за 50 000 ₽/мес. </p><div class="flex items-center gap-2"><!--[-->`);
      ssrRenderList(socials, (social) => {
        _push(`<a${ssrRenderAttr("href", social.href)} target="_blank" rel="noopener noreferrer"${ssrRenderAttr("aria-label", social.label)} class="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.05)", "border": "1px solid rgba(255,255,255,0.07)" })}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(social.icon), null, null), _parent);
        _push(`</a>`);
      });
      _push(`<!--]--></div></div><div class="grid grid-cols-2 gap-10 md:gap-16"><div><h4 class="mono text-xs uppercase tracking-widest mb-5" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.3)" })}">Услуги</h4><ul class="space-y-3"><!--[-->`);
      ssrRenderList(serviceLinks, (item) => {
        _push(`<li><a${ssrRenderAttr("href", item.href)} class="text-sm transition-colors duration-150" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.4)" })}">${ssrInterpolate(item.label)}</a></li>`);
      });
      _push(`<!--]--></ul></div><div><h4 class="mono text-xs uppercase tracking-widest mb-5" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.3)" })}">Контакты</h4><ul class="space-y-3"><li><a href="https://t.me/bugaev_web" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 text-sm transition-colors duration-150" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.4)" })}"><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" style="${ssrRenderStyle({ "flex-shrink": "0" })}"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.941z"></path></svg> @bugaev_web </a></li><li><a href="mailto:hello@bugaev.web" class="text-sm transition-colors duration-150" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.4)" })}"> hello@bugaev.web </a></li><li><span class="text-sm" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.25)" })}">Пн–Сб: 9:00–21:00</span></li></ul></div></div></div><div class="h-px mb-7" style="${ssrRenderStyle({ "background": "rgba(255,255,255,0.06)" })}"></div><div class="flex flex-col sm:flex-row items-center justify-between gap-4"><p class="text-xs order-2 sm:order-1 mono" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.18)" })}"> © ${ssrInterpolate(unref(currentYear))} Bugaev Web. Все права защищены. </p><div class="flex flex-wrap items-center gap-4 order-1 sm:order-2"><!--[-->`);
      ssrRenderList(legalLinks, (link) => {
        _push(`<a${ssrRenderAttr("href", link.href)} class="text-xs transition-colors duration-150" style="${ssrRenderStyle({ "color": "rgba(255,255,255,0.22)" })}">${ssrInterpolate(link.label)}</a>`);
      });
      _push(`<!--]--></div></div></div></footer>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __nuxt_component_0 as _,
  _sfc_main as a
};
//# sourceMappingURL=Footer-DbrxVFel.js.map
