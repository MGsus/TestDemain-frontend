import React, { Component } from 'react';
import '../../App.css';


class Private extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        Youre in a private page, meaning youre logged in 
                    </p>
                </header>
            </div>
        )
    }
}

export default Private;