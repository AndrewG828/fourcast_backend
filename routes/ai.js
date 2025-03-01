const express = require("express");
const { queryMistral } = require("../huggingface");
const router = express.Router();

router.post("/mistral", async (req, res) => {
    const { message } = req.body;
    if (!message) return res.status(400).json({ error: "Message is required" });

    try {
        const aiResponse = await queryMistral(message);
        res.json({ response: aiResponse[0].generated_text });
    } catch (error) {
        res.status(500).json({ error: "Mistral API Error" });
    }
});

module.exports = router;
