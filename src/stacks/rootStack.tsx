import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreens from './homeStack';
import {RootPath} from '../types/constants';

const RootStack = createNativeStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name={RootPath.HOME} component={HomeScreens} />
        {/* <RootStack.Screen name={RootPath.AUTH} component={authStack} /> */}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
