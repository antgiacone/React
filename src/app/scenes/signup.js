import React, {Component} from 'react';
import {Header} from 'app/components/header.js';
import {Sidenav} from 'app/components/sidenav.js';

export class Signup extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Sidenav/>
                Signup
            </div>
        )
    }
}