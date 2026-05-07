import { GoDownload } from "react-icons/go";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 md:px-10">

      
      <div className="flex items-center gap-2">
        <img
          src="/logo.jpeg"
          alt="logo sageEleven"
          className="w-10 h-10 md:w-12 md:h-12 rounded-2xl"
        />

        <span className="text-xl md:text-2xl font-bold text-white">
          SageEleven
        </span>
      </div>

      
      <button className="flex items-center gap-2 bg-[#06B6D4] text-white rounded-2xl px-4 py-2 text-sm md:text-base hover:scale-105 transition duration-300 cursor-pointer">
        <GoDownload />
        <span className="hidden sm:inline">Baixar Agora</span>
      </button>

    </header>
  );
}