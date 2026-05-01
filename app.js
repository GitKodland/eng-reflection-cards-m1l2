// ==========================
// 📸 DOWNLOAD AS HD IMAGE
// ==========================
function downloadImage() {

    const element = document.getElementById("cards");

    // cropping fix
    window.scrollTo(0, 0);

    html2canvas(element, {
        scale: window.devicePixelRatio * 2, // 🔥 great quality
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
// 🤖 AI FEEDBACK
// ==========================
async function generateFeedback() {

    const tried = document.getElementById("tried").value.trim();
    const stuck = document.getElementById("stuck").value.trim();
    const solution = document.getElementById("solution").value.trim();

    const feedbackEl = document.getElementById("feedback");

    // UX: checking
    if (!tried || !stuck || !solution) {
        feedbackEl.innerText = "⚠️ Fill out all the cards";
        return;
    }

    feedbackEl.innerText = "🤖 Thinking...";

    try {

        // ==========================
        // CALLING THE BACKEND (IMPORTANT!)
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
        // 🧠 FALLBACK (CLEVER LOCAL SOLUTION)
        // ==========================
        feedbackEl.innerText = generateLocalFeedback(tried, stuck, solution);
    }
}


// ==========================
// 🧠 LOCAL FEEDBACK (if AI is unavailable)
// ==========================
function generateLocalFeedback(tried, stuck, solution) {

    let feedback = "💬 Feedback:\n\n";

    // 1. Attempted
    if (tried.length < 20) {
        feedback += "👉 Try to describe your idea more clearly.\n";
    } else {
        feedback += "✅ Great! You've done a great job explaining what you've attempted to do.\n";
    }

    // 2. Problem
    if (stuck.length < 10 || stuck.includes("don't know")) {
        feedback += "👉 Try to analyse your problem.\n";
    } else {
        feedback += "👍 Great! You have a clear understanding of the issue that has to be fixed!\n";
    }

    // 3. Solution
    if (solution.length < 10) {
        feedback += "👉 What do you want to improve? Try adding clear, easy-to-follow steps.\n";
    } else {
        feedback += "🚀 A good solution! You think like a true developer!\n";
    }

    feedback += "\n✨ Keep going! You're on the right track!";

    return feedback;
}
