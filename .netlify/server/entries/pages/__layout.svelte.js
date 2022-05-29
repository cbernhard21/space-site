var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => _layout
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e3bd9a9f = require("../../chunks/index-e3bd9a9f.js");
const getStores = () => {
  const stores = (0, import_index_e3bd9a9f.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var Header_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".line.svelte-16lqz7h.svelte-16lqz7h{display:hidden}.header.svelte-16lqz7h.svelte-16lqz7h{margin:0 auto;width:100%;display:flex;justify-content:space-between;position:fixed;top:0;left:0;padding:3rem 2rem}.logo.svelte-16lqz7h.svelte-16lqz7h{align-self:center;z-index:999;cursor:pointer}nav.svelte-16lqz7h.svelte-16lqz7h{width:100vw;height:calc(100vh + 2rem);font-family:var(--ff-sans-cond);font-size:var(--fs-300);letter-spacing:2.7px;position:absolute;top:0;transform:translateX(100%) translateY(-1.5rem);transition:transform 0.3s ease-in-out;z-index:100}ul.svelte-16lqz7h.svelte-16lqz7h{display:flex;flex-direction:column;gap:3rem;margin-top:10rem;margin-left:3rem}.slide.svelte-16lqz7h.svelte-16lqz7h{transform:translateX(27%) translateY(-1.5rem)}.bold.svelte-16lqz7h.svelte-16lqz7h{font-weight:700}@supports (-webkit-backdrop-filter: none) or (backdrop-filter: none){nav.svelte-16lqz7h.svelte-16lqz7h{-webkit-backdrop-filter:blur(50px);backdrop-filter:blur(50px)}}@supports not ((-webkit-backdrop-filter: none) or (backdrop-filter: none)){nav.svelte-16lqz7h.svelte-16lqz7h{background-color:rgba(0, 0, 0, 0.9)}}@media screen and (min-width: 767px){.menu.svelte-16lqz7h.svelte-16lqz7h,.bold.svelte-16lqz7h.svelte-16lqz7h{display:none}.header.svelte-16lqz7h.svelte-16lqz7h{padding:0 0 0 4rem}nav.svelte-16lqz7h.svelte-16lqz7h{background-color:var(--clr-grey);width:auto;height:auto;padding:4.4rem 0;position:static;transform:translateX(0) translateY(0);transition:none}ul.svelte-16lqz7h.svelte-16lqz7h{height:100%;position:relative;flex-direction:row;align-items:center;margin-top:0;margin-left:0;padding:0rem 5rem;gap:4rem}ul.svelte-16lqz7h a.svelte-16lqz7h{padding:4rem 0;border-bottom:3px solid transparent;transition:all 0.3s ease-in-out}a.svelte-16lqz7h.svelte-16lqz7h:hover{border-bottom:3px solid #979797}.slide.svelte-16lqz7h.svelte-16lqz7h{transform:none}.hidden.svelte-16lqz7h.svelte-16lqz7h{display:none}}@media screen and (min-width: 1250px){.header.svelte-16lqz7h.svelte-16lqz7h{top:5rem}.bold.svelte-16lqz7h.svelte-16lqz7h{display:inline}ul.svelte-16lqz7h.svelte-16lqz7h{padding:0 16.5rem 0 18.5rem}.line.svelte-16lqz7h.svelte-16lqz7h{display:block;position:absolute;top:5.5rem;left:15rem;width:33vw;height:1px;background-color:var(--clr-dark-grey);z-index:9999;flex-shrink:1}}@media screen and (min-width: 1450px){.line.svelte-16lqz7h.svelte-16lqz7h{width:43vw}}@media screen and (min-width: 1800px){.line.svelte-16lqz7h.svelte-16lqz7h{width:50vw}}",
  map: null
};
const Header = (0, import_index_e3bd9a9f.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_e3bd9a9f.a)(page, (value) => $page = value);
  let routes = [
    { name: "home", href: "/", id: "00" },
    {
      name: "destination",
      href: "/destination",
      id: "01"
    },
    { name: "crew", href: "/crew", id: "02" },
    {
      name: "technology",
      href: "/technology",
      id: "03"
    }
  ];
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<div class="${"header svelte-16lqz7h"}"><a href="${"/"}" class="${"svelte-16lqz7h"}"><img src="${"../assets/shared/logo.svg"}" alt="${"Space Travel Logo"}" class="${"logo main-logo svelte-16lqz7h"}"></a>
	
	<div class="${"line svelte-16lqz7h"}"></div>
	<nav aria-label="${"primary"}" class="${["svelte-16lqz7h", ""].join(" ").trim()}"><ul class="${"svelte-16lqz7h"}">${(0, import_index_e3bd9a9f.e)(routes, (route) => {
    return `<li><a${(0, import_index_e3bd9a9f.b)("href", route.href, 0)} class="${[
      "text-white fs-300 uppercase svelte-16lqz7h",
      route.href === $page.url.pathname ? "active" : ""
    ].join(" ").trim()}"><span class="${"bold svelte-16lqz7h"}">${(0, import_index_e3bd9a9f.d)(route.id)}</span> ${(0, import_index_e3bd9a9f.d)(route.name)}</a>
				</li>`;
  })}</ul></nav>

	${`<img src="${"../assets/shared/icon-hamburger.svg"}" alt="${"Burger Menu"}" class="${"logo menu svelte-16lqz7h"}">`}
</div>`;
});
var global = "";
var __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-1i7d05o{position:relative}",
  map: null
};
const _layout = (0, import_index_e3bd9a9f.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<link rel="${"preconnect"}" href="${"https://fonts.googleapis.com"}" data-svelte="svelte-m98snp"><link rel="${"preconnect"}" href="${"https://fonts.gstatic.com"}" crossorigin data-svelte="svelte-m98snp"><link href="${"https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Bellefair&display=swap"}" rel="${"stylesheet"}" data-svelte="svelte-m98snp">`, ""}
<header class="${"svelte-1i7d05o"}">${(0, import_index_e3bd9a9f.v)(Header, "Header").$$render($$result, {}, {}, {})}</header>

<main>${slots.default ? slots.default({}) : ``}
</main>`;
});
