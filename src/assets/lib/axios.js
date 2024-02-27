import Axios from 'axios';
// Create an instance of Axios with default settings
const axios = Axios.create({
    baseURL: 'https://chanti-dz.com/api/admin/',

    timeout: 60000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        cors : true
    },
});

// Add an interceptor to handle authentication or other common logic
axios.interceptors.request.use((config) => {
    // Barer token
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}
    // Handle any errors here
    , (err) => {

    }
);

// Add an interceptor to handle responses or other common logic
axios.interceptors.response.use(null, (err) => {

    // Handle any errors here 
    const error = {
        status: err.response.status,
        message: null,
        validation: {},
        original: err,
    }

    if (err.response?.status === 422) {
        error.message = 'Validation error';
        for (const key in err.response.data.errors) {
            error.validation[key] = err.response.data.errors[key][0];
        }
    } else if (err.response?.status === 401) {
        error.message = 'Unauthorized';
    } else if (err.response?.status === 403) {
        error.message = 'Forbidden';
    }
    else if (err.response?.status === 404) {
        error.message = 'Not found';
    }
    else if (err.response?.status === 500) {
        error.message = 'Server error';
    }
    else {
        error.message = err.response.data.message;
    }
    return Promise.reject(error);
}



);

export default axios;