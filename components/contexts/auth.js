import React, { createContext, useState, useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import Router, { useRouter } from 'next/router'

//api here is an axios instance which has the baseURL set according to the env.
import api from '../../services/Api';


const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadUserFromCookies() {
            const token = Cookies.get('token')
            if (token) {
                console.log("Got a token in the cookies, let's see if it is valid")
                api.defaults.headers.Authorization = `Bearer ${token}`
                const { data } = await api.get('api/v1/profile')
                if (data) {
                    setUser(data.data.user)
                }
            }
            setLoading(false)
        }
        loadUserFromCookies()
    }, [])

    const login = async (username, password) => {
        const { data: token } = await api.post('auth/login', { username, password })
        if (token) {
            Cookies.set('token', token.access_token, { expires: 60 })
            Cookies.set('refresh', token.access_token, { expires: 60 })
            api.defaults.headers.Authorization = `Bearer ${token.access_token}`
            const { data } = await api.get('api/v1/profile')
            setUser(data.data.user)
        }
    }

    const logout = (username, password) => {
        Cookies.remove('token')
        setUser(null)
        delete api.defaults.headers.Authorization
        window.location.pathname = '/login'
    }


    return (
        <AuthContext.Provider value={{ isAuthenticated: !!user, user, login, loading, logout }}>
            {children}
        </AuthContext.Provider>
    )
}



export const useAuth = () => useContext(AuthContext)