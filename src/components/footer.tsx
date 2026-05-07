const data = new Date();
const ano = data.getFullYear();

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 py-10 px-6 text-gray-100 border-t border-gray-800 mt-20 text-center">

      <p className="text-sm sm:text-base">
        © SageEleven, {ano}. Todos os direitos reservados.
      </p>

    </footer>
  );
}