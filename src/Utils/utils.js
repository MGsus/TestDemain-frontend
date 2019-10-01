import axios from "axios";

const configureRequests = () => {
    if (process.NODE_ENV === 'development') axios.defaults.baseURL = 'http://localhost:5000/';
    else if (process.NODE_ENV === 'production') axios.defaults.baseURL = 'https://backend-evening-eyrie.herokuapp.com/';
};

export default configureRequests;