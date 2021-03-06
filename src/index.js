import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Router, Route, browserHistory} from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Main} from './app/scenes/main.js';
import {Dashboard} from './app/scenes/dashboard/dashboard.js';
import {Medias} from './app/scenes/medias.js';
import {Playlists} from './app/scenes/playlists/playlists.js';
import {Signup} from './app/scenes/signup.js';

injectTapEventPlugin();


ReactDOM.render(
<MuiThemeProvider>
 <Router history={browserHistory}>
    <Route path="/" component={Main}/>
    <Route path="/dashboard" component={Dashboard}/>
    <Route path='/medias' component={Medias}/>
    <Route path='/playlists' component={Playlists}/>
    <Route path='/signup' component={Signup}/>
  </Router>
</MuiThemeProvider>,
  document.getElementById('root')
);
