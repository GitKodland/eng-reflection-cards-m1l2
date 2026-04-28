// ==========================
// 📸 СКАЧАТЬ КАК HD КАРТИНКУ
// ==========================
function downloadImage() {

    const element = document.getElementById("cards");

    // фикс обрезания
    window.scrollTo(0, 0);

    html2canvas(element, {
        scale: window.devicePixelRatio * 2, // 🔥 супер качество
        useCORS: true,
        backgroundColor: null
    }).then(canvas => {

        const link = document.createElement('a');
        link.download = 'reflection_hd.png';
        link.href = canvas.toDataURL("image/png", 1.0);

        link.click();
    });
}
// ==========================
// 🤖 AI ФИДБЕК
// ==========================
async function generateFeedback() {

    const tried = document.getElementById("tried").value.trim();
    const stuck = document.getElementById("stuck").value.trim();
    const solution = document.getElementById("solution").value.trim();

    const feedbackEl = document.getElementById("feedback");

    // UX: проверка
    if (!tried || !stuck || !solution) {
        feedbackEl.innerText = "⚠️ Заполни все карточки";
        return;
    }

    feedbackEl.innerText = "🤖 Думаю...";

    try {

        // ==========================
        // ВЫЗОВ BACKEND (ВАЖНО!)
        // ==========================
        const res = await fetch("/ai", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                tried,
                stuck,
                solution
            })
        });

        if (!res.ok) throw new Error("AI error");

        const data = await res.json();

        feedbackEl.innerText = data.feedback;

    } catch (e) {

        // ==========================
        // 🧠 FALLBACK (умный локальный)
        // ==========================
        feedbackEl.innerText = generateLocalFeedback(tried, stuck, solution);
    }
}


// ==========================
// 🧠 ЛОКАЛЬНЫЙ ФИДБЕК (если AI упал)
// ==========================
function generateLocalFeedback(tried, stuck, solution) {

    let feedback = "💬 Фидбек:\n\n";

    // 1. Попробовал
    if (tried.length < 20) {
        feedback += "👉 Попробуй описать идею подробнее.\n";
    } else {
        feedback += "✅ Круто! Ты четко описал, что хотел сделать.\n";
    }

    // 2. Проблема
    if (stuck.length < 10 || stuck.includes("не знаю")) {
        feedback += "👉 Попробуй точнее понять проблему.\n";
    } else {
        feedback += "👍 Отлично, ты заметил, что пошло не так.\n";
    }

    // 3. Решение
    if (solution.length < 10) {
        feedback += "👉 Добавь конкретные шаги, что будешь делать.\n";
    } else {
        feedback += "🚀 Хорошее решение! Ты думаешь как разработчик.\n";
    }

    feedback += "\n✨ Продолжай, ты на правильном пути!";

    return feedback;
}