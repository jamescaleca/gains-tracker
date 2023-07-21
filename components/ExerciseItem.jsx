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
    backgroundColor: "#5e0acc",
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
  pressedItem: {
    opacity: 0.5
  },
  exerciseText: {
    color: "white",
    padding: 8
  }
})