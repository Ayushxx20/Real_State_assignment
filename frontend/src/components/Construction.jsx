const Construction = ({ data }) => {
    return (
        <section className="py-20 bg-gray-900 text-white">
            <div className="max-w-4xl mx-auto px-6 text-center">

                <h2 className="text-4xl font-bold mb-10">
                    Construction Updates
                </h2>

                <div className="bg-white text-black p-10 rounded-xl shadow-xl">

                    <h3 className="text-2xl font-semibold mb-4">
                        Status: {data.status}
                    </h3>

                    <p className="text-lg">
                        Expected Completion: {data.expectedCompletion}
                    </p>

                </div>

            </div>
        </section>
    );
};

export default Construction;
