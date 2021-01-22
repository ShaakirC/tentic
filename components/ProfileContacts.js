import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

function CreateItem(props) {
    return (
        <View style={styles.item}>
            <View style={styles.title}>
                <Text style={styles.text}>{props.item}:</Text>
            </View>
            <View style={styles.data}>
                <Text style={styles.text}>{props.line1}</Text>
            </View>
        </View>
    );
}

function CreateAddress(props) {
    return (
        <View style={styles.item}>
            <View style={styles.title}>
                <Text style={styles.text}>{props.item}:</Text>
            </View>
            <View style={styles.data}>
                <Text style={styles.text}>{props.line1}</Text>
                <Text style={styles.text}>{props.line2}</Text>
                <Text style={styles.text}>{props.line3}</Text>
                <Text style={styles.text}>{props.line4}</Text>
            </View>
        </View>
    );
}

class ProfileContacts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.page != 'contacts') {
            return null;
        }
        else {
            return (
                <View style={{padding: 32}}>
                    <View style={ styles.header}>
                        <Text style={styles.heading}>Contact Information</Text>
                    </View>
                    <View>
                        <CreateItem item={'Main Office'} line1={'081 111 1111'} />
                        <CreateAddress item={'Address'} line1={'12 Example Road'} line2={'Example City'} line3={'South Africa'} line4={'1615'} />
                        <CreateItem item={'Email'} line1={'example@email.com'} />
                    </View>
                </View>
            );
        }
    }
}



const styles = StyleSheet.create({
    empty: {

    },  
    heading: {
        textDecorationLine: 'underline',
        fontSize: 35,
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
        padding: 10,
        fontSize: 20,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default ProfileContacts;