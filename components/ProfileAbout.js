import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

class ProfileAbout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.page != 'about') {
            return null;
        }
        else {
            return (
                <View>
                    <Text>Mission Statement Page</Text>
                </View>
            );
        }
    }
}

export default ProfileAbout;