import { View, Text, Pressable, StyleSheet } from 'react-native'

function PrimaryButton({ children, onPress, cancel }) {
  return (
    <View style={styles.buttonOuterContainer}>
      {cancel ? 
        <Pressable
          style={
            ({ pressed }) => pressed 
            ? [ styles.buttonInnerContainer, styles.buttonColorRed, styles.pressed ]
            : [styles.buttonInnerContainer, styles.buttonColorRed,]
          }
          onPress={onPress}
          android_ripple={{ color: "#570abb" }}
        >
          <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
        :
        <Pressable
          style={
            ({ pressed }) => pressed 
            ? [ styles.buttonInnerContainer, styles.buttonColorPurple, styles.pressed ]
            : [styles.buttonInnerContainer, styles.buttonColorPurple]
          }
          onPress={onPress}
          android_ripple={{ color: "#570abb" }}
        >
          <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
      }
    </View>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden"
  },
  buttonColorPurple: {
    backgroundColor: "#6f0def",
  },
  buttonColorRed: {
    backgroundColor: "#f31221",
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center"
  },
  pressed: {
    opacity: 0.75
  }
})