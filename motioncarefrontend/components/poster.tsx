import Link from 'next/link'

export const Poster = () => {
    return (
        <div
            className="mt-[60px] relative w-full h-[70vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{ backgroundImage: "url('/image.png')" }}
        >  {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>
            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-8">
                <h4 className="text-xl sm:text-2xl md:text-4xl font-bold text-white">
                    Welcome to Our Physiotherapy Centre
                </h4>
                <p className="text-sm sm:text-base md:text-xl mt-2 text-white">
                    Your Recovery, Our Priority
                </p>
                <Link
                    href="/appointmentform"
                    className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base md:text-lg font-semibold py-2 px-5 sm:py-3 sm:px-6 rounded-lg shadow-md transition"
                >
                    Book Appointment
                </Link>
            </div>
        </div>
    );
};
