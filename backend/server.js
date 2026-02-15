dotenv.config();


import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import contentRoutes from "./routes/contentRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"




const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/content", contentRoutes);
app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
    res.json({
        message: 'Backend API is running!',
        status: 'success'
    });
});



mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("MongoDB Connected");
        app.listen(process.env.PORT, () =>
            console.log(`Server running on port ${process.env.PORT}`)
        );
    })
    .catch(err => console.log(err));

