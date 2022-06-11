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
  default: () => Destination
});
module.exports = __toCommonJS(stdin_exports);
var import_index_e3bd9a9f = require("../../chunks/index-e3bd9a9f.js");
var import_data_59143710 = require("../../chunks/data-59143710.js");
var import_PageHeader_db1323aa = require("../../chunks/PageHeader-db1323aa.js");
var destination_svelte_svelte_type_style_lang = "";
const css = {
  code: "#destination.svelte-u8pj7t{background-image:url('/assets/destination/background-destination-mobile.jpg');background-repeat:no-repeat;background-size:cover;min-height:100vh}@media screen and (min-width: 767px){#destination.svelte-u8pj7t{background-image:url('/assets/destination/background-destination-tablet.jpg')}}@media screen and (min-width: 1250px){#destination.svelte-u8pj7t{background-image:url('/assets/destination/background-destination-desktop.jpg')}}.content.svelte-u8pj7t{padding-bottom:10rem;text-align:center}.planet-img.svelte-u8pj7t{width:50%;min-width:17rem;margin:0 auto}.heading.svelte-u8pj7t{margin-bottom:3rem;text-align:center}nav.svelte-u8pj7t{margin-bottom:2.7rem}.destination-nav.svelte-u8pj7t{width:75%;margin:0 auto;display:flex;flex-direction:row;justify-content:space-between}li.svelte-u8pj7t{padding:1rem 0;cursor:pointer}.text.svelte-u8pj7t{line-height:1.7;margin-bottom:3.5rem}hr.svelte-u8pj7t{width:100%;height:2px;border:none;background-color:var(--clr-dark-grey);margin-bottom:3rem}.distance.svelte-u8pj7t{margin-bottom:4.5rem}.subheading-2.svelte-u8pj7t{margin-bottom:1.5rem}.facts-container.svelte-u8pj7t{display:flex;flex-direction:column}@media screen and (min-width: 767px){.content-container.svelte-u8pj7t{padding-top:13.5rem}.content.svelte-u8pj7t{width:75%;margin:0 auto;padding-bottom:0}.heading.svelte-u8pj7t{text-align:left}.destination-nav.svelte-u8pj7t{width:65%}.planet-img.svelte-u8pj7t{max-width:30rem;margin:0 auto}.facts-container.svelte-u8pj7t{width:100%;flex-direction:row;justify-content:space-evenly}}@media screen and (min-width: 1250px){.content-container.svelte-u8pj7t{overflow:hidden;padding-top:20rem;grid-template-columns:repeat(2, 1fr);grid-template-rows:auto}.heading.svelte-u8pj7t{padding:0 5rem}.planet-img-container.svelte-u8pj7t{padding:0 8rem}.planet-img.svelte-u8pj7t{width:100%;max-width:100%}.content.svelte-u8pj7t{text-align:left;display:flex;flex-direction:column;justify-content:flex-start;padding-top:10rem}.destination-nav.svelte-u8pj7t{margin-left:0}.text.svelte-u8pj7t{margin-bottom:6rem}.facts-container.svelte-u8pj7t{justify-content:flex-start;gap:8rem}}",
  map: null
};
const Destination = (0, import_index_e3bd9a9f.c)(($$result, $$props, $$bindings, slots) => {
  let currentDestination = "Moon";
  $$result.css.add(css);
  return `<div id="${"destination"}" class="${"svelte-u8pj7t"}"><div class="${"content-container top-padding svelte-u8pj7t"}"><div class="${"heading svelte-u8pj7t"}">${(0, import_index_e3bd9a9f.v)(import_PageHeader_db1323aa.P, "PageHeader").$$render($$result, {
    stepNumber: "01",
    step: "Pick Your Destination"
  }, {}, {})}
			${(0, import_index_e3bd9a9f.e)(import_data_59143710.d, (destination) => {
    return `${currentDestination === destination.name ? `<div class="${"planet-img-container svelte-u8pj7t"}"><img${(0, import_index_e3bd9a9f.b)("src", destination.images.png, 0)}${(0, import_index_e3bd9a9f.b)("alt", destination.name, 0)} class="${"planet-img svelte-u8pj7t"}">
				</div>` : ``}`;
  })}</div>
		<div class="${"content svelte-u8pj7t"}"><nav aria-label="${"secondary"}" class="${"svelte-u8pj7t"}"><ul class="${"destination-nav svelte-u8pj7t"}">${(0, import_index_e3bd9a9f.e)(import_data_59143710.d, (destination) => {
    return `<li class="${[
      "fs-300 text-light uppercase svelte-u8pj7t",
      currentDestination === destination.name ? "active" : ""
    ].join(" ").trim()}">${(0, import_index_e3bd9a9f.d)(destination.name)}</li>`;
  })}</ul></nav>
			${(0, import_index_e3bd9a9f.e)(import_data_59143710.d, (destination) => {
    return `${currentDestination === destination.name ? `<h2 class="${"fs-800"}">${(0, import_index_e3bd9a9f.d)(destination.name)}</h2>
					<p class="${"fs-400 text-light text svelte-u8pj7t"}">${(0, import_index_e3bd9a9f.d)(destination.description)}</p>` : ``}`;
  })}

			<hr class="${"line-break svelte-u8pj7t"}">
			
			<div class="${"facts-container svelte-u8pj7t"}"><div class="${"distance-container"}"><p class="${"uppercase ff-sans-cond text-light subheading-2 svelte-u8pj7t"}">Avg. Distance</p>
					${(0, import_index_e3bd9a9f.e)(import_data_59143710.d, (destination) => {
    return `${currentDestination === destination.name ? `<p class="${"uppercase distance subheading-1 svelte-u8pj7t"}">${(0, import_index_e3bd9a9f.d)(destination.distance)}</p>` : ``}`;
  })}</div>
				<div class="${"time-container"}"><p class="${"uppercase ff-sans-cond text-light subheading-2 svelte-u8pj7t"}">Est. Travel Time</p>
					${(0, import_index_e3bd9a9f.e)(import_data_59143710.d, (destination) => {
    return `${currentDestination === destination.name ? `<p class="${"uppercase subheading-1"}">${(0, import_index_e3bd9a9f.d)(destination.travel)}</p>` : ``}`;
  })}</div></div></div></div>
</div>`;
});
