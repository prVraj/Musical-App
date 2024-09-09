import Cards from "@/components/Cards";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import { MovingCards } from "@/components/MovingCards";
import UpComingWebinars from "@/components/UpComingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      {/* <h1 className="text-2xl text-center">Yo, watasiwa VrajSensei</h1> */}

      <HeroSection />
      <Cards />
      <WhyChooseUs />
      <MovingCards/>
      <UpComingWebinars/>
      <Instructor/>
      <Footer/>
    </main>
  );
}
