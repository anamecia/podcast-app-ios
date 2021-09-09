import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreens from './homeStack';
import {HomePath, RootPath} from '../types/constants';

const RootStack = createNativeStackNavigator();

const Root = () => {
  return (
    <RootStack.Navigator initialRouteName={RootPath.HOME}>
      <RootStack.Screen name={RootPath.HOME} component={HomeScreens} />
    </RootStack.Navigator>
  );
};

const Navigation = () => {

  const Theme = {
    dark: false,
    colors: {
      primary: '#FAFAFA',
      background: '#FAFAFA',
      card: '#FAFAFA',
      text: '#000000',
      border: '#FAFAFA',
      notification: '#FAFAFA',
    },
  };
  return (
    <NavigationContainer theme={Theme}>
      <Root />
    </NavigationContainer>
  );
};

export default Navigation;
