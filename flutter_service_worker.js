'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "e2b74be527679d4e5678674bf51b9680",
".git/config": "c1674a53f8f9155459c0f4207ef0595d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "3a12a73007addfaa4b8ecce44a42cb47",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "580aac95d5c74be3adcd249f4080dc82",
".git/logs/refs/heads/main": "580aac95d5c74be3adcd249f4080dc82",
".git/logs/refs/remotes/origin/HEAD": "ec699e7b0d705bad0e3cc7f799a02f9d",
".git/logs/refs/remotes/origin/main": "77f124b588edc246715e9e478a1edb1b",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/05/7c405e9464b651041131c141ae70883a2be978": "a3d22299584ee884aa54bf01f255235b",
".git/objects/09/90eb31ac26c41053f09f0f8062f82a0bd7ade1": "b8d19fb8bdfc21ead6746537eb116651",
".git/objects/0a/1a87fc056d5d3a4a3906513dcf7cc8389a2f00": "a9fbcdbeace60f4075d37cddcfa21f30",
".git/objects/0a/54f21c487cae9e9b7bb864fa3f2fc044b19e1f": "095eeea03fa872a6e88fa53f0f4a1ad3",
".git/objects/0f/9d7c17705385aa91a3bf3e8b4e5b6676b7aa05": "99081e6b6472098a154df2cb08e17911",
".git/objects/13/bf6e0b2bedf095160ae2ceef3f1454b29a525a": "f8ae9fdd311bf563b67f5669a7e6875d",
".git/objects/1c/c9b22c586bc7467e9946dd8ea6cb67bf2cdcf7": "507f3d0d9a051887db795d578c16ee30",
".git/objects/1e/06bb8f1c5982e1e1f9bc6126edf998a46b77b6": "ed46c726ad39c7f616065b5791f28e16",
".git/objects/1f/41504117db5013a6d61158f20e4c4fbaa6b90b": "465b7d8aaa1daf0ccd7df2dcb647dd8f",
".git/objects/20/e4da8fd6bf21d064a17fbc1bd8a0767279e3a1": "747df34fc8ec59307c9b777487d27926",
".git/objects/21/95870dc8b824bb1078013199e9a9e5432efa27": "e3c76e4c92ce68911641c2bee98505e6",
".git/objects/25/8720cef9c44e25a22164346175b0e21bce7925": "5f60902e953036ab6dfe06d8df97786b",
".git/objects/27/1d9b7a940036b4da754a89d5b8610eefb84c3b": "35ba16bd4d2be503f49d0cc3741ae0eb",
".git/objects/2c/866b484a042f11e73f41c9ad3942d47380d8f9": "876e9c44358d2c19d3093d11961bf9be",
".git/objects/31/7591a934f7111d27b3227b465678f00f6dee1f": "b71ca7abe084692ca560fdcadd0e2cd7",
".git/objects/33/31d9290f04df89cea3fb794306a371fcca1cd9": "e54527b2478950463abbc6b22442144e",
".git/objects/35/5805e68f43d34a7808c6de6df8985c1a5bd867": "913f20c297a38ec5c95798666fcaa9f4",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/38/08a3cb5e4d2c3bfdea2c1f120a356cb52470ee": "37b2bec4075f5c6e18499f3297ddafea",
".git/objects/3c/9ad7d245fd233dcb9d1052876963810712bd16": "27194e3b9fa5d94d2dbe9b925c59ff06",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/40/277bb3aa526c861057d9d9368d73567e69deed": "a27c8b8a557783f2f13af2ccbd061ad4",
".git/objects/45/e899cbdd250a1c3eb68238753be6fa5b096c2a": "01acb34ba998f8647b4a4d0a917a6be5",
".git/objects/4a/c209cdd0bfd96395082f2707a83b7ae3cd0b62": "48d529e1a9afe6bd5909fe8a00eee18f",
".git/objects/4a/ded0cf0c62295d758b122e83344f0544db4529": "1ae7cbddfd09b87dcc774d5b3cbc23f8",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/52/a6fa3ec1a64978a915c11eaf73f30c968abfad": "fe25393e9d290df416826ff0008c22a2",
".git/objects/53/780b6c9f853675060bb44453ecb6a098d9c73e": "ab262df99209c750d5fc21c664230dc4",
".git/objects/57/215d6458a6e644244ed654023a4a0249517b1f": "1b8273489c14080363daab3a3a6f6b19",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/64/5116c20530a7bd227658a3c51e004a3f0aefab": "f10b5403684ce7848d8165b3d1d5bbbe",
".git/objects/6a/40afd7fd40379bc62ba5a9f3c2591fa0115eb2": "7cf48813d6b68f1033e4d6e8e693866c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/73/572084da2b13439f0091d04c28251ee66d8491": "2d525130accacbab73410bd73272b7fa",
".git/objects/82/4aaf26d40cbdc69b9739a4d15f489b4aa08e76": "cf6128b0ffc863860663dfb99a4b070a",
".git/objects/8a/3d7934a91460671aded537c054e0a8c414ace8": "efbe4479cef6ee91afd025adfd5f40a2",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8e/79e5d2cc6ecc6f6f37b32d57d4d53a955d196c": "6820e3640d742471ded7b48d00049694",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/91/4fcb273aeace10732d38c7f4a349242b060fa6": "9526543fc7bb5c4363c91299763f35da",
".git/objects/93/be7fd9b9dcdd8564dafd7040a0c8c8f68d4080": "b27ff257c793a735fc818ff37f392ff9",
".git/objects/95/93cd1c93793eec1ea7587a90cd00f1fe7e6e10": "e678e52e59c47a2112b3d0afdaef9aad",
".git/objects/a2/5fb1dd1bde55b37cdb0c7057adef2a67aa8f6c": "8b96e21a42f47665a88d26f8ec54d628",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/ac/7a92d28a495a35611b7199dfbf5a5e11d3d216": "bbeb065ed20bb756e04eab2a80d8e71a",
".git/objects/b2/53594212cf2562dfe72e47b7585de106b3e419": "62ea2529cfbf04b881869b08fe5f7b60",
".git/objects/b8/782bde3e002f7733335473b4a4dbba43b58337": "81c95dc8b034151375720babc6f72a66",
".git/objects/b8/8b1133f1f2f986706edafaebcda1c75309a481": "bfa854aa666e86e819bad3184a2522f7",
".git/objects/b8/e567f760b68f9b324092ff94bcb5a98b24f233": "433a62fc0ff53d4b9b6296fe331a9d74",
".git/objects/ba/3f2863627df4cfad5ee4ea46e100748f3bc87d": "5c2b518f154ddc893b5fc8117f6b8cca",
".git/objects/bc/087f25bfd1db438e5ddccbbc17e8674f0fb38b": "491fc46f2198090471c1cbe915bdebf5",
".git/objects/d0/440c46c03bb2711f1ddf83229ea10293af503b": "837323f241a46e6d60f2af4a6d8af0b1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/b7a1a591c03e4484180f4379f72740c5d67aee": "e3793b30f5cbdc7c15e6418a5d1e470b",
".git/objects/dd/2526d07e8a0ef748e0f74bd479299585ea62a2": "48d8b99232d6573b0ef06fcc2f373791",
".git/objects/dd/5edb1a7e46855a8138b7028913a7aed7e07a26": "15779bbfbf84adb4b688dcd6964caa7f",
".git/objects/e3/16e7658e29db4e302fad1a2ba0c636cee1c158": "fccf3ea823b3d29ee0acf880c5150c4d",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/edd3f6a44880599e9f88fca432e515f8d54ad0": "e640ff55d87b25ce0b1b65931fdc06a1",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/4eaa757f670b9046c9d7a1ef46b124c9e58ebb": "ef428a2628ab1b58d9656c8909833c99",
".git/objects/fb/59bca8f79b824afea8df9a94c511a3cc329eb6": "77bfb9a7f78920eaabf4b378c778408d",
".git/objects/fc/5420844c33d38e14b7fc37a2dc677d8d5a712c": "cf907c74079dfea03260a8a12698846e",
".git/objects/fc/e2ead9b46c100720562c60d621f7c7431d6edc": "7c5e16ade2cc82ea02086821f4ad9945",
".git/objects/fd/1a6dcd594e191b35f9b5b750a6844f2203d8df": "cd50decaef5bbde0773d3df1f7b08225",
".git/objects/fe/9ae137be88d3267d2cb7a1a94cae7af758601c": "39646bd1875de890487811f1ea16b57f",
".git/objects/pack/pack-28071354d3bcf0d9b1ce43dfb1f07e96ac6b0967.idx": "653c20f5071d2a3e98a2737bb5eda830",
".git/objects/pack/pack-28071354d3bcf0d9b1ce43dfb1f07e96ac6b0967.pack": "a6c565c6f7426b5bd6746b6eef529d7e",
".git/packed-refs": "1663e839393c373ea47bddd894df6239",
".git/refs/heads/main": "16efe0e2542350dd76036a2a8c8aeac9",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "16efe0e2542350dd76036a2a8c8aeac9",
"assets/AssetManifest.bin": "6226f5e5130398115e363aa5b1c0f2ed",
"assets/AssetManifest.bin.json": "aa055f238784232ca01cde4a58c02811",
"assets/AssetManifest.json": "302ea015eb9c86613641e947508aeea2",
"assets/assets/barreBlack.png": "75baf92c4b6c4a8236ca7d5e4fed8591",
"assets/assets/barreGrey.png": "ebc8891c8b0372ac7d57addbc536b6a6",
"assets/assets/barreWhite.png": "e4605242a3c71c4d02c182d8d7e3aee9",
"assets/assets/blank.png": "8ee1da15844dfd7a53201ca2054ae0de",
"assets/assets/croixBlack.png": "32c2d734b5e57dbac7cdb44b9b6b3861",
"assets/assets/croixGrey.png": "4c452f4ecc5e58720ad8ac68fb27fc95",
"assets/assets/croixWhite.png": "25b6579c61d05d7835912f9582aea7d3",
"assets/assets/dark-icon.webp": "fd512d7be2e3466cafd56e408ba17b94",
"assets/assets/diezeBlack.png": "c5d9ad8f5d2e69908faeec2952648017",
"assets/assets/diezeGrey.png": "0b705007093bb39610e0454f8b1abaf6",
"assets/assets/diezeWhite.png": "f155f5f9089e3abe01c02f016cdee74f",
"assets/assets/griffeBlack.png": "58c06b5aee74967fe21c1ead6d6c0db2",
"assets/assets/griffeGrey.png": "ef25715666606c8f35e232e4fd567774",
"assets/assets/griffeWhite.png": "154e3e1b45ff6a047c7ca914d3d35496",
"assets/assets/ligth-icon.webp": "3e6662e06c3d6ca549e4fe691d7b559d",
"assets/assets/nils.gif": "e1d757cdee1ee08367e36604e0b41dfe",
"assets/assets/rondBlack.png": "f58c243d444a7be005397eaddd42ab23",
"assets/assets/rondGrey.png": "444e501cbe89930626d0bdcee571fbdf",
"assets/assets/rondWhite.png": "7454749f579d51a11f64b3629a63d2fc",
"assets/assets/score.png": "6cbbe7af685d6fadba9a99a7c7827bb1",
"assets/assets/scoreWhite.png": "475bbeaf949298009f8edcdaeceb6497",
"assets/assets/titre.png": "3f9223645156b7c69b4fffbd718ba47f",
"assets/assets/titreWhite.png": "6ac088c0e9120195d7a991c35f1bc287",
"assets/assets/triangleBlack.png": "18e2f1ec4d71cd903cdd016d7d4abb5b",
"assets/assets/triangleGrey.png": "28f41062992dc1feb404d83748b1d1c8",
"assets/assets/triangleWhite.png": "5a1b1c78f8237b1ce5480aa21193503b",
"assets/FontManifest.json": "1b1e7812d9eb9f666db8444d7dde1b20",
"assets/fonts/MaterialIcons-Regular.otf": "1da9ddf5138f0dd128575892dd1c995b",
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
"flutter_bootstrap.js": "4bfa0083186bed8f994fe7ac1521d0d2",
"icons/Icon-192.png": "ba033bd1d2cbf6046af4d22a2c89bdc0",
"icons/Icon-512.png": "6d9c82f393259a19f1313e2935ee9239",
"icons/Icon-maskable-192.png": "ba033bd1d2cbf6046af4d22a2c89bdc0",
"icons/Icon-maskable-512.png": "6d9c82f393259a19f1313e2935ee9239",
"index.html": "28146f0b98edc3cdfa60a35d3af1484c",
"/": "28146f0b98edc3cdfa60a35d3af1484c",
"main.dart.js": "a14a70f58e6f069eb4f8314e090e6183",
"manifest.json": "b1dc03d2f9297d4c0a340124326c8ec3",
"README.md": "f458c30fc40ed37d08b7be7b2480e388",
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
