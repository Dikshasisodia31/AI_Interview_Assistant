# 🤖 AI Interview Preparation Platform

An AI-powered interview preparation platform built using the **MERN Stack** that helps users practice technical interviews for different job roles. Users can create customized mock interviews by selecting a role, difficulty level, and number of questions. The platform uses **Google Gemini AI** to generate interview questions and provide an interactive interview experience.

---

## 🚀 Features

* 🔐 User Authentication using JWT
* 👤 User Registration & Login
* 📊 Dashboard to manage interviews
* 📝 Create customized mock interviews
* 🎯 Select job role (MERN, Java, Frontend, Backend, AI/ML, etc.)
* 📈 Choose interview difficulty (Easy, Medium, Hard)
* 🤖 AI-generated interview questions using Google Gemini API
* 💬 Interactive interview session
* 📦 MongoDB database for storing interviews and responses
* 🔒 Protected routes with JWT authentication
* 📱 Responsive UI built with React and Bootstrap

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Bootstrap

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* Mongoose

### Authentication

* JSON Web Token (JWT)
* Local Storage

### AI Integration

* Google Gemini API

---

## 📂 Project Structure

```
AI-Interview-Assistant/
│
├── ai-interview-coach(client)/
│   ├── components/
│   ├── pages/
│   ├── services/
│   └── pages/
│   
|  
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── services/
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone <repository-url>
```

### Install dependencies

#### Frontend

```bash
cd client
npm install
```

#### Backend

```bash
cd server
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the **backend** folder.

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key
```

---

## ▶️ Running the Project

### Start Backend

```bash
cd backend
npm start
```

### Start Frontend

```bash
cd ai-interview-coach
npm run dev
```

The application will be available at:

```
Frontend : http://localhost:5173
Backend  : http://localhost:3000
```
---

## 📖 How It Works

1. Register or log in.
2. Navigate to the dashboard.
3. Create a new interview.
4. Select:

   * Job Role
   * Difficulty Level
   * Number of Questions
5. Generate AI-powered interview questions.
6. Answer each question during the interview session.
7. Submit the interview.
8. View your interview results and feedback.

---

## 🔒 Authentication

* JWT-based authentication
* Protected API routes
* User session stored using Local Storage

---

## 🌱 Future Enhancements

* Voice-based interviews
* Camera integration
* PDF report generation
* Admin dashboard
* Dark mode
* Leaderboard and achievements

---

## 👨‍💻 Author

**Your Name**

GitHub: https://github.com/dikshasisodia31


---

## 📄 License

This project is created for learning and portfolio purposes.
