import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    body: {

    },
    header: {
        paddingHorizontal: 20,
        flex: 1,
        paddingVertical: 20,
        alignContent: 'flex-start',
        backgroundColor: 'lightyellow',
    },
    logo: {
        padding: 30,
        borderRadius: 200,
        overflow: 'hidden',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgray',
    },
    navButtonRow: {
        flexDirection: 'column',
        paddingHorizontal: 30,
        paddingVertical: 20,
        justifyContent: 'center',
        alignContent: 'space-around',
        borderRadius: 50,
        overflow: 'hidden',
    },
    safeView: {
        flex: 1,
        minWidth: 1000,
        minHeight: 500,
        flexDirection: 'row',
    },
});