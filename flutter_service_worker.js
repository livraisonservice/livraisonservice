'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "db196e3d8c0c21eaae2f5a1a006e9ed5",
"index.html": "b09f91471e018cc63970794624b319a9",
"/": "b09f91471e018cc63970794624b319a9",
"main.dart.js": "78475962aa157fd2e4407753a690c622",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "e637f5d54b3a8c40d35de9f2a7fc3df3",
"icons/Icon-192.png": "81e0bd215c1cde1e23e26fa68d261dd9",
"icons/Icon-maskable-192.png": "81e0bd215c1cde1e23e26fa68d261dd9",
"icons/Icon-maskable-512.png": "b3d22d21b208d99bfb304e5302bfba13",
"icons/Icon-512.png": "b3d22d21b208d99bfb304e5302bfba13",
"manifest.json": "a5ffdcf1223b957fc23b013699f02bf5",
".git/config": "e60c82d137669ec64eab94136a376897",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/59/b635a051d320a4787fc760ca1faaefbb501abd": "bc3dd0cedd0b9b83acaabc4acb187d0a",
".git/objects/92/683cdcfe4b31fd44f0d323d42b2e6d6f7a119a": "fc85ec77374234d871fb94cb5fc26108",
".git/objects/66/c160c57a78b0bb757ba98eb2a526c575c620d4": "66a97364317af37cabfd73058848f21a",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/05/8a55c164041cfa3f72627911acfda35ef6d229": "5f576731036d507c9cec86bdd062f0dd",
".git/objects/05/db92e56b492f00c1e8241e39ff337e1c6fff6c": "a4963b848a87ab3d37b24470d7825a04",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/ad/63af7c29db924b29bb5777900b6047542ba1e8": "e4c3d154276c54fa8fe63fc3a56a56a2",
".git/objects/b4/3558bafeb679b1e8bf16093cea10842d06b338": "e7f49ea6d784f62bdc163f9a7e163e7b",
".git/objects/bc/8783efa84125b80d3e4b08a4b8b7adefeb0b59": "69daf565839dbfdb528cd0e621c888dc",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ee/86add9da4e761176517a2c0913a665c8b3f087": "892e93976716fddc2cec115ba0f3c905",
".git/objects/c9/883a30e11c7ac40e731f0db87e5b76f2615b75": "541b5efd4d8ed5568ef66d06dce24d10",
".git/objects/fc/9719c125cf37fc5422b05f907c831e0079cb04": "c2a5ead6e61d9b011a5497d952be7861",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7c/26a57d48e91dd0573b2a8c6d8347bb04361df4": "aafdfdf72066c41822edd266416ef61b",
".git/objects/4c/e8208bee01a0e8e455839ee31d71246b986da5": "7166f1715c13e4133a1a961dee15507a",
".git/objects/81/10c8470ebd16a652275a2fe4963d8fc63b6a65": "b0119c79b0882e614fa3f34a4d080836",
".git/objects/9a/bb7ffd7edf0daf35e90af5ae6490cb6ade50d6": "4c5c05511897f1cb0fb432c69c58061b",
".git/objects/5c/92ecd25ef113da20fb5a3092d9d5b653095a9b": "4789222c7304e6a05285d4f2a03c51c8",
".git/objects/5e/ddd5471ad36abd12e05c139e506b69d3d6d57d": "5eefbb2175dcaf0e0595449454f39def",
".git/objects/5b/701558aeb91581be8e881869633ebec15c0749": "24188352bed02bfeda469670643e5b18",
".git/objects/06/2a733b2c81bae11217a54bb28648f0ba56e17c": "9371bc5884efee5526487bd7919b3513",
".git/objects/0a/9face459e9b9b89969a08720483236d01a3e0d": "61d925d2925031f10d28ba5c4b0a5177",
".git/objects/90/66fe7ce6492ee2b1514021e94f6696c535e89a": "77818e2124d3bddaceeb2c3c41964de0",
".git/objects/dd/403d6c525a5d89b6f79b2142858c1b388bc41c": "4c550af02b57e3f55e53c2b95d9bfc6c",
".git/objects/db/1c57516b00a30afec6744b27a8a37c11de3afe": "87cd680e4bd611ed740624812927678a",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c3/40c825d7e167c5e3eeb0a33bfa3b947a66db16": "589eb86caf9c2545f9f5895eb21d3116",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ff/4977a9047309e4ed8f6988e1c16232f789df91": "38c9dac2cbaccf8bdea00a261b150430",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/98baa32e4d5ce67a5cadc6bdf9ef2c2ead1889": "d0a20810d4fa7f8e5f23093fcac3f773",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/83/b622bd87c89e4c8b7cee133719e3d7ff8c4831": "8201851612804879780935d64bda486f",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/fdcf99dcee7df5538bef8ce14f0dfdd45e7aa7": "e634ba9f22201997baf0de7fecf63f67",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/7a/2c172672082e5186b54e6cda00b8187213ee1f": "52cc336ec7a6344bdfd716cb595bbbb6",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1c39f9534669ae6d281ec17bef4b9ccb",
".git/logs/refs/heads/master": "1c39f9534669ae6d281ec17bef4b9ccb",
".git/logs/refs/remotes/origin/master": "00c45cc2823e98632224d1d9a21bb8b3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "fbf05c100761836024d267800abaa034",
".git/refs/remotes/origin/master": "fbf05c100761836024d267800abaa034",
".git/index": "346ea123abb74ce9db0369aaa09d3852",
".git/COMMIT_EDITMSG": "78d73a707b824b10f0405b0d92338b18",
"assets/images/deliverylogo.png": "38db968bebfc6f30054c2ee352d61d5f",
"assets/AssetManifest.json": "89b2b35aa55e290a442a2f43cc6da266",
"assets/NOTICES": "667dda62b7b1402cc435d07998421a3a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
