# Lawn Stars — Waitlist Landing Page

A graphic-heavy waitlist signup site for Lawn Stars built with React, HeroUI, and Tailwind CSS. Form submissions are handled by **Formspree** (no backend required).

## Tech Stack

| Layer    | Technology                                    |
| -------- | --------------------------------------------- |
| Frontend | React 18, Vite, HeroUI, Tailwind CSS v4, Framer Motion |
| Form / Email / Sheets | Formspree (form endpoint + auto-responder + optional Google Sheets) |

## Quick Start

### 1. Create a Formspree form

1. Go to [formspree.io](https://formspree.io) and create a free account.
2. Create a new form and copy the form ID (the hash in the endpoint, e.g. `https://formspree.io/f/xyzabc` → `xyzabc`).

### 2. Configure frontend env

```bash
cd client
cp .env.example .env
# Set VITE_FORMSPREE_FORM_ID=your_form_id
```

### 3. Run the client

```bash
cd client
npm install
npm run dev
```

Visit **http://localhost:5173**.

### 4. Formspree dashboard setup

- **Auto-responder**: In Formspree, set the response email so subscribers get your “You’re on the list!” welcome. You can use placeholders like `{{name}}`, `{{referralCode}}` if your plan supports them.
- **Google Sheets**: In Formspree, connect your form to a Google Sheet so each submission becomes a row (name, email, phone, zipCode, referralCode, etc.).

## Project Structure

```
welcome-site/
  client/                  React + Vite + HeroUI + Tailwind
    src/
      components/          Reusable UI components
      pages/               Landing page + Confirmation page
    .env.example           VITE_FORMSPREE_FORM_ID
  server/                  (deprecated — backend removed)
```

## Building for Production

```bash
cd client
npm run build
```

Deploy the `client/dist/` folder to Vercel, Netlify, or any static host. Set `VITE_FORMSPREE_FORM_ID` in the host’s environment variables.
