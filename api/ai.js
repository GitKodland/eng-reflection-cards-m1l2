export default async function handler(req, res) {

    const { tried, stuck, solution } = req.body;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: `
You are a kind mentor for children aged 10-12.

- Praise for the attempts
- Offer suggestions gently
- Do not criticise
- Respond in a simple and clear fashion
- Limit assessment to 4-5 sentences
`
                },
                {
                    role: "user",
                    content: `
Attempted: ${tried}
The problem: ${stuck}
The solution: ${solution}
`
                }
            ]
        })
    });

    const data = await response.json();

    res.status(200).json({
        feedback: data.choices[0].message.content
    });
}
