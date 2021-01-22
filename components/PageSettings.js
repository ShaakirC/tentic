import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    ListView,
    TouchableOpacity,
} from 'react-native';



class PageSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            style: 'Style1',
        };
        
    }

    style1 = () => {
        this.setState({ style: 'Style1' });
    };

    style2 = () => {
        this.setState({ style: 'Style2' });
    };

    applyStyle = () => this.props.applyStylePress(this.state.style);

    render() {
        if (this.props.page != 'settings') {
            return null;
        }
        else {
            return (
                <View style={{ padding: 32 }}>
                    <Text>Current selected Style: { this.state.style}</Text>
                    <TouchableOpacity
                        style={{ margin: 6, padding: 16, backgroundColor: 'lightblue' }}
                        onPress={this.style1}
                    >
                        <Text>Style 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ margin: 6, padding: 16, backgroundColor: 'lightblue' }}
                        onPress={this.style2}
                    >
                        <Text>Style 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ margin: 6, padding: 16, backgroundColor: 'lightblue' }}
                        onPress={this.applyStyle}
                    >
                        <Text>APPLY</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }
}

export default PageSettings;