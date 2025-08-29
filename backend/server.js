/* eslint-disable no-undef */
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import dotenv from 'dotenv'
import connectDB from './config/database.js'
import authRoutes from './routes/auth.js'
import { errorHandler, notFound } from './middleware/errorHandler.js'

// Load environment variables
dotenv.config()

// Connect to database
connectDB()

const app = express()

// Security middleware
app.use(helmet())

// CORS configuration
app.use(cors())

// Rate limiting
const limiter = rateLimit({
    windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
    max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100, // limit each IP to 100 requests per windowMs
    message: {
        success: false,
        message: 'Too many requests from this IP, please try again later.'
    },
    standardHeaders: true,
    legacyHeaders: false
})
app.use('/api/', limiter)

// Body parsing middleware
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true, limit: '10mb' }))

// Health check route
app.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Syrotech API is running!',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
    })
})

// API routes
app.use('/api/auth', authRoutes)

// Welcome route
app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Welcome to Syrotech API',
        version: '1.0.0',
        endpoints: {
            health: '/health',
            auth: '/api/auth',
            register: '/api/auth/register',
            login: '/api/auth/login',
            profile: '/api/auth/profile',
            verify: '/api/auth/verify'
        }
    })
})

// Handle favicon.ico requests to prevent 404 errors
app.get('/favicon.ico', (req, res) => {
    res.status(204).send() // No content
})

// 404 handler
app.use(notFound)

// Error handling middleware
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`🚀 Syrotech API Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`)
    console.log(`📊 Health check available at: http://localhost:${PORT}/health`)
    console.log(`🔐 Auth endpoints available at: http://localhost:${PORT}/api/auth`)
})
