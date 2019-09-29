import React, {Component} from 'react';
import './login.css';
import {setInStorage} from '../../Utils/storage';
import {Button, FormControl, FormGroup, FormLabel} from '@material-ui/core';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            signInError: ''
        };

        this.validateForm = this.validateForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onSignIn = this.onSignIn.bind(this);

    }

    validateForm() {
        return this.state.username > 3 && this.state.password.length > 0
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    };

    handleSubmit = event => {
        event.preventDefault()
    };

    onSignIn() {
        //Grab state and post request to backend
        const userLogin = {
            username: this.state.username,
            password: this.state.password
        };

        axios.post('http://localhost:5000/logIn', userLogin)
            .then(res => {
                this.setState({
                    signInError: res.data.message,
                });
                if (res.data.success) {
                    setInStorage('the_main_app', {token: res.data.token});
                    window.location = "/"
                }
            })
            .catch(err => {
                this.setState({
                    signInError: err.toString(),
                })
            })
    }

    render() {
        return (
            <div className="Login">
                <br/>
                {
                    (this.state.signInError) ? (
                        <div className="text-danger"><p>{this.state.signInError}</p></div>) : null
                }
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" bssize="large">
                        <FormLabel>
                            Username
                        </FormLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bssize="large">
                        <FormLabel>
                            Password
                        </FormLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bssize="large"
                        disabled={!this.validateForm}
                        type="submit"
                        onClick={this.onSignIn}>
                        Login
                    </Button>
                </form>
            </div>
        );
    }
}