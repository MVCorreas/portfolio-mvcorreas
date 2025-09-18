import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative bg-primary top-12 p-8 rounded-xl min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Top Left Image */}
      <Image
        src="/yellow-flowers.jpg"
        alt="Yellow fabric"
        width={260}
        height={460}
        className="absolute top-12 left-4 rounded-xl shadow-lg"
      />
      {/* Top Right Image */}
      <Image
        src="/yellow-desktop.jpg"
        alt="Yellow chairs"
        width={300}
        height={600}
        className="absolute top-16 right-12 rounded-xl shadow-lg"
      />
      {/* Bottom Left Image */}
      <Image
        src="/yellow-keyboard.jpg"
        alt="Yellow stairs"
        width={280}
        height={280}
        className="absolute top-72 left-36 rounded-xl shadow-lg"
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
