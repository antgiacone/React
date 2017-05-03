import React, {Component} from 'react';
import {Header} from 'app/components/header.js';
import TextField from 'material-ui/TextField';

export class Signup extends Component {
    render() {
        return (
            <div>
                <Header/>
                Signup
                <TextField
                    hintText="Hint Text"
                    floatingLabelText="Floating Label Text"
                    /><br />
                    <TextField
                    defaultValue="Default Value"
                    floatingLabelText="Floating Label Text"
                    /><br />
            </div>
        )
    }
}