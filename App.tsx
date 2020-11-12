import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { AuthProvider } from './hooks/auth';

import Routes from './src/routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#237034" />
    {/* <AuthProvider> */}
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      <Routes />
    </View>
    {/* </AuthProvider> */}
  </NavigationContainer>
);

export default App;
