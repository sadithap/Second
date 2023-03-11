import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from "../constants/colors"

const Card = ({children}) => {
  return (
    <View style={styles.card}>{children}</View>
  )
}

export default Card

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: colors.primary1,
        borderRadius: 8,
        elevation: 4, //style bayangan untuk android
        shadowColor: "black", //style shadow untuk bayangan pada IOS
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
      },
})