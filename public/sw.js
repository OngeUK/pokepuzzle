importScripts(
	"https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
);

const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst } = workbox.strategies;
const { skipWaiting, clientsClaim } = workbox.core;

workbox.core.skipWaiting();
workbox.core.clientsClaim();

// HTML cache, always go to the network first (to ensure it's the latest content)
registerRoute(
	({ request }) => request.destination === "document",
	new NetworkFirst({
		cacheName: "html-cache",
		cacheExpiration: {
			maxEntries: 1,
		},
	})
);

// JS cache, go to the cache first only use network if no matching file is cached
registerRoute(
	({ request }) => request.destination === "script",
	new CacheFirst({
		cacheName: "js-cache",
		cacheExpiration: {
			maxEntries: 5,
		},
	})
);

// JS cache, go to the cache first only use network if no matching file is cached
registerRoute(
	({ request }) => request.destination === "style",
	new CacheFirst({
		cacheName: "css-cache",
		cacheExpiration: {
			maxEntries: 1,
		},
	})
);

// Image cache, go to the cache first only use network if no matching file is cached
registerRoute(
	({ request }) => request.destination === "image",
	new CacheFirst({
		cacheName: "image-cache",
		cacheExpiration: {
			maxEntries: 30,
		},
	})
);

// Font cache, go to the cache first only use network if no matching file is cached
registerRoute(
	({ request }) => request.destination === "font",
	new CacheFirst({
		cacheName: "font-cache",
		cacheExpiration: {
			maxEntries: 1,
		},
	})
);
