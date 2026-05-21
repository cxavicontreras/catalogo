import plancha from "./assets/plancha.png";
import reflector3 from "./assets/reflector3.png";
import globos from "./assets/globos.png";
import audifonos from "./assets/audifonos.png";
import cafetera from "./assets/cafetera.png";
import dispensador from "./assets/dispensador.png";
import procesador from "./assets/procesador.png";
import bascula from "./assets/bascula.png";
import banquito from "./assets/banquito.png";
import molino from "./assets/molino.png";
import ventilador5 from "./assets/ventilador5.png";
import reflector2 from "./assets/reflector2.png";
import base from "./assets/base.png";
import vaso from "./assets/vaso.png";
import luces from "./assets/luces.png";
import huevos from "./assets/huevos.png";
import cuello from "./assets/cuello.png";
import astronauta from "./assets/astronauta.png";
import pasta from "./assets/pasta.png";
import m19 from "./assets/M19.png";
import m20 from "./assets/M20.png";
import m88 from "./assets/M88.png";
import logo from "./assets/logo.png";
import icono from "./assets/icon.png";
import sport from "./assets/sport.png"
import wificam from "./assets/wificam.png";
import mousepadS from "./assets/mousepadS.png";
import mousepadXL from "./assets/mousepadXL.png";
import M25 from "./assets/M25.png";
import B39 from "./assets/B39.png";
import laser from "./assets/laser.png";
import tripode from "./assets/tripode.png";
import miniventilador from "./assets/miniventilador.png";
import {useEffect} from "react";
import toast, { Toaster } from "react-hot-toast";
import {motion, AnimatePresence} from "framer-motion";

