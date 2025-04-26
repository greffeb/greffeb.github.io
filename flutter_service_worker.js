'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "6226f5e5130398115e363aa5b1c0f2ed",
"assets/AssetManifest.bin.json": "aa055f238784232ca01cde4a58c02811",
"assets/AssetManifest.json": "302ea015eb9c86613641e947508aeea2",
"assets/assets/barreBlack.png": "75baf92c4b6c4a8236ca7d5e4fed8591",
"assets/assets/barreGrey.png": "ebc8891c8b0372ac7d57addbc536b6a6",
"assets/assets/barreWhite.png": "060df9c04c7cd84c1e29fe481221930e",
"assets/assets/blank.png": "8ee1da15844dfd7a53201ca2054ae0de",
"assets/assets/croixBlack.png": "32c2d734b5e57dbac7cdb44b9b6b3861",
"assets/assets/croixGrey.png": "4c452f4ecc5e58720ad8ac68fb27fc95",
"assets/assets/croixWhite.png": "165dab64bbcdd98ef5403383963667dc",
"assets/assets/dark-icon.webp": "fd512d7be2e3466cafd56e408ba17b94",
"assets/assets/diezeBlack.png": "c5d9ad8f5d2e69908faeec2952648017",
"assets/assets/diezeGrey.png": "0b705007093bb39610e0454f8b1abaf6",
"assets/assets/diezeWhite.png": "a8d6a4cd40334836298e9f45ceed6c38",
"assets/assets/griffeBlack.png": "58c06b5aee74967fe21c1ead6d6c0db2",
"assets/assets/griffeGrey.png": "ef25715666606c8f35e232e4fd567774",
"assets/assets/griffeWhite.png": "f696e1e2876e6d66446bd50c2f310eb6",
"assets/assets/ligth-icon.webp": "3e6662e06c3d6ca549e4fe691d7b559d",
"assets/assets/nils.gif": "e1d757cdee1ee08367e36604e0b41dfe",
"assets/assets/rondBlack.png": "f58c243d444a7be005397eaddd42ab23",
"assets/assets/rondGrey.png": "444e501cbe89930626d0bdcee571fbdf",
"assets/assets/rondWhite.png": "20c065a97e7254330c777e5ee0d40fc3",
"assets/assets/score.png": "6cbbe7af685d6fadba9a99a7c7827bb1",
"assets/assets/scoreWhite.png": "dd3f84b324e28a40161110fdab2795b8",
"assets/assets/titre.png": "3f9223645156b7c69b4fffbd718ba47f",
"assets/assets/titreWhite.png": "44d4144f5d9f1a0677b62aaa8c47a4d9",
"assets/assets/triangleBlack.png": "18e2f1ec4d71cd903cdd016d7d4abb5b",
"assets/assets/triangleGrey.png": "28f41062992dc1feb404d83748b1d1c8",
"assets/assets/triangleWhite.png": "c3121c7ba81fd25c185d4bad0982b1b3",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "ef6da4986fa46215439a5e22d343f55f",
"assets/NOTICES": "57f373e0ee36155955ee80f3d930aeb9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "d10ac4ee5ebe8c8fff90505150ba2a76",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "027b11f0d8e466cff764f2d1bdff9a44",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "bc01079cc36a3329bc763b3d5c39e9a5",
"icons/Icon-192.png": "ba033bd1d2cbf6046af4d22a2c89bdc0",
"icons/Icon-512.png": "6d9c82f393259a19f1313e2935ee9239",
"icons/Icon-maskable-192.png": "ba033bd1d2cbf6046af4d22a2c89bdc0",
"icons/Icon-maskable-512.png": "6d9c82f393259a19f1313e2935ee9239",
"index.html": "c859bce17fad1e96688138b6e328eb77",
"/": "c859bce17fad1e96688138b6e328eb77",
"main.dart.js": "056fc526d57b344162d0c32a9ab5885f",
"manifest.json": "b1dc03d2f9297d4c0a340124326c8ec3",
"version.json": "d511f8232c91b1ab1f0504f13ec21a9f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
