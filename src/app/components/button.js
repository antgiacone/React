import React, {Component} from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';

export class Button extends Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick = () => this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
    }));
    render() {
        return (
             <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <FlatButton onClick={this.handleClick} label={this.state.isToggleOn ? 'ON' : 'OFF'}/>
            </MuiThemeProvider>
        )
    }
}