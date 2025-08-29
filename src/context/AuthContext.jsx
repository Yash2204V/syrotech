import React, { useState, useEffect } from 'react'
import { AuthContext } from './AuthContext.js'

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Check for stored auth token on app load
        const token = localStorage.getItem('authToken')
        const userData = localStorage.getItem('userData')

        if (token && userData) {
            setUser(JSON.parse(userData))
        }
        setLoading(false)
    }, [])

    const login = async (email, password) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            })

            if (response.ok) {
                const data = await response.json()
                localStorage.setItem('authToken', data.token)
                localStorage.setItem('userData', JSON.stringify(data.user))
                setUser(data.user)
                return { success: true }
            } else {
                const error = await response.json()
                return { success: false, error: error.message }
            }
        } catch (err) {
            console.log(err);
            return { success: false, error: 'Network error occurred' }
        }
    }

    const register = async (userData) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_API}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            })

            if (response.ok) {
                const data = await response.json()
                localStorage.setItem('authToken', data.token)
                localStorage.setItem('userData', JSON.stringify(data.user))
                setUser(data.user)
                return { success: true }
            } else {
                const error = await response.json()
                return { success: false, error: error.message }
            }
        } catch (err) {
            console.log(err);
            return { success: false, error: 'Network error occurred' }
        }
    }

    const logout = () => {
        localStorage.removeItem('authToken')
        localStorage.removeItem('userData')
        setUser(null)
    }

    const value = {
        user,
        login,
        register,
        logout,
        loading,
        isAuthenticated: !!user,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
