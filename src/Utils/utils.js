import axios from "axios";

const configureRequests = () => {
    axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'https://backend-evening-eyrie.herokuapp.com/' : 'http://localhost:5000/';
};

export default configureRequests;