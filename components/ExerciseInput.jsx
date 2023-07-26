import { useState } from 'react'
import {
  View,
  TextInput,
  Button,
  Text,
  Modal,
  StyleSheet
} from 'react-native'

import PrimaryButton from './PrimaryButton'

function ExerciseInput(props) {
  const [enteredExerciseText, setEnteredExerciseText] = useState('')

  function exerciseInputHandler(enteredText) {
    setEnteredExerciseText(enteredText)
  }

  function addExerciseHandler() {
    props.onAddExercise(enteredExerciseText)
    setEnteredExerciseText('')
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Exercise Name:</Text>
        <TextInput 
          style={styles.textInput}
          onChangeText={exerciseInputHandler}
          value={enteredExerciseText}
        />
        <Text style={styles.text}>Warmup Reps:</Text>
        <TextInput 
          style={styles.textInput}
          onChangeText={exerciseInputHandler}
          value={enteredExerciseText}
          keyboardType="number-pad"
          autoCapitalize='none'
          autoCorrect={false}
          maxLength={2}
        />
        <Text style={styles.text}>Warmup Weight:</Text>
        <TextInput 
          style={styles.textInput}
          onChangeText={exerciseInputHandler}
          value={enteredExerciseText}
          keyboardType="number-pad"
          autoCapitalize='none'
          autoCorrect={false}
          maxLength={2}
        />
        <Text style={styles.text}>Working Reps:</Text>
        <TextInput 
          style={styles.textInput}
          onChangeText={exerciseInputHandler}
          value={enteredExerciseText}
          keyboardType="number-pad"
          autoCapitalize='none'
          autoCorrect={false}
          maxLength={2}
        />
        <Text style={styles.text}>Working Weight:</Text>
        <TextInput 
          style={styles.textInput}
          onChangeText={exerciseInputHandler}
          value={enteredExerciseText}
          keyboardType="number-pad"
          autoCapitalize='none'
          autoCorrect={false}
          maxLength={2}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton 
              onPress={props.onCancel} 
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
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8,
  },
})