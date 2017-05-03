import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

import {Header} from 'app/components/header.js';
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
        <Techs/>
      </div>
    );
  }
}