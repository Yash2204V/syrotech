
## 1. Overview

The purpose of this Single Page Application (SPA) is to present **Syrotech's** brand, products, vision, and achievements while enabling users to **register and log in** for a personalized experience.

---

## 2. Objectives

* Showcase Syrotech's identity, products, and vision.
* Provide user authentication (Login/Register).
* Deliver an interactive and engaging experience with animations.
* Maintain responsiveness across devices.

---

## 3. Target Audience

* Customers interested in Syrotech products.
* Registered users who need access to personalized features.
* Business partners and stakeholders.

---

## 4. Features & Requirements

### 4.1 **Header**

* Logo (clickable, redirects to home).
* Navigation: **Home**, **All**, **Login/Register**.
* Search bar (basic product/content search).
* Sticky header (remains visible on scroll).

---

### 4.2 **Right-to-Left Scroller (Hero Section)**

* Banner-style section with horizontal scrolling.
* Highlights brand, key offerings, and updates.
* Auto-scroll with manual navigation support.

---

### 4.3 **Our Products (Scrolling Section)**

* Product cards moving **right to left** with looping effect.
* Each card contains:
  * Product image.
  * Title & description.
  * CTA (e.g., "Learn More").

---

### 4.4 **Vision Section**

* Animated/static text block explaining Syrotech's mission & vision.

---

### 4.5 **Video Section**

* Embedded promotional video.
* Play/pause controls, responsive design.
* Lazy loading for performance.

---

### 4.6 **Syrotech in Numbers**

* Statistics with animated counters.
* Example metrics: **100+ Products, 20+ Years in Industry, 50+ Countries, 500K+ Customers**.
* Grid layout with icons.

---

### 4.7 **Login & Register**

#### **Register Page/Modal**

* Fields:
  * Name
  * Email
  * Password
  * Confirm Password
  * Additional details (Phone Number, Company/Role – optional)
* Validation: Required fields, unique email check, password rules.
* On success: Redirect to dashboard/home with success message.

#### **Login Page/Modal**

* Fields:
  * Email
  * Password
* Features:
  * Remember Me checkbox.
  * Forgot Password option.
* On success: User is logged in, session maintained via JWT or cookies.

---

### 4.8 **Footer**

* Logo (small).
* Quick Links: Home, Products, Vision, Contact, Login/Register.
* Social Media Icons.
* Contact Info.
* Copyright.

---

## 5. Functional Requirements

* Smooth scroll-based navigation between sections.
* Authentication system:
  * Secure password handling (bcrypt).
  * JWT-based login sessions.
  * Form validations with real-time error messages.
* Product search functionality.
* Responsive layout.

---

## 6. Non-Functional Requirements

* **Performance:** Page load < 2.5s.
* **Security:** HTTPS, encrypted passwords, JWT auth.
* **Accessibility:** Semantic HTML, ARIA labels.
* **Cross-Browser Compatibility.**

---

## 7. Tech Stack (Proposed)

* **Frontend:** React.js + Tailwind CSS.
* **Auth & State:** useEffect, useState.
* **Backend:** Node.js + Express, JWT.
* **Database:** MongoDB

---

## 8. User Authentication Flow

### 8.1 **Registration Process**
1. User clicks "Register" in navigation
2. Registration form/modal opens
3. User fills required fields with validation
4. Backend validates and creates user account
5. Success message shown, user automatically logged in
6. Redirect to personalized dashboard/home

### 8.2 **Login Process**
1. User clicks "Login" in navigation
2. Login form/modal opens
3. User enters credentials
4. Backend validates credentials
5. JWT token issued and stored
6. User redirected to dashboard/home with welcome message

### 8.3 **Session Management**
* JWT tokens with expiration
* Automatic logout on token expiry
* Remember me functionality for extended sessions
* Secure logout with token invalidation

---

## 9. Security Considerations

* Password encryption using bcrypt
* JWT token security with proper expiration
* Input validation and sanitization

---