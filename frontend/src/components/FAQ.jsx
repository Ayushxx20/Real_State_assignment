import { useState } from "react";

const FAQ = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-4xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-12">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-6">
                    {data.faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border rounded-lg p-6 shadow-sm"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left flex justify-between items-center font-semibold text-lg"
                            >
                                {faq.question}
                                <span>
                                    {activeIndex === index ? "-" : "+"}
                                </span>
                            </button>

                            {activeIndex === index && (
                                <p className="mt-4 text-gray-600">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQ;
