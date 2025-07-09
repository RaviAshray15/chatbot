# 🧠 Chatbot – React + Flask + Gemini AI

This is a full-stack chatbot web app built with **React + Vite** on the frontend and **Flask** on the backend. It integrates with **Google Gemini AI** to provide conversational responses specifically about **Ravi Ashray**, with a casual and Telugu-infused personality.

---

## 📁 Project Structure

```
Chatbot/
├── backend/                     # Main Flask app with Gemini integration
│   ├── app.py                   
│   └── requirements.txt         
│
├── frontend/                    # React + Vite frontend
│   ├── public/                  
│   ├── src/                    
│   │   ├── Chat.jsx           
│   │   ├── index.css            
│   │   └── main.jsx             
│   ├── .gitignore               
│   ├── index.html               
│   ├── package.json             
│   └── vite.config.js            
│
├── .gitignore                   
└── README.md                    
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/chatbot.git
cd chatbot
```

### 2. Setup Backend (Flask + Gemini)

```bash
cd backend
python -m venv venv
source venv/bin/activate     
pip install -r requirements.txt
python app.py
```

### 3. Setup Frontend (React + Vite)


```bash
cd frontend
npm install
npm run dev
```

### 4. Environment

Ensure your Gemini API key is valid in `app.py`. The backend runs on `localhost:5000`, and frontend on `localhost:5173` by default.

---

## 🧠 Features

- Chatbot with personality (answers in casual Telugu tone)
- Gemini AI integration
- Custom UI with animated typing and design font
- Frontend-backend communication with Axios and CORS

---

## 📦 Tech Stack

- **Frontend:** React, Vite, CSS
- **Backend:** Flask, Google Generative AI
- **Other Tools:** Axios, CORS, Git

---

## 🤖 Powered by
**Google Gemini AI** and built with ❤️ by Ravi Ashray.

---
