# IT Asset Management

This project is a full-stack application built using:

* React (with Vite) — Frontend
* Node.js — Backend
* PostgreSQL — Database

---

# Installation Guide

Follow the steps below to run the project locally.

---

##  Database Setup (PostgreSQL)

1. Create a database in PostgreSQL.
2. Use the following SQL query to create the required table:

```sql
CREATE TABLE equipamentos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    tipo VARCHAR(50) NOT NULL,
    data_de_aquisicao DATE,
    status VARCHAR(20) NOT NULL CHECK (status IN ('Ativo', 'Manutencao'))
);
```

3. Use the following password for the database connection:

```txt
itam
```

---

## Backend Setup (Node.js)

1. Navigate to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Run the server in development mode:

```bash
npm run startDev
```

---

## Frontend Setup (React + Vite)

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

---

# Notes

* Make sure PostgreSQL is running before starting the backend.
* Ensure the backend is properly connected to the database.
* The frontend will typically run on `http://localhost:5173` and the backend on `http://localhost:8080`.

---

# Tech Stack Summary

| Layer    | Technology   |
| -------- | ------------ |
| Frontend | React + Vite |
| Backend  | Node.js      |
| Database | PostgreSQL   |

---

# License

This project is for educational purposes.
