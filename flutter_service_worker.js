'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "aa7b900c20a9ea09b3e717bc31cc71ab",
"assets/assets/barreBlack.png": "75baf92c4b6c4a8236ca7d5e4fed8591",
"assets/assets/barreGrey.png": "ebc8891c8b0372ac7d57addbc536b6a6",
"assets/assets/blank.png": "8ee1da15844dfd7a53201ca2054ae0de",
"assets/assets/croixBlack.png": "32c2d734b5e57dbac7cdb44b9b6b3861",
"assets/assets/croixGrey.png": "4c452f4ecc5e58720ad8ac68fb27fc95",
"assets/assets/dark-icon.webp": "fd512d7be2e3466cafd56e408ba17b94",
"assets/assets/diezeBlack.png": "c5d9ad8f5d2e69908faeec2952648017",
"assets/assets/diezeGrey.png": "0b705007093bb39610e0454f8b1abaf6",
"assets/assets/griffeBlack.png": "58c06b5aee74967fe21c1ead6d6c0db2",
"assets/assets/griffeGrey.png": "ef25715666606c8f35e232e4fd567774",
"assets/assets/ligth-icon.webp": "3e6662e06c3d6ca549e4fe691d7b559d",
"assets/assets/nils.gif": "1728d1845b42a39db9e341016233df54",
"assets/assets/rondBlack.png": "f58c243d444a7be005397eaddd42ab23",
"assets/assets/rondGrey.png": "444e501cbe89930626d0bdcee571fbdf",
"assets/assets/score.png": "6cbbe7af685d6fadba9a99a7c7827bb1",
"assets/assets/titre.png": "3f9223645156b7c69b4fffbd718ba47f",
"assets/assets/triangleBlack.png": "18e2f1ec4d71cd903cdd016d7d4abb5b",
"assets/assets/triangleGrey.png": "28f41062992dc1feb404d83748b1d1c8",
"assets/FontManifest.json": "cf3c681641169319e61b61bd0277378f",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "e907e4e55d85f2146ad9348ef8131f4e",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "027b11f0d8e466cff764f2d1bdff9a44",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ba033bd1d2cbf6046af4d22a2c89bdc0",
"icons/Icon-512.png": "6d9c82f393259a19f1313e2935ee9239",
"icons/Icon-maskable-192.png": "ba033bd1d2cbf6046af4d22a2c89bdc0",
"icons/Icon-maskable-512.png": "6d9c82f393259a19f1313e2935ee9239",
"index.html": "0359c8c0408f86e36eb3b951276a2ac7",
"/": "0359c8c0408f86e36eb3b951276a2ac7",
"main.dart.js": "8623fd4a95b25e4ddcbe9eeb3175fd44",
"manifest.json": "6ee9a1e88394dfb5e97debe15cc3b6ca",
"version.json": "fa83b912c3d70a7567e3be98264c1f77"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