const products = [
  {
    name: "Plancha de Vapor",
    wholesalePrice: 70,
    unitPrice: 75,
    image: plancha,
    description: "Plancha portátil con vapor continuo y base antiadherente para un planchado rápido y práctico."
  },
  {
    name: "Reflector 3 Focos",
    wholesalePrice: 80,
    unitPrice: 85,
    image: reflector3,
    description: "Reflector solar de 3 focos con sensor de movimiento y alta iluminación para exteriores."
  },
  {
    name: "Inflador de Globos",
    wholesalePrice: 70,
    unitPrice: 75,
    image: globos,
    description: "Inflador eléctrico ideal para decorar fiestas y eventos con globos en segundos."
  },
  {
    name: "Audífonos InPods 12",
    wholesalePrice: 28,
    unitPrice: 35,
    image: audifonos,
    description: "Audífonos inalámbricos compactos con conexión Bluetooth y estuche recargable."
  },
  {
    name: "Cafetera Eléctrica",
    wholesalePrice: 52,
    unitPrice: 60,
    image: cafetera,
    description: "Cafetera eléctrica de acero inoxidable con calentamiento rápido y diseño moderno."
  },
  {
    name: "Dispensador de Agua",
    wholesalePrice: 28,
    unitPrice: 35,
    image: dispensador,
    description: "Dispensador eléctrico recargable compatible con garrafones de agua."
  },
  {
    name: "Procesador Eléctrico",
    wholesalePrice: 80,
    unitPrice: 85,
    image: procesador,
    description: "Procesador eléctrico multifunción ideal para picar verduras, carne y alimentos."
  },
  {
    name: "Báscula Digital",
    wholesalePrice: 30,
    unitPrice: 35,
    image: bascula,
    description: "Báscula digital compacta con medición precisa en gramos y onzas."
  },
  {
    name: "Banquito Plegable",
    wholesalePrice: 50,
    unitPrice: 55,
    image: banquito,
    description: "Banquito plegable portátil, resistente y fácil de transportar."
  },
  {
    name: "Molino Eléctrico",
    wholesalePrice: 46,
    unitPrice: 50,
    image: molino,
    description: "Molino eléctrico compacto perfecto para café, semillas y especias."
  },
  {
    name: "Ventilador 5 en 1",
    wholesalePrice: 65,
    unitPrice: 70,
    image: ventilador5,
    description: "Ventilador portátil con función de enfriamiento y humidificador integrado."
  },
  {
    name: "Reflector 2 Focos",
    wholesalePrice: 90,
    unitPrice: 99,
    image: reflector2,
    description: "Reflector solar de 2 focos con sensor de movimiento y batería recargable."
  },
  {
    name: "Base Antideslizante",
    wholesalePrice: 30,
    unitPrice: 35,
    image: base,
    description: "Base antideslizante para automóvil con soporte para celular y números temporales."
  },
  {
    name: "Vaso con Bocina",
    wholesalePrice: 50,
    unitPrice: 59,
    image: vaso,
    description: "Vaso térmico con bocina Bluetooth integrada y diseño moderno."
  },
  {
    name: "Luces Navideñas Solar",
    wholesalePrice: 80,
    unitPrice: 90,
    image: luces,
    description: "Luces solares decorativas de 400 LEDs ideales para jardines y decoración navideña."
  },
  {
    name: "Hervidora de Huevos",
    wholesalePrice: 45,
    unitPrice: 50,
    image: huevos,
    description: "Hervidora eléctrica con capacidad para cocinar huevos de forma rápida y sencilla."
  },
  {
    name: "Ventilador de Cuello",
    wholesalePrice: 35,
    unitPrice: 40,
    image: cuello,
    description: "Ventilador portátil para cuello con diseño ergonómico y recargable."
  },
  {
    name: "Astronauta Proyector",
    wholesalePrice: 85,
    unitPrice: 99,
    image: astronauta,
    description: "Proyector astronauta con luces galaxia, bocina y control remoto."
  },
  {
    name: "Dispensador de Pasta LED",
    wholesalePrice: 42,
    unitPrice: 50,
    image: pasta,
    description: "Dispensador automático de pasta dental con luz LED y soporte para cepillos."
  },
  {
    name: "Audífonos M19 Simple",
    wholesalePrice: 70,
    unitPrice: 75,
    image: m19,
    description: "Audífonos inalámbricos M19 con pantalla digital y excelente calidad de sonido."
  },
  {
    name: "Audífonos M20 cancelación de ruido",
    wholesalePrice: 90,
    unitPrice: 99,
    image: m20,
    description: "Audífonos M20 con cancelación de ruido y estuche con indicador digital."
  },
  {
    name: "Audífonos M25 Gamer",
    wholesalePrice: 90,
    unitPrice: 99,
    image: M25,
    description: "Audífonos inalámbricos gamer con diseño futurista, pantalla LED y excelente calidad de sonido para música y videojuegos."
  },
  {
    name: "Audífonos M88 Plus Power Bank",
    wholesalePrice: 118,
    unitPrice: 125,
    image: m88,
    description: "Audífonos M88 Plus con función power bank y batería de larga duración."
  },
  {
    name: "Mini Cámara WiFi",
    wholesalePrice: 118,
    unitPrice: 125,
    image: wificam,
    description: "Mini cámara de seguridad WiFi con visión nocturna, detector de movimiento y monitoreo desde celular. Compacta, discreta y recargable."
  },
  {
    name: "Cámara Deportiva",
    wholesalePrice: 118,
    unitPrice: 125,
    image: sport,
    description: "Cámara deportiva HD 1080P ideal para bicicleta, moto y aventuras. Incluye accesorios de montaje y carcasa resistente al agua."
  },
  {
    name: "Mouse Pad RGB S",
    wholesalePrice: 118,
    unitPrice: 125,
    image: mousepadS,
    description: "Mouse pad gamer compacto con iluminación RGB y superficie suave de alta precisión. Disponible en varios diseños espaciales."
  },
  {
    name: "Mouse Pad RGB XL",
    wholesalePrice: 118,
    unitPrice: 125,
    image: mousepadXL,
    description: "Mouse pad gamer XL con iluminación RGB y amplio espacio para teclado y mouse. Perfecto para setups gaming modernos."
  },
  {
    name: "Audífonos Bluetooth B39",
    wholesalePrice: 118,
    unitPrice: 125,
    image: B39,
    description: "Audífonos Bluetooth plegables con luces RGB, sonido envolvente y batería de larga duración. Cómodos y modernos."
  },
  {
    name: "Metro Digital Laser",
    wholesalePrice: 118,
    unitPrice: 125,
    image: laser,
    description: "Medidor digital láser de alta precisión para medir distancias, áreas y volúmenes. Ideal para construcción y hogar."
  },
  {
    name: "Mini Tripode Selfie",
    wholesalePrice: 90,
    unitPrice: 99,
    image: tripode,
    description: "Trípode selfie portátil con luz LED recargable y control remoto. Perfecto para TikTok, selfies y creación de contenido."
  },
  {
    name: "Mini Ventilador Portátil",
    wholesalePrice: 90,
    unitPrice: 99,
    image: miniventilador,
    description: "Ventilador portátil recargable con pantalla digital de batería y múltiples velocidades. Compacto y potente."
  },
];


