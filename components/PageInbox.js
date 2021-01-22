import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';

function CreateItem(props) {
    return (
        <View style={styles.item}>
            <View style={styles.title}>
                <Text>{ props.subject}:</Text>
            </View>
            <View style={styles.body}>
                <Text>{ props.body}</Text>
            </View>
        </View>
        );
}

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
                <ScrollView style={styles.container}>
                    <CreateItem subject={'Welcome!'} body={'You have successfully registered!'} />
                    <CreateItem subject={'Submission'} body={'Thank you for submitting your documents. The TenTic administrative staff will verify your documents. Please wait for confirmation of this verification.'} />
                    <CreateItem subject={'Verification'} body={'Success! Your documents have been verified! You can now apply for tenders!'} />

                    <CreateItem subject={'Welcome!'} body={'You have successfully registered!'} />
                    <CreateItem subject={'Submission'} body={'Thank you for submitting your documents. The TenTic administrative staff will verify your documents. Please wait for confirmation of this verification.'} />
                    <CreateItem subject={'Verification'} body={'Success! Your documents have been verified! You can now apply for tenders!'} />

                    <CreateItem subject={'Welcome!'} body={'You have successfully registered!'} />
                    <CreateItem subject={'Submission'} body={'Thank you for submitting your documents. The TenTic administrative staff will verify your documents. Please wait for confirmation of this verification.'} />
                    <CreateItem subject={'Verification'} body={'Success! Your documents have been verified! You can now apply for tenders!'} />

                </ScrollView>
            );
        }
        
    }
}


const styles = StyleSheet.create({
    empty: {

    },
    container: {
        padding: 32,
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'lightblue',
    },
    body: {
        flex: 3,
        margin: 10,
        backgroundColor: 'lightblue',
    },
    heading: {
        fontSize: 35,
        alignSelf: 'center',
        flex: 1,
        alignContent: 'center',
    },
    title: {
        flex: 1,
        margin: 10,
        padding: 12,
        borderRightWidth: 2,
        borderColor: 'black',
        alignItems: 'flex-end',
    },
    data: {
        flex: 1,
        alignContent: 'flex-start',
    },
    text: {
        padding: 10,
        fontSize: 20,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default PageInbox;