# Lawn Stars — Waitlist Landing Page

A graphic-heavy waitlist signup site for Lawn Stars built with React, HeroUI, Tailwind CSS, and a Node.js/Express backend connected to Google Sheets and Nodemailer.

## Tech Stack

| Layer    | Technology                                    |
| -------- | --------------------------------------------- |
| Frontend | React 18, Vite, HeroUI, Tailwind CSS v4, Framer Motion |
| Backend  | Node.js, Express                              |
| Database | Google Sheets (via service account)            |
| Email    | Nodemailer (SMTP)                             |

## Quick Start

### 1. Install dependencies

```bash
# From the welcome-site directory
cd client && npm install
cd ../server && npm install
```

### 2. Configure environment variables

```bash
cd server
cp .env.example .env
# Edit .env with your actual credentials (see below)
```

### 3. Start development servers

In two separate terminals:

```bash
# Terminal 1 — API server
cd server
npm run dev

# Terminal 2 — React dev server
cd client
npm run dev
```

Visit **http://localhost:5173** in your browser.

## Google Sheets Setup

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project (or use an existing one)
3. Enable the **Google Sheets API**
4. Go to **IAM & Admin > Service Accounts** and create a service account
5. Create a JSON key for that service account and download it
6. Create a Google Spreadsheet and add this header row: `Timestamp | Name | Email | Phone | Zip Code | Referral Code`
7. **Share** the spreadsheet with the service account email (give Editor access)
8. Copy the spreadsheet ID from the URL and add it along with the service account email and private key to your `.env`

## Gmail SMTP Setup

1. Enable **2-Step Verification** on your Google Account
2. Go to [App Passwords](https://myaccount.google.com/apppasswords)
3. Generate a new app password for "Mail"
4. Use that password as `SMTP_PASS` in your `.env`

## Project Structure

```
welcome-site/
  client/                  React + Vite + HeroUI + Tailwind
    src/
      components/          Reusable UI components
      pages/               Landing page + Confirmation page
      index.css            Tailwind entry + custom theme
    vite.config.js         Vite config with API proxy
  server/
    server.js              Express API entry point
    sheetsService.js       Google Sheets integration
    emailService.js        Nodemailer + HTML email template
    .env.example           Environment variable template
```

## Building for Production

```bash
cd client
npm run build
```

The output will be in `client/dist/`. Serve it with any static file server and point API requests to your Express backend.
