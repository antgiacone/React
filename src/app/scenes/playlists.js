import React, {Component} from 'react';
import {Header} from 'app/components/header.js';
import {Sidenav} from 'app/components/sidenav.js';
import {PlaylistTabs} from 'app/components/tabs.js';
import {HorizontalTransition} from 'app/components/steps.js';

export class Playlists extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Sidenav/>
                Playlist page
                <PlaylistTabs/>
                <HorizontalTransition/>
            </div>
        )
    }
}