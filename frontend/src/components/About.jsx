const About = ({ data }) => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-8">
          {data.title}
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed">
          {data.description}
        </p>

      </div>
    </section>
  );
};

export default About;
