import { View, Text, Pressable, StyleSheet } from 'react-native'

import PrimaryButton from './common/PrimaryButton'

function ExerciseItem({ inputs, onDeleteItem, id }) {
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
          <Text 
            style={[styles.exerciseText, styles.bold]}
          >{inputs.exerciseText}
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View>
            <Text style={styles.exerciseText}>
              WU Reps: <Text style={styles.bold}>{inputs.warmupReps}</Text>
            </Text>
            <Text style={styles.exerciseText}>
              WU Weight: <Text style={styles.bold}>{inputs.warmupWeight}</Text>
            </Text>
          </View>
          <View>
            <Text style={styles.exerciseText}>
              Working Reps: <Text style={styles.bold}>{inputs.workingReps}</Text>
            </Text>
            <Text style={styles.exerciseText}>
              Working Weight: <Text style={styles.bold}>{inputs.workingWeight}</Text>
            </Text>
          </View>
        </View>
        <PrimaryButton
          style={{color: "red"}}
          onPress={onDeleteItem.bind(this, id)}
          cancel={true}
        ><Text style={styles.bold}>- Delete Exercise</Text></PrimaryButton>
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
    color: "red",
    backgroundColor: "white"
  },
  pressedItem: {
    opacity: 0.5
  },
  bold: {
    fontWeight: "bold"
  },
  exerciseText: {
    color: "white",
    padding: 8
  }
})