import React, {Component} from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

export class PlaylistTabs extends Component {
      constructor(props) {
        super(props);
        this.state = {
        value: 'a',
        };
    }

    handleChange = (value) => {
        this.setState({
        value: value,
        });
    };
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <Tabs
                value={this.state.value}
                onChange={this.handleChange}
            >
                <Tab label="Tab A" value="a">
                <div>
                    <h2 style={styles.headline}>Controllable Tab A</h2>
                    <p>
                    Tabs are also controllable if you want to programmatically pass them their values.
                    This allows for more functionality in Tabs such as not
                    having any Tab selected or assigning them different values.
                    </p>
                </div>
                </Tab>
                <Tab label="Tab B" value="b">
                <div>
                    <h2 style={styles.headline}>Controllable Tab B</h2>
                    <p>
                    This is another example of a controllable tab. Remember, if you
                    use controllable Tabs, you need to give all of your tabs values or else
                    you wont be able to select them.
                    </p>
                </div>
                </Tab>
            </Tabs>
            </MuiThemeProvider>
        )
    }
}