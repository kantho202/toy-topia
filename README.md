# 🧸 Toy Topia

A modern toy marketplace web application built with React, Firebase, and Tailwind CSS. Browse popular toys, view detailed product pages, and manage your account with full authentication support.

---

## 🌐 Live Demo

🔗 [https://toy-topiya.web.app](https://toy-topiya.web.app)

---

## ✨ Features

- 🔐 Firebase Authentication (Email/Password + Google Sign-In)
- 🏠 Home page with animated toy cards and a smooth image slider
- 🔍 Toy detail pages with full product info
- 👤 User profile with display name and photo
- 🔑 Forgot password support
- 🎨 Responsive UI with DaisyUI + Tailwind CSS
- 💫 Scroll animations powered by AOS
- 🛡️ Protected routes for authenticated users
- ⚠️ Custom 404 error page

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI Framework |
| React Router 7 | Client-side routing |
| Firebase 12 | Auth & Hosting |
| Tailwind CSS 4 | Styling |
| DaisyUI 5 | UI Components |
| Swiper.js | Image Slider |
| AOS | Scroll Animations |
| React Icons | Icon Library |
| React Toastify | Toast Notifications |
| Vite | Build Tool |

---

## 📁 Project Structure

```
src/
├── assets/          # Local images (toys)
├── components/
│   ├── Footer/
│   ├── ForgetPassword/
│   ├── Navbar/
│   ├── Slider/
│   ├── ToyCard/
│   └── ToyDetailsCard/
├── firebase/        # Firebase config
├── pages/           # Route pages
├── Provider/        # Auth context
└── routes/          # App routes
public/
└── toys.json        # Toy data
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/programming-hero-web-course2/b12-a9-firesheild-kantho202.git

# Navigate into the project
cd b12-a9-firesheild-kantho202

# Install dependencies
npm install

# Start the dev server
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## 🔑 Environment Variables

Create a `.env.local` file in the root and add your Firebase config:

```env
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
```

---

## 📦 Deployment

This project is deployed on **Firebase Hosting**.

```bash
npm run build
firebase deploy
```

---

## 👨‍💻 Author

**Kantho** — [GitHub](https://github.com/kantho202)

---

> Built with ❤️ as part of Programming Hero Web Course — Assignment 9
