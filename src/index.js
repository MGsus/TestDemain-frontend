import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureRequests from "./Utils/utils";
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import {blue} from "@material-ui/core/colors";

const theme = createMuiTheme({
    palette: {
        primary: blue,
        type: 'light',
    },
});

configureRequests();

ReactDOM.render(<MuiThemeProvider theme={theme}><App/></MuiThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
