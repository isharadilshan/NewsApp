import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HOME, SIGNIN} from './route-paths';
import HomeScreen from '../screens/HomeScreen';
import SignInScreen from '../screens/SignInScreen';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={HOME} component={HomeScreen} />
        <Stack.Screen name={SIGNIN} component={SignInScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
