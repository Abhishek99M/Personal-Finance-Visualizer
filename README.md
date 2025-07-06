
# 💰 Personal Finance Visualizer (Stage 1)

A basic web application for tracking personal expenses. Users can add, edit, and delete transactions, view them in a list, and visualize monthly expenses with a bar chart. Built using **React (Vite)** for the frontend and **Node.js + Express + MongoDB** for the backend.

---

## 🔹 Features (Stage 1)

- ✅ Add, edit, and delete transactions
- ✅ Fields: `amount`, `date`, `description`
- ✅ View transactions in a table/list
- ✅ Monthly expenses bar chart using Recharts
- ✅ Basic form validation with error handling
- ✅ Responsive UI using **shadcn/ui + Tailwind CSS**

---

## 🧰 Tech Stack

| Frontend     | Backend     | Database | UI         | Charts    |
|--------------|-------------|----------|------------|-----------|
| React + Vite | Node + Express | MongoDB  | shadcn/ui + Tailwind | Recharts |

---

## 📁 Project Structure

```

Personal-Finance-Visualizer/
├── frontend/
│   └── components/
│   └── App.jsx
├── backend/
│   ├── models/
│   │   └── Transaction.js
│   ├── routes/
│   │   └── transactionRoutes.js
│   └── server.js
├── .env

````

---

## ⚙️ Getting Started

### 🔧 Backend Setup

```bash
cd backend
npm install
````

Create a `.env` file:

```env
PORT=4000
DATABASE_URL=your_mongodb_connection_string
```

Start the backend server:

```bash
node server.js
```

### 🎨 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

App will run at `http://localhost:5173`

---

## 📸 Screenshots (Optional)

*Add screenshots of your app UI here like transaction form, chart, etc.*

---

## 🚀 Live Demo (Optional)

* 🔗 [Live Deployment URL](https://your-live-link)
* 📁 [GitHub Repo](https://github.com/your-username/Personal-Finance-Visualizer)

---

## 🙌 Author

**Abhishek Kumar**

> [LinkedIn](https://linkedin.com/in/yourprofile) | [GitHub](https://github.com/your-username)

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

```

---

Let me know if you'd like a `README` for **Stage 2 or 3**, or if you need help generating screenshots or deployment setup instructions!
```
