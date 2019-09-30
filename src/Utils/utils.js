import axios from "axios";

const configureRequests = function () {
    axios.defaults.baseURL = process.env.BACKEND_URL;
};

export default configureRequests;