import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa";

export default function Cards() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 py-20 px-6 text-center">

      
      <div className="max-w-xl">
        <h2 className="text-white text-3xl sm:text-4xl font-semibold">
          Comece agora mesmo
        </h2>

        <p className="text-gray-500 font-semibold mt-2 text-sm sm:text-base">
          Disponível para iOS e Android. Gratuito para escolas parceiras.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 text-gray-100">

        <button className="flex items-center justify-center gap-2 border rounded-2xl px-5 py-3 hover:scale-105 transition duration-300 cursor-pointer w-full sm:w-auto">
          <FaApple />
          App Store
        </button>

        <button className="flex items-center justify-center gap-2 border rounded-2xl px-5 py-3 hover:scale-105 transition duration-300 cursor-pointer w-full sm:w-auto">
          <IoLogoGooglePlaystore />
          Google Play
        </button>

      </div>

    </section>
  );
}