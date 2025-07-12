# 🧾 Smart Receipt-Based Expense Tracker

A modern, AI-assisted web app that helps users track and categorize their spending by uploading receipts. Built using React and Google Cloud Platform (GCP) services such as Firebase, Cloud Functions, and Cloud Vision API.

---

## 🚀 Features

- 📤 Upload images or PDFs of receipts
- 🧠 Automatically extract and categorize expenses using OCR
- 📊 Dashboard view with monthly summaries and spending charts
- 🔍 View, filter, and export detailed expense logs
- 🔐 Secure authentication (Firebase Auth)
- 💾 Cloud-native and scalable (Firebase + GCP)

---

## 🏗️ Tech Stack

| Layer         | Technology                               |
|---------------|------------------------------------------|
| **Frontend**  | React + Tailwind CSS (Firebase Hosting)  |
| **Backend**   | Firebase Cloud Functions                 |
| **AI / OCR**  | Google Cloud Vision API, optional Vertex AI |
| **Storage**   | Firebase Storage (receipt images/PDFs)   |
| **Database**  | Firestore                                |
| **Auth**      | Firebase Authentication                  |

---

## 🧱 Architecture Diagram

+------------------------------+
|      React Web App (UI)      |
| (Hosted on Firebase Hosting) |
+--------------+---------------+
               |
               ▼
     +----------------------+
     |   Firebase Auth      |  ← Login / Sign-up (Email, Google, etc.)
     +----------------------+
               |
               ▼
     +----------------------+
     |   Upload Receipt     |  ← User uploads image or PDF
     +----------------------+
               |
               ▼
     +--------------------------+
     |  Firebase Storage        |  ← Stores uploaded files
     +--------------------------+
               |
               ▼ (Trigger)
     +----------------------------+
     |  Cloud Function (Backend) |  ← Auto-triggered after upload
     |  - Uses Vision API (OCR)  |
     |  - Parses & categorizes   |
     +----------------------------+
               |
               ▼
     +--------------------------+
     |   Firestore Database     |  ← Saves extracted expense data
     +--------------------------+
               |
               ▼
     +----------------------------+
     |  React Dashboard UI       |
     |  - View expenses          |
     |  - Charts & summaries     |
     +----------------------------+


---

## 📈 Frontend Views

| Page        | Description                                      |
|-------------|--------------------------------------------------|
| **Dashboard** | Overview with charts and summary                |
| **Upload**    | Upload and scan receipts                        |
| **Expenses**  | View, filter, and search transaction history    |
| **Analytics** | Category trends, month-over-month comparisons   |
| **Settings**  | Budget limits, notifications, preferences       |

---

## 🔐 Firestore Schema (example)


json
{
  "merchant": "Checkers",
  "category": "Groceries",
  "amount": 300,
  "date": "2024-04-20",
  "receiptURL": "https://firebasestorage.googleapis.com/...",
  "createdAt": "Timestamp"
}

## 💡 Future Enhancements

- 🔔 Budget alerts via Firebase Cloud Messaging

- 🧾 Export to CSV or PDF

- 📈 Predictive spending trends (BigQuery ML or Vertex AI)

- 🌐 Multi-user account sharing or teams

- 🤖 AI assistant using Vertex AI (e.g., “What did I spend on takeout?”)

## 👤 Author

Ntsakelo

GitHub: 

LinkedIn:



