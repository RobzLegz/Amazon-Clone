import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:5001/telegram-clone-8906f/us-central1/api"
});

export default instance;
