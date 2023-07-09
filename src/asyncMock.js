export const products = [
  {
    id: "1",
    name: "Extintor Polvo Quimico",
    price: 31500,
    category: "extintor",
    img: "http://www.pastorinoseguridad.com.ar/img/p_extintor05_ABC.jpg",
    stock: 25,
    description:
      "Los extintores FADESA a base de POLVO QUÍMICO SECO son diseñados para proteger las áreas que contienen riesgos de fuego clase A (combustibles sólidos), clase B (combustibles líquidos), clase C (equipos eléctricos energizados) y clase D (metales combustibles).",
  },
  {
    id: "2",
    name: "Manguera AR-JET",
    price: 25600,
    category: "manguera",
    img: "http://www.pastorinoseguridad.com.ar/img/p_mang01.jpg",
    stock: 16,
    description:
      "Las mangueras marcas AR-JET para el combate de incendio están especialmente diseñadas  para su utilización en viviendas, locales comerciales, espacios públicos, oficinas, edificios  de departamentos y cualquier otra infraestructura que requiera una protección confiable de bajo costo. Constituidas por un tejido circular continuo de fibras sintéticas de poliéster, sin costuras ni uniones, color blanco. Con un recubrimiento interior de elastómero de muy bajo peso, permitiendo una flexibilidad constante y libre de mantenimiento",
  },
  {
    id: "3",
    name: "Gabinetes para extintores",
    price: 14330,
    category: "gabinetes",
    img: "http://www.pastorinoseguridad.com.ar/img/p_gab01.jpg",
    stock: 10,
    description:
      "Prolonga la vida útil del matafuego protegiéndolo de agentes externos. Medidas disponibles para matafuegos de 2.5, 5, 10 y co2 (anhídrido carbónico) 3.5 y 5 kg",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 4000);
  });
};

export const getProductsById = (productsId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productsId));
    }, 4000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 4000);
  });
};
