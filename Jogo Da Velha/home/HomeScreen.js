import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

import Header from './Header'
import CustomButton from './CustomButton'

export default ({navigation, route}) => {
  return (
    <View style={styles.main}>
      <Header navigation={navigation} route={route} />
      <View style={styles.menu}>
        <CustomButton 
          title='Jogar' 
          buttonStyle={styles.buttonRed}
          onPress={() => navigation.navigate('game')} 
        />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },  
  menu: {
    padding: 15,
    flex: 1,
    justifyContent: 'space-evenly'
  },
  buttonRed: {
    backgroundColor: 'red',
    height: 30
  }
})