function ProductCard({ product, darkMode, addToCart, setSelectedProduct, favorites, toggleFavorite }) {

  const mayorPrice = product.wholesalePrice;
const unitPrice = product.unitPrice;

  return (
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
  whileHover={{
    y: -8,
    scale: 1.02,
  }}
  whileTap={{ scale: 0.98 }}

  onClick={() => setSelectedProduct(product)}

  className={`
    group
    relative
    cursor-pointer
    rounded-2xl
    overflow-hidden
    shadow-md
    hover:-translate-y-1
    hover:shadow-2xl
    transition-all
    duration-300

    ${darkMode
      ? "bg-zinc-900"
      : "bg-white"}
  `}
>
      

      <div className={darkMode ? "bg-zinc-800" : "bg-gray-100"}>
        <div className="absolute top-3 left-3 z-10">

  <span
    className="
      bg-red-500
      text-white
      text-xs
      px-3
      py-1
      rounded-full
      font-bold
      shadow-lg
    "
  >
    🔥 Viral
  </span>
</div>
<button
  onClick={(e) => {
    e.stopPropagation();
    toggleFavorite(product.name);
  }}

  className="
    absolute
    cursor-pointer
    top-3
    right-3
    z-10
    text-2xl
    active:scale-95
  "
>
  {favorites.includes(product.name)
    ? "❤️"
    : "🤍"}
</button>
        <img
          src={product.image}
          alt={product.name}
          className="
            w-full h-56 object-cover
            group-hover:scale-105
            transition-transform duration-300
            active:scale-95
          "
          loading="lazy"
        />

        <div
          className="
          absolute
          inset-0
          pointer-events-none
          bg-black/0
        group-hover:bg-black/10
          transition
          duration-300
          "
        />
      </div>

      <div className="p-4">

  <h2
    className={`
      font-semibold
      text-lg
      line-clamp-2

      ${darkMode
        ? "text-white"
        : "text-gray-800"}
    `}
  >
    {product.name}
  </h2>

  <p
    className={`
      text-sm mt-2

      ${darkMode
        ? "text-gray-400"
        : "text-gray-600"}
    `}
  >
    {product.description}
  </p>

  <div className="mt-3 space-y-1">

    <p className="text-green-500 text-xl font-bold">
      A partir de 3: Q{mayorPrice} C/U
    </p>

    <p
      className={`
        text-sm

        ${darkMode
          ? "text-gray-300"
          : "text-gray-500"}
      `}
    >
      Unidad: Q{unitPrice}
    </p>

  </div>


        <button
  onClick={(e) => {
  e.stopPropagation();
  addToCart(product);
}}
  className="
  mt-4
  w-full
  bg-green-500
  hover:bg-green-400
  text-black
  py-2.5
  rounded-xl
  font-bold
  transition
  active:scale-95
"
>
  Agregar al carrito
</button>
<a
  href={`https://wa.me/50242104096?text=Hola,%20quiero%20comprar:%20${product.name}`}

  target="_blank"

  onClick={(e) => e.stopPropagation()}

  className="
    mt-3
    block
    text-center
    border
    border-green-500
    text-green-500
    hover:bg-green-500
    hover:text-black
    py-2.5
    rounded-xl
    font-bold
    transition
    active:scale-95
  "
>
  Comprar ahora
</a>

      </div>

    </motion.div>
  );
}
import { useState } from "react";


