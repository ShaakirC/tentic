/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    View,
    Dimensions
} from 'react-native';

import MainStack from '../Tentic/components/MainStack';

const App: () => React$Node = () => {

    return (
        <View style={{ flex: 1, minWidth: 1000, minHeight: 500 }}>
            <MainStack />
        </View>
    );
};

export default App;
