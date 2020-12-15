import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

class PageHome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.page != 'home') {
            return null;
        }
        else {
            return (
                <View>
                    <Text>HomePage</Text>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: 'white',
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        flex: 5,
        padding: 32,
        alignSelf: 'stretch',
        backgroundColor: 'grey',
    },
    header: {
        flex: 2,
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'lightblue',
    },
    button: {
        padding: 10,
        paddingHorizontal: 30,
    },
    logo: {
        padding: 50,
        borderRadius: 50,
        overflow: 'hidden',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
    },
    buttonRow: {
        flexDirection: 'row',
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingVertical: 32,
        borderRadius: 50,
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    search: {
        padding: 20,
        justifyContent: 'center',
        width: 250,
        borderRadius: 50,
        overflow: 'hidden',
        backgroundColor: 'white',
    },
    searchBar: {
        textAlign: 'left',
        padding: 32,
        width: 250,
        height: 60,
        backgroundColor: 'white',
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: 'black',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: 'grey',
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: 'grey',
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});

export default PageHome;