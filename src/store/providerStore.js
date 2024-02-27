import { defineStore } from 'pinia';
import axios from '../assets/lib/axios.js';


export const useProviderStore = defineStore('provider', () => {

    // loading and error handling
    const loading = ref(false);
    const loadingAccept = ref(false);
    const loadingImage = ref(false);
    const error = ref(null);

    // state
    const provider = ref(null);
    const providers = ref([]);
    const providerImages = ref([]);

    // methods

    const getAllProviders = async () => {

        loading.value = true
        const res = await axios.get('/get-all-providers')
        loading.value = false
        providers.value = res.data.result

    }

    const getImageIdendity = async (imageId) => {

        loadingImage.value = true
        const res = await axios.get(`/get-verify-identity-images/${imageId}`)

        const imageResults = res.data.result;
        const imageUrls = [];

        for (let i = 0; i < imageResults.length; i++) {
            const arrayBuffer = imageResults[i].data;
            const bytes = new Uint8Array(arrayBuffer);
            const blob = new Blob([bytes], { type: "image/jpeg" });
            const url = URL.createObjectURL(blob);
            imageUrls.push(url);
        }

        loadingImage.value = false;
        providerImages.value = imageUrls;

        return res.data.result

    }


    const acceptVerification = async (verificationId, status) => {

        loadingAccept.value = true
        const res = await axios.post('/accept-verification',
            {
                id: verificationId,
                status: status
            })
        loadingAccept.value = false
        return res.data.result
    }

    return {

        // state
        provider,
        providers,
        providerImages,
        loading,
        loadingImage,
        loadingAccept,
        error,


        // methods
        getAllProviders,
        getImageIdendity,
        acceptVerification,


    };


}, {
    // Persist the state in local storage
    persist: [
        {
            key: "provider",
            paths: [
                "provider",
            ],
        },
    ],
});
