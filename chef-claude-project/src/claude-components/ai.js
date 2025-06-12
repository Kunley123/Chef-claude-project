//install huggingface/inference dependencies using npm install from the terminal 


import { HfInference } from '@huggingface/inference';

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredient that a user has and suggest a recipe that could make with some or all of those ingredients. You dont need to use every ingredient they mention in ypour recipe. The recipe can include additional ingredient they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page.`

const hf = new HfInference(process.env.VITE_HF_ACCESS_TOKEN);

export async function getRecipeFromMistral(ingredientsArr) {
    const ingredientsString = ingredientsArr.join(', ');
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                { role: "system", content: "SYSTEM_PROMPT" },
                { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you would recommend I make!` },
            ],
            max_new_tokens: 1024,
        })
        return response.choices[0].message.content;
    } catch (err) {
        console.error(err.message)
    }
}

