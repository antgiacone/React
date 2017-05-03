import React, {Component} from 'react';
import {Link} from 'react-router';
import {Header} from 'app/components/header.js';
import {MediaTable} from 'app/components/table.js';

export class Medias extends Component {
    render() {
        return (
            <div>
                <Header/>
                Medias page
                <MediaTable/>
            </div>
        )
    }
}