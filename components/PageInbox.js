import React, { Component } from 'react';

import {
    View,
    Text,
} from 'react-native';

class PageInbox extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.page != 'inbox') {
            return null;
        }
        else {
            return (
                <View>
                    <Text>InboxPage</Text>
                </View>
            );
        }
        
    }
}

export default PageInbox;