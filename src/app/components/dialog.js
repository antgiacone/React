import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

export class Dialog extends Component {
    state = {
        open: false
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleCloses = () => {
        this.setState({open: false});
    };

    render() {
            const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleCloses}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleCloses}
      />,
    ];
        return (
      <div>
        <RaisedButton label="Dialog" onTouchTap={this.handleOpen} />
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleCloses}
        >
          The actions in this window were passed in as an array of React objects.
        </Dialog>
      </div>
    );
    }
}