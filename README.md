# CampusIQ 🎓

CampusIQ is a modern full-stack college discovery and comparison platform built using React, FastAPI, and MongoDB.

Users can:

* Discover colleges
* Search and filter institutions
* Compare colleges
* View detailed college information
* Save favorite colleges
* Login and signup securely using JWT authentication

---

# ✨ Features

* JWT Authentication
* Responsive UI
* College Search & Filters
* Save Colleges
* College Comparison
* Dynamic College Details
* MongoDB Integration
* REST API Architecture
* Production Deployment
* Fallback Data Handling

---

# 📂 Project Structure

```bash
CampusIQ/
│
├── backend/
│   ├── app/
│   │   ├── config/
│   │   ├── database/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── schemas/
│   │   ├── services/
│   │   └── utils/
│   ├── scripts/
│   ├── requirements.txt
│   └── main.py
│
├── src/
│   ├── components/
│   ├── context/
│   ├── layouts/
│   ├── pages/
│   ├── services/
│   ├── utils/
│   └── data/
│
├── package.json
├── vite.config.js
└── README.md
```

---

# ⚙️ Environment Variables

## Frontend (.env)

```env
VITE_API_URL= your_vite_url
```

## Backend (.env)

```env
MONGO_URL=your_mongodb_url
JWT_SECRET=your_secret_key
FRONTEND_URL=your_vercel_url
MONGO_DB_NAME=campusiq
```

---

# ▶️ Local Setup

## 1. Clone Repository

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

---

## 2. Frontend Setup

```bash
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## 3. Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8080
```

Backend runs on:

```bash
http://localhost:8080
```

---

# 🌐 API Endpoints

## Authentication

* POST `/api/auth/signup`
* POST `/api/auth/login`

## Colleges

* GET `/api/colleges`
* GET `/api/colleges/{id}`
* POST `/api/colleges/compare`

## Saved Colleges

* GET `/api/users/saved`
* POST `/api/users/save/{college_id}`
* DELETE `/api/users/save/{college_id}`

---

# 📈 Future Improvements

* AI-based college recommendation system
* Real-time analytics dashboard
* Redis caching
* Admin dashboard
* Advanced filtering
* Infinite scrolling
* Notifications system
* Review & rating system
* Cloudinary image uploads

---

# 👨‍💻 Author

Manas Ippalpalli

---

# 📄 License

This project is for educational and portfolio purposes.
