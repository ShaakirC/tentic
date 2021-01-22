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
                <View style={{ padding: 32 }}>
                    <View style={styles.header}>
                        <Text style={styles.heading}>Mission Statement</Text>
                    </View>
                    <View style={ styles.container}>
                        <Text style={styles.text}>
                            Company Mission Statement will be inserted here. For now, some random text to show the content justification being centered.
                            {'\n'}{'\n'}
                            Some more content can go here. Blah blah blah blah.
                        </Text>
                        <Text style={styles.text}>
                            Company Mission Statement will be inserted here. For now, some random text to show the content justification being centered.
                            {'\n'}{'\n'}
                            Some more content can go here. Blah blah blah blah.
                        </Text>
                        <Text style={styles.text}>
                            Company Mission Statement will be inserted here. For now, some random text to show the content justification being centered.
                            {'\n'}{'\n'}
                            Some more content can go here. Blah blah blah blah.
                        </Text>
                        <Text style={styles.text}>
                            Company Mission Statement will be inserted here. For now, some random text to show the content justification being centered.
                            {'\n'}{'\n'}
                            Some more content can go here. Blah blah blah blah.
                        </Text>
                        <Text style={styles.text}>
                            Company Mission Statement will be inserted here. For now, some random text to show the content justification being centered.
                            {'\n'}{'\n'}
                            Some more content can go here. Blah blah blah blah.
                        </Text>
                        <Text style={styles.text}>
                            Company Mission Statement will be inserted here. For now, some random text to show the content justification being centered.
                            {'\n'}{'\n'}
                            Some more content can go here. Blah blah blah blah.
                        </Text>
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    empty: {

    },
    container: {
        alignItems: 'center',
    },
    heading: {
        fontSize: 35,
        textDecorationLine: 'underline',
        alignSelf: 'center',
        flex: 1,
        alignContent: 'center',
    },
    header: {
        margin: 12,
        alignSelf: 'center',
        flex: 1,
        alignContent: 'center',
    },
    title: {
        flex: 1,
        alignItems: 'flex-end',
    },
    data: {
        flex: 1,
        alignContent: 'flex-start',
    },
    text: {
        margin: 32,
        padding: 10,
        fontSize: 20,
        textAlign: 'center',
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default ProfileAbout;