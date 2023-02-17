import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Hello = () => {
  return (
    <View>
      <Text style={styles.text1}>Hello</Text>
      <Text style={styles.text1}>Hello</Text>
      <Text style={styles.text1}>Hello</Text>

    </View>
  )
}

export default Hello

const styles = StyleSheet.create({
  text1:{
    fontSize:30,
    color:'pink',
    fontWeight:'700'
  }
})