import { readFileSync, writeFileSync } from "fs";
import OpenAI from "openai";

const ARTICLE_PATH = "./article.txt";

async function generateHTMLContent(articleContent) {
  const prompt = `Transform the following article into HTML content based on the following guidelines:
    1. Only include content that goes inside the <body> tags; do not include <html>, <head>, or <body> tags themselves.
    2. Use appropriate HTML tags to structure the content logically.
    3. Identify sections where images would be useful and insert <img src="image_placeholder.jpg"> tags. Add an alt attribute to each image tag with a suitable description that can be used to generate the image.
    4. Add a caption under each image using appropriate HTML tags.
    5. Do not include any CSS or JavaScript code.
    
Article: ${articleContent}`;

  const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Do not use markdown formatting" },
      { role: "user", content: prompt },
    ],
    response_format: { type: "text" },
  });

  return completion.choices[0].message.content;
}

async function main() {
  try {
    const articleContent = readFileSync(ARTICLE_PATH, { encoding: "utf-8" });
    const htmlContent = await generateHTMLContent(articleContent);

    writeFileSync("artykul.html", htmlContent, "utf-8");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
