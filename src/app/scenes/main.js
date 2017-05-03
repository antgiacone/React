import React, {Component} from 'react';
import {Link} from 'react-router';


import {Button} from 'app/components/button.js';
import {Header} from 'app/components/header.js';
import {Title} from 'app/components/title.js';
import {Techs} from 'app/techs/techs.js';
import {Footer} from 'app/components/footer.js';



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

export class Main extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Link to="/medias">Medias</Link>
        <Button/>
      </div>  

  
    );
  }
}
