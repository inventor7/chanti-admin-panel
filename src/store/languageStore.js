import { defineStore } from 'pinia';
import axios from '../assets/lib/axios.js';
import { ref } from 'vue';
import  { useI18n  }  from 'vue-i18n';


export const useLanguageStore = defineStore('languageStore', () => {

    // loading and error handling
    const loading = ref(false);
    const error = ref(null);

    // state
    const words = ref([])

    // methods

    const getAllWords = async () => {

        loading.value = true
        const res = await axios.get('/get-all-client-posts')
        loading.value = false
        words.value = res.data.result
    }

    const getWord =  (word) => {
        return useI18n().t(word)
    }



    return {

        // state
        words,
        loading,
        error,


        // methods
        getAllWords,
        getWord


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
