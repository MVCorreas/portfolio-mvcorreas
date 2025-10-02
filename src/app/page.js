import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden p-4 md:p-12">
        <Image
          src="/light-bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-40 absolute inset-0 -z-10"
          priority
        />
      

        <div className="relative opacity-120 max-w-[80vw] w-full h-[85vh] md:h-[90vh] lg:h-[85vh] shadow-xl rounded-2xl flex flex-col">
           <Image
          src="/pink-desktop.jpg"
          alt="Background"
          fill
          className="object-cover opacity-40 absolute inset-0 -z-10"
          priority
        />
        <div className="absolute inset-0 bg-black/40 -z-5 rounded-2xl"></div>
          <div className="sticky top-4 z-10 px-8 pt-4  rounded-t-xl">
            <Header />
          </div>
          <div className="flex-1 overflow-y-auto p-4 md:p-8">
            <HeroSection />
            <AboutSection />
          </div>
        </div>
      </div>
    </div>
  );
}
