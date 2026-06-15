# 🛡️ Bouncer

Bouncer is a Node.js middleware platform that helps secure and monitor APIs with features such as API key authentication, rate limiting, access control, request logging, and project-level configurations. It is designed to be easy to integrate into existing Express applications while providing centralized API protection and monitoring.

---

## Features

- API Key Authentication
- Project-Based Access Control
- Global and Project-Level Rate Limiting
- Request Monitoring and Activity Logs
- JWT Configuration Support
- Route Protection
- Middleware Integration
- Redis-Based Request Counting
- MongoDB Persistence
- Dashboard for Managing Projects and Settings

---

## Tech Stack

### Frontend

- React
- Tailwind CSS
- React Router

### Backend

- Node.js
- Express.js
- MongoDB Atlas
- Redis / Upstash Redis

---

## Prerequisites

Before running the project locally, make sure you have:

- Node.js (v18 or later)
- MongoDB Atlas connection string
- Redis server or Upstash Redis database
- npm

---

## Project Structure

```bash
Bouncer/
│
├── frontend/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── services/
│   └── server.js
│
└── README.md
```

---

## Clone the Repository

```bash
git clone https://github.com/your-username/bouncer.git
cd bouncer
```

---

# Backend Setup

Move into the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

### Create a `.env` file

```env
PORT=3000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

REDIS_URL=your_redis_connection_string

CLIENT_URL=http://localhost:5173
```

Example Redis URL:

```env
REDIS_URL=rediss://default:<password>@xxxxx.upstash.io:6379
```

Start the backend server:

```bash
npm run dev
```

Backend will run on:

```text
http://localhost:3000
```

---

# Frontend Setup

Open another terminal and move into the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
VITE_BACKEND_URL=http://localhost:3000
```

Start the frontend:

```bash
npm run dev
```

Frontend will run on:

```text
http://localhost:5173
```

---

## Running the Complete Application

### Terminal 1

```bash
cd backend
npm run dev
```

### Terminal 2

```bash
cd frontend
npm run dev
```

---

## Environment Variables

### Backend

| Variable    | Description                           |
| ----------- | ------------------------------------- |
| PORT        | Backend server port                   |
| MONGODB_URI | MongoDB connection string             |
| JWT_SECRET  | JWT signing secret                    |
| REDIS_URL   | Redis or Upstash Redis connection URL |
| CLIENT_URL  | Frontend URL                          |

### Frontend

| Variable         | Description     |
| ---------------- | --------------- |
| VITE_BACKEND_URL | Backend API URL |

---

## Available Scripts

### Backend

Start development server:

```bash
npm run dev
```

Start production server:

```bash
npm start
```

---

### Frontend

Start development server:

```bash
npm run dev
```

Build production files:

```bash
npm run build
```

Preview build:

```bash
npm run preview
```

---

## Deployment

### Frontend

Recommended:

- Vercel

### Backend

Recommended:

- Render
- Railway

### Database

- MongoDB Atlas

### Redis

- Upstash Redis

---

## Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature-name
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push to your branch.

```bash
git push origin feature-name
```

5. Open a Pull Request.

---

## License

This project is licensed under the MIT License.

---

## Author

**Soumik Mallick**

If you find this project useful, consider giving it a ⭐ on GitHub.
