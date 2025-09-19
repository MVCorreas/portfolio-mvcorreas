import Image from "next/image";

export default function MainBox({ children }) {
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
                <nav className="flex justify-between items-center mb-6">
                    <span className="font-bold text-lg">Maria V Correas</span>
                    <ul className="flex space-x-6 text-sm">
                        <li>WORK</li>
                        <li>ABOUT US</li>
                        <li>SERVICES</li>
                        <li>AWARDS</li>
                        <li>PUBLICATIONS</li>
                        <li>CONTACT</li>
                    </ul>
                </nav>
                {/* Main Image and Content */}
                <div className="max-w-full">
                    <Image
                        src="/black-desktop.jpg"
                        alt="Main"
                        width={1200}
                        height={600}
                        className="rounded-lg mx-auto mb-8 w-full h-auto max-h-[600px] object-cover"
                    />
                   <h1 className="text-3xl font-bold mb-4 text-center">Code with vision. Create with impact.</h1>
                </div>
            </div>
        </section>
    );
}

