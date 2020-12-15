import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

class ProfileContacts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.page != 'contacts') {
            return null;
        }
        else {
            return (
                <View>
                    <Text>Contacts Page</Text>
                </View>
            );
        }
    }
}

export default ProfileContacts;