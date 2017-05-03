import React, {Component} from 'react';
import {Header} from 'app/components/header.js';
import {PlaylistTabs} from 'app/components/tabs.js';
import {HorizontalTransition} from 'app/components/steps.js';
import {PlaylistToolbar} from './components/toolbar.js';

export class Playlists extends Component {
    render() {
        return (
            <div>
                <Header/>
                <PlaylistToolbar/>
                <PlaylistTabs/>
                <HorizontalTransition/>
            </div>
        )
    }
}