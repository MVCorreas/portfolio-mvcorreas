import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";

import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden p-4 md:p-12">
        <Image
          src="/red-keyboard.jpg"
          alt="Background"
          fill
          className="object-cover opacity-80 absolute inset-0 -z-10"
          priority
        />
        <div
          className="relative bg-black text-white rounded-xl shadow-xl w-full max-w-8xl flex flex-col"
          style={{ height: "90vh" }}
        >
          <div className="sticky top-4 z-10 px-8 pt-4 bg-black rounded-t-xl">
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
