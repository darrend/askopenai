import { OpenAI } from "https://deno.land/x/openai_deno@v0.9.1/mod.ts";

const instance = new OpenAI();

const response = await instance.createCompletion("text-davinci-003", {
  prompt: `${Deno.args[0]}:\n\n\n`,
  maxTokens: 1024,
  temperature: 1,
  count: 1,
});

response.choices.forEach((choice) => {
  console.info(choice.text);
});
