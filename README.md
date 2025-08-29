# 🚀 Syrotech SPA Website

A modern Single Page Application showcasing Syrotech's brand, products, vision, and achievements with user authentication capabilities.

## 📋 Features

### 🎯 Core Features
- **Responsive Design** - Works seamlessly across all devices
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Fast Performance** - Built with Vite for optimal loading speeds
- **SEO Friendly** - Semantic HTML structure

### 🔐 Authentication System
- **User Registration** - Complete signup flow with validation
- **User Login** - Secure authentication with JWT tokens
- **Password Security** - Encrypted passwords with bcrypt
- **Session Management** - Persistent login with "Remember Me"
- **Form Validation** - Real-time validation with error messages

### 🎨 Interactive Sections
- **Hero Section** - Auto-scrolling banner with manual navigation
- **Products Showcase** - Horizontal scrolling product cards
- **Vision & Mission** - Animated content blocks
- **Video Section** - Embedded promotional video with custom controls
- **Statistics Counter** - Animated number counters (100+ Products, 20+ Years, 50+ Countries, 500K+ Customers)

### 🧭 Navigation
- **Sticky Header** - Always accessible navigation
- **Search Functionality** - Product and content search
- **Mobile Menu** - Responsive mobile navigation
- **Smooth Scrolling** - Enhanced user experience

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Context API

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Yash2204V/syrotech
   cd syrotech
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
syrotech/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ProductsSection.jsx
│   │   ├── VisionSection.jsx
│   │   ├── VideoSection.jsx
│   │   └── StatsSection.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── context/
│   │   ├── AuthContext.js
│   │   └── AuthContext.jsx
│   ├── utils/
│   │   └── helpers.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── backend/
│   └── (Backend API files)
├── PRD.md
└── package.json
```

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS for styling. Configuration is in `tailwind.config.js`.

### Authentication
Authentication is handled through React Context API. The backend API endpoints need to be configured for full functionality.

## 🌟 Key Components

### HeroSection
- Auto-scrolling banner with 3 slides
- Manual navigation controls
- Responsive design with animations

### ProductsSection
- Horizontal auto-scrolling product cards
- Hover effects and animations
- Product features display

### VisionSection
- Mission, vision, values, and future
- Animated counters and highlights
- Gradient backgrounds

### VideoSection
- Custom video player controls
- Fullscreen support
- Responsive video container

### StatsSection
- Animated counters with intersection observer
- Beautiful gradient backgrounds
- Interactive hover effects

### Authentication
- Complete login/register forms
- Real-time validation
- Error handling and loading states

## 🎨 Design Features

- **Modern Gradient Backgrounds**
- **Smooth Animations** - Framer Motion powered
- **Glass Morphism Effects** - Backdrop blur and transparency
- **Responsive Grid Layouts**
- **Interactive Hover States**
- **Custom Video Controls**
- **Animated Counters**

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large screens: 1280px+

## 🔒 Security Features

- Password encryption (ready for backend integration)
- JWT token management
- Form validation and sanitization
- XSS protection through React
- Secure authentication flow

## 🚧 Future Enhancements

- Social media login (Google, Facebook)
- Two-factor authentication
- Password reset functionality
- User profile management
- Product favorites/wishlist
- Advanced search filters
- Multi-language support

## 📞 Support

For support and questions, please contact the development team.

## 📄 License

This project is proprietary and confidential.

---

**Built with ❤️ for Syrotech**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
