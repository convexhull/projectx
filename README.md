# ProjectX - A Full-stack Next.js App

> A modern, full-stack web application built with **Next.js App Router**, **React Query**, **Express**, and **MongoDB** – designed with performance, scalability, and developer experience in mind.

## Overview

An AI-driven full-stack SaasS for project management built using Next.js, Typescript, React.js, ShadCN, Node.js, enabling efficient issue tracking, task assignment, and real-time status updates with a user-friendly interface

This project was built to showcase architecture choices, cutting-edge full-stack development using modern generative AI models. It uses frontier LLM models for priority assessment and workflow optimization by analyzing task urgency and importance, providing intelligent recommendations for prioritization

## 🔧 Tech Stack

**Frontend 🖥️**

- [Next.js 15](https://nextjs.org/docs) (App Router, SSR, Server Actions)
- React 19
- React Query (TanStack Query)
- TailwindCSS
- TypeScript
- Shadcn UI / Radix UI

**Backend 🛠️**

- Node.js + Hono.js
- Appwrite for DB and auth
- REST APIs using Next.js's full-stack capabilities
- OAuth

## 🧠 Key Features

- ⚙️ Full authentication flow with email/password and OAuth login using Gmail and Github
- 🧠 Server-side session fetching via `cookies()` API (Next.js)
- 🌐 Clean API separation using Hono.js for creating Express.js like modular api endpoints
- 📦 Responsive UI with reusable components
- 🚨 Global error boundary and alert system
- 🔄 Optimistic UI & error handling via React Query
- 🔍 Accessible, semantic HTML with consistent design system

## 📁 Project Structure

```
src/app/
    web/                # Next.js frontend
    server/             # Express backend
    api/[[..route]]/    # Catch-all route handler, Hono main app

src/features/**/
    api/                # Feature level queries/mutations
    server/             # Feature specific backend route handlers using Hono.js sub-apps
    components/         # Feature specific components
    hooks/              # Feature specific custom react hooks

src/
    config.ts         # Loading environment variables in the code
    hooks/            # App level react custom hooks
    lib/              # Utils and other library specific code

src/components/
    ui/               # ShadCN generated UI components
    *.tsx             # App level components

```

## 🧪 Running Locally

### 1. Clone the repo

```bash
git clone https://github.com/YOUR_USERNAME/projectx.git
cd projectx
```

### 2. Set up environment variables

Create `.env.local` in the root of the project and add following env vars

| Parameter                               | Description                                       |
| :-------------------------------------- | :------------------------------------------------ |
| `NEXT_PUBLIC_APP_URL`                   | **Required**. Needed for making backend api calls |
| `NEXT_PUBLIC_APPWRITE_ENDPOINT`         | **Required**. Appwrite api endpoint               |
| `NEXT_PUBLIC_APPWRITE_PROJECT`          | **Required**. Appwrite project id                 |
| `NEXT_PUBLIC_APPWRITE_DATABASE_ID`      | **Required**. Database id                         |
| `NEXT_PUBLIC_APPWRITE_WORKSPACES_ID`    | **Required**. Workspaces collection id            |
| `NEXT_PUBLIC_APPWRITE_IMAGES_BUCKET_ID` | **Required**. Images storage bucket id            |
| `NEXT_PUBLIC_APPWRITE_MEMBERS_ID`       | **Required**. Members collection id               |
| `NEXT_PUBLIC_APPWRITE_PROJECTS_ID`      | **Required**. Projects collection id              |
| `NEXT_PUBLIC_APPWRITE_TASKS_ID`         | **Required**. Tasks collection id                 |
| `NEXT_APPWRITE_KEY`                     | **Required**. Your Appwrite API key               |

### 3. Install packages

```
npm install
```

You might face dependency issues while installing packages because ShadCN is not fully compatible with React 19 (the version used in this app). But we don't use any such incompatible components from ShadCN. So you can safely use the following command to install packages.

```
npm install --legacy-peer-deps
```

### 4. Start the app

```bash
npm run dev # Start app in dev mode
```

OR

```bash
npm run build # Build app for production
npm run start # Start app in production mode
```

App runs at: [http://localhost:3000](http://localhost:3000)

## 📦 Deployment

The app is live [here](https://projectx.yashpratapsingh.com)

## 🧑‍💻 About Me

Hi, I'm [Yash Pratap Singh](https://yashpratapsingh.com) – a Senior Full Stack Engineer with 5+ years of experience launching scalable apps for remote-first teams.

- 🌍 Built for companies across Berlin, Brussels, and beyond
- 💡 Specialized in React, Node, and product-led architecture
- 🤖 Integrating Generative AI and LLM Engineering to improve UX and DX for startups

## ⭐ Why This Project

This application demonstrates:

- Full-stack expertise with modern frameworks
- Real-world auth and API patterns
- Robust error handling and DX tooling
- Using generative AI in for AI-driven full-stack app

Built with ❤️ using Next.js

---

For questions or collaboration ideas, feel free to reach out or open an issue!
