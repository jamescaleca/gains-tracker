import { View, Text, Pressable, StyleSheet, Button } from 'react-native'

function ExerciseItem(props) {
  console.log(props.inputs)

  return (
    <View style={styles.exerciseItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        style={({ pressed }) => pressed 
          ? [ styles.pressedItem, styles.itemTextFlex ]
          : styles.itemTextFlex
        }
      >
        <View>
          <Text style={styles.exerciseText}>{props.inputs.exerciseText}</Text>
        </View>
        <View style={{ flexDirection: "row"}}>
          <View>
            <Text style={styles.exerciseText}>WU Reps: {props.inputs.warmupReps}</Text>
            <Text style={styles.exerciseText}>WU Weight: {props.inputs.warmupWeight}</Text>
          </View>
          <View>
            <Text style={styles.exerciseText}>Working Reps: {props.inputs.workingReps}</Text>
            <Text style={styles.exerciseText}>Working Weight: {props.inputs.workingWeight}</Text>
          </View>
        </View>
        <Button
          onPress={props.onDeleteItem.bind(this, props.id)}
          title="X"
        />
      </Pressable>
    </View>
  )
}

export default ExerciseItem

const styles = StyleSheet.create({
  exerciseItem: {
    margin: 8,
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
  itemTextFlex: {
    flexDirection: "column",
    alignItems: "center"
  },
  button: {
    flexDirection: "row",
  },
  pressedItem: {
    opacity: 0.5
  },
  exerciseText: {
    color: "white",
    padding: 8
  }
})