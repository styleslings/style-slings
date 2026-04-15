import Navbar from "../Components/Navbar";
import VHeroSection from "./VHeroSection";
import Footer from "../Components/Footer";



export default function Home() {
  return (
    <>
    <main className="relative flex flex-col min-h-screen">
        <Navbar className="absolute top-0 z-10 w-screen" />
      
        <VHeroSection />
       <Footer />

     

    </main>

    </>
  );
}