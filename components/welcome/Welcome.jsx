import {
  View,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'

import styles from './welcome.style'

const Welcome = () => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello James</Text>
        <Text style={styles.welcomeMessage}>
          Let's record your workout
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput 
            style={styles.searchInput}
            placeholder="Name of exercise"
          />
          <Button title="Submit"/>
        </View>
      </View>
    </View>
  )
}

export default Welcome