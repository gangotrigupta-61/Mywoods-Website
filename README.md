# TimberCraft Website

TimberCraft is a React and Vite web application for showcasing wood products, browsing a product catalog, viewing individual wood details, and managing catalog entries through a simple CMS interface.

The project uses a shared application shell with a persistent header and footer, public marketing pages, a dynamic woods catalog, a wood detail page, and a token-based login flow that reveals the CMS navigation after authentication.

## Features

- Public home, about, and contact pages.
- Woods catalog powered by a remote API.
- Individual wood detail pages loaded from a route parameter.
- Login form that stores an auth token in `localStorage`.
- CMS screen for listing, creating, editing, and deleting wood records.
- Shared header and footer across the full app.

## Tech Stack

- React 19
- Vite
- React Router DOM 7
- Bootstrap 5
- React Bootstrap
- React Icons
- Oxlint

## Project Structure

- `src/main.jsx` bootstraps the app and wraps it in `BrowserRouter`.
- `src/App.jsx` defines the main routes and shared layout.
- `src/components/compound/Header.jsx` contains the main navigation and auth-aware links.
- `src/components/compound/Footer.jsx` contains the site footer.
- `src/features/` contains the page-level UI for home, about, contact, woods, and wood detail views.
- `src/routes/` contains route wrappers and the CMS/login screens.
- `src/components/molecules/WoodCard.jsx` renders each wood card in the catalog.

## Routes

- `/` - Home
- `/about` - About page
- `/contact` - Contact page
- `/woods` - Woods catalog
- `/woods/:id` - Wood detail page
- `/login` - Login form
- `/cms2` - CMS dashboard for authenticated users

## API Usage

The app currently communicates with remote backend services:

- Woods list and CMS CRUD: `https://mywoods-backend-kvs4.onrender.com/api/woods`
- Login: `https://mywoods-backend-kvs4.onrender.com/api/auth/login`
- Wood detail page: `https://mywoods-api.onrender.com/api/woods/:id`

Authentication is client-side and depends on the token stored in `localStorage`.

## Getting Started

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

Then open the local URL shown in the terminal.

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

## Notes

- The woods catalog is data-driven and will not render correctly if the backend API is unavailable.
- The CMS navigation appears only when a token exists in `localStorage`.
- The current design uses Bootstrap alongside custom project styles in `src/global.css` and related CSS files.

Open for collaboration and ThankYou for visiting TimberCraft.


