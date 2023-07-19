import { useState } from 'react'
import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  StyleSheet
} from 'react-native'

import ExerciseInput from './ExerciseInput'
import ExerciseItem from './ExerciseItem'

import { COLORS, FONT, SIZES } from "../constants";

const Welcome = () => {
  const [exercises, setExercises] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function startAddExercise() {
    setModalIsVisible(true)
  }

  function endAddExercise() {
    setModalIsVisible(false)
  }

  function handleSubmit(enteredExerciseText) {
    setExercises(prevExercises => [
      ...prevExercises,
      { text: enteredExerciseText, id: Math.random().toString() }
    ])
    endAddExercise()
  }

  function deleteExercise(id) {
    setExercises(currentExercises => {
      return currentExercises.filter(goal => goal.id !== id)
    })
  }

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello James</Text>
        <Text style={styles.welcomeMessage}>
          Let's record your workout
        </Text>
      </View>

      <View style={styles.searchContainer}>
        {/* <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            placeholder="Name of exercise"
          />
          <Button title="Submit"/>
        </View> */}
        <Button 
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddExercise}
        />
        <ExerciseInput 
          visible={modalIsVisible}
          onAddExercise={handleSubmit}
          onCancel={endAddExercise}
        />
        <View>
          <FlatList 
            data={exercises}
            renderItem={itemData => {
              return (
                <ExerciseItem 
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteExercise}
                />
              )
            }}
            keyExtractor={(item, index) => {
              return item.id
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  userName: {
    fontFamily: FONT.regular,
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  welcomeMessage: {
    fontFamily: FONT.bold,
    fontSize: SIZES.xLarge,
    color: COLORS.primary,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
});