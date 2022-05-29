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
var import_PageHeader_6296cf40 = require("../../chunks/PageHeader-6296cf40.js");
const destinations = [
  {
    name: "Moon",
    images: {
      png: "./assets/destination/image-moon.png",
      webp: "./assets/destination/image-moon.webp"
    },
    description: "See our planet as you\u2019ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you\u2019re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days"
  },
  {
    name: "Mars",
    images: {
      png: "./assets/destination/image-mars.png",
      webp: "./assets/destination/image-mars.webp"
    },
    description: "Don\u2019t forget to pack your hiking boots. You\u2019ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It\u2019s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months"
  },
  {
    name: "Europa",
    images: {
      png: "./assets/destination/image-europa.png",
      webp: "./assets/destination/image-europa.webp"
    },
    description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover\u2019s dream. With an icy surface, it\u2019s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years"
  },
  {
    name: "Titan",
    images: {
      png: "./assets/destination/image-titan.png",
      webp: "./assets/destination/image-titan.webp"
    },
    description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years"
  }
];
var destination_svelte_svelte_type_style_lang = "";
const css = {
  code: "#destination.svelte-1azj695{background-image:url('/assets/destination/background-destination-mobile.jpg');background-repeat:no-repeat;background-size:cover;height:100vh}@media screen and (min-width: 767px){#destination.svelte-1azj695{background-image:url('/assets/destination/background-destination-tablet.jpg')}}@media screen and (min-width: 1250px){#destination.svelte-1azj695{background-image:url('/assets/destination/background-destination-desktop.jpg')}}.content.svelte-1azj695{padding-bottom:10rem}.planet-img.svelte-1azj695{width:50%;min-width:17rem;margin:0 auto}.heading.svelte-1azj695{margin-bottom:3rem;text-align:center}nav.svelte-1azj695{margin-bottom:2.7rem}.destination-nav.svelte-1azj695{width:75%;margin:0 auto;display:flex;flex-direction:row;justify-content:space-between}li.svelte-1azj695{padding:1rem 0}h2.svelte-1azj695{text-align:center}.text.svelte-1azj695{text-align:center;line-height:1.7;margin-bottom:3.5rem}hr.svelte-1azj695{width:100%;height:2px;border:none;background-color:var(--clr-dark-grey);margin-bottom:3rem}.distance.svelte-1azj695{margin-bottom:4.5rem}.subheading-2.svelte-1azj695{margin-bottom:1.5rem}@media screen and (min-width: 767px){.content-container.svelte-1azj695{padding-top:13.5rem}.heading.svelte-1azj695{text-align:left}.destination-nav.svelte-1azj695{width:35%}.planet-img.svelte-1azj695{max-width:30rem;margin:0 auto}}",
  map: null
};
const Destination = (0, import_index_e3bd9a9f.c)(($$result, $$props, $$bindings, slots) => {
  let currentDestination = "Moon";
  $$result.css.add(css);
  return `<div id="${"destination"}" class="${"svelte-1azj695"}"><div class="${"content-container svelte-1azj695"}"><div class="${"heading svelte-1azj695"}">${(0, import_index_e3bd9a9f.v)(import_PageHeader_6296cf40.P, "PageHeader").$$render($$result, {
    stepNumber: "01",
    step: "Pick Your Destination"
  }, {}, {})}
			${(0, import_index_e3bd9a9f.e)(destinations, (destination) => {
    return `${currentDestination === destination.name ? `<img${(0, import_index_e3bd9a9f.b)("src", destination.images.png, 0)}${(0, import_index_e3bd9a9f.b)("alt", destination.name, 0)} class="${"planet-img svelte-1azj695"}">` : ``}`;
  })}</div>
		<div class="${"content svelte-1azj695"}"><nav aria-label="${"secondary"}" class="${"svelte-1azj695"}"><ul class="${"destination-nav svelte-1azj695"}">${(0, import_index_e3bd9a9f.e)(destinations, (destination) => {
    return `<li class="${[
      "fs-300 text-light uppercase svelte-1azj695",
      currentDestination === destination.name ? "active" : ""
    ].join(" ").trim()}">${(0, import_index_e3bd9a9f.d)(destination.name)}</li>`;
  })}</ul></nav>
			${(0, import_index_e3bd9a9f.e)(destinations, (destination) => {
    return `${currentDestination === destination.name ? `<h2 class="${"fs-800 svelte-1azj695"}">${(0, import_index_e3bd9a9f.d)(destination.name)}</h2>
					<p class="${"fs-400 text-light text svelte-1azj695"}">${(0, import_index_e3bd9a9f.d)(destination.description)}</p>` : ``}`;
  })}
			<hr class="${"line-break svelte-1azj695"}">
			<p class="${"uppercase ff-sans-cond text-light text-center subheading-2 svelte-1azj695"}">Avg. Distance</p>
			${(0, import_index_e3bd9a9f.e)(destinations, (destination) => {
    return `${currentDestination === destination.name ? `<p class="${"text-center uppercase distance subheading-1 svelte-1azj695"}">${(0, import_index_e3bd9a9f.d)(destination.distance)}</p>` : ``}`;
  })}
			<p class="${"uppercase ff-sans-cond text-light text-center subheading-2 svelte-1azj695"}">Est. Travel Time</p>
			${(0, import_index_e3bd9a9f.e)(destinations, (destination) => {
    return `${currentDestination === destination.name ? `<p class="${"text-center uppercase subheading-1"}">${(0, import_index_e3bd9a9f.d)(destination.travel)}</p>` : ``}`;
  })}</div></div>
</div>`;
});
