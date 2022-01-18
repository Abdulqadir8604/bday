'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "e6dce159e5096bfa26f3c536c700c726",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b46c2e06f0b94cd6ec0cb61039203b4a",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "b26387a35685face2f6be0009e2d9f21",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4962536b0eb8de94c66e588acd17c782",
".git/logs/refs/heads/main": "f241379ce2ffc92fed4207005b4c9ec8",
".git/logs/refs/remotes/origin/main": "7490dc8892819c0f2d2c8e0bd0d3530f",
".git/objects/05/1869fce1be3a2a46c24c4b4fa1c011b8f67714": "ee34bc34b1a8edf0cf476c2b3c020e44",
".git/objects/09/c80844ced5cf5f793f10371efa37a7bdf9f648": "aecd544adedac5b1ce8d7f46f1f7b903",
".git/objects/0a/200b44b3f7d03430ddd04cff9099f148b28e94": "698d54368ef6fc5b4b0ab71a33477726",
".git/objects/0f/fe00b92b2e2d21c1f33024760f685cbb7ffdb8": "6655e717f185770489b36816ed0d52de",
".git/objects/1b/e6dcd76ee48ccae85a4176a697db48801611bc": "7f169ad679925c0f2d102da306da2320",
".git/objects/1c/8f5e910bfb1a4a2871eeedc6eae01ca25e7ce1": "7d52f9ae3b3fac811829018aea2c668f",
".git/objects/23/8cbfdabdb886d22a78a8eddc507231c0d8464e": "2faf35f46b62d7e61ed5303672951e8f",
".git/objects/24/05328b3e1a0c3c3cb50e6610bff0b3915bb3c3": "b21b22661b32ad9ab9daeca0973aa1cf",
".git/objects/2a/bf03542c17e6f7a7806a226c3be732b51c5a40": "4593012a42df8795cd0ae089a5b7aaaf",
".git/objects/32/14bef8ecfbf4cf4ec5ad07b840626e5900ede2": "35a8fe48907015b3e85ad1fc0e33c703",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/f6f196bef2be7a3223fb3afe65024f13bab4a4": "783c12cf163c003555df20c27b6f1bc9",
".git/objects/35/acda2fa1196aad98c2adf4378a7611dd713aa3": "b485406370fdb56248ec4e5fc074fb65",
".git/objects/35/c9d326836068337cb23ec27e8f5ae04ec524e7": "a021712cc451613c227dae5cfa27fe0e",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/3b/8929d736b05b43d4cc9c4c0705391ba8f16ffc": "e0e8f852d71337476e79a9455ef35bfc",
".git/objects/49/df58b4aa6c553f52c8e55930fcab6bbaffebe3": "2eba46629d78a34ca08a7082a04c1dd0",
".git/objects/58/4d4a7e10cec82a42e3455c7ce5d48f574045eb": "f963955b80a7bec97cef9c35fdb122d5",
".git/objects/5a/be5eab374f042e85bced3747d7fbf4f8ddfce5": "d5d7bea974d5fbdfab19bedc4b292bcd",
".git/objects/5d/4d4e752d208c31b88d62a368127c8ac177c3db": "62b56a40740eb8f3f05004573452b81c",
".git/objects/5d/7abf19d8bfeda3da0b37c3d78aef753e8db1a9": "cacbc30e4fe90c54f8048a0fad32d31d",
".git/objects/5f/72e9127ffaae2a500cd9d950067f46c21b277c": "9334d3373cb9fc449377becf4cba5477",
".git/objects/67/bd84202ad5b2e307d3b6fac1731c2a5d963e0b": "aa161ace139f434c81be219b6f6205e5",
".git/objects/68/68f7bb64ba71b131690286ddc82aa0f542293e": "b6aeab417f5d5ef28ea070a09b61c7e0",
".git/objects/6c/ce217ddc2efe3411dc9fa34e294e48e4cdf4f5": "8a6cc32e7f23f25e611213b06bb38448",
".git/objects/6d/7952ce8309e66b0f3c8d76b090f5e08185735a": "b5d0339acc3338a99f779709382b08e1",
".git/objects/6e/cb68683477ecc5aed38ec3fc8910d9bb66276c": "8081799c6f0d89b405c8cca2b18cd6da",
".git/objects/6f/0db8cd2297eb2adba8a924562b51114d85d80a": "70a62c6328afad75fcc4d3f3b4b2c4ba",
".git/objects/6f/3087b0a8d9e36e119889389f6ea4a3b4ed89af": "81d24a00fd29c0cf65113f850406aa8c",
".git/objects/6f/b7219c52644d38ec7884af75ba2e1f7c924e53": "6ea5577ae403fffe6d8274942d290923",
".git/objects/70/15564ad166a3e9d88c82f17829f0cc01ebe29a": "b0b4eb8e40c5eaa3b07c9dcc175a4ab8",
".git/objects/71/a5dcad0b9113b9c4bccbdedc4ad92751b7d4c9": "be4d79a099eb894f40093f5ddd641c32",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/ce3282a4f7824b249d9e568819d98bd2fa3da6": "8c71b613b9912dfd1fdf473a52e99214",
".git/objects/87/5b64698d5992310f9b8410d70025ac09feb95b": "c0b8446026143c4ade6b46871a13f515",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/a75f342274a40170b4e7b3ca57f1a2b83ca1f6": "d9c04d980e620fbfeef04524c3a25ad9",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/94/8f0a5d26e899539e7821aa5a500932f76ba582": "e9093d046b81c96e5fd46a48a0b68b11",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/09313d5fb20765dff1d8f41dbd72c558097611": "ce77a88cc2b115d907f98afb245fa5f6",
".git/objects/a8/2b3d0914413c045dfdf053dc37822a8ad81877": "6b903d3631d3c6a33ca7e34502631480",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/af/0d048fa064305214c247a418deae284fdfa881": "8378a44757a66c1d7f73d7334ceeb6b6",
".git/objects/b3/b03c0a49c8ccc089d036e32e44098198a98121": "63cefc22a87de746c0bc5f87a2bbaf32",
".git/objects/b6/2e95416e8e9b1768d36462be491e3f67ff1507": "eb132c5e16fa64cf08bb58e83cf2d819",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/46fabf7701d4319c5e2725f1acbe41bfb08341": "7c60a383bb2f97203355a3d35f51646e",
".git/objects/b8/8ca1eec2780d69f3764e815687577ef5effb28": "f65750911d6381f5e431f4abf088593f",
".git/objects/b8/df3e6b27f2c8ca4ec52759fba6b866ac42cf0d": "db0898c51aa2214c4211254f14cc05cf",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c5/ff8497678d07d20e9ea6dbd1d9b735f4b7afe3": "fc294c94242e72d7d60875496cc4d519",
".git/objects/c8/df92b853992397794e13e57140bbab28367e15": "4e587a7e4ba7acfc9ac1796c5c862e78",
".git/objects/ce/c47834790d6ab66f9a50f4254c74376cc76517": "204ea4d3300e8092c0be49834903f397",
".git/objects/cf/e2d9f8fd1f1602ac2944104150deb151250322": "138cd42be5f7f5389f94211921b22a97",
".git/objects/d4/94289c21cae7790c77498069b6315c32798e82": "0a91da82bf4a05a2507d3edc5e01255b",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/0cd5f58dd23d03391b7d91f0c4926d2b0c003c": "22a0ddedfa6f53448e1d5b0cc057b464",
".git/objects/da/8066ec29b8fa6305408e4b2d51a90e80dfa11c": "3297573d39160b79bfb36bc502038b41",
".git/objects/df/e0770424b2a19faf507a501ebfc23be8f54e7b": "76f8baefc49c326b504db7bf751c967d",
".git/objects/e3/e74588c8e7f52eb3d9da22400a69d33fa64eac": "bbdb5635d2a54fedd9b1475288727578",
".git/objects/e4/ae46c6286b2d6c6676b0c3192fc92876778498": "c1fb9fd9132eb732a1d95b1d7a283648",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/61f2c7b05a19eac35a56f927e1dcee28a35fb1": "2d37dd32ae625a70609e25a6e793f0db",
".git/objects/f5/eaf7eb1511bd9532cebfae70e47524663de109": "50b1229f40423533da8629dc65d38889",
".git/objects/fa/659b8162422f3804f264f2439da2934167da89": "aeafaba808af4db98c5d7326f6d5abee",
".git/objects/fc/963dfe2292c4e241afb5950e063414d544c093": "8cd8693ced3c797431323a7707d38029",
".git/objects/fe/2244d7e949853dae8265a702b8d9a0ac1ab603": "7136d6e2df08f89ec67038e0ee67e503",
".git/ORIG_HEAD": "09d1670e2dd40d4f263cf0cf93091ce9",
".git/refs/heads/main": "9a78e5d8ddcb1fbec4c51fa6abdba8fb",
".git/refs/remotes/origin/main": "9a78e5d8ddcb1fbec4c51fa6abdba8fb",
"assets/AssetManifest.json": "0c7407fafad415de9ac9166b5d5466d8",
"assets/assets/fonts/OleoScript-Regular.ttf": "da6f215b4cb4c69834928c7e26bdb0c4",
"assets/assets/images/image1.jpg": "55ab6f8b76aa8892f7b62d12314ee5d8",
"assets/assets/images/image10.jpg": "fa62e6af302ee12099788f6c87390899",
"assets/assets/images/image11.jpg": "52b950c25a1a36bbd4e20ab0e56cce0f",
"assets/assets/images/image12.jpg": "1694e3b4e3f5b0f45d390ec2b926bc52",
"assets/assets/images/image13.jpg": "de4415b7f1df1ae9a66d4c3efc441aa9",
"assets/assets/images/image14.jpg": "4c4c3d282ccbf48fb91f6072f1c207f3",
"assets/assets/images/image15.jpg": "f6b5c05010a0b1c1c19cd2afd6c40e04",
"assets/assets/images/image16.jpg": "d595235de89d06537c6eedb754bdf9a9",
"assets/assets/images/image17.jpg": "97ad7a0a797911a523a4781ce22f52b1",
"assets/assets/images/image18.jpg": "4bd51b3ef05b68c78a31b82b27344c23",
"assets/assets/images/image19.jpg": "6f98a8c4f4ebe81093a58e42d6a305c6",
"assets/assets/images/image20.jpg": "a7fc28e7858d12b6212b378992cf5442",
"assets/assets/images/image4.jpg": "4d216bcaad420e5432cde6538fbf414d",
"assets/assets/images/image5.jpg": "aae9afee76c3e726da1e4a926c90d052",
"assets/assets/images/image6.jpg": "77b5d64b63e698b88a7bd96204ed047e",
"assets/assets/images/image7.jpg": "0f64361b6cecb6a08015f7867a568a96",
"assets/assets/images/image8.jpg": "7d4d8913c672aa69e2e15065272de759",
"assets/assets/images/image9.jpg": "022de0ac317ac8d422ed1c6c810a719e",
"assets/FontManifest.json": "bdfc1df2c4c01d9d73edbcad3ec51f6f",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "037129b5171144e22d16377a86bd99d4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d4bccc4aba7df350e82d7fbcf31e5b75",
"/": "d4bccc4aba7df350e82d7fbcf31e5b75",
"main.dart.js": "9de2bf43669b90ad00cb779a61b15d68",
"manifest.json": "9a38a93dc347883a1b20f6c89d750754",
"version.json": "1a772caddb9037ce063cabf6fb7127f7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
