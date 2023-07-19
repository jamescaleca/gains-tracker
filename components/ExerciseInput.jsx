import { useState } from 'react'
import {
  View,
  TextInput,
  Button,
  Modal,
  StyleSheet
} from 'react-native'

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
        <TextInput 
          style={styles.textInput}
          placeholder="Exercise name"
          onChangeText={exerciseInputHandler}
          value={enteredExerciseText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button 
              title="Cancel" 
              onPress={props.onCancel} 
              color="#f31282"
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Exercise" 
              onPress={addExerciseHandler}
              color="#b180f0"
            />
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