const ProjectOverview = ({ data }) => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* Left Image */}
                <div>
                    <img
                        src="https://images.unsplash.com/photo-1568605114967-8130f3a36994"
                        alt="Project"
                        className="rounded-xl shadow-lg"
                    />
                </div>

                {/* Right Content */}
                <div>
                    <h2 className="text-4xl font-bold mb-6">
                        {data.heading}
                    </h2>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                        {data.description}
                    </p>

                    <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
                        {data.buttonText}
                    </button>
                </div>

            </div>
        </section>
    );
};

export default ProjectOverview;
