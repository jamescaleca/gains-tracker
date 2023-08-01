import { useState } from 'react'
import {
  View,
  TextInput,
  Button,
  Text,
  Modal,
  StyleSheet,
  StatusBar,
  SafeAreaView
} from 'react-native'

import PrimaryButton from './common/PrimaryButton'

function ExerciseInput({ onAddExercise, visible, onCancel }) {
  const [enteredExerciseText, setEnteredExerciseText] = useState('')
  const [warmupReps, setWarmupReps] = useState('')
  const [warmupWeight, setWarmupWeight] = useState('')
  const [workingReps, setWorkingReps] = useState('')
  const [workingWeight, setWorkingWeight] = useState('')

  const inputs = {
    exerciseText: enteredExerciseText,
    warmupReps: warmupReps,
    warmupWeight: warmupWeight,
    workingReps: workingReps,
    workingWeight: workingWeight
  }

  function addExerciseHandler() {
    onAddExercise(inputs)
    setEnteredExerciseText('')
    setWarmupReps('')
    setWarmupWeight('')
    setWorkingReps('')
    setWorkingWeight('')
  }

  return (
    <SafeAreaView>
      <Modal visible={visible} animationType="slide">
        <View style={styles.inputContainer}>
          <View style={{ alignItems: "center", flex: 1.5, marginTop: 50, }}>
            <Text style={styles.text}>Exercise Name:</Text>
            <TextInput 
              style={[styles.textInput, styles.textInputWidth]}
              onChangeText={(enteredText) => setEnteredExerciseText(enteredText)}
              value={enteredExerciseText}
              autoCapitalize='characters'
              multiline={true}
            />
          </View>
          <View style={{ alignItems: "center", flex: 1 }}>
            <Text style={styles.text}>Warmup Reps:</Text>
            <TextInput 
              style={[styles.textInput, styles.numberInputWidth]}
              onChangeText={(enteredNum) => setWarmupReps(enteredNum)}
              value={warmupReps}
              keyboardType="number-pad"
              autoCapitalize='none'
              autoCorrect={false}
              maxLength={2}
            />
          </View>
          <View style={{ alignItems: "center", flex: 1 }}>
            <Text style={styles.text}>Warmup Weight:</Text>
            <TextInput 
              style={[styles.textInput, styles.numberInputWidth]}
              onChangeText={(enteredNum) => setWarmupWeight(enteredNum)}
              value={warmupWeight}
              keyboardType="number-pad"
              autoCapitalize='none'
              autoCorrect={false}
              maxLength={2}
            />
          </View>
          <View style={{ alignItems: "center", flex: 1 }}>
            <Text style={styles.text}>Working Reps:</Text>
            <TextInput 
              style={[styles.textInput, styles.numberInputWidth]}
              onChangeText={(enteredNum) => setWorkingReps(enteredNum)}
              value={workingReps}
              keyboardType="number-pad"
              autoCapitalize='none'
              autoCorrect={false}
              maxLength={2}
            />
          </View>
          <View style={{ alignItems: "center", flex: 1 }}>
            <Text style={styles.text}>Working Weight:</Text>
            <TextInput 
              style={[styles.textInput, styles.numberInputWidth]}
              onChangeText={(enteredNum) => setWorkingWeight(enteredNum)}
              value={workingWeight}
              keyboardType="number-pad"
              autoCapitalize='none'
              autoCorrect={false}
              maxLength={2}
            />
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <PrimaryButton 
                onPress={onCancel} 
                cancel={true}
              >
                Cancel
              </PrimaryButton>
            </View>
            <View style={styles.button}>
              <PrimaryButton onPress={addExerciseHandler}>
                Add Exercise
              </PrimaryButton>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}

export default ExerciseInput

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  text: {
    color: "white",
    fontSize: 18
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    color: "#c7c7c7",
    fontSize: 34,
    textAlign: "center",
    borderRadius: 6,
    height: "80%",
    padding: 16,
  },
  textInputWidth: {
    width: 400
  },
  numberInputWidth: {
    width: 90
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
})