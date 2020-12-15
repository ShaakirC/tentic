/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Alert,
  Text,
  Image,
  Button,
  StatusBar,
  TextInput,
} from 'react-native';

import MainStack from '../Tentic/components/MainStack';

const App: () => React$Node = () => {

    return (
        <View>
            <MainStack />
        </View>
    );
};





export default App;
