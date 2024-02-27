import { defineStore } from 'pinia';
import axios from '../assets/lib/axios.js';


export const useClientPostsStore = defineStore('clientPost', () => {

    // loading and error handling
    const loading = ref(false);
    const error = ref(null);

    // state
    const clientPost = ref(null);
    const clientPosts = ref([])

    // methods

    const getAllClientPosts = async () => {

        loading.value = true
        const res = await axios.get('/get-all-client-posts')
        loading.value = false
        clientPosts.value = res.data.result
    }



    return {

        // state
        clientPost,
        clientPosts,
        loading,
        error,


        // methods
        getAllClientPosts,


    };


}, {
    // Persist the state in local storage
    persist: [
        {
            key: "clientPost",
            paths: [
                "clientPost",
            ],
        },
    ],
});
