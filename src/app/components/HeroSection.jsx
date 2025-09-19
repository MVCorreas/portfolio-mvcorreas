import Image from "next/image";
import Header from "./Header";

export default function HeroSection({ children }) {
    return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden p-4 md:p-12">
            {/* Background Image */}
            <Image
                src="/black-desktop.jpg"
                alt="Background"
                fill
                className="object-cover opacity-80 absolute inset-0 -z-10"
                priority
            />
            {/* Main Box */}
            <div className="relative bg-black text-white rounded-xl shadow-xl p-8 w-full max-w-8xl">
                {/* Header Menu */}
              <Header />
                {/* Main Image and Content */}
                <div className="max-w-full">
                    <Image
                        src="/black-desktop.jpg"
                        alt="Main"
                        width={1200}
                        height={600}
                        className="rounded-lg mx-auto mb-8 w-full h-auto max-h-[600px] object-cover"
                    />
                   <h1 className="text-4xl font-extralight mb-4 text-center">Code with vision. Create with impact.</h1>
                </div>
            </div>
        </section>
    );
}

