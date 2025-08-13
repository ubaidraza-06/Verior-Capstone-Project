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
│   └── Navbar.jsx
│
├── lib/              # Utility files
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
- **About Page** – Details about Campus Expert’s mission and purpose.
- **Reusable UI Components** – Cards, buttons, badges, and dialogs for consistent styling.

---

## Tech Stack

- **Frontend:** React (with JSX components)
- **Styling:** CSS + Custom UI components
- **Package Management:** npm

---

###  Install dependencies
npm install


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
