// authMiddleware.js
import { useAuthStore } from '@/store/authStore'

export const requireAuth = (to, from, next) => {
    const isAuthenticated = useAuthStore().$state.isLoggedIn
    if (to.meta.requiresAuth && !isAuthenticated) {
        // Redirect to login page if user is not authenticated
        next({ name: '/auth/' })
    } else if (to.meta.requiresGuest && isAuthenticated) {
        // Redirect to home page if user is already authenticated
        next({ name: 'clients' })
    }
    else {
        // Continue to the requested route
        next()
    }
}