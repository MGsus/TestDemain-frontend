import axios from "axios";

const logIn = userLogin => {
    return axios.post('logIn/', {userLogin});
};

const signIn = function (userSignIn) {
    return axios.post(`signIn/`, userSignIn);
};

export {logIn, signIn};