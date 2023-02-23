window.addEventListener("scroll", (e) => {
  let t = document.querySelector(".header");
  window.scrollY >= 100
    ? t.classList.add("nav-white")
    : t.classList.remove("nav-white");
});
window.addEventListener("scroll", (e) => {
  window.scrollY >= 300 ? cookies() : "";
});
//pausar el video al cerrar el models

function toggled() {
  let o = document.querySelector(".menu-mobile");
  o.classList.toggle("active");
}
function cookies() {
  Cookies.set("AcceptCookies", true, { expires: 7 });
  checkCookies();
}
function checkCookies() {
  if (Cookies.get("AcceptCookies") === "true") {
    document.getElementById("legal").style.display = "none";
  }
}
checkCookies();
const hail = [
  {
    name: "tarrinas",
    new: true,
    img: "",
  },
  {
    name: "granizado",
    new: true,
    img: "",
  },
];
const IceCream = [
  {
    name: "After Eight",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "aftereight",
  },
  {
    name: "Amarena",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "amarena",
  },
  {
    name: "Arándanos",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "arandanos",
  },
  {
    name: "Avellana",
    allergens: true,
    frutosSecos: true,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "dulceLeche",
  },
  {
    name: "Bombón Ferrero",
    allergens: true,
    frutosSecos: true,
    Huevo: false,
    Gluten: true,
    Lacteos: true,
    img: "bombomFerrero",
  },
  {
    name: "Café",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "cafe",
  },
  {
    name: "Café Fondant",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: true,
    Lacteos: true,
    img: "cafeFondam",
  },
  {
    name: "Canela Tropical",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "canelaTropical",
  },
  {
    name: "Cereza",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "cereza",
  },
  {
    name: "Cielo de Moratalaz",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "cieloMoratalaz",
  },
  {
    name: "Coco",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "limon",
  },
  {
    name: "Conguitos",
    allergens: true,
    frutosSecos: true,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "conguitos",
  },
  {
    name: "Cheese Cake",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "cheesecake",
  },
  {
    name: "Chicle",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "chicle",
  },
  {
    name: "Chocolate",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "helado1",
  },
  {
    name: "Chocolate con Naranja",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "trufa",
  },
  {
    name: "Chocolate Roma",
    allergens: true,
    frutosSecos: false,
    Huevo: true,
    Gluten: false,
    Lacteos: true,
    img: "chocoroma",
  },
  {
    name: "Chocolate Blanco",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "chocolateBlanco",
  },
  {
    name: "Dulce de Leche",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "dulceLeche",
  },
  {
    name: "Dulce de Leche Nevado",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "dulceNevado",
  },
  {
    name: "Dulce de Leche con Cookies",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: true,
    Lacteos: true,
    img: "dulceCookies",
  },
  {
    name: "Fresa",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "fresa",
  },
  { 
    name: "Frutos del Bosque",
    allergens: false,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: false,
    img: "frutosBosque",
  },
  {
    name: "Flan de Dulce de Leche",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "flanDulceLeche",
  },
  {
    name: "Frambuesa",
    allergens: false,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: false,
    img: "frambuesa",
  },
  {
    name: "Galleta María",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: true,
    Lacteos: true,
    img: "galletaMaria",
  },
  {
    name: "Gominolas",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "gominolas",
  },
  {
    name: "Happy Hippo",
    allergens: true,
    frutosSecos: true,
    Huevo: false,
    Gluten: true,
    Lacteos: true,
    img: "happyHippo",
  },
  {
    name: "Leche Merengada",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "lecheMerengada",
  },
  {
    name: "Limón",
    allergens: false,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: false,
    img: "limon",
  },
  {
    name: "Mango",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "mango",
  },
  {
    name: "Melón",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "melon",
  },
  {
    name: "Mojito",
    allergens: false,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: false,
    img: "mojito",
  },
  {
    name: "Nata",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "limon",
  },
  {
    name: "Nata con Nueces",
    allergens: true,
    frutosSecos: true,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "nataNueces",
  },
  {
    name: "Nuevo Kinder",
    allergens: true,
    frutosSecos: true,
    Huevo: false,
    Gluten: true,
    Lacteos: true,
    img: "nuevoKinder",
  },
  {
    name: "Oreo",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: true,
    Lacteos: true,
    img: "oreo",
  },
  {
    name: "Pistacho",
    allergens: true,
    frutosSecos: true,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "pistacho",
  },
  {
    name: "Plátano Nevado",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "platanoNevado",
  },
  {
    name: "Ron Pasas",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "ronPasas",
  },
  {
    name: "Super Sambayón",
    allergens: true,
    frutosSecos: false,
    Huevo: true,
    Gluten: false,
    Lacteos: true,
    img: "superSambayon",
  },
  {
    name: "Stracciatella",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "platanoNevado",
  },
  {
    name: "Tiramisú",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: true,
    Lacteos: true,
    img: "tiramisu",
  },
  {
    name: "Torronchino",
    allergens: true,
    frutosSecos: true,
    Huevo: false,
    Gluten: true,
    Lacteos: true,
    img: "torroncito",
  },
  {
    name: "Turrón",
    allergens: true,
    frutosSecos: true,
    Huevo: true,
    Gluten: false,
    Lacteos: true,
    img: "turron",
  },
  {
    name: "Tutti Frutti",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "tutifruti",
  },
  {
    name: "Trufa",
    allergens: true,
    frutosSecos: true,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "trufa",
  },
  {
    name: "Vainilla",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "vainilla",
  },
  {
    name: "Vainilla con Cookies",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: true,
    Lacteos: true,
    img: "vainillaCookies",
  },
  {
    name: "Yogur",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "limon",
  },
  {
    name: "Zanahoria y Mandarina",
    allergens: false,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: false,
    img: "zanahoriaMandarina",
  },
]

/*[
  {
    name: "After Eight",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "aftereight",
  },
  {
    name: "Amarena",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "frutosBosque",
  },
  {
    name: "Arandanos",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "arandanos",
  },
  {
    name: "Avellana",
    allergens: true,
    frutosSecos: true,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "dulceLeche",
  },
  {
    name: "Bombom Ferrero",
    allergens: true,
    frutosSecos: true,
    Huevo: false,
    Gluten: true,
    Lacteos: true,
    img: "cafeFondam",
  },
  {
    name: "Café",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "turron",
  },
  {
    name: "Café Fondant",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: true,
    Lacteos: true,
    img: "cafeFondam",
  },
  {
    name: "Canela Tropical",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "dulceCookies",
  },
  {
    name: "Cereza",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "cereza",
  },
  {
    name: "Cielo de Moratalaz",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "cieloMoratalaz",
  },
  {
    name: "Coco",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "limon",
  },
  {
    name: "Conguitos",
    allergens: true,
    frutosSecos: true,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "conguitos",
  },
  {
    name: "Cheese Cake",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "cheesecake",
  },
  {
    name: "Chicle",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "chicle",
  },
  {
    name: "Chocolate",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "helado1",
  },
  {
    name: "Chocolate con Naranja",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "trufa",
  },
  {
    name: "Chocolate Roma",
    allergens: true,
    frutosSecos: false,
    Huevo: true,
    Gluten: false,
    Lacteos: true,
    img: "conguitos",
  },
  {
    name: "Chocolate Blanco",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "limon",
  },
  {
    name: "Dulce de Leche",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "dulceLeche",
  },
  {
    name: "Dulce de Leche Nevado",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "dulceNevado",
  },
  {
    name: "Dulce de Leche con Cookies",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: true,
    Lacteos: true,
    img: "dulceCookies",
  },
  {
    name: "Fresas",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "cereza",
  },
  {
    name: "Frutos del Bosque",
    allergens: false,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: false,
    img: "frutosBosque",
  },
  {
    name: "Flan de Dulce de Leche",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "flanDulceLeche",
  },
  {
    name: "Frambuesa",
    allergens: false,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: false,
    img: "cereza",
  },
  {
    name: "Galleta Maria",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: true,
    Lacteos: true,
    img: "galletaMaria",
  },
  {
    name: "Gominolas",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "chicle",
  },
  {
    name: "Happy Hippo",
    allergens: true,
    frutosSecos: true,
    Huevo: false,
    Gluten: true,
    Lacteos: true,
    img: "dulceLeche",
  },
  {
    name: "Leche Merengada",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "lecheMerengada",
  },
  {
    name: "Limon",
    allergens: false,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: false,
    img: "limon",
  },
  {
    name: "Mango",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "mango",
  },
  {
    name: "Melon",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "melon",
  },
  {
    name: "Mojito",
    allergens: false,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: false,
    img: "pistacho",
  },
  {
    name: "Nata",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "limon",
  },
  {
    name: "Nata con Nueces",
    allergens: true,
    frutosSecos: true,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "platanoNevado",
  },
  {
    name: "Nuevo Kinder",
    allergens: true,
    frutosSecos: true,
    Huevo: false,
    Gluten: true,
    Lacteos: true,
    img: "nuevoKinder",
  },
  {
    name: "Oreo",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: true,
    Lacteos: true,
    img: "oreo",
  },
  {
    name: "Pistacho",
    allergens: true,
    frutosSecos: true,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "pistacho",
  },
  {
    name: "Platano Nevado",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "platanoNevado",
  },
  {
    name: "Ron Pasas",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "ronPasas",
  },
  {
    name: "Super Sambayon",
    allergens: true,
    frutosSecos: false,
    Huevo: true,
    Gluten: false,
    Lacteos: true,
    img: "galletaMaria",
  },
  {
    name: "Stracciatela",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "platanoNevado",
  },
  {
    name: "Tiramisu",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: true,
    Lacteos: true,
    img: "trufa",
  },
  {
    name: "Toronchino",
    allergens: true,
    frutosSecos: true,
    Huevo: false,
    Gluten: true,
    Lacteos: true,
    img: "torroncito",
  },
  {
    name: "Turrón",
    allergens: true,
    frutosSecos: true,
    Huevo: true,
    Gluten: false,
    Lacteos: true,
    img: "turron",
  },
  {
    name: "Tutti Frutti",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "tutifruti",
  },
  {
    name: "Trufa",
    allergens: true,
    frutosSecos: true,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "trufa",
  },
  {
    name: "Vainilla",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "vainilla",
  },
  {
    name: "Vainilla con Cookies",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: true,
    Lacteos: true,
    img: "vainillaCookies",
  },
  {
    name: "Yogur",
    allergens: true,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: true,
    img: "limon",
  },
  {
    name: "Zanahoria y Mandarina",
    allergens: false,
    frutosSecos: false,
    Huevo: false,
    Gluten: false,
    Lacteos: false,
    img: "zanahoriaMandarina",
  },
];*/
function filter() {
  let allergens = document.querySelector("#allergens");
  let lacteos = document.querySelector("#lacteos");
  let egg = document.querySelector("#egg");
  let gluten = document.querySelector("#gluten");
  let nuts = document.querySelector("#nuts");
  let content;
  if (
    (lacteos.checked && egg.checked && gluten.checked && nuts.checked) ||
    allergens.checked
  ) {
    console.log("allergens");
    content = IceCream.filter((e) => e.allergens == false);
    lacteos.checked = false
    egg.checked = false
    gluten.checked = false
    nuts.checked = false
    allergens.checked = true
    return PaintIceCream(content);
  }
  if (lacteos.checked && egg.checked && gluten.checked) {
    content = IceCream.filter((e) => {
      return e.Huevo === false && e.Lacteos === false && e.Gluten;
    });
    console.log("change lacteos huevo gluten");
    return PaintIceCream(content);
  }
  if (lacteos.checked && egg.checked && nuts.checked) {
    content = IceCream.filter((e) => {
      return e.Huevo === false && e.Lacteos === false && e.frutosSecos;
    });
    console.log("change lacteos huevo gluten");
    return PaintIceCream(content);
  }
  if (gluten.checked && egg.checked && nuts.checked) {
    content = IceCream.filter((e) => {
      return e.Huevo === false && e.Gluten === false && e.frutosSecos;
    });
    console.log("change nuts huevo gluten");
    return PaintIceCream(content);
  }
  if (gluten.checked && lacteos.checked && nuts.checked) {
    content = IceCream.filter((e) => {
      return e.Lacteos === false && e.Gluten === false && e.frutosSecos;
    });
    console.log("change nuts lacteos gluten");
    return PaintIceCream(content);
  }
  if (lacteos.checked && egg.checked) {
    content = IceCream.filter((e) => {
      return e.Huevo === false && e.Lacteos === false;
    });
    console.log("change lacteos huevo");
    return PaintIceCream(content);
  }
  if (lacteos.checked && gluten.checked) {
    content = IceCream.filter((e) => {
      return e.Lacteos == false && e.Gluten === false;
    });
    console.log("change lacteos gluten");
    return PaintIceCream(content);
  }
  if (lacteos.checked && nuts.checked) {
    content = IceCream.filter((e) => {
      return e.Lacteos == false && e.frutosSecos === false;
    });
    console.log("change lacteos nuts");
    return PaintIceCream(content);
  }
  if (egg.checked && gluten.checked) {
    content = IceCream.filter((e) => {
      return e.Huevo == false && e.Gluten === false;
    });
    console.log("change huevo gluten");
    return PaintIceCream(content);
  }
  if (egg.checked && nuts.checked) {
    content = IceCream.filter((e) => {
      return e.Huevo == false && e.frutosSecos === false;
    });
    console.log("change huevo nuts");
    return PaintIceCream(content);
  }
  if (nuts.checked && gluten.checked) {
    content = IceCream.filter((e) => {
      return e.Gluten == false && e.frutosSecos === false;
    });
    console.log("change gluten nuts");
    return PaintIceCream(content);
  }
  if(lacteos.checked){
    content = IceCream.filter((e) => e.Lacteos == false);
    console.log("no lacteos")
    return PaintIceCream(content);
  }
  if (egg.checked) {
    content = IceCream.filter((e) => e.Huevo == false);
    console.log("no egg")
    return PaintIceCream(content);
  }
  if (gluten.checked) {
    content = IceCream.filter((e) => e.Gluten === false);
    console.log("no gluten")
    return PaintIceCream(content);
  }
  if (nuts.checked) {
    content = IceCream.filter((e) => e.frutosSecos == false);
    console.log("no nuts")
    return PaintIceCream(content);
  }
  PaintIceCream(IceCream);
}
function PaintIceCream(icecreams) {
  var content = "";
  var count = icecreams.length;
  var i = 0;
  let object = document.querySelector("#icecream");
  if(count <=0) return object.innerHTML = "<p>no hay helados con estos filtros</p>"
  while (i < count) {
    content =
      content +
      `
    <article class="card ${icecreams[i].allergens == true ? "active" : null}" >
    <div class="card__img">
      <img src="./dist/img/icecream/${
        icecreams[i].img
      }.png" loading="lazy" alt="heladeria roma ${icecreams[i].img}" />
    </div>
    <div class="card__allergens">
      <a href="" class="card__icon" ${
        icecreams[i].Huevo == true ? "" : "hidden"
      }>
        <img
          src="./dist/img/allergens/Egg.svg"
          width="50px"
          alt=""
          srcset=""
        />
      </a>
      <a href="" class="card__icon" ${
        icecreams[i].frutosSecos == true ? "" : "hidden"
      }>
        <img
          src="./dist/img/allergens/nuts.svg"
          width="50px"
          alt=""
          srcset=""
        />
      </a>
      <a href="" class="card__icon" ${
        icecreams[i].Gluten == true ? "" : "hidden"
      }>
        <img
          src="./dist/img/allergens/Gluten.svg"
          width="50px"
          alt=""
          srcset=""
        />
      </a>
      <a href="" class="card__icon" ${
        icecreams[i].Lacteos == true ? "" : "hidden"
      }>
        <img
          src="./dist/img/allergens/Lacteos.svg"
          width="50px"
          alt=""
          srcset=""
        />
      </a>
    </div>
    <div class="card__precis">
      <a href="" class="card__icon"
        ></a>
      <div class="card__name">
        <h4>${icecreams[i].name}</h4>
      </div>
      <a href="" class="card__icon"
        ></a>
    </div>
  </article>
    `;
    i++;
  }
  object.innerHTML = content;
}