# TimberCraft Website 🌲

TimberCraft is a React and Vite-based woods marketplace website designed to showcase wood products, display item details, and manage catalog content through a streamlined CMS experience.

The frontend uses a shared layout with a persistent header and footer, public marketing pages, a dynamic woods catalog, route-based product details, and a token-based login flow that reveals CMS navigation after authentication.

## Live Links 🔗

- Live Demo: https://timbercraftwoods.vercel.app/ ✨
- Backend Deployment: https://mywoods-backend-kvs4.onrender.com 🚀
- Backend GitHub Repo: https://github.com/gangotrigupta-61/MyWoods-Backend 💻

## Features ✨

- Responsive home, about, and contact pages.
- Woods catalog powered by a backend API.
- Dynamic wood detail pages using route parameters.
- Login flow that stores an JWT auth token in `localStorage`.
- CMS interface for listing, creating, editing, and deleting wood records.
- Shared header and footer across the application.

## Tech Stack 🛠️

- React 19
- Vite
- React Router DOM 7
- Bootstrap 5
- React Bootstrap
- React Icons
- Oxlint

## Project Structure 📁

- `src/main.jsx` bootstraps the app and wraps it in `BrowserRouter`.
- `src/App.jsx` defines the main routes and shared layout.
- `src/components/compound/Header.jsx` contains the main navigation and auth-aware links.
- `src/components/compound/Footer.jsx` contains the site footer.
- `src/features/` contains the page-level UI for home, about, contact, woods, and wood detail views.
- `src/routes/` contains route wrappers and the CMS/login screens.
- `src/components/molecules/WoodCard.jsx` renders each wood card in the catalog.

## Routes 🧭

- `/` - Home
- `/about` - About page
- `/contact` - Contact page
- `/woods` - Woods catalog
- `/woods/:id` - Wood detail page
- `/login` - Login form
- `/cms2` - CMS dashboard for authenticated users

## API Integration 🔌

The frontend communicates with the deployed backend for authentication and wood data.

- Woods list and CMS CRUD: https://mywoods-backend-kvs4.onrender.com/api/woods
- Login: https://mywoods-backend-kvs4.onrender.com/api/auth/login
- Wood detail page: https://mywoods-api.onrender.com/api/woods/:id

Authentication is handled on the client side and depends on the token stored in `localStorage`.

## Getting Started 🚀

### Prerequisites

- Node.js 18 or newer
- npm

### Install Dependencies

```bash
npm install
```

### Run the Development Server

```bash
npm run dev
```

Then open the local URL shown in the terminal to preview the site.

### Build for Production

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

### Lint the Codebase

```bash
npm run lint
```

## Notes 📝

- The woods catalog depends on the backend API and will not render correctly if the service is unavailable.
- The CMS navigation appears only when a valid token exists in `localStorage`.
- The current UI uses Bootstrap alongside custom styles in `src/global.css` and related CSS files.

Open to collaboration and open to constructive feedback for future improvements. 🤝


