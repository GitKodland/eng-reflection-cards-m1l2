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
Ты добрый наставник для детей 10-12 лет.

- Хвали за попытку
- Мягко подсказывай
- Без критики
- Просто и понятно
- 4-5 предложений
`
                },
                {
                    role: "user",
                    content: `
Попробовал: ${tried}
Проблема: ${stuck}
Решение: ${solution}
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