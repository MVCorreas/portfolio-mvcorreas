import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-primary top-12 p-8 rounded-xl min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Top Left Image */}
      <Image
        src="/yellow-flowers.jpg"
        alt="Yellow flowers"
        width={460}
        height={460}
        className="absolute bottom-120 left-4 rounded-4xl shadow-2xl md:bottom-124 sm:bottom-124"
      />
      {/* Top Right Image */}
      <Image
        src="/yellow-desktop.jpg"
        alt="Yellow desktop"
        width={300}
        height={600}
        className="absolute top-16 right-0 rounded-4xl shadow-2xl md:right-[-48px] sm:right-[-124px]"
      />
      {/* Bottom Left Image */}
      <Image
        src="/yellow-keyboard.jpg"
        alt="Yellow keyboard"
        width={280}
        height={280}
        className="absolute lg:top-64 lg:left-12 rounded-4xl shadow-2xl sm:top-124 sm:left-72"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-extrabold mb-4 text-black">
          MARIA VICTORIA CORREAS
        </h1>
        <p className="text-3xl text-black">Full Stack Developer</p>
      </div>
    </section>
  );
}
