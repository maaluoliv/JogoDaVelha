import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'


export default () => {
  return (
  <View style={styles.header}>
    <Text style={styles.title}>Jogo da Velha</Text>
  </View>
  )
}

const styles = StyleSheet.create({
  header: {
      backgroundColor: 'white',
      alignItems:'center'
  },
  title: {
      fontFamily: 'Roboto',
      fontSize: 26,
      fontWeight: 'bold'
  }
})