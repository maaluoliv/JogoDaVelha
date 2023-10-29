import React from 'react'
import {Text, StyleSheet, TouchableOpacity} from 'react-native'

export default ({title='Sem titulo', buttonStyle={}, onPress}) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]} 
      onPress={onPress}
    >
      <Text style={styles.text}>
        {title.toUpperCase()}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 70,
    backgroundColor: '#25CCB0',
    borderRadius: 15,
    borderBottomLeftRadius: 20,
    elevation: 13,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 22,
    fontWeight: 'bold'
  }
})