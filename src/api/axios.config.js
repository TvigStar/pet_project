import axios from "axios";

axios.interceptors.request.use(
    (config) => {
        const accessToken = localStorage.getItem('access_token');

        if (accessToken)
            config.headers["Authorization"] = accessToken;

        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

//response interceptor to refresh token on receiving token expired error
axios.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        const refreshToken = localStorage.getItem('refresh_token');

        if (
            refreshToken &&
            error.response?.status === 401 &&
            !originalRequest._retry
        ) {
            originalRequest._retry = true;

            // const { status, data } = await Api.auth.refreshToken({ userID, refreshToken });

            // if (status === 200) {
            //     setAuthTokensToStorage({
            //         accessToken: data.accessToken,
            //         refreshToken: data.refreshToken
            //     });
            //
            //     originalRequest.headers["Authorization"] = data.accessToken;
            //     originalRequest.data = originalRequest.data ? JSON.parse(originalRequest.data) : {};
            //
            //     return axios(originalRequest);
            // }
        }

        document.location.href = 'http://localhost:3000/login'

        // return Promise.reject(error);
    }
);
