const Hero = ({ data }) => {
    return (
        <section className="relative bg-gray-900 text-white">

            {/* Background Image */}
            <div
                className="h-screen bg-cover bg-center flex items-center justify-center"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')"
                }}
            >
                <div className="bg-black bg-opacity-60 p-10 rounded-xl text-center max-w-3xl">

                    <h1 className="text-5xl font-bold mb-4">
                        {data.title}
                    </h1>

                    <p className="text-xl mb-6">
                        {data.subtitle}
                    </p>

                    <div className="flex justify-center gap-6 mb-6">
                        <div className="bg-white text-black px-6 py-3 rounded-lg font-semibold">
                            {data.price1}
                        </div>
                        <div className="bg-white text-black px-6 py-3 rounded-lg font-semibold">
                            {data.price2}
                        </div>
                    </div>

                    <p className="text-lg font-medium">
                        📍 {data.location}
                    </p>

                </div>
            </div>
        </section>
    );
};

export default Hero;
