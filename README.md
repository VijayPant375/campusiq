<div align="center">

# CampusIQ - Smart College Predictor & Discussion Platform

**A full-stack, data-driven platform for college predictions, side-by-side comparisons, and student community discussions.**

[![Next.js](https://img.shields.io/badge/Next.js-14-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-UI-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=flat-square&logo=prisma&logoColor=white)](https://www.prisma.io)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-4169E1?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org)
[![Neon](https://img.shields.io/badge/Neon-Serverless_Postgres-00E599?style=flat-square&logo=neon&logoColor=white)](https://neon.tech)
[![NextAuth](https://img.shields.io/badge/Auth-NextAuth.js-orange?style=flat-square)](https://next-auth.js.org)

</div>

---

## Overview

**CampusIQ** is a comprehensive college exploration platform designed to help students make informed decisions about their higher education. It features a rich database of top Indian engineering colleges (IITs, NITs, IIITs, and top private universities), combining data analytics with a community discussion forum.

Students can browse colleges, use the Rank Predictor to find realistic matches based on their competitive exam scores, save their favorites, create detailed side-by-side comparisons, and ask specific questions directly linked to institutions.

---

## Core Features

### Authentication and User Flow
- **NextAuth Integration**: Supports both Credentials (Email/Password) and OAuth (Google Sign-in).
- **Secure Sessions**: JWT-based session management.
- **Personalized Dashboard**: View your saved colleges, custom comparisons, and asked questions in one place.

### Advanced College Browsing
- **Rich Dataset**: 80 realistic college profiles including precise placement statistics, tuition fees, and course lists.
- **Dynamic Filtering**: Instantly filter colleges by state, institution type (Public/Private), and budget using an interactive sidebar.
- **Pagination & Search**: Lightning-fast search with server-side pagination.

### Intelligent Rank Predictor
- **Multi-Exam Support**: Calculate realistic chances for JEE Main, JEE Advanced, and BITSAT.
- **Smart Logic**: The predictor analyzes your rank against historical cutoffs, adding variance based on state quota and category.
- **Match Categorization**: Results are clearly categorized as "High Chance", "Moderate Chance", or "Reach".

### Side-by-Side Comparison Engine
- **Custom Comparisons**: Select any number of colleges to compare their stats.
- **Visual Highlighting**: Automatically highlights the best metrics across the selected colleges (e.g., lowest fees, highest package, best placement rate).
- **Save & Share**: Save specific comparison configurations to your profile for easy future reference.

### Community Q&A (Discussions)
- **Tag-based System**: Ask questions and categorize them with tags for easy discovery.
- **College Linking**: Link a question to a specific college so it appears directly on that college's profile page.
- **Interactive Answers**: Other users can post answers, and the question owner can mark the best answer as "Accepted".
- **Question Management**: Owners have full control to delete their questions.

### Modern UI/UX
- **Glassmorphism & Animations**: Premium design aesthetics using Tailwind CSS with subtle hover effects and micro-animations.
- **Dark Mode Support**: Seamless toggle between light and dark themes.
- **Responsive Layout**: Fully optimized for mobile, tablet, and desktop viewing.
- **Loading States**: Skeleton loaders and global spinners ensure a smooth user experience.

---

## Architecture

CampusIQ is built using the **Next.js 14 App Router**, leveraging React Server Components (RSC) for maximum performance and SEO. 

### Tech Stack Breakdown
- **Frontend**: Next.js App Router, React, Tailwind CSS, Lucide Icons.
- **Backend**: Next.js Server Actions & API Routes.
- **Database**: PostgreSQL hosted on **Neon** (Serverless).
- **ORM**: Prisma for type-safe database queries.
- **Authentication**: NextAuth.js v5.

### Database Schema
The database uses a highly relational structure:
- `User`, `Account`, `Session`: Handles authentication.
- `College`: Core entity holding name, state, type, fees, rating, etc.
- `Course`, `Placement`, `Review`, `CollegeTag`: One-to-many relationships to `College`.
- `SavedCollege`, `SavedComparison`: Links users to their saved choices.
- `Question`, `Answer`, `QuestionTag`: Powers the discussion system, linking `User` and `College`.

---

## Getting Started

### Prerequisites
- Node.js 18+
- A PostgreSQL database (Neon recommended)
- Google Cloud Console account (for OAuth)

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/campusiq.git
   cd campusiq
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL="postgresql://user:password@host/dbname?sslmode=require"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   ```

4. **Initialize Database:**
   ```bash
   npx prisma db push
   npx prisma generate
   ```

5. **Import College Data:**
   Seed the database with the pre-configured dataset of colleges:
   ```bash
   npm run import:data
   ```

6. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` to see the application running.
