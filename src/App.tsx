import Header from "./components/ui/header";
import Principal from "./components/principal";
import Cards from "./components/cards";
import Download from "./components/download";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main
      className="min-h-screen w-full text-gray-900 
bg-[radial-gradient(circle_at_20%_30%,#0C5066,transparent_40%),linear-gradient(to_top_right,#0F172A,#020617)]"
    >
      <Header />
      <Principal />
      <Cards />
      <Download />
      <Footer />
    </main>
  );
}
