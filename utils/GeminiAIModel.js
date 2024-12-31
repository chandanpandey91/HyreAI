const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run() {
  try {
    // Get the generative model
    const model = await genAI.getGenerativeModel({
      model: "gemini-2.0-flash-exp",
    });

    // Start a chat session
    const chatSession = await model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {
              text: "Job Position: Full stack developer, job description: react, nodejs, mysql, years of experience: 6. Based on this information, please provide 5 interview questions with answers in JSON format, with 'question' and 'answer' as fields.",
            },
          ],
        },
      ],
    });

    // Generate a response
    const response = await chatSession.generate();

    // Output the result
    console.log(response.output);
  } catch (error) {
    console.error("Error:", error);
  }
}

run();
