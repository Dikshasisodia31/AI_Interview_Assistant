
const { GoogleGenAI } = require("@google/genai");

const client = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

async function generateQuestions(role, difficulty, questions) {
    const prompt = `
Generate ${questions} interview questions.

Role: ${role}
Difficulty: ${difficulty}

Return ONLY a valid JSON array of strings.
Do not include markdown.
Do not include \`\`\`json.
Do not include any explanation.
Example:
["Question 1","Question 2"]
`;

    try {
        const response = await client.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
            config: {
                thinkingConfig: {
                    thinkingBudget: 0,
                },
            },
        });

        const text = response.text.trim();

        try {
            return JSON.parse(text);
        } catch {
            const match = text.match(/\[[\s\S]*\]/);

            if (!match) {
                throw new Error("Gemini did not return a valid JSON array.\n" + text);
            }

            return JSON.parse(match[0]);
        }
    } catch (err) {
        console.error("gemini error", err);
        throw err;
    }
}

module.exports = { generateQuestions };