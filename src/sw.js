importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/3.0.0-beta.0/workbox-sw.js'
);

workbox.setConfig({
    debug: true
});

workbox.routing.registerNavigationRoute('/index.html');

workbox.precaching.precacheAndRoute([
    { url: '/index.html', revision: '1' },
]);

//scripts
workbox.routing.registerRoute(
    new RegExp('.*.js'),
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'js-cache'
    })
);

//css
workbox.routing.registerRoute(
    /.*\.css/,
    workbox.strategies.staleWhileRevalidate({
        cacheName: 'css-cache'
    })
);

//images
workbox.routing.registerRoute(
    /.*\.(?:png|jpg|jpeg|svg|gif)/,
    // Use the cache if it's available
    workbox.strategies.cacheFirst({
        cacheName: 'image-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 30,
                // Cache for a maximum of a week
                maxAgeSeconds: 7 * 24 * 60 * 60
            })
        ]
    })
);

//google fonts
workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    workbox.strategies.cacheFirst({
        cacheName: 'fonts-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 30
            })
        ]
    })
);

//local fonts
workbox.routing.registerRoute(
    /.*\.(?:ttf|eot|woff|woff2)/,
    workbox.strategies.cacheFirst({
        // Use a custom cache name
        cacheName: 'fonts-cache',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 30
            })
        ]
    })
);

workbox.routing.registerRoute(
    new RegExp('https://node-hnapi.herokuapp.com/*'),
    workbox.strategies.networkFirst({
        cacheName: 'news-api',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 50,
                maxAgeSeconds: 30 * 60 // 30 minutes (same age as the api itself uses)
            }),
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200]
            })
        ]
    })
);
