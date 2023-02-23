var offlineSiteCache = "offlineSite";
var resourcesToCache = [
  "/",
  "/carta",
  "/nosotros",
  "/contactanos",
  "/aviso-legal",
  "/politica-cookies",
  "/politica-privacidad",
  "/dist/js/index.js",
  "/dist/js/js.cookie.min.js",
  "/dist/css/main.css",
  "/dist/css/components.css",
  "/dist/img/1_1.mp4",
  "/dist/img/granizado.jpg",
  "/dist/img/facebook.png",
  "/dist/img/twitter.png",
  "/dist/img/instagram.png",
  "/dist/img/heladomaquinaroja.jpg",
  "/dist/img/horchata.jpg",
  "/dist/img/imagevideo.png",
  "/dist/img/notice.mp4",
  "/dist/img/logo.jpeg",
  "/dist/img/helado.jpg",
  "/dist/img/heladeros.jpg",
  "/dist/img/bolsa.jpg",
  "/dist/img/comilla.svg",
  "/dist/img/bars-solid.svg",
  "/dist/img/sitio.jpg",
  "/dist/img/terraza.jpg",
  "/dist/img/icecream/aftereight.png",
  "/dist/img/icecream/frutosBosque.png",
  "/dist/img/icecream/arandanos.png",
  "/dist/img/icecream/turron.png",
  "/dist/img/icecream/cafeFondam.png",
  "/dist/img/icecream/dulceCookies.png",
  "/dist/img/icecream/cereza.png",
  "/dist/img/icecream/cieloMoratalaz.png",
  "/dist/img/icecream/conguitos.png",
  "/dist/img/icecream/cheesecake.png",
  "/dist/img/icecream/helado1.png",
  "/dist/img/icecream/trufa.png",
  "/dist/img/icecream/dulceNevado.png",
  "/dist/img/icecream/flanDulceLeche.png",
  "/dist/img/icecream/galletaMaria.png",
  "/dist/img/icecream/chicle.png",
  "/dist/img/icecream/dulceLeche.png",
  "/dist/img/icecream/lecheMerengada.png",
  "/dist/img/icecream/mango.png",
  "/dist/img/icecream/melon.png",
  "/dist/img/icecream/nuevoKinder.png",
  "/dist/img/icecream/oreo.png",
  "/dist/img/icecream/pistacho.png",
  "/dist/img/icecream/ronPasas.png",
  "/dist/img/icecream/platanoNevado.png",
  "/dist/img/icecream/torroncito.png",
  "/dist/img/icecream/tutifruti.png",
  "/dist/img/icecream/vainilla.png",
  "/dist/img/icecream/vainillaCookies.png",
  "/dist/img/icecream/limon.png",
  "/dist/img/icecream/zanahoriaMandarina.png",
  "/dist/img/allergens/Altramuces.svg",
  "/dist/img/allergens/Cacahuete.svg",
  "/dist/img/allergens/Egg.svg",
  "/dist/img/allergens/Fish.svg",
  "/dist/img/allergens/Gluten.svg",
  "/dist/img/allergens/Lacteos.svg",
  "/dist/img/allergens/nuts.svg",
  "/dist/img/allergens/soja.svg",
  "/dist/img/hail/granizadoCafe.png",
  "/dist/img/hail/granizadoChicle.png",
  "/dist/img/hail/granizadoCola.png",
  "/dist/img/hail/granizadoDracula.png",
  "/dist/img/hail/granizadoEnergy.png",
  "/dist/img/hail/granizadoFresa.png",
  "/dist/img/hail/granizadoFrutaPasion.png",
  "/dist/img/hail/GranizadoLimon.png",
  "/dist/img/hail/granizadoMango.png",
  "/dist/img/hail/granizadoManzana.png",
  "/dist/img/hail/granizadoMelon.png",
  "/dist/img/hail/granizadoMenta.png",
  "/dist/img/hail/granizadoMojito.png",
  "/dist/img/hail/granizadoNaranja.png",
  "/dist/img/hail/granizadoPiña.png",
  "/dist/img/hail/granizadoPiruleta.png",
  "/dist/img/hail/granizadoPlatano.png",
  "/dist/img/hail/granizadoSandia.png",
  "/dist/img/hail/granizadoTropical.png",
];

this.addEventListener("install", function (event) {
  console.log("Instalando Service Worker");

  event.waitUntil(
    caches
      .open(offlineSiteCache)
      .then(function (cache) {
        return cache.addAll(resourcesToCache);
      })
      .then(function () {
        return self.skipWaiting();
      })
  );
});

this.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request).catch(function () {
      return caches.match(event.request);
    })
  );
});
