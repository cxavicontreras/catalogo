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
    name: "Audífonos M88 Plus Power Bank",
    wholesalePrice: 118,
    unitPrice: 125,
    image: m88,
    description: "Audífonos M88 Plus con función power bank y batería de larga duración."
  },
];


function ProductCard({ product, darkMode, addToCart }) {

  const mayorPrice = product.wholesalePrice;
const unitPrice = product.unitPrice;

  return (
    <div
      className={`
      rounded-2xl
      overflow-hidden
      shadow-md
      hover:shadow-xl
      transition-all
      duration-300

      ${darkMode
        ? "bg-zinc-900"
        : "bg-white"}
    `}
    >

      <div className={darkMode ? "bg-zinc-800" : "bg-gray-100"}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover"
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
  onClick={() => addToCart(product)}
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
"
>
  Agregar al carrito
</button>

      </div>

    </div>
  );
}
import { useState } from "react";


export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);
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
  const [search, setSearch] = useState("");
  const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(search.toLowerCase())
);
  const total = cart.reduce(
  (acc, product) =>
    acc + (product.unitPrice * product.quantity),
  0
);
  return (
  <div
  className={
    darkMode
      ? "min-h-screen bg-[#0a0a0a]"
      : "min-h-screen bg-gray-100"
  }
>
      
      <header
  className={`
  sticky top-0 z-50 shadow-sm

  ${darkMode
    ? "bg-zinc-950"
    : "bg-white"}
`}
>
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          
          <div className="flex items-center gap-3">

  <img
    src={logo}
    alt="NovaShop"
    className="w-12 h-12 rounded-2xl"
  />

  <h1
    className={`
    text-2xl font-black tracking-wide

    ${darkMode
      ? "text-white"
      : "text-black"}
  `}
  >
    NovaShop
  </h1>

</div>

          <div className="flex gap-3">

            <button
              onClick={() => setOpenCart(true)}
              className="
            bg-black
            hover:bg-zinc-800
            text-white
              px-4
              py-2
              rounded-2xl
              font-bold
              transition
              "
            >
            🛒 {cart.length}
            </button>

  <button
    onClick={() => setDarkMode(!darkMode)}
    className="
    bg-zinc-800
    hover:bg-zinc-700
    text-white
    px-4
    py-2
    rounded-2xl
    font-bold
    transition
  "
  >
    {darkMode ? "☀️" : "🌙"}
  </button>

  <a
  href="https://wa.me/50256981825"
  target="_blank"
  rel="noopener noreferrer"
  className="
    bg-green-500
    hover:bg-green-400
    text-black
    px-5
    py-2
    rounded-2xl
    font-bold
    transition
  "
>
  WhatsApp
</a>

</div>

        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 pt-16 pb-10">

        <div
        className="
        rounded-[40px]
        overflow-hidden
        relative
        bg-gradient-to-r
        from-green-500
        via-emerald-400
        to-lime-300
        p-10
        md:p-16
        shadow-2xl
      "
      >

      <div className="max-w-2xl">

      <p className="uppercase tracking-[5px] text-black/70 font-bold mb-4">
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
  className="
  inline-block
  mt-8
  bg-black
  text-white
  px-8
  py-4
  rounded-2xl
  font-bold
  hover:scale-105
  transition
"
>
  Ver catálogo
</a>
    </div>

  </div>

</section>

      <section id="catalogo" className="max-w-7xl mx-auto px-6 py-10"/>
        <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="mb-10">
          <input
  type="text"
  placeholder="Buscar producto..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {filteredProducts.map((product, index) => (
            <ProductCard
  key={index}
  product={product}
  darkMode={darkMode}
  addToCart={addToCart}
/>
          ))}

        </div>

      </section>
      {
  openCart && (
    <div
      className="
      fixed inset-0
      bg-black/50
      flex justify-center items-center
      z-50
    "
    >

      <div
        className={`
        w-[90%] max-w-lg
        rounded-3xl
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
            className="text-2xl"
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

              const mayorPrice = product.wholesalePrice;
              const unitPrice = product.unitPrice;

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
                    className="w-20 h-20 object-cover rounded-xl"
                  />

                  <div className="flex-1">

  <h3 className="font-bold">
    {product.name}
  </h3>

  <p className="text-green-500">
    Q{product.unitPrice} x {product.quantity}
  </p>
  <p className="text-sm opacity-70">
    Subtotal: Q{product.unitPrice * product.quantity}
  </p>

</div>

<button
  onClick={() => removeFromCart(index)}
  className="
  bg-red-500
  hover:bg-red-400
  text-white
  px-3
  py-2
  rounded-xl
  transition
"
>
  ✕
</button>
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
"
  onClick={() => {

    const message = cart
  .map(
    (product) =>
      `${product.name} x${product.quantity} - Q${
        product.unitPrice * product.quantity
      }`
  )
  .join("%0A");
  const finalMessage =
  `${message}%0A%0ATotal: Q${total}`;

    window.open(
  `https://wa.me/50256981825?text=Hola,%20quiero%20hacer%20este%20pedido:%0A${finalMessage}`,
  "_blank"
);
    
  }}
  
>
  Confirmar pedido
</button>

          )
        }

      </div>

    </div>
  )
}
    </div>
  );
}