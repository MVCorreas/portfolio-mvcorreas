import Image from "next/image";

export default function HeroSection() {
  return (
    <section>
      <div className="max-w-full">
        <Image
          src="/black-desktop.jpg"
          alt="Main"
          width={1200}
          height={600}
          className="rounded-lg mx-auto mb-8 w-full h-auto max-h-[600px] object-cover"
        />
        <h1 className="text-4xl font-extralight mb-4 py-8 text-center">
          Code with vision. Create with impact.
        </h1>
      </div>
    </section>
  );
}
