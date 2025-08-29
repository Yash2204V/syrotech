# 🔐 Syrotech Backend API

Node.js Express backend with MongoDB, JWT authentication, and comprehensive security features.

## 🚀 Features

- **User Authentication** - Register, Login, Profile management
- **JWT Security** - Secure token-based authentication
- **MongoDB Integration** - Mongoose ODM with validation
- **Password Security** - bcrypt hashing with salt rounds
- **Rate Limiting** - Protection against brute force attacks
- **Account Lockout** - Temporary lockout after failed attempts
- **Input Validation** - Express-validator with sanitization
- **CORS Support** - Cross-origin resource sharing
- **Security Headers** - Helmet.js for security headers
- **Error Handling** - Comprehensive error handling middleware

## 📦 Dependencies

```json
{
  "express": "^4.18.2",
  "mongoose": "^8.0.3",
  "bcryptjs": "^2.4.3",
  "jsonwebtoken": "^9.0.2",
  "cors": "^2.8.5",
  "dotenv": "^16.3.1",
  "express-validator": "^7.0.1",
  "helmet": "^7.1.0",
  "express-rate-limit": "^7.1.5"
}
```

## 🛠️ Installation

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` with your configuration

4. **Start MongoDB** (if running locally)
   ```bash
   mongod
   ```

5. **Start the server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

## 🔧 Environment Variables

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/syrotech
JWT_SECRET=your_super_secret_jwt_key
JWT_EXPIRE=7d
FRONTEND_URL=http://localhost:5173
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
BCRYPT_SALT_ROUNDS=12
```

## 📡 API Endpoints

### Authentication Routes (`/api/auth`)

#### POST `/api/auth/register`
Register a new user
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "SecurePass123",
  "phone": "+1234567890",
  "company": "Tech Corp"
}
```

#### POST `/api/auth/login`
Login user
```json
{
  "email": "john@example.com",
  "password": "SecurePass123"
}
```

#### GET `/api/auth/profile`
Get user profile (Protected)
- Requires: `Authorization: Bearer <token>`

#### PUT `/api/auth/profile`
Update user profile (Protected)
```json
{
  "name": "John Smith",
  "phone": "+1234567890",
  "company": "New Company"
}
```

#### PUT `/api/auth/change-password`
Change password (Protected)
```json
{
  "currentPassword": "OldPass123",
  "newPassword": "NewSecurePass123"
}
```

#### GET `/api/auth/verify`
Verify JWT token (Protected)

### Health Check

#### GET `/health`
Health check endpoint
```json
{
  "success": true,
  "message": "Syrotech API is running!",
  "timestamp": "2025-08-30T00:00:00.000Z",
  "environment": "development"
}
```

## 🔒 Security Features

### Password Requirements
- Minimum 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number

### Account Protection
- **Rate Limiting**: 100 requests per 15 minutes per IP
- **Account Lockout**: 30 minutes after 5 failed login attempts
- **Password Hashing**: bcrypt with 12 salt rounds
- **JWT Expiration**: 7 days default
- **CORS Protection**: Configured for frontend domain
- **Security Headers**: Helmet.js implementation

### Input Validation
- Email format validation
- Password strength validation
- Name and company length limits
- Phone number format validation
- XSS prevention through sanitization

## 📊 Database Schema

### User Model
```javascript
{
  name: String (required, 2-100 chars),
  email: String (required, unique, valid email),
  password: String (required, hashed, min 8 chars),
  phone: String (optional, max 20 chars),
  company: String (optional, max 100 chars),
  role: String (enum: ['user', 'admin'], default: 'user'),
  isEmailVerified: Boolean (default: false),
  lastLogin: Date,
  loginAttempts: Number (default: 0),
  lockUntil: Date,
  createdAt: Date,
  updatedAt: Date
}
```

## 🧪 Testing

Test the API endpoints using tools like:
- **Postman**
- **Insomnia**
- **cURL**
- **Thunder Client** (VS Code extension)

Example cURL request:
```bash
# Register
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"SecurePass123"}'

# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"SecurePass123"}'
```

## 🚨 Error Responses

All errors follow this format:
```json
{
  "success": false,
  "message": "Error description",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email address"
    }
  ]
}
```

### Common Status Codes
- `200` - Success
- `201` - Created
- `400` - Bad Request / Validation Error
- `401` - Unauthorized / Invalid Credentials
- `403` - Forbidden
- `404` - Not Found
- `429` - Too Many Requests
- `500` - Internal Server Error

## 🔄 Development

### Project Structure
```
backend/
├── config/
│   └── database.js
├── middleware/
│   ├── auth.js
│   ├── validation.js
│   └── errorHandler.js
├── models/
│   └── User.js
├── routes/
│   └── auth.js
├── .env
├── .env.example
├── package.json
└── server.js
```

### Scripts
- `npm run dev` - Development with nodemon
- `npm start` - Production mode
- `npm test` - Run tests (to be implemented)

## 📝 License

This project is proprietary and confidential.

---

**Built with ❤️ for Syrotech Backend API**
