import React, {Component} from 'react';
import {Header} from 'app/components/header.js';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

export class Signup extends Component {
    render() {
        return (
            <div>
                <Header/>
                <TextField
                    floatingLabelText="User Name"
                    /><br />
                    <TextField
                    floatingLabelText="Password"
                    type="password"
                    /><br />
                    <Checkbox
                    label="Remember Me"
                    labelPosition="right"
                    style={styles.checkbox}
                    />
                    <RaisedButton label="LOGIN" primary={true} />
            </div>
        )
    }
}