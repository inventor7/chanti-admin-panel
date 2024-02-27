import { defineStore } from 'pinia';
import axios from '../assets/lib/axios.js';


export const useCategoriesStore = defineStore('category', () => {

    // loading and error handling
    const loading = ref(false);
    const error = ref(null);

    // state
    const category = ref(null);
    const categories = ref([])

    // methods

    const getAllCategories = async () => {

        loading.value = true
        const res = await axios.get('/get-all-categories')
        loading.value = false
        categories.value = res.data.result
    }



    return {

        // state
        category,
        categories,
        loading,
        error,


        // methods
        getAllCategories,


    };


}, {
    // Persist the state in local storage
    persist: [
        {
            key: "category",
            paths: [
                "category",
            ],
        },
    ],
});
