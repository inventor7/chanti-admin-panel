import { defineStore } from 'pinia';
import axios from '../assets/lib/axios.js';


export const useClientStore = defineStore('client', () => {

    // loading and error handling
    const loading = ref(false);
    const error = ref(null);

    // state
    const client = ref(null);
    const clients = ref([])

    // methods

    const getAllClients = async () => {

        loading.value = true
        const res = await axios.get('/get-all-clients')
        loading.value = false
        clients.value = res.data.result
    }



    return {

        // state
        client,
        clients,
        loading,
        error,


        // methods
        getAllClients,


    };


}, {
    // Persist the state in local storage
    persist: [
        {
            key: "client",
            paths: [
                "client",
            ],
        },
    ],
});
