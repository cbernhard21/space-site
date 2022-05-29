const { init } = require('../serverless.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["assets/crew/background-crew-desktop.jpg","assets/crew/background-crew-mobile.jpg","assets/crew/background-crew-tablet.jpg","assets/crew/image-anousheh-ansari.png","assets/crew/image-anousheh-ansari.webp","assets/crew/image-douglas-hurley.png","assets/crew/image-douglas-hurley.webp","assets/crew/image-mark-shuttleworth.png","assets/crew/image-mark-shuttleworth.webp","assets/crew/image-victor-glover.png","assets/crew/image-victor-glover.webp","assets/destination/background-destination-desktop.jpg","assets/destination/background-destination-mobile.jpg","assets/destination/background-destination-tablet.jpg","assets/destination/image-europa.png","assets/destination/image-europa.webp","assets/destination/image-mars.png","assets/destination/image-mars.webp","assets/destination/image-moon.png","assets/destination/image-moon.webp","assets/destination/image-titan.png","assets/destination/image-titan.webp","assets/home/background-home-desktop.jpg","assets/home/background-home-mobile.jpg","assets/home/background-home-tablet.jpg","assets/shared/icon-close.svg","assets/shared/icon-hamburger.svg","assets/shared/logo.svg","assets/technology/background-technology-desktop.jpg","assets/technology/background-technology-mobile.jpg","assets/technology/background-technology-tablet.jpg","assets/technology/image-launch-vehicle-landscape.jpg","assets/technology/image-launch-vehicle-portrait.jpg","assets/technology/image-space-capsule-landscape.jpg","assets/technology/image-space-capsule-portrait.jpg","assets/technology/image-spaceport-landscape.jpg","assets/technology/image-spaceport-portrait.jpg","favicon-1.png","favicon.png"]),
	mimeTypes: {".jpg":"image/jpeg",".png":"image/png",".webp":"image/webp",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"start-582f6ae9.js","js":["start-582f6ae9.js","chunks/index-7ee1187b.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js'))
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "crew",
				pattern: /^\/crew\/?$/,
				names: [],
				types: [],
				path: "/crew",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "destination",
				pattern: /^\/destination\/?$/,
				names: [],
				types: [],
				path: "/destination",
				shadow: null,
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				id: "technology",
				pattern: /^\/technology\/?$/,
				names: [],
				types: [],
				path: "/technology",
				shadow: null,
				a: [0,5],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
