import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <SafeAreaProvider>
      <Routes />
      <StatusBar />
    </SafeAreaProvider>
  </NavigationContainer>
);

export default App;