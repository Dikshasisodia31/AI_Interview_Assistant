const {GoogleGenAI} = require("@google/genai");

const client = new GoogleGenAI({
    apiKey : process.env.GEMINI_API_KEY,
});

async function evaluateInterview(interview) {
    const qa = interview.questions.map((q,index)=>`Question ${index+1} : ${q.question}
    Answer : ${q.answer}`).join("\n");
    const prompt = `You are a senior technical interviewer.
    Role : ${interview.role}
    Difficulty : ${interview.difficulty}
    Evaluate the candidate's answers.
    Inteview :
    return ONLY valid JSON.
    {
      "overallScore" : 85,
      "overallFeedback" : "Overall feedback here",
      "strengths" : [
         "strength 1"
      ],
      "weaknesses" : [
         "weakness 1"
       ],
       "questions": : [
       {
          "score" : 8,
          "feedback": "Feedback for question 1"
       },
       {
          "score": 6,
          "feedback": "Feedback for question 2"
       }
       ]
    }
    Rules : 
    - overall score between 0 and 100.
    - Each question score should be between 0 and 10.
    - Return JSON ONLY.
    - No markdown.
    - No explanation.`;


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

            const match = text.match(/\{[\s\S]*\}/);

            if (!match) {
                throw new Error("Gemini returned invalid JSON");
            }

            return JSON.parse(match[0]);
        }

    } catch (err) {

        console.error("Gemini evaluation error:", err);
        throw err;
    }
}
module.exports = { evaluateInterview };