import plancha from "./assets/plancha.jpeg";
import reflector3 from "./assets/reflector3.jpeg";
import globos from "./assets/globos.jpeg";
import audifonos from "./assets/audifonos.jpeg";
import cafetera from "./assets/cafetera.jpeg";
import dispensador from "./assets/dispensador.jpeg";
import procesador from "./assets/procesador.jpeg";
import bascula from "./assets/bascula.jpeg";
import banquito from "./assets/banquito.jpeg";
import molino from "./assets/molino.jpeg";
import ventilador5 from "./assets/ventilador5.jpeg";
import reflector2 from "./assets/reflector2.jpeg";
import base from "./assets/base.jpeg";
import vaso from "./assets/vaso.jpeg";
import luces from "./assets/luces.jpeg";
import huevos from "./assets/huevos.jpeg";
import cuello from "./assets/cuello.jpeg";
import astronauta from "./assets/astronauta.jpeg";
import pasta from "./assets/pasta.jpeg";

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

function ProductCard({ product }) {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      overflow-hidden
      shadow-md
      hover:shadow-xl
      transition-all
      duration-300
    "
    >
      <div className="bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover"
        />
      </div>

      <div className="p-4">

        <h2 className="text-gray-800 font-semibold text-lg line-clamp-2">
          {product.name}
        </h2>

        <p className="text-green-600 text-xl font-bold mt-2">
          {product.price}
        </p>

        <button
          className="
          mt-4
          w-full
          bg-black
          hover:bg-zinc-800
          text-white
          py-2.5
          rounded-xl
          font-medium
          transition
        "
        >
          Comprar
        </button>

      </div>
    </div>
  );
}
export default function App() {
  return (
  <div className="min-h-screen bg-gray-100">
      
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          
          <h1 className="text-3xl font-black text-black">
            Catálogo
          </h1>

          <button className="bg-green-500 hover:bg-green-400 text-black px-5 py-2 rounded-2xl font-bold transition">
            WhatsApp
          </button>

        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 pt-16 pb-10">

        <div
        className="
        rounded-[40px]
        overflow-hidden
        relative
        bg-lineal-to-r
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

      <h1 className="text-5xl md:text-7xl font-black text-black leading-tight">
        Gadgets y accesorios
      </h1>

      <p className="text-black/80 text-lg mt-6">
        Catálogo de productos modernos, útiles y virales.
      </p>

      <button
        className="
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
      </button>

    </div>

  </div>

</section>

      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="mb-10">
          <input
            type="text"
            placeholder="Buscar producto..."
            className="
            w-full
            bg-white/5
            backdrop-blur-md
            border border-white/10
            rounded-2xl
            p-4
            outline-none
            focus:border-green-500
          "
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
            />
          ))}

        </div>

      </section>

    </div>
  );
}