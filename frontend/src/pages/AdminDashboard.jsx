import { useEffect, useState } from "react";
import API from "../services/api";

const AdminDashboard = () => {
    const [content, setContent] = useState(null);
    const [activeSection, setActiveSection] = useState("hero");
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        const fetchContent = async () => {
            const res = await API.get("/content");
            setContent(res.data);
            setFormData(res.data.hero);
        };

        fetchContent();
    }, []);

    useEffect(() => {
        if (content) {
            setFormData(content[activeSection]);
        }
    }, [activeSection, content]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSave = async () => {
        try {
            await API.put(`/content/${activeSection}`, formData);
            alert(`${activeSection} updated successfully ✅`);
        } catch (error) {
            console.error(error);
            alert("Update failed ❌");
        }
    };

    if (!content || !formData) return <h2 className="text-center mt-20">Loading...</h2>;

    return (
        <div className="min-h-screen flex bg-gray-100">

            {/* Sidebar */}
            <div className="w-64 bg-black text-white p-6 space-y-4">
                <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>

                {[
                    "hero",
                    "projectOverview",
                    "connectivity",
                    "amenities",
                    "about",
                    "constructionUpdates",
                    "faq"
                ].map((section) => (
                    <button
                        key={section}
                        onClick={() => setActiveSection(section)}
                        className={`block w-full text-left px-4 py-2 rounded-lg ${activeSection === section
                            ? "bg-white text-black"
                            : "hover:bg-gray-700"
                            }`}
                    >
                        {section}
                    </button>
                ))}
                <button
                    onClick={() => {
                        localStorage.removeItem("admin");
                        window.location.href = "/admin";
                    }}
                    className="mt-10 bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
                >
                    Logout
                </button>

            </div>

            {/* Editor */}
            <div className="flex-1 p-10">
                <h1 className="text-3xl font-bold mb-8 capitalize">
                    Edit {activeSection}
                </h1>

                <div className="bg-white p-8 rounded-xl shadow-lg space-y-4">

                    {/* STRING FIELDS */}
                    {Object.keys(formData).map((key) => {
                        if (typeof formData[key] === "string") {
                            return (
                                <input
                                    key={key}
                                    type="text"
                                    name={key}
                                    value={formData[key]}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-lg"
                                    placeholder={key}
                                />
                            );
                        }
                        return null;
                    })}

                    {/* CONNECTIVITY ARRAY */}
                    {activeSection === "connectivity" &&
                        Array.isArray(formData?.points) &&
                        formData.points.map((point, index) => (
                            <input
                                key={index}
                                type="text"
                                value={point}
                                onChange={(e) => {
                                    const updatedPoints = [...formData.points];
                                    updatedPoints[index] = e.target.value;
                                    setFormData({ ...formData, points: updatedPoints });
                                }}
                                className="w-full p-3 border rounded-lg"
                                placeholder={`Point ${index + 1}`}
                            />
                        ))}


                    {/* AMENITIES ARRAY */}
                    {activeSection === "amenities" &&
                        Array.isArray(formData?.items) &&
                        formData.items.map((item, index) => (
                            <input
                                key={index}
                                type="text"
                                value={item.title}
                                onChange={(e) => {
                                    const updatedItems = [...formData.items];
                                    updatedItems[index].title = e.target.value;
                                    setFormData({ ...formData, items: updatedItems });
                                }}
                                className="w-full p-3 border rounded-lg"
                                placeholder={`Amenity ${index + 1}`}
                            />
                        ))}


                    {/* FAQ ARRAY */}
                    {activeSection === "faq" &&
                        Array.isArray(formData?.faqs) &&
                        formData.faqs.map((faq, index) => (
                            <div key={index} className="space-y-2 border p-4 rounded-lg">
                                <input
                                    type="text"
                                    value={faq.question}
                                    onChange={(e) => {
                                        const updatedFaqs = [...formData.faqs];
                                        updatedFaqs[index].question = e.target.value;
                                        setFormData({ ...formData, faqs: updatedFaqs });
                                    }}
                                    className="w-full p-3 border rounded-lg"
                                    placeholder="Question"
                                />
                                <input
                                    type="text"
                                    value={faq.answer}
                                    onChange={(e) => {
                                        const updatedFaqs = [...formData.faqs];
                                        updatedFaqs[index].answer = e.target.value;
                                        setFormData({ ...formData, faqs: updatedFaqs });
                                    }}
                                    className="w-full p-3 border rounded-lg"
                                    placeholder="Answer"
                                />
                            </div>
                        ))}


                    <button
                        onClick={handleSave}
                        className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
                    >
                        Save Changes
                    </button>

                </div>

            </div>
        </div>
    );
}

export default AdminDashboard;