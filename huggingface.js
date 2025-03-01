const axios = require("axios");

const HF_API_KEY = process.env.AI_API_KEY;

async function queryMistral(prompt) {
    try {
        const response = await axios.post(
            "https://api-inference.huggingface.co/models/mistralai/Mixtral-8x7B-Instruct-v0.1",
            { inputs: prompt },
            {
                headers: { Authorization: `Bearer ${HF_API_KEY}` },
            }
        );

        return response.data;
    } catch (error) {
        console.error("Hugging Face API Error:", error.response?.data || error.message);
        throw new Error("Failed to fetch response from Hugging Face API");
    }
}

module.exports = { queryMistral };
