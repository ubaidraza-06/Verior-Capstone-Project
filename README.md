# Campus Expert

Campus Expert is a React-based web application designed to provide a centralized platform for students to explore universities, connect with ambassadors, and access detailed information about educational opportunities.  

The application follows a modular architecture with reusable UI components, an organized API layer, and separate pages for each feature.

---

## Project Structure
```
src/
│
├── components/       # Reusable UI and layout components
│   ├── ui/           # Shared UI elements (badge, button, card, dialog)
│   ├── FooterLogo.jsx
│   ├── Logo.jsx
│   └── Navbar.jsx
│
├── lib/              # Utility and API integration files
│   ├── api/          # API calls for ambassadors and universities
│   ├── firebase.js   # Firebase configuration
│   └── utils.js      # Helper functions
│
├── pages/            # Application pages
│   ├── AboutPage.jsx
│   ├── AmbassadorsPage.jsx
│   ├── HomePage.jsx
│   ├── UniversitiesPage.jsx
│   └── UniversityDetailPage.jsx
│
├── App.jsx           # Root component
├── index.css         # Global styles
└── main.jsx          # App entry point
```
---

## Key Features

- **Home Page** – Overview of the platform and quick navigation.
- **Universities Page** – Displays a list of universities with filtering and details.
- **University Detail Page** – In-depth information about a specific university.
- **Ambassadors Page** – List of student ambassadors for direct contact.
- **About Page** – Details about GuideGrad’s mission and purpose.
- **Reusable UI Components** – Cards, buttons, badges, and dialogs for consistent styling.
- **Firebase Integration** – Backend for data storage, authentication, and hosting.
- **API Layer** – Organized fetch requests for universities and ambassadors data.

---

## Tech Stack

- **Frontend:** React (with JSX components)
- **Styling:** CSS + Custom UI components
- **Backend:** Firebase
- **API Handling:** JavaScript fetch/axios (via `lib/api`)
- **Package Management:** npm

---

###  Install dependencies
npm install


###  Set up Firebase
- Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
- Enable Authentication, Firestore Database, and Hosting (if needed)
- Copy your Firebase config and paste it into `src/lib/firebase.js`

Example:
```javascript
// src/lib/firebase.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

export const app = initializeApp(firebaseConfig);


###  Start the development server
npm run dev

The app will be running at `http://localhost:5173` (Vite default).

---

##  Usage

- Navigate between **Home**, **Universities**, **Ambassadors**, and **About** pages via the Navbar.
- Click on a university card to view its detailed page.
- Contact ambassadors for guidance and insights.

---

##  License

This project is licensed under the **MIT License** – you are free to use, modify, and distribute it.

---
