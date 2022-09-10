import axios from "axios";

const authAxios = axios.create({
    baseURL: "https://api.collectapi.com/economy",
    headers: {
        Authorization: `apikey 5TLAjdgUX8ftnJCj1Y9Bco:42nV31JCsxPZlJZrzzFYoL`,
    },
});

export default authAxios;