# Igiehon Foundation Website

A modern, professional marketing site and admin dashboard for the Igiehon Foundation, built with Next.js 14, Tailwind CSS, and Firebase. The website mirrors the brand direction of the foundation with sections for mission, programs, impact, and partner stories. A secure admin dashboard allows non-technical editors to update site content that is persisted to Firestore. All form submissions (contact + newsletter) are captured in Firestore for streamlined operations.

## Tech stack

- [Next.js 14](https://nextjs.org/) with the App Router
- [React 18](https://react.dev/) + TypeScript
- [Tailwind CSS 3](https://tailwindcss.com/) for responsive styling
- [Firebase Web SDK](https://firebase.google.com/docs/reference/js) for Firestore data access
- [Framer Motion](https://www.framer.com/motion/) for subtle animations

## Getting started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Configure Firebase**

   Create a Firebase project with Firestore enabled and add a web app. Copy the `.env.example` file to `.env.local` and replace the placeholder values with your Firebase config. You can also add these keys to Vercel environment variables when deploying.

   ```bash
   NEXT_PUBLIC_FIREBASE_API_KEY=xxxx
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxxx.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxxx
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxxx.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxxx
   NEXT_PUBLIC_FIREBASE_APP_ID=1:xxxx:web:xxxx
   ```

   > Tip: To use the local Firebase emulator suite, also set `NEXT_PUBLIC_USE_FIREBASE_EMULATOR=true` and run the Firestore emulator on port `8080`.

3. **Run the development server**

   ```bash
   npm run dev
   ```

   The site will be available at [http://localhost:3000](http://localhost:3000).

4. **Access the admin dashboard**

   Visit [http://localhost:3000/admin](http://localhost:3000/admin) to open the CMS editor. Update content across all sections and click **Save changes** to persist updates to Firestore.

## Firestore data model

The project stores content and form submissions in Firestore collections:

- `cms/site` — single document containing editable website content.
- `contact_messages` — each document is a form submission from the contact form.
- `newsletter_signups` — each document is a newsletter sign-up with timestamps.

Firestore security rules can restrict access so only authenticated admins can read/write the `cms` document and submission collections.

## Deployment

Deploy easily to [Vercel](https://vercel.com/):

1. Push this repository to GitHub.
2. Create a new Vercel project from the repo.
3. Add the Firebase environment variables in the Vercel dashboard.
4. Trigger a deploy — Vercel will run `npm install` and `npm run build` automatically.

## Customizing content & media

- Update brand colors or typography in `tailwind.config.ts`.
- Replace placeholder partner logos in `public/images/` with official assets (SVG/PNG) or configure remote image URLs in `next.config.js`.
- Default copy lives in `src/context/ContentContext.tsx` and is overridden by Firestore content once configured.
- Admins can paste secure Vimeo/Youtube links for hero video backgrounds or update CTA links for campaigns.

## Folder structure

```
├── public/              # Static assets (logos, icons)
├── src/
│   ├── app/
│   │   ├── admin/       # Admin dashboard page
│   │   ├── globals.css  # Tailwind base styles
│   │   └── page.tsx     # Main marketing homepage
│   ├── components/      # Reusable UI sections + forms
│   ├── context/         # React context for editable content
│   ├── lib/             # Firebase initialization
│   └── types/           # Shared TypeScript types
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## License

Copyright © 2024 Igiehon Foundation. All rights reserved.
