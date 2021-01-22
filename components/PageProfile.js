import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

import ProfileGeneral from '../components/ProfileGeneral';
import ProfileServices from '../components/ProfileServices';
import ProfileAbout from '../components/ProfileAbout';
import ProfileContacts from '../components/ProfileContacts';

class PageProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBody: 'general',
        }
    }

    generalPress = () => {
        this.setState({ currentBody: 'general' });
    };

    contactsPress = () => {
        this.setState({ currentBody: 'contacts' });
    };

    aboutPress = () => {
        this.setState({ currentBody: 'about' });
    };

    render() {
        const { currentBody } = this.state;

        if (this.props.page != 'profile') {
            return null;
        }
        else {
            return (
                <View style={ styles.mainView}>
                    <View style={styles.header}>
                        <View id="companyLogo" style={styles.logo}>
                            <Text>Company Logo</Text>
                        </View>
                        <View id="profileNavigation">
                            <TouchableOpacity
                                style={styles.button}
                                onPress={this.generalPress}
                            >
                                <Text>Entity Name</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.fakeButton}
                            >
                                <Text>Entity Description</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={this.contactsPress}
                            >
                                <Text>Contact Information</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={this.aboutPress}
                            >
                                <Text>Mission Statement</Text>
                            </TouchableOpacity>
                        </View>
                        <View id="buttonStack" style={styles.buttonRow}>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={this.inboxPress}
                            >
                                <Text>FOLLOW</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={this.inboxPress}
                            >
                                <Text>EDIT PROFILE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ScrollView style={styles.body}>
                        <ProfileGeneral page={currentBody} />
                        <ProfileServices page={currentBody} />
                        <ProfileContacts page={currentBody} />
                        <ProfileAbout page={currentBody} />
                    </ScrollView>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    mainView: {
        alignItems: 'stretch',
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'white',
    },
    body: {
        padding: 32,
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'lightgrey',
    },
    header: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'lightblue',
    },
    button: {
        padding: 10,
        margin: 2,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: "#DDDDDD",
        paddingHorizontal: 30,
    },
    fakeButton: {
        padding: 10,
        margin: 2,
        borderRadius: 10,
        overflow: 'hidden',
        paddingHorizontal: 30,
    },
    logo: {
        padding: 50,
        borderRadius: 50,
        borderWidth: 2,
        overflow: 'hidden',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
    },
    buttonRow: {
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingVertical: 32,
        alignSelf: 'center',
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

export default PageProfile;