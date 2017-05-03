import React, {Component} from 'react';
import {Link} from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export class Sidenav extends Component {

    constructor(props) {
        super(props);
        this.state = {open: true};
    }

    handleClose = () => this.setState({open: false});
    render() {
        return (
         <Drawer docked={false} openSecondary={true} open={this.state.open}>
          <MenuItem
          containerElement={<Link to="/signup" />}
            onClick={this.handleClose}
            >Signup</MenuItem>
          <MenuItem 
          containerElement={<Link to="/dashboard" />}
          onClick={this.handleClose}>Dashboard</MenuItem>
          <MenuItem 
            containerElement={<Link to="/medias" />}
            onClick={this.handleClose}
            >Medias</MenuItem>
          <MenuItem
          containerElement={<Link to="/playlists" />}
            onClick={this.handleClose}
            >Playlists</MenuItem>
          <MenuItem>Schedule</MenuItem>
          <MenuItem>Channels</MenuItem>
          <MenuItem>Players</MenuItem>
        </Drawer>
        )
    }
}
