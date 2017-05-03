import React, {Component} from 'react';
import {Link} from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';


const styles = {
  header: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1f1f1f'
  },
  title: {
    flex: 1,
    fontSize: '1.5rem',
    margin: '1rem'
  },
  date: {
    flex: 1,
    textAlign: 'right',
    margin: '1rem',
    color: 'white'
  }
};

export class Header extends Component {
  constructor(props) {
    super(props);
        this.state = {
            open: false
        }
    }  
    //Toggle function (open/close Drawer)
    toggleDrawer() {
      
        this.setState({
            open: !this.state.open
        })
    }
  render() {
    return (
        <AppBar title="Scala Content Manager" onLeftIconButtonTouchTap={this.toggleDrawer.bind(this)}>
              <Drawer open={this.state.open} onToggleDrawer={this.toggleDrawer.bind(this)}>
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
          </AppBar>
    );
  }
}
