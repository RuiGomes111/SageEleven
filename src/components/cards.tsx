import { LuLayoutDashboard } from "react-icons/lu";
import { FaCalendarAlt } from "react-icons/fa";
import { RxPeople } from "react-icons/rx";

export default function Cards() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 py-20 px-6 min-h-screen">

      
      <div className="text-center max-w-2xl">
        <h2 className="text-white text-3xl sm:text-4xl font-semibold">
          Tudo que sua escola precisa
        </h2>
        <p className="text-gray-500 font-semibold mt-2 text-sm sm:text-base">
          Funcionalidades pensadas para facilitar o dia a dia escolar.
        </p>
      </div>

      <section className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        
        <div className="bg-[#1E293B] p-6 sm:p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
          <LuLayoutDashboard className="text-2xl text-[#06B6D4] mb-3" />
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-100">
            Notas & Boletins
          </h3>
          <p className="text-gray-400 text-sm sm:text-base">
            Acompanhe o desempenho acadêmico em tempo real com gráficos intuitivos.
          </p>
        </div>

        <div className="bg-[#1E293B] p-6 sm:p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
          <FaCalendarAlt className="text-2xl text-[#10B981] mb-3" />
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-100">
            Agenda Escolar
          </h3>
          <p className="text-gray-400 text-sm sm:text-base">
            Provas, eventos e atividades organizados automaticamente no calendário.
          </p>
        </div>

        <div className="bg-[#1E293B] p-6 sm:p-8 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
          <RxPeople className="text-2xl text-[#8B5CF6] mb-3" />
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-100">
            Comunicação Direta
          </h3>
          <p className="text-gray-400 text-sm sm:text-base">
            Chat entre pais, professores e coordenação de forma segura e rápida.
          </p>
        </div>

      </section>

      
      <section className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-3 gap-6 bg-[#1E293B] rounded-2xl shadow-xl text-center p-8 sm:p-10">

        <div>
          <h3 className="text-3xl font-semibold mb-2 text-[#06B6D4]">500+</h3>
          <p className="text-gray-500">Escolas cadastradas</p>
        </div>

        <div>
          <h3 className="text-3xl font-semibold mb-2 text-[#8B5CF6]">120mil</h3>
          <p className="text-gray-500">Alunos ativos</p>
        </div>

        <div>
          <h3 className="text-3xl font-semibold mb-2 text-[#10B981]">4.9 ★</h3>
          <p className="text-gray-500">Nota nas lojas</p>
        </div>

      </section>

    </section>
  );
}