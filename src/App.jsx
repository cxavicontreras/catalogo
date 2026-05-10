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

const products = [
  {
    name: "Plancha de Vapor",
    price: "Desde Q57",
    image: plancha,
  },
  {
    name: "Reflector 3 Focos",
    price: "Desde Q66",
    image: reflector3,
  },
  {
    name: "Inflador de Globos",
    price: "Desde Q58",
    image: globos,
  },
  {
    name: "Audífonos InPods 12",
    price: "Desde Q24",
    image: audifonos,
  },
  {
    name: "Cafetera Eléctrica",
    price: "Desde Q45",
    image: cafetera,
  },
  {
    name: "Dispensador de Agua",
    price: "Desde Q17",
    image: dispensador,
  },
  {
    name: "Procesador Eléctrico",
    price: "Desde Q73",
    image: procesador,
  },
  {
    name: "Báscula Digital",
    price: "Desde Q24",
    image: bascula,
  },
  {
    name: "Banquito Plegable",
    price: "Desde Q43",
    image: banquito,
  },
  {
    name: "Molino Eléctrico",
    price: "Desde Q37",
    image: molino,
  },
  {
    name: "Ventilador 5 en 1",
    price: "Desde Q42",
    image: ventilador5,
  },
  {
    name: "Reflector 2 Focos",
    price: "Desde Q72",
    image: reflector2,
  },
  {
    name: "Base Antideslizante",
    price: "Desde Q26",
    image: base,
  },
  {
    name: "Vaso con Bocina",
    price: "Desde Q39",
    image: vaso,
  },
  {
    name: "Luces Navideñas Solar",
    price: "Desde Q68",
    image: luces,
  },
  {
    name: "Hervidora de Huevos",
    price: "Desde Q35",
    image: huevos,
  },
  {
    name: "Ventilador de Cuello",
    price: "Desde Q24",
    image: cuello,
  },
  {
    name: "Astronauta Proyector",
    price: "Desde Q65",
    image: astronauta,
  },
  {
    name: "Dispensador de Pasta LED",
    price: "Desde Q27",
    image: pasta,
  },
];


function ProductCard({ product, darkMode, addToCart }) {

  const mayorPrice = parseInt(product.price.replace(/\D/g, ""));
  const unitPrice = Math.round(mayorPrice * 1.3);

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

        <div className="mt-3 space-y-1">

          <p className="text-green-500 text-xl font-bold">
            Mayoreo: Q{mayorPrice}
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
  setCart([...cart, product]);
  };
  const removeFromCart = (indexToRemove) => {
  setCart(
    cart.filter((_, index) => index !== indexToRemove)
  );
  };
  const [search, setSearch] = useState("");
  const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(search.toLowerCase())
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
          
          <h1
  className={`
  text-3xl font-black

  ${darkMode
    ? "text-white"
    : "text-black"}
`}
>
            NovaShop
          </h1>

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

              const mayorPrice = parseInt(
                product.price.replace(/\D/g, "")
              );

              const unitPrice = Math.round(
                mayorPrice * 1.15
              );

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
    Q{unitPrice}
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

        {
          cart.length > 0 && (
            <button
              className="
              mt-6
              w-full
              bg-green-500
              hover:bg-green-400
              text-black
              py-3
              rounded-2xl
              font-bold
              transition
            "
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