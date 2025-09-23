
# Nxt Watch – Youtube Clone Application

Nxt Watch is a YouTube-inspired video platform built with React.js. It allows users to browse video categories (Trending, Gaming, Saved), search for content, toggle between light/dark modes, and securely log in using JWT Authentication.

🔗 **Live Demo**: [Nxt Watch – Youtube Clone Application](https://ashwinytclone.ccbp.tech/)
👉 Test Credentials:

* Username: `rahul`
* Password: `rahul@2021`

---

## ✨ Features

* **User Authentication & Authorization**

  * Secure login with JWT token-based authentication.
  * Protected routes accessible only after login.

* **Video Browsing**

  * Browse a wide variety of videos with Thumbnail, titles, and profiles.
  * Detailed video pages with complete information.

* **Seamless Navigation**

  * Built with **React Router** for smooth client-side navigation.

* **Responsive UI**

  * Designed with **CSS & Bootstrap**.

* **Performance Enhancements**

  * Integrated loading spinners using `react-spinner-loader`.
  * Optimized API requests and cookie storage for efficient session handling.

---

## 🛠️ Tech Stack

* **Frontend:** React.js, JavaScript, CSS, Bootstrap
* **Routing:** React Router
* **State Management:** React Context
* **Authentication:** JWT Token, Cookie Storage
* **API Integration:** REST API calls
* **UI Enhancements:** React Icons, React Spinner Loader, and other third-party React packages

---



## 📂 Project Structure

```
Nxt-Watch/
│── public/                 # Static files
│── src/
│   ├── components/         # Reusable React components
│   ├── pages/              # Page-level components (Login, Home, Trending, etc.)
│   ├── utils/              # Helper functions, API calls
│   ├── App.js              # Main application
│   └── index.js            # Entry point
│── package.json            # Project dependencies
│── README.md               # Project documentation

```
---

## 🔒 Authentication Flow

1. User logs in with username and password.
2. Backend validates credentials and returns a **JWT token**.
3. Token is stored securely in cookies.
4. Protected routes (e.g., Home, Trending, Gaming, Saved Videos, Video Details) require a valid token to access.

---

## 📌 Deployment

The project is deployed using **CCBP Tech hosting**.
Live app: [Click here to visit the application](https://ashwinytclone.ccbp.tech/)

---

## 👨‍💻 Author

**Ashwin Suryawanshi**

* GitHub: [Ashwin-ax](https://github.com/Ashwin-ax)