export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState(() => {

  const savedCart = localStorage.getItem("cart");

  return savedCart
    ? JSON.parse(savedCart)
    : [];

});
  const [openCart, setOpenCart] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [favorites, setFavorites] = useState(() => {

  const savedFavorites =
    localStorage.getItem("favorites");

  return savedFavorites
    ? JSON.parse(savedFavorites)
    : [];

});
  const addToCart = (product) => {

  const existingProduct = cart.find(
    (item) => item.name === product.name
  );

  if (existingProduct) {

    setCart(
      cart.map((item) =>
        item.name === product.name
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );

  } else {

    setCart([
      ...cart,
      {
        ...product,
        quantity: 1,
      },
    ]);

  }
  toast.success("Producto agregado 😎", {
  style: {
    borderRadius: "16px",
    background: "#18181b",
    color: "#fff",
    padding: "16px",
  },
});
};

const increaseQuantity = (productName) => {

  setCart(
    cart.map((item) =>
      item.name === productName
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    )
  );

};

const decreaseQuantity = (productName) => {

  const updatedCart = cart
    .map((item) => {

      if (item.name === productName) {

        return {
          ...item,
          quantity: item.quantity - 1,
        };

      }

      return item;

    })
    .filter((item) => item.quantity > 0);

  setCart(updatedCart);

};
  useEffect(() => {

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

}, [cart]);

useEffect(() => {

  localStorage.setItem(
    "favorites",
    JSON.stringify(favorites)
  );

}, [favorites]);

const toggleFavorite = (productName) => {

  if (favorites.includes(productName)) {

    setFavorites(
      favorites.filter(
        (fav) => fav !== productName
      )
    );

  } else {

    setFavorites([
      ...favorites,
      productName
    ]);

  }

};

  const removeFromCart = (indexToRemove) => {

  const updatedCart = [...cart];

  if (updatedCart[indexToRemove].quantity > 1) {

    updatedCart[indexToRemove].quantity -= 1;

  } else {

    updatedCart.splice(indexToRemove, 1);

  }

  setCart(updatedCart);
};
const cartCount = cart.reduce(
  (acc, item) => acc + item.quantity,
  0
);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const filteredProducts = products.filter((product) => {

  const matchesSearch =
    product.name
      .toLowerCase()
      .includes(search.toLowerCase());

  if (filter === "favorites") {

    return (
      matchesSearch &&
      favorites.includes(product.name)
    );

  }

  if (filter === "cheap") {

    return (
      matchesSearch &&
      product.unitPrice <= 50
    );

  }

  if (filter === "expensive") {

    return (
      matchesSearch &&
      product.unitPrice > 50
    );

  }

  return matchesSearch;

});
  const total = cart.reduce((acc, product) => {

  const price =
    product.quantity >= 3
      ? product.wholesalePrice
      : product.unitPrice;

  return acc + (price * product.quantity);

}, 0);
  return (
  <div
  className={
    darkMode
      ? "min-h-screen bg-[#0a0a0a]"
      : "min-h-screen bg-gray-100"
  }
>
<Toaster position="top-right" />  
      
      <header
  className={`
  sticky top-0 z-50 shadow-sm
  

  ${darkMode
    ? "bg-zinc-950/70 backdrop-blur-xl"
    : "bg-white/70 backdrop-blur-xl"}
`}
>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-4">
          
         <img
  src={icono}
  alt="NovaShop"
  className="
    w-12
    h-12
    rounded-2xl
    hover:scale-105
    transition
  "
/>

          <div className="flex gap-2">

            <motion.button
              onClick={() => setOpenCart(true)}
              className="
              bg-black
              hover:bg-zinc-800
              text-white
                px-3
                py-2
                rounded-2xl
                font-bold
                transition
                active:scale-95
                "
                animate={{
                  y: [0, -8, 0],
                }}

                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
            >
              🛒 {cartCount}
            </motion.button>

  <motion.button
    onClick={() => setDarkMode(!darkMode)}
    whileTap={{ scale: 0.9 }}
    whileHover={{ scale: 1.05 }}
    className="
      bg-zinc-800
      hover:bg-zinc-700
      text-white
      px-3
      py-2
      rounded-2xl
      font-bold
      transition
      active:scale-95
    "
    animate={{
      y: [-8, 0, -8],
    }}

    transition={{
      repeat: Infinity,
      duration: 2,
    }}
  >
    {darkMode ? "☀️" : "🌙"}
  </motion.button>

  <motion.a
  href="https://wa.me/50242104096"
  target="_blank"
  rel="noopener noreferrer"
  className="
    bg-green-500
    hover:bg-green-400
    text-black
    px-3
    py-2
    rounded-2xl
    font-bold
    transition
    active:scale-95
  "
  animate={{
      y: [0, -8, 0],
    }}

    transition={{
      repeat: Infinity,
      duration: 2,
    }}
>
  WhatsApp
</motion.a>

</div>

        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 pt-16 pb-10">

        

        <motion.div

  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}

  transition={{
    duration: 0.7,
    ease: "easeOut",
  }}

  className={`
  rounded-[40px]
  overflow-hidden
  relative
  p-10
  md:p-16
  shadow-2xl
  transition-all
  duration-500

  ${darkMode
    ? `
      bg-gradient-to-br
      from-zinc-900
      via-zinc-950
      to-black
      border
      border-zinc-800
    `
    : `
      bg-gradient-to-br
      from-green-500
      via-emerald-400
      to-lime-300
    `}
`}
      >

        <div
  className={`
    absolute
    top-0
    right-0
    z-0
    pointer-events-none
    w-72
    h-72
    blur-3xl
    rounded-full

    ${darkMode
      ? "bg-emerald-500/20"
      : "bg-white/20"}
  `}
/>

<div
  className={`
    absolute
    bottom-0
    left-0
    z-0
    pointer-events-none
    w-72
    h-72
    blur-3xl
    rounded-full

    ${darkMode
      ? "bg-green-500/20"
      : "bg-lime-300/20"}
  `}
/>

      <div className="max-w-2xl relative z-10">

      <p className={`
        uppercase
        tracking-[5px] 
        ${darkMode
          ?"text-white"
          :"text-black/70"
        } 
        font-bold 
        mb-4`}>
        Productos virales
      </p>

      <h1
  className={`
  text-3xl font-black

  ${darkMode
    ? "text-white"
    : "text-black"}
`}
>
        Gadgets y accesorios
      </h1>

      <p
  className={`
  text-lg mt-6

  ${darkMode
    ? "text-gray-200"
    : "text-black/80"}
`}
>
        Catálogo de productos modernos, útiles y virales.
      </p>

      <a
  href="#catalogo"

  className={`
    inline-block
    mt-8
    px-8
    py-4
    rounded-2xl
    font-bold
    hover:scale-105
    active:scale-95
    transition

    ${darkMode
      ? `
        bg-green-500
        text-black
        hover:bg-green-400
      `
      : `
        bg-black
        text-white
      `}
  `}
>
  Ver catálogo
</a>
    </div>

  </motion.div>

</section>

      <section
  id="catalogo"
  className="max-w-7xl mx-auto px-6 py-10"
>

        
          <div className="mb-10 relative">
            <div className="flex flex-wrap gap-3 mb-8">

  <button
    onClick={() => setFilter("all")}
    className={`
      px-4
      py-2
      rounded-xl
      font-bold
      transition
      active:scale-95

      ${filter === "all"
        ? "bg-green-500 text-black"
        : darkMode
          ? "bg-zinc-800 text-white"
          : "bg-white text-black"}
    `}
  >
    Todos
  </button>

  <button
    onClick={() => setFilter("favorites")}
    className={`
      px-4
      py-2
      rounded-xl
      font-bold
      transition
      active:scale-95

      ${filter === "favorites"
        ? "bg-red-500 text-white"
        : darkMode
          ? "bg-zinc-800 text-white"
          : "bg-white text-black"}
    `}
  >
    ❤️ Favoritos
  </button>

  <button
    onClick={() => setFilter("cheap")}
    className={`
      px-4
      py-2
      rounded-xl
      font-bold
      transition
      active:scale-95

      ${filter === "cheap"
        ? "bg-green-500 text-black"
        : darkMode
          ? "bg-zinc-800 text-white"
          : "bg-white text-black"}
    `}
  >
    💸 Económicos
  </button>

  <button
    onClick={() => setFilter("expensive")}
    className={`
      px-4
      py-2
      rounded-xl
      font-bold
      transition
      active:scale-95

      ${filter === "expensive"
        ? "bg-yellow-500 text-black"
        : darkMode
          ? "bg-zinc-800 text-white"
          : "bg-white text-black"}
    `}
  >
    👑 Premium
  </button>

</div>

  <div className="relative">

  <span
    className="
      absolute
      left-4
      top-1/2
      -translate-y-1/2
      text-gray-400
      text-lg
    "
  >
    🔍
  </span>

  <input
    type="text"
    placeholder="Buscar productos..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}

    className={`
      w-full
      pl-12
      pr-5
      py-4
      rounded-2xl
      outline-none
      border
      transition-all
      duration-300
      shadow-lg
      backdrop-blur-xl

      ${darkMode
        ? `
          bg-zinc-900/70
          border-zinc-700
          text-white
          placeholder:text-gray-500
          focus:border-green-500
          focus:ring-2
          focus:ring-green-500/30
        `
        : `
          bg-white/70
          border-gray-300
          text-black
          placeholder:text-gray-400
          focus:border-green-500
          focus:ring-2
          focus:ring-green-500/30
        `}
    `}
  />

</div>

</div>
        

        <motion.div
  initial="hidden"
  animate="show"

  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  }}

  className="
    grid
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
    lg:grid-cols-4
    gap-6
  "
>

          {filteredProducts.map((product, index) => (
            <ProductCard
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              key={index}
              product={product}
              darkMode={darkMode}
              addToCart={addToCart}
              setSelectedProduct={setSelectedProduct}
            />
          ))}

        </motion.div>

      </section>
      <AnimatePresence>
      {
  openCart && (
    <motion.div
      onClick={() => setOpenCart(false)}
      className="
      fixed inset-0
      bg-black/50
      flex justify-end
      z-50
      p-4
    "
    >

      <motion.div
  initial={{ x: 400 }}
  animate={{ x: 0 }}
  exit={{ x: 400 }}
  transition={{ duration: 0.25 }}

  onClick={(e) => e.stopPropagation()}

  className={`
    w-full
    max-w-lg
    h-full
    rounded-none
    p-6
    shadow-2xl

    ${darkMode
      ? "bg-zinc-900 text-white"
      : "bg-white text-black"}
  `}
>

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-black">
            Carrito
          </h2>

          <button
            onClick={() => setOpenCart(false)}
            className="text-2xl active:scale-95"
          >
            ✕
          </button>

        </div>

        <div className="space-y-4 max-h-[400px] overflow-y-auto">

          {cart.length === 0 ? (
            <p className="text-center opacity-70">
              Tu carrito está vacío
            </p>
          ) : (
            cart.map((product, index) => {

              const price =
                product.quantity >= 3
                  ? product.wholesalePrice
                  : product.unitPrice;

              const subtotal =
                price * product.quantity;

              return (
                <div
                  key={index}
                  className="
                  flex items-center gap-4
                  border-b border-white/10
                  pb-4
                "
                >

                  <img
                    src={product.image}
                    alt={product.name}
                    className="
                    w-20
                    h-20
                    object-cover
                    rounded-xl
                    
                  "
                  />

                  

                  <div className="flex-1">

                    <h3 className="font-bold">
                      {product.name}
                    </h3>

                    <p className="text-green-500">
                      Q{price} x {product.quantity}
                    </p>

                    <p className="text-sm opacity-70">
                      Subtotal: Q{subtotal}
                    </p>

                  </div>

                  <div
  className="
  flex items-center gap-2
"
>

  <button
    onClick={() =>
      decreaseQuantity(product.name)
    }
    className="
    w-8
    h-8
    rounded-lg
    bg-red-500
    hover:bg-red-400
    text-white
    font-bold
    transition
    active:scale-95
  "
  >
    -
  </button>

  <span className="font-bold w-6 text-center">
    {product.quantity}
  </span>

  <button
    onClick={() =>
      increaseQuantity(product.name)
    }
    className="
    w-8
    h-8
    rounded-lg
    bg-green-500
    hover:bg-green-400
    text-black
    font-bold
    transition
    active:scale-95
  "
  >
    +
  </button>

</div>

                </div>
              );
            })
          )}

        </div>

        <div
          className="
          mt-6
          flex justify-between items-center
          border-t border-white/10
          pt-4
        "
        >

          <span className="text-lg font-bold">
            Total:
          </span>

          <span className="text-2xl font-black text-green-500">
            Q{total}
          </span>

        </div>

        {
          cart.length > 0 && (

            <button
              className="
              mt-6
              w-full
              bg-gradient-to-r
              from-green-500
              to-emerald-400
              hover:scale-[1.02]
              hover:shadow-lg
              hover:shadow-green-500/30
              text-black
              py-3
              rounded-2xl
              font-black
              tracking-wide
              transition-all
              duration-300
              active:scale-95
            "
              onClick={() => {

                const message = cart
                  .map((product) => {

                    const price =
                      product.quantity >= 3
                        ? product.wholesalePrice
                        : product.unitPrice;

                    return (
                      `${product.name} x${product.quantity} - Q${
                        price * product.quantity
                      }`
                    );

                  })
                  .join("%0A");

                const finalMessage =
                  `${message}%0A%0ATotal: Q${total}`;

                window.open(
                  `https://wa.me/50242104096?text=Hola,%20quiero%20hacer%20este%20pedido:%0A${finalMessage}`,
                  "_blank"
                );

              }}
            >
              Confirmar pedido
            </button>

          )
        }

      </motion.div>

    </motion.div>
  )
}
</AnimatePresence>
<AnimatePresence>
{
  selectedProduct && (

    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}

  className="
    fixed inset-0
    bg-black/60
    z-50
    flex justify-center items-center
    p-4
  "

  onClick={() => setSelectedProduct(null)}
>

      <motion.div
  initial={{ scale: 0.9, opacity: 0, y: 30 }}
  animate={{ scale: 1, opacity: 1, y: 0 }}
  exit={{ scale: 0.9, opacity: 0 }}
  transition={{ duration: 0.2 }}

  onClick={(e) => e.stopPropagation()}
        className={`
        max-w-2xl
        w-full
        rounded-3xl
        overflow-hidden
        shadow-2xl

        ${darkMode
          ? "bg-zinc-900 text-white"
          : "bg-white text-black"}
      `}
      >

        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
          className="
          w-full
          h-[300px] md:h-[400px]
          object-cover
        "
        />

        <div className="p-6">

          <div className="flex justify-between items-start">

            <h2 className="text-3xl font-black">
              {selectedProduct.name}
            </h2>

            <button
              onClick={() => setSelectedProduct(null)}
              className="text-2xl active:scale-95"
            >
              ✕
            </button>

          </div>

          <p
            className={`
            mt-4 text-lg

            ${darkMode
              ? "text-gray-300"
              : "text-gray-600"}
          `}
          >
            {selectedProduct.description}
          </p>

          <div className="mt-6 space-y-2">

            <p className="text-green-500 text-2xl font-black">
              A partir de 3: Q{selectedProduct.wholesalePrice}
            </p>

            <p
              className={`
              text-lg

              ${darkMode
                ? "text-gray-400"
                : "text-gray-500"}
            `}
            >
              Unidad: Q{selectedProduct.unitPrice}
            </p>

          </div>

          <button
            onClick={() => addToCart(selectedProduct)}
            className="
            mt-8
            w-full
            bg-green-500
            hover:bg-green-400
            text-black
            py-4
            rounded-2xl
            font-black
            transition
            active:scale-95
          "
          >
            Agregar al carrito
          </button>

        </div>

      </motion.div>

    </motion.div>
  )
}
</AnimatePresence>
{
  cart.length > 0 && (

    <div
      className="
        fixed
        bottom-5
        left-1/2
        -translate-x-1/2
        md:hidden
        z-40
        bg-black
        text-white
        px-6
        py-3
        rounded-full
        shadow-2xl
        flex
        items-center
        gap-4
      "
    >

      <span className="font-bold">
        🛒 {cartCount}
      </span>

      <span className="text-green-400 font-black">
        Q{total}
      </span>

      <button
        onClick={() => setOpenCart(true)}
        className="
          bg-green-500
          text-black
          px-4
          py-1
          rounded-full
          font-bold
          active:scale-95
        "
      >
        Ver
      </button>

    </div>

  )
}
      <footer
  className={`
    mt-20
    border-t
    py-10

    ${darkMode
  ? "border-zinc-800 bg-zinc-950/70 backdrop-blur-xl text-white"
  : "border-gray-200 bg-white/70 backdrop-blur-xl  text-black"}
  `}
>

  <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">

    <div>
      <h2 className="text-2xl font-black">
        NovaShop
      </h2>

      <p className="opacity-70 mt-2 max-w-sm">
        Gadgets, accesorios y productos virales al mejor precio.
      </p>
    </div>

    <div className="space-y-2">

      <a
        href="https://wa.me/50242104096"
        target="_blank"
        className="block hover:text-green-500 transition"
      >
        WhatsApp
      </a>

    </div>

  </div>

</footer>

<a
  href="https://wa.me/50242104096"
  target="_blank"
  rel="noopener noreferrer"
  className="
    fixed
    bottom-5
    right-5
    z-50
    bg-green-500
    hover:bg-green-400
    text-black
    w-16
    h-16
    rounded-full
    flex
    items-center
    justify-center
    text-3xl
    shadow-2xl
    hover:scale-110
    transition-all
  "
>
  💬
</a>
    </div>
  );
}