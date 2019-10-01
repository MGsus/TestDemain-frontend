import axios from "axios";

const configureRequests = () => {
    axios.defaults.baseURL = process.env.BACKEND_URL;
};

export default configureRequests;