# 🎮 Reflection Cards — Build • Reflect • Improve

An interactive web app for pupils to practise self-reflection using the model:

👉 **Attempted → Stuck → Solution**

The web app seeks to help children (aged 10–12) learn to think like developers. They learn to:

* set a goal
* find errors
* suggest solutions

---

## ✨ Key Features

* 🧠 3 reflection cards (Attempted / Stuck / Solution)
* 📸 Export as an **HD image** (PNG)
* 🤖 AI feedback (via backend or local fallback)
* 🎨 Game-like UI (neon style)
* ⚡ Works straight in the browser (via GitHub Pages)

---

## 🧩 How It Works

1. The student describes what they wanted to do
2. They analyse what went wrong
3. They formulate a solution

👉 This is a **Learning Loop**:

> Goal → Try → Stumble → Improve → Reflect

---

## ⚙️ Installation & Running

```bash
git clone https://github.com/AndreiPabiarzhyn/reflection-cards-m1l2.git
cd reflection-cards-m1l2
```

Open `index.html` in your browser

---

## 🌍 Deployment (GitHub Pages)

1. Settings → Pages
2. Branch: `main`
3. Folder: `/root`
4. Save

---

## 🤖 AI Feedback

There are 2 modes available:

### 1. Fallback (always works)

Local logic inside the `app.js` file

### 2. Full AI (recommended)

Requires a backend (like Vercel)

File:

```
/api/ai.js
```

⚠️ Please note: the API key must never be stored on the front end

---

## 📁 Project Structure

```
/reflection-cards-m1l2
  ├── index.html
  ├── style.css
  ├── app.js
  └── /api
      └── ai.js
```

---

## 🎯 Project Goal

To create a tool that develops:

* critical thinking
* independence
* the ability to analyse mistakes
* the ability to improve outcomes

👉 The student hasn't just “completed the task”; instead, they:
**understood what they did and how to do it better**

---

## 🔮 Future Development

* 🎮 XP and levels
* 🏆 Achievement cards
* 📊 Student's progress history
* 🤖 Smarter AI feedback
* 🧠 Personalisation for the pupil’s level

---

## 👨‍💻 Author

Andrei Pabiarzhyn
EdTech / Product / Kodland

---

## 💡 Idea

The project is inspired by the educational model:

> **Independent Strategic Creator**
> (a student who doesn’t just do the work, but understands and improves it)

---
