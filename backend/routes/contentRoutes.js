import express from "express";
import Content from "../models/Content.js";


const router = express.Router();


// router.get('/', async (req, res) => {

//     try {
//         const data = await Content.find()
//         res.json(data)
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// })
router.get("/", async (req, res) => {
    try {
        const data = await Content.find();

        const formattedData = {};

        data.forEach(item => {
            formattedData[item.section] = item.content;
        });

        res.json(formattedData);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.put('/:section', async (req, res) => {

    try {

        const { section } = req.params;

        const updated = await Content.findOneAndUpdate({ section },
            { content: req.body },
            { new: true, upsert: true }
        )

        res.json(updated)
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

export default router;