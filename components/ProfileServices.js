import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

class ProfileServices extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.page != 'services') {
            return null;
        }
        else {
            return (
                <View>
                    <Text>Services Page</Text>
                </View>
            );
        }
    }
}

export default ProfileServices;