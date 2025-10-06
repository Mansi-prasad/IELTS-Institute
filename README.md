# IELTS Mastery Web Application

A full-stack React and Node.js application for a fictional IELTS Institute. This project includes a responsive landing page with a hero section, features section, testimonials slider, and a functional contact form with email notifications using Nodemailer.

---

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Author](#author)

---

## Demo

A live demo can be added here : 
https://ielts-institute-puce-two.vercel.app/

---

## Features

- **Responsive Hero Section** with gradient text and animation
- **Mobile-first Navigation** with hamburger menu and click-outside-to-close functionality
- **Features Section** highlighting IELTS courses
- **Testimonials Slider** using Swiper.js
- **Contact Form**
  - Saves messages to MongoDB
  - Sends notification emails to the institute using Nodemailer
  - Input validation
- **Mobile-friendly design** using TailwindCSS
- **Animated UI** using Framer Motion

---

## Technologies Used

- **Frontend:** React.js, TailwindCSS, Framer Motion, Swiper.js
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Email Notifications:** Nodemailer

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn
- MongoDB (local or Atlas)
- Gmail account (for Nodemailer app password)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Mansi-prasad/IELTS-Institute
# Navigate to the project folder
cd IELTS-Institute

# Set up environment variables .env file for both frontend and backend

 # Install dependency for backend
cd backend
npm install
# Run the development server
npm run server

# Install dependency for frontend
cd frontend
npm install
# Run the development server
npm run dev

# open in browser
http://localhost:5173/

```