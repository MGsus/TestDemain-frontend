import React, {Component} from 'react';
import './login.css';
import {getFromStorage, setInStorage} from '../../Utils/storage'

import {Button} from '@material-ui/core';
import axios from 'axios'

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            signOutError: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSingOut = this.onSingOut.bind(this);

    }

    handleSubmit = event => {
        event.preventDefault()
    };

    onSingOut() {

        const obj = getFromStorage('the_main_app')

        if (obj && obj.token) {
            const {token} = obj;
            axios.get('http://localhost:5000/auth/logout?token=' + token)
                .then(res => {

                    this.setState({
                        signOutError: res.data.message,
                        isLoading: false
                    });
                    setInStorage('the_main_app', {})
                    window.location = "/"

                })
                .catch(err => {
                    this.setState({
                        signOutError: err.toString(),
                    })
                })

        } else {
            window.location = "/"
        }
    }

    render() {
        return (
            <div className="Login">
                {
                    (this.state.signOutError) ? (
                        <div className="text-danger"><p>{this.state.signOutError}</p></div>) : (null)
                }
                <form onSubmit={this.handleSubmit}>
                    <Button
                        block
                        bssize="large"
                        type="submit"
                        disabled={this.isLoading}
                        onClick={this.onSingOut}>
                        Logout
                    </Button>
                </form>
            </div>
        )
    }
}

