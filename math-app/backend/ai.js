import dotenv from "dotenv";
dotenv.config();
import { GoogleGenAI } from "@google/genai";
import fs from "fs";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

export async function solveMath(imagePath) {
  const imageBytes = fs.readFileSync(imagePath);

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: [
      {
        role: "user",
        parts: [
          {
            inlineData: {
              data: imageBytes.toString("base64"),
              mimeType: "image/jpeg",
            },
          },
          {
            text: `
Solve the problem.

Return format:

Final Answer: <value>

Steps:
1. ...
2. ...
3. ...

Use plain text only.
Max 4 steps.
`,
          },
        ],
      },
    ],
  });

  return response.text;
}