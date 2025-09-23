Nxt Watch
Nxt Watch is a YouTube-inspired video platform built using React.js, designed to showcase video listings across multiple categories such as Trending, Gaming, and Saved Videos. It allows users to search for specific video content, toggle between light/dark themes, and securely access videos through authentication and authorization.

Features
JWT Authentication & Authorization

Secure login with username and password.

JWT token used to authenticate API calls.

Login state is maintained using local storage.

Routing & Protected Routes

Navigation through pages like Login, Home, Trending, Gaming, and Saved Videos.

Unauthorized users are redirected to the login page.

Responsive UI with React Components

Customized UI built using React, CSS, and Bootstrap.

Dynamic theme support (light/dark mode).

Event handlers and reusable components for smooth interaction.

Video Listings & Search

Browse videos by category (Trending, Gaming, Saved).

Search bar to filter videos by keywords.

Tech Stack
Frontend: React.js, JavaScript, CSS, Bootstrap

State Management: React useState, useEffect

API Calls: REST API Integration

Routing: React Router

Storage: Local Storage for user session management

Auth: JWT Token-based authentication and authorization

Project Structure
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
Installation & Setup
Clone the repo

bash
git clone https://github.com/Ashwin-ax/Youtube-Clone-.git
Navigate to project folder

bash
cd Youtube-Clone-
Install dependencies

bash
npm install
Start the development server

bash
npm start
Open http://localhost:3000 in your browser.

Usage
Login using credentials provided by backend API.

Browse videos in categories: Trending, Gaming, Saved.

Search for videos.

Toggle theme between light/dark.

Save videos for later access.

Screenshots
(Add project screenshots here once available, e.g. Login Page, Home, Trending, etc.)

Future Enhancements
Add video detail pages with comments.

Integrate real-time video streaming.

User profile and preferences management.

Advanced filters and recommendations.

