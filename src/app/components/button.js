import React, {Component} from 'react';
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

                <FlatButton onClick={this.handleClick} label={this.state.isToggleOn ? 'ON' : 'OFF'}/>

        )
    }
}