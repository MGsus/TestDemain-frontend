import React from "react";
import {Redirect, Route} from "react-router-dom";
import {getFromStorage, setInStorage} from './storage';
import axios from 'axios';

export const PrivateRoute = ({component: Component, ...rest}) => (
    <Route
        {...rest}
        render={props =>
            verifyToken() ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: {from: props.location}
                    }}
                />
            )
        }
    />
);

export async function verifyToken() {

    const obj = await getFromStorage('the_main_app');

    if (obj && obj.token) {
        const {token} = obj;
        //verify token
        axios.get('/auth/verify?token=' + token)
            .then(res => {
                if (res.data.success) {
                    console.log("Valid token");
                    return true
                } else {
                    console.log("Invalid token")
                    setInStorage('the_main_app', {});
                    return false
                }
            }).catch(err => {
            console.log(err);
            return false
        })
    } else {
        console.log("Token not found");
        return false
    }

}
