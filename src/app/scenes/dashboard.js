import React, {Component} from 'react';
import {Header} from 'app/components/header.js';
import {Sidenav} from 'app/components/sidenav.js';
import {Techs} from 'app/techs/techs.js';


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100%'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

export class Dashboard extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header/>
        <Sidenav/>
        <Techs/>
      </div>
    );
  }
}