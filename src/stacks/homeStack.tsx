import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomePath} from '../types/constants';
import HomeScreen from '../screens/Home/Home';

const HomeStack = createNativeStackNavigator();

const homeStack = () => {
  return (
    <HomeStack.Navigator initialRouteName={HomePath.HOME}>
      <HomeStack.Screen name={HomePath.HOME} component={HomeScreen} />
    </HomeStack.Navigator>
  );
};

export default homeStack;
