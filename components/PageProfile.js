import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
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

    servicesPress = () => {
        this.setState({ currentBody: 'services' });
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
                                <Text>Company Name</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={this.servicesPress}
                            >
                                <Text>Services Provided</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={this.contactsPress}
                            >
                                <Text>Contact Info</Text>
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
                    <View style={styles.body}>
                        <ProfileGeneral page={currentBody} />
                        <ProfileServices page={currentBody} />
                        <ProfileContacts page={currentBody} />
                        <ProfileAbout page={currentBody} />
                    </View>
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
        alignSelf: 'stretch',
        backgroundColor: 'grey',
    },
    header: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
    logo: {
        padding: 50,
        borderRadius: 50,
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