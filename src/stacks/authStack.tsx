import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Welcome from '../screens/Welcome/Welcome';
import { AuthPath } from '../types/constants';

const AuthStack = createNativeStackNavigator();

const authStack = () => {
    return (
        <AuthStack.Navigator>
             <AuthStack.Screen
      name={AuthPath.WELCOME}
      component={Welcome}
      options={{headerShown: false}}
    />
        </AuthStack.Navigator>
    )
}

export default authStack
