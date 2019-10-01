import axios from "axios";

const configureRequests = () => {
    axios.defaults.baseURL = process.env.BACKEND_URL.toString();
};

export default configureRequests;