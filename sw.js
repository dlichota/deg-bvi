// todo: 'install' event is for old caches deletion. use it?
// todo: split filesToCache in two arrays for easy configuration and merge them
// todo: use typescript. referernces:
// https://github.com/DefinitelyTyped/DefinitelyTyped/tree/HEAD/service_worker_api

var cacheName = 'epwa';

var filesToCache = [

  // infrastructure files ----------------------------------------------------------------------------------------------
  '/',
  'index.html',
  'sw.js',
  'manifest.json',
  'favicon.png',
  //--------------------------------------------------------------------------------------------------------------------

  // app files ---------------------------------------------------------------------------------------------------------
  'page2.html',
  'css/styles.css',
  'img/header.jpg',
  'img/offline-img.png',
  'https://fonts.googleapis.com/css?family=Raleway',
'img/ab-bar.png',
'img/abes-menu.jpg',
'img/alibabas.png',
'img/anegada_beach_club.png',
'img/anegadareef.png',
'img/aromas1.jpg',
'img/atasteofindia.jpg',
'img/b-line_logo.jpeg',
'img/bananakeetcafelogo.jpg',
'img/bananas.png',
'img/bathandturtle.jpg',
'img/beans.png',
'img/bellscafe.jpg',
'img/bigbamboo.png',
'img/bitterend.jpg',
'img/bluerush.jpg',
'img/Bobby_s Marketplace.jpg',
'img/Brandywine-estate.png',
'img/brandywinerooftop.jpg',
'img/bulb.png',
'img/bvisnuba-logone.jpg',
'img/bvisupco.jpg',
'img/callwod.jpg',
'img/CAMDEN.png',
'img/capriccio.jpeg',
'img/captainmulligans.jpg',
'img/captainskitchen.jpg',
'img/caribbeanfly.png',
'img/Charlie_s-logo-black.jpg',
'img/chezbamboo.jpg',
'img/circlecafe.png',
'img/coco_maya.png',
'img/cocoloco.png',
'img/coolbreeze.jpg',
'img/Cooper-Logo.png',
'img/corsairs_logo.png',
'img/cowwreck.jpg',
'img/Crandals-3.jpg',
'img/d_bestcup.jpg',
'img/d_coalpot.png',
'img/deadmans.jpg',
'img/deloosemongoose.jpg',
'img/divebvi.png',
'img/dixies.jpg',
'img/dove.png',
'img/ea_s sweettooth.png',
'img/elm_beach_bar.jpg',
'img/emiles_large.png',
'img/fatvirgin.jpg',
'img/fischerscove.png',
'img/flash-of-beauty.jpg',
'img/food-palace.jpg',
'img/footloose.jpg',
'img/foxys.png',
'img/foxystaboo.png',
'img/frenchdeli.jpg',
'img/garden.jpg',
'img/genakercafe.jpg',
'img/genes.jpg',
'img/gertrudes.jpg',
'img/giorgio.png',
'img/grams-place-restaurant.jpg',
'img/greenhouse.jpg',
'img/groundsea.jpg',
'img/gumption.jpg',
'img/harrisplace2.jpg',
'img/header.jpg',
'img/hendos_logo.jpg',
'img/heritage inn.jpg',
'img/Hog-Heaven.jpg',
'img/hvm.jpg',
'img/icon3.png',
'img/irenes.jpg',
'img/island_surf.png',
'img/islandpot.jpg',
'img/islandroots.jpg',
'img/ivans.jpg',
'img/jamaincan.jpg',
'img/jeremyskitchen.png',
'img/jost scuba.jpeg',
'img/jumbies.jpg',
'img/ladysarahs.jpg',
'img/laststop.png',
'img/lecabanon.jpg',
'img/leverickbay.jpg',
'img/longbay.jpg',
'img/macs.png',
'img/maddogs.jpg',
'img/ManuelReefMarina_logo.jpg',
'img/marche.jpg',
'img/mariasbythesea.png',
'img/Matchas-Bar.jpg',
'img/mellowmoods.jpg',
'img/mermaids.jpg',
'img/Myetts_Chill_Zone_Logo.jpg',
'img/naturesway.jpg',
'img/neardbeach.jpg',
'img/neptunestreasure.jpg',
'img/nigels-beach-bar-grill.jpg',
'img/oceans7_logo.jpg',
'img/offline-img.png',
'img/Oilnutbay.png',
'img/Omar_s_Logo.jpg',
'img/omars fusion.jpg',
'img/originaltiger.jpg',
'img/paradise-club-sports.jpg',
'img/paradize-sports.jpg',
'img/pearlorient.jpg',
'img/peglegs.jpg',
'img/PiratesNorman.png',
'img/pomato-point.jpg',
'img/poormansbar.jpg',
'img/pottersbythesea.jpg',
'img/pusserscanegarden.png',
'img/Pussersmarinacay.jpg',
'img/pussersroadtown.png',
'img/pwa-stats3.jpg',
'img/pwa-stats4.png',
'img/quitos.jpg',
'img/radas.jpg',
'img/Red-Rock-Logo.png',
'img/reeffischers.png',
'img/rhymers-hotel-beach-bar-restaurant.jpg',
'img/riteway.jpg',
'img/rotiman.jpg',
'img/rotiqueen.jpg',
'img/royalbviyachtclub.png',
'img/sabarock-resort.jpg',
'img/Sail-Caribbean.jpg',
'img/sandbox-beach-bar-grill.jpg',
'img/saucez.jpg',
'img/savetheseed.jpg',
'img/scrub-island.jpg',
'img/seahorse.png',
'img/sebastiansbythesea.jpg',
'img/seddys.jpg',
'img/sharkys.png',
'img/SimplyDelicious.png',
'img/skyworld.jpg',
'img/snappers.jpg',
'img/soggydollar.jpg',
'img/spanishtowncafe.png',
'img/stonehaven.png',
'img/stoutts-look-out.jpg',
'img/strawberry.jpg',
'img/sugar_spice_logo.jpg',
'img/sugarmill.png',
'img/sunchaser.png',
'img/surfschool.jpg',
'img/sw.png',
'img/sydneys.jpg',
'img/t_d lookout.png',
'img/tamarindclub.jpg',
'img/tastees.jpg',
'img/the-SoupShop.jpg',
'img/theclub.jpg',
'img/thecrawl pub.jpg',
'img/thelastresort.jpg',
'img/thelobstertrap.jpg',
'img/themoorings.jpeg',
'img/thepub.jpg',
'img/tommygaunt.jpg',
'img/tonic.jpg',
'img/topofthebaths.jpg',
'img/tortolasportsclub.jpg',
'img/tradewinds.jpg',
'img/tramonti.jpg',
'img/trellisbay.png',
'img/tropicalfusion.jpg',
'img/veganhaven.jpeg',
'img/verandahtreasure.jpg',
'img/vibites.jpg',
'img/villagecafe.jpg',
'img/villagecay.png',
'img/virgin-queen-logo.jpg',
'img/wateringhole.png',
'img/willy-t.jpg',
'img/wonkydog.png',
'img/yomamas-kitchen.jpg'
  // -------------------------------------------------------------------------------------------------------------------
];

// todo: check if service worker is installed before
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then(function () {
        console.log('sw: registration ok');
    }).catch(function (err) {
        console.error(err);
    });
}
// ---------------------------------------------------------------------------------------------------------------------
/**
 * 'Install' event. Writing files to browser cache
 *
 * @param {string} Event name ('install')
 * @param {function} Callback function with event data
 *
 */
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('sw: writing files into cache');
            return cache.addAll(filesToCache);
        })
    )
});
// ---------------------------------------------------------------------------------------------------------------------
/**
 * 'Activate' event. Service worker is activated
 *
 * @param {string} Event name ('activate')
 * @param {function} Callback function with event data
 *
 */
self.addEventListener('activate', function (event) {
    console.log('sw: service worker ready and activated', event);
});
// ---------------------------------------------------------------------------------------------------------------------
/**
 * 'Fetch' event. Browser tries to get resources making a request
 *
 * @param {string} Event name ('fetch')
 * @param {function} Callback function with event data
 *
 */
self.addEventListener('fetch', function (event) {
    event.respondWith(
        // test if the request is cached
        caches.match(event.request).then(function (response) {
            // 1) if response cached, it will be returned from browser cache
            // 2) if response not cached, fetch resource from network
            return response || fetch(event.request);
        }).catch(function (err) {
            // if response not cached and network not available an error is thrown => return fallback image
            return caches.match('img/offline-img.png');
        })
    )
});
// ---------------------------------------------------------------------------------------------------------------------
