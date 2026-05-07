import { CiMobile3 } from "react-icons/ci";

export default function Principal() {
  return (
    <div className="relative w-full overflow-hidden">

      <div className="grid grid-cols-1 md:grid-cols-5 items-center px-6 md:px-20 py-20 gap-10">

        
        <div className="md:col-span-2 flex flex-col gap-5 text-center md:text-left">

          <span className="text-[#06B6D4] bg-[#06B6D4]/10 px-4 py-1 rounded-full text-sm w-fit mx-auto md:mx-0">
            #1 em Gestão Escolar
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
            Gestão escolar na palma da mão
          </h2>

          <p className="text-gray-400 text-base md:text-lg">
            Controle notas, frequência, comunicados e muito mais em um único
            aplicativo intuitivo para pais, alunos e professores.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start ">

            <button className="bg-[#06B6D4] text-white px-6 py-3 rounded-2xl flex items-center gap-2 hover:scale-105 transition duration-300 justify-center">
              <CiMobile3 /> Baixar Agora
            </button>

            <button className="border border-gray-600 text-white px-6 py-3 rounded-2xl hover:scale-105 transition duration-300">
              Saiba Mais
            </button>

          </div>

        </div>

        {/* IMAGEM */}
        <div className="md:col-span-3 flex justify-center md:justify-end relative">

          {/* glow de fundo estilo Apple */}
          <div className="absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#06B6D4]/20 blur-3xl rounded-full"></div>

          <img
            src="/mobile.png"
            alt="imagem de telemovel"
            className="
              relative z-10
              w-[280px]
              sm:w-[380px]
              md:w-[600px]
              lg:w-[750px]
              xl:w-[850px]
              drop-shadow-2xl
              transform md:translate-x-10
               animate-float
            "
          />
        </div>

      </div>
    </div>
  );
}