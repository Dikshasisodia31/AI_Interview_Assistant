const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const client = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

(async () => {
    console.log("Sending request...");

    const response = await client.models.generateContent({
        model: "gemini-2.5-flash",
        contents: "Say hello in one sentence.",
    });

    console.log(response.text);
})();