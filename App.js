/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { persistor, store } from './src/Redux/Store';
import AppNavigator from './src/AppNavigator/AppNavigator';
import { LoginScreen } from './src/Screens';
import { Loading } from './src/Components';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1 }}>
          <Provider store={store}>
            <PersistGate loading={<Loading/>} persistor={persistor}>
              <AppNavigator/>
            </PersistGate>
          </Provider>
        </SafeAreaView>
    </>
  );
};

export default App;
