# 💰 Personal Finance Visualizer

A full-featured personal expense management app built in **three stages**, this project enables users to track spending, categorize expenses, set budgets, and visualize financial behavior through interactive charts and insights.

---

## 🔥 Stages Overview

### ✅ Stage 1: Basic Transaction Tracking

* Add, edit, delete transactions
* Fields: `amount`, `date`, `description`
* Transaction list
* Monthly expenses bar chart

### ✅ Stage 2: Categories & Dashboard

* Predefined categories for transactions
* Category-wise pie chart
* Dashboard summary cards:

  * Total expenses
  * Category breakdown
  * Most recent transactions

### ✅ Stage 3: Budgeting & Insights

* Set monthly budgets by category
* Budget vs. actual chart
* Spending insights:

  * Overspending alerts
  * Remaining budget display

---

## 🧰 Tech Stack

| Frontend     | Backend           | Database | UI Framework      | Charts   |
| ------------ | ----------------- | -------- | ----------------- | -------- |
| React (Vite) | Node.js + Express | MongoDB  | Tailwind + shadcn | Recharts |

---

## 📁 Project Structure

```
Personal-Finance-Visualizer/
├── frontend/
│   ├── components/
│   │   ├── TransactionForm.jsx
│   │   ├── TransactionList.jsx
│   │   ├── ExpensesChart.jsx
│   │   ├── CategoryPieChart.jsx
│   │   ├── DashboardSummary.jsx
│   │   ├── BudgetForm.jsx
│   │   ├── BudgetVsActualChart.jsx
│   │   └── SpendingInsights.jsx
│   └── App.jsx
├── backend/
│   ├── models/
│   │   ├── transactionModel.js
│   │   └── budgetModel.js
│   ├── controllers/
│   │   ├── transactionController.js
│   │   └── budgetController.js
│   ├── routes/
│   │   ├── transactionRoutes.js
│   │   └── budgetRoute.js
│   └── server.js
├── .env
```

---

## ⚙️ Getting Started

### 🔧 Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=4000
DATABASE_URL=your_mongodb_connection_string
```

Start the server:

```bash
node server.js
```

### 🎨 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Visit: `http://localhost:5173`

---

## 🌐 API Endpoints

### Transactions

* `GET /api/transactions` — Fetch all transactions
* `POST /api/transactions` — Add a transaction
* `DELETE /api/transactions/:id` — Delete a transaction

### Budgets

* `GET /api/budgets` — Fetch all budgets
* `POST /api/budgets` — Add a monthly budget

---


## 🚀 Live Demo (Optional)

* 🔗 [Live URL](https://personal-finance-visualizer-lake.vercel.app/)
* 💻 [GitHub](https://github.com/your-username/Personal-Finance-Visualizer)

---

## 🙌 Author

**Abhishek Kumar**

> [LinkedIn](https://www.linkedin.com/in/abhishek-kumar-a04701233/) | [GitHub](https://github.com/Abhishek99M)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
