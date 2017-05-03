import React, {Component} from 'react';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import MoreVert from 'material-ui/svg-icons/navigation/more-vert';
import Refresh from 'material-ui/svg-icons/navigation/refresh';
import Details from 'material-ui/svg-icons/image/dehaze';
import FileFileDownload from 'material-ui/svg-icons/file/file-download';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

export class DashboardRefresh extends Component {
      state = {
    valueSingle: '3',
    valueMultiple: ['3', '5'],
  };

  handleChangeSingle = (event, value) => {
    this.setState({
      valueSingle: value,
    });
  };

  handleChangeMultiple = (event, value) => {
    this.setState({
      valueMultiple: value,
    });
  };

  handleOpenMenu = () => {
    this.setState({
      openMenu: true,
    });
  }

  handleOnRequestChange = (value) => {
    this.setState({
      openMenu: value,
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <IconMenu
          iconButtonElement={<IconButton><MoreVert /></IconButton>}
          onChange={this.handleChangeSingle}
          value={this.state.valueSingle}
        >
          <MenuItem value="1" primaryText="Refresh" leftIcon={<Refresh />} />
          <MenuItem value="2" primaryText="Details" leftIcon={<Details />} />
        </IconMenu>
        
      </MuiThemeProvider>
    );
  }
}