import { View, Text, Pressable, StyleSheet } from 'react-native'

function ExerciseItem(props) {
  return (
    <View style={styles.exerciseItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.exerciseText}>{props.text}</Text>
      </Pressable>
    </View>
  )
}

export default ExerciseItem

const styles = StyleSheet.create({
  exerciseItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc"
  },
  pressedItem: {
    opacity: 0.5
  },
  exerciseText: {
    color: "white",
    padding: 8
  }
})