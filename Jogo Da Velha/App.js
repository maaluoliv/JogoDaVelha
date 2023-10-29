import * as React from 'react'
import {View, Text, StyleSheet} from 'react-native'


import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


import HomeScreen from './home/HomeScreen'
import GameScreen from './game/GameScreen'

const Stack = createNativeStackNavigator()

export default() => {
  return(
  <NavigationContainer>
    <Stack.Navigator
         initialRouteName='home' 
          screenOptions={defaultOptions} 
    >
     
      <Stack.Screen 
      name= 'home' 
      component={HomeScreen}
      options={homeOptions}
       />

        <Stack.Screen
        name='game'
        component={GameScreen}
      />

      
    </Stack.Navigator>
  </NavigationContainer>

  )
}



const defaultOptions = {
  headerStyle: {
    backgroundColor: '#25CCB0'
  },
  headerTintColor : 'white',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}

const homeOptions = {
  headerShown: false
}