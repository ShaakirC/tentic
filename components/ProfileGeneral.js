import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    ListView,
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
                <View style={{flexDirection: 'column', flex: 1}}>
                    <View style={styles.general}>
                        <TouchableOpacity
                            style={ styles.button}
                            onPress={this.liveTenders}
                        >
                            <Text>Live Tenders</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.awardedTenders}
                        >
                            <Text style={{ justifyContent: 'center' }}>Awarded{'\n'}Tenders</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.projects}
                        >
                            <Text>Projects</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={this.history}
                        >
                            <Text>History</Text>
                        </TouchableOpacity>
                    </View>
                    <View>

                    </View>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    general: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 32,
    },
    container: {
        flex: 1,
        padding: 32,
        margin: 12,
        height: 400,
        borderColor: 'black',
        borderWidth: 2,
        alignContent: 'center',
        flexDirection: 'column',
    },
    heading: {
        fontSize: 20,
        alignSelf: 'center',
        flex: 1,
        alignContent: 'center',
    },
    content: {
        flex: 5,
        justifyContent: 'flex-start',
        alignContent: 'center',
    },
    button: {
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 32,
        margin: 12,
    },
});

export default ProfileGeneral;