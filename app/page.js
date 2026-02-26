import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";

import Reviews from "./Components/Reviews";
import Footer from "./Components/Footer";



export default function Home() {
  return (
    <>
    <main className="relative flex flex-col min-h-screen">
        <Navbar className="absolute top-0 z-10 w-screen" />
      
       <HeroSection />
       <Reviews />
       <Footer />

      

    </main>

    </>
  );
}