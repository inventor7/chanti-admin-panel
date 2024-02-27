import { defineStore } from 'pinia';
import axios from '../assets/lib/axios.js';


export const useAuthStore = defineStore('auth', () => {

    // loading and error handling
    const loading = ref(false);
    const error = ref(null);

    // state
    const user = ref(null);
    const isLoggedIn = ref(false);

    // methods
    const login = async (data) => {
        loading.value = true;
        const response = await axios.post('/login', {
            email: data.email,
            password: data.password
        });
        
        loading.value = false;

        user.value = response.data.user;
        isLoggedIn.value = true;
    };

    const logout = () => { 
        user.value = null;
        isLoggedIn.value = false;
    };



    return {

        // state
        user,
        isLoggedIn,
        loading,

        // methods
        login,
        logout,
    };


}, {
    // Persist the state in local storage
    persist: [
        {
            key: "auth",
            paths: [
                "user",
                "isLoggedIn"
            ],
        },
    ],
});
