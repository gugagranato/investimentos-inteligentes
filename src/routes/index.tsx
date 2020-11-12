import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import About from '../screens/About';
import Register from '../screens/Register';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName="Login"
  >
    <Auth.Screen name="Login" component={Login} />
    <Auth.Screen name="Register" component={Register} />
    <Auth.Screen name="About" component={About} />
  </Auth.Navigator>

);

export default AuthRoutes;
