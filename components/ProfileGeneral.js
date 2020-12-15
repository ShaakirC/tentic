import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

class ProfileGeneral extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.page != 'general') {
            return null;
        }
        else {
            return (
                <View style={styles.general}>
                    <View style={styles.container}>
                        <Text style={styles.heading}>Background</Text>
                        <View style={styles.content}>
                            <Text>content</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.heading}>Key Projects</Text>
                        <View style={styles.content}>
                            <Text>content</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.heading}>Staff</Text>
                        <View style={styles.content}>
                            <Text>content</Text>
                        </View>
                    </View>
                    <View style={styles.container}>
                        <Text style={styles.heading}>Legal Documents</Text>
                        <View style={styles.content}>
                            <Text>content</Text>
                        </View>
                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    general: {
        alignItems: 'stretch',
        flex: 1,
        flexDirection: 'row',
        padding: 32,
        justifyContent: 'space-between',
    },
    container: {
        alignContent: 'center',
        flexDirection: 'column',
    },
    heading: {
        fontSize: 25,
        alignSelf: 'center',
        flex: 1,
        alignContent: 'center',
    },
    content: {
        flex: 5,
        justifyContent: 'center',
        alignContent: 'center',
    },
});

export default ProfileGeneral;