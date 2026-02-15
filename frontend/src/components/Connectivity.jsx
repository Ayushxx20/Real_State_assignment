const Connectivity = ({ data }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl font-bold mb-12">
          Nearby Connectivity
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {data.points.map((point, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="text-3xl mb-4">📍</div>
              <p className="text-lg font-medium">
                {point}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Connectivity;
