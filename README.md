🚀 Nxt Watch
Nxt Watch is a YouTube-inspired video platform built with React.js. It allows users to browse video categories (Trending, Gaming, Saved), search for content, toggle between light/dark modes, and securely log in using JWT Authentication.

✨ Features
🔐 Authentication & Authorization

Secure login with username/password.

JWT Tokens for API authentication.

Login session preserved via Local Storage.

📍 Protected Routing

Built with React Router.

Redirects unauthenticated users to the Login Page.

🎨 Responsive UI

Built with React Components, CSS, and Bootstrap.

Supports Dark/Light Mode themes.

Interactive event handlers & reusable UI.

📹 Video Categories & Search

Explore Trending, Gaming, Saved Videos.

Search functionality to filter videos dynamically.

🛠️ Tech Stack
Frontend: React.js, JavaScript, CSS, Bootstrap

Routing: React Router

API Integration: REST APIs

Auth & Storage: JWT Token, Local Storage

State Management: React Hooks (useState, useEffect)

📂 Project Structure
text
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
⚡ Getting Started
Follow these steps to run the project locally:

1️⃣ Clone the Repository
bash
git clone https://github.com/YourUsername/Nxt-Watch.git
2️⃣ Navigate to the Project Directory
bash
cd Nxt-Watch
3️⃣ Install Dependencies
bash
npm install
4️⃣ Start the Development Server
bash
npm start
Now open 👉 http://localhost:3000 in your browser.

🎮 Usage Guide
Login with credentials from backend API.

Browse videos under Trending, Gaming, Saved sections.

Search for specific videos.

Save videos for later.

Switch between Dark/Light themes.

