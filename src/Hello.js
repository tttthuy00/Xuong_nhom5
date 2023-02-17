import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Hello = () => {
  return (
    <View>
      <Text style={styles.text1}>Hello</Text>
      <Text style={styles.text1}>Hello</Text>
      <Text style={styles.text1}>Hello</Text>

      <Pressable>
        <Text> thử lần 1</Text>
      </Pressable>
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