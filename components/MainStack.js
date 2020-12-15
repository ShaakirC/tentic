import React, { Component, useState } from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    StatusBar,
    TextInput,
} from 'react-native';

import PageHome from '../components/PageHome';
import PageInbox from '../components/PageInbox';
import PageProfile from '../components/PageProfile';

class MainStack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'profile',
            text: '',
            homeColor: 'white',
            profileColor: 'white',
            inboxColor: 'white',
        };
    }


    homePress = () => {
        this.highLightNavButtons('home');
    };

    profilePress = () => {
        this.highLightNavButtons('profile');
    };

    inboxPress = () => {
        this.highLightNavButtons('inbox');
    };

    highLightNavButtons = (page) => {
        this.setState({ currentPage: page});
        switch(this.state.currentPage) {
            case 'home':
                this.setState({
                    homeColor: 'grey',
                    profileColor: 'white',
                    inboxColor: 'white'
                });
            break;
            case 'profile':
                this.setState({
                    homeColor: 'white',
                    profileColor: 'grey',
                    inboxColor: 'white'
                });
            break;
            case 'inbox':
                this.setState({
                    homeColor: 'white',
                    profileColor: 'white',
                    inboxColor: 'grey'
                });
            break;
        }
    }

    render() {
        const { currentPage } = this.state;
        return (
            <>
                <SafeAreaView>
                    <View style={styles.header}>
                        <View id='logo' style={styles.logo}>
                        </View>
                        <View id='buttonRow'>
                            <View style={styles.buttonRow}>
                                <TouchableOpacity
                                    style={[
                                        styles.button,
                                        { backgroundColor: this.state.homeColor },
                                    ]}
                                    onPress={this.homePress}
                                >
                                    <Text>HOME</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[
                                        styles.button,
                                        { backgroundColor: this.state.profileColor },
                                    ]}
                                    onPress={this.profilePress}
                                >
                                    <Text>PROFILE</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[
                                        styles.button,
                                        { backgroundColor: this.state.inboxColor },
                                    ]}
                                    onPress={this.inboxPress}
                                >
                                    <Text>INBOX</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View id='searchBar' style={styles.search}>
                            <TextInput
                                style={styles.searchbar}
                                placeholder='search...'
                                onChangeText={(text) => this.setState({ text })}
                            />
                        </View>
                    </View>

                    <ScrollView
                        contentInsetAdjustmentBehavior="automatic"
                        style={styles.scrollView}>
                        

                        <PageHome page={currentPage} />
                        <PageProfile page={currentPage} />
                        <PageInbox page={currentPage} />

                    </ScrollView>
                </SafeAreaView>
            </>
        );
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
        backgroundColor: 'white',
    },
    header: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'gray',
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
        alignContent: 'stretch',
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

export default MainStack;