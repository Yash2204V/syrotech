/* eslint-disable no-undef */
import jwt from 'jsonwebtoken'
import User from '../models/User.js'

// Protect routes - verify JWT token
const protect = async (req, res, next) => {
    try {
        let token

        // Check for token in Authorization header
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1]
        }

        // Make sure token exists
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Not authorized, no token provided'
            })
        }

        try {
            // Verify token
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            // Get user from token
            const user = await User.findById(decoded.id).select('-password')

            if (!user) {
                return res.status(401).json({
                    success: false,
                    message: 'Not authorized, user not found'
                })
            }

            // Check if user account is locked
            if (user.isLocked) {
                return res.status(401).json({
                    success: false,
                    message: 'Account is temporarily locked due to too many failed login attempts'
                })
            }

            req.user = user
            next()
        } catch (error) {
            console.log(error);
            return res.status(401).json({
                success: false,
                message: 'Not authorized, token failed'
            })
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Server error in authentication middleware'
        })
    }
}

// Admin only access
const admin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next()
    } else {
        res.status(403).json({
            success: false,
            message: 'Not authorized as admin'
        })
    }
}

// Generate JWT Token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE || '7d'
    })
}

export {
    protect,
    admin,
    generateToken
}
