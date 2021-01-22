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
import PageSettings from '../components/PageSettings';

import Style1 from '../constants/Style';
import Style2 from '../constants/Style2'; 

var s = Style1;

class MainStack extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 'home',
            text: '',
            homeColor: 'white',
            profileColor: 'white',
            inboxColor: 'white',
        };
        this.profilePress();
    }

    chooseStyle(theme) {
        switch (theme) {
            case 'Style1':
                s = Style1;
                break;
            case 'Style2':
                s = Style2;
                break;
            default:
                s = Style1;
                break;
        }
        this.setState({ state: this.state });
    }

    homePress = () => {
        this.setState({ currentPage: 'home' });
    };

    profilePress = () => {
        this.setState({ currentPage: 'profile' });
    };

    inboxPress = () => {
        this.setState({ currentPage: 'inbox' });
    };

    settingsPress = () => {
        this.setState({ currentPage: 'settings' });
    };

    highLightNavButtons = (page) => {
        switch(page) {
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
                <View style={s.safeView}>
                    <View style={s.header}>
                        <View id='logo' style={s.logo}>
                            <Text style={{ fontSize: 25}}>TT</Text>
                        </View>
                        <View style={s.navButtonRow}>
                            <TouchableOpacity
                                style={[
                                    styles.button
                                ]}
                                onPress={this.homePress}
                            >
                                <Text>HOME</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.button
                                ]}
                                onPress={this.profilePress}
                            >
                                <Text>PROFILE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.button
                                ]}
                                onPress={this.inboxPress}
                            >
                                <Text>INBOX</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    styles.button
                                ]}
                                onPress={this.settingsPress}
                            >
                                <Text>SETTINGS</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View
                        style={styles.bodyView}>
                        

                        <PageHome page={currentPage} st={s}/>
                        <PageProfile page={currentPage} />
                        <PageInbox page={currentPage} />
                        <PageSettings page={currentPage} applyStylePress={ this.chooseStyle.bind(this)} />

                    </View>
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    bodyView: {
        backgroundColor: 'white',
        flex: 5,
        flexDirection: 'row',
    },
    button: {
        padding: 10,
        alignSelf: 'center',
        paddingHorizontal: 10,
        backgroundColor: 'lightblue',
    },
    search: {
        padding: 30,
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
        borderRadius: 50,
        overflow: 'hidden',
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