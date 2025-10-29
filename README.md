# Imoukhuede Global Foundation Web Experience

This repository contains a redesigned Next.js 14 experience for the Imoukhuede Global Foundation inspired by the public site at [`igfsite-github-io.vercel.app`](https://igfsite-github-io.vercel.app/).

## Features

- **Immersive marketing site** with hero, program catalogue, impact metrics, alumni stories, events, and partner highlights that mirror the live brand experience.
- **Admin dashboard & CMS** reachable at `/admin` (alias `/cms`) that lets editors manage programs, stories, events, and partners in real time.
- **Firebase + Cloud Firestore integration** for persistent content management. All sections on the homepage hydrate from Firestore collections with graceful fallbacks when the database is empty.
- **Responsive Tailwind CSS design** using the foundation colour system and imagery stored in `public/images`.

## Getting started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a `.env.local` file with your Firebase web app credentials:

   ```bash
   NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_KEY
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=YOUR_DOMAIN
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
   NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_APP_ID
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=YOUR_MEASUREMENT_ID
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Visit `http://localhost:3000` for the marketing site and `http://localhost:3000/admin` for the CMS.

### Firestore data model

The CMS expects four collections. Documents can include extra fields if needed, but the admin UI surfaces the following schema:

| Collection | Suggested document fields |
| ---------- | ------------------------- |
| `programs` | `name`, `description`, `image`, `theme` |
| `stories`  | `title`, `summary`, `quote`, `author`, `image` |
| `events`   | `title`, `date`, `location`, `description`, `cta`, `image` |
| `partners` | `name`, `logo` |

Populate the collections directly from the `/admin` dashboard or via the Firebase console. Homepage sections automatically re-render with the latest content.

## Available scripts

- `npm run dev` – Start the Next.js development server.
- `npm run build` – Generate a production build.
- `npm run start` – Start the production server locally.
- `npm run lint` – Run ESLint.

## Deployment

This project is ready for hosting on Vercel or any platform that supports Next.js. Ensure the Firebase environment variables are configured in the hosting provider.
