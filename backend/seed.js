import mongoose from "mongoose";
import dotenv from "dotenv";
import Content from "./models/Content.js";

dotenv.config();

const seedData = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connected for Seeding");

        // Clear existing data
        await Content.deleteMany({});
        console.log("Old content removed");

        // Insert fresh data
        await Content.insertMany([
            {
                section: "hero",
                content: {
                    title: "Infinity Smart Living",
                    subtitle: "Premium 2 & 3 BHK Homes",
                    price1: "₹ 69.99 Lacs*",
                    price2: "₹ 96.99 Lacs*",
                    location: "Thane, Mumbai"
                }
            },
            {
                section: "projectOverview",
                content: {
                    heading: "About Project",
                    description:
                        "This premium township offers smart living with modern architecture and lifestyle amenities.",
                    buttonText: "Download Brochure"
                }
            },
            {
                section: "connectivity",
                content: {
                    points: [
                        "5 mins from Metro Station",
                        "10 mins from Highway",
                        "15 mins from Mall"
                    ]
                }
            },
            {
                section: "amenities",
                content: {
                    items: [
                        { title: "Gymnasium" },
                        { title: "Swimming Pool" },
                        { title: "Kids Play Area" },
                        { title: "Jogging Track" },
                        { title: "Club House" },
                        { title: "Garden Area" }
                    ]
                }
            },
            {
                section: "about",
                content: {
                    title: "About Us",
                    description:
                        "We are a leading real estate developer committed to quality and timely delivery."
                }
            },
            {
                section: "constructionUpdates",
                content: {
                    status: "Ongoing",
                    expectedCompletion: "Dec 2026"
                }
            },
            {
                section: "faq",
                content: {
                    faqs: [
                        {
                            question: "What is possession date?",
                            answer: "Possession is expected by 2026."
                        },
                        {
                            question: "Is loan facility available?",
                            answer: "Yes, loans are available from leading banks."
                        },
                        {
                            question: "What are the payment plans ?",
                            answer: "We offer flexible payment plans to suit your needs."
                        }
                    ]
                }
            }
        ]);

        console.log("Seeding Completed Successfully ✅");
        process.exit();
    } catch (error) {
        console.error("Seeding Failed ❌", error);
        process.exit(1);
    }
};

seedData();
