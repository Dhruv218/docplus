// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from "react-native-vector-icons/AntDesign";
import Transaction_history from './src/screen/transaction';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer 
    >
      <Stack.Navigator  initialRouteName="Home">
      <Stack.Screen name="Home" component={Transaction_history} options={{title: 'Transaction History',
      headerTitleAlign: 'center',
            headerTitleStyle: {
              color: '#15AEB2'  // Set your desired color here
            },
      }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;