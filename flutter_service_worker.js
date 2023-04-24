'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "6c960b65164c72a084ae382d1ef2c9d3",
"assets/assets/icons/behance-alt.svg": "4aac6c7eec1a1c45f55b22d220c805cd",
"assets/assets/icons/brasao.svg": "cd8ef7929eba7da7777c9df92fe2a1a3",
"assets/assets/icons/elastic.png": "281ba36bf40e2edeb1db0c496fb1c06d",
"assets/assets/icons/elasticolors.png": "68519aaac0ff5649bd4756df2d946cea",
"assets/assets/icons/elasticsearchlogo.png": "8deee405dd2c9390f2d30c25b48e454b",
"assets/assets/icons/escuro.png": "382a4d2dd851da6e3a1aa108190cea54",
"assets/assets/icons/feather_dribbble.svg": "036d21c1af6a84887ac0e7d2cba7bc49",
"assets/assets/icons/feather_message-square.svg": "d9a365fe25bba4717a2daf099b6f0e6a",
"assets/assets/icons/feather_search.svg": "efa2781f73511666cc2f94c1dfa33276",
"assets/assets/icons/feather_share-2.svg": "c2fd36c84bc2f1f37aa86b84217efb14",
"assets/assets/icons/feather_thumbs-up.svg": "bd41f732a781c9ef65c5489e95f56d6d",
"assets/assets/icons/feather_twitter.svg": "ec3a6f9097d75c3078c22a19187657f0",
"assets/assets/icons/logo.svg": "876f970fd2b3cf08b75cb0c60efa19f0",
"assets/assets/icons/ufscbrasao.png": "de404b9843fd501a72c2950aa2c0f870",
"assets/assets/icons/ufscclaro.svg": "21ae755c2f6c40d9272d1f2697e6ba46",
"assets/assets/icons/usfc.svg": "4fa2499cdbcedc6ce75779bea326d1f1",
"assets/assets/images/0.png": "ab601ad49b697967d6e8b64c1e5fbb42",
"assets/assets/images/01-3-1024x774-min%2520-%2520Copia.png": "68386003aae79a3eea27c938148c2599",
"assets/assets/images/01-3-1024x774-min.jpg": "73d091a74eaa07f9c2b3202a1e280ce6",
"assets/assets/images/01-3-1024x774-min.png": "338322c241a48cb011547f46b4c3feae",
"assets/assets/images/1%2520-%2520Copia.png": "b2091710074fa37676eeb059104fa147",
"assets/assets/images/1.png": "16497572d5b41e5b65261b5de2a3d91d",
"assets/assets/images/2%2520-%2520Copia%2520-%2520Copia.png": "9969a2e20a63bfccd309515fd3716c93",
"assets/assets/images/2%2520-%2520Copia.png": "9969a2e20a63bfccd309515fd3716c93",
"assets/assets/images/2.png": "dccd7cbac05c590793ca467bed3af354",
"assets/assets/images/elastic.webp": "9df325ee9ed1612a73315bcc7d7350ec",
"assets/assets/images/elasticsearch-logo.png": "973a5e33f5a02bb6b04b33f349671b6d",
"assets/assets/images/marcos.png": "3639a258864cf9c507612c98554ef7ac",
"assets/assets/images/miriam.png": "bb90c25bd8a9fa4cae54b90647b4aad3",
"assets/assets/images/original.png": "b2091710074fa37676eeb059104fa147",
"assets/assets/images/pupo.png": "c627309275f90cdcf9d434806b511e11",
"assets/assets/images/vinicius.png": "f74c69eda4ecfbe98f0abdf15f845eb5",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "deaaf691bdc88e8d126a106a5f3d4ddf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b1c848acde17f488cb8eda1c1305597d",
"/": "b1c848acde17f488cb8eda1c1305597d",
"main.dart.js": "131839f02922ef6a28b33481636d8c92",
"manifest.json": "3cd6729972530a1be3659f29dc3fafab",
"version.json": "849766c57b59c74a2360bfec35209ad1"
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
