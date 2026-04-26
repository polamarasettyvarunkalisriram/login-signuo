# 🚀 Login & Signup Application

## 📌 Project Description

This is a full-stack web application for user login and signup functionality.

---

## 🛠️ Tech Stack

* React.js (Frontend)
* Node.js + Express.js (Backend)
* MySQL (Database)

---

## 📁 Project Structure

```
carrierpage/
  ├── frontend/
  ├── backend/
  └── README.md
```

---

## ⚙️ Setup Instructions

### Frontend

```
cd frontend
npm install
npm start
```

### Backend

```
cd backend
npm install
node index.js
```

---

## 🗄️ Database (MySQL)

```
create table users (
	user_id int auto_increment primary key,
    name varchar(100),
    email varchar(100) unique,
    password varchar(255),
    isverified boolean default false,
    createdby timestamp default current_timestamp
    );
```

---

## ✨ Features

* Login
* Signup
* React UI
* Express API
* MySQL database

---

## 👨‍💻 Author

* Pvk SRIRAM
