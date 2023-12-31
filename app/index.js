import { View, Text, ScrollView, SafeAreaView } from "react-native"
import { Stack, useRouter } from "expo-router"
import { StatusBar } from 'expo-status-bar';

import { SIZES, COLORS, icons, images } from "../constants"
import { Welcome, ScreenHeaderBtn } from "../components"

const Home = () => {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.darkerPurple}}>
        <Stack.Screen 
          options={{
            headerStyle: { backgroundColor: COLORS.darkerPurple },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
            ),
            headerRight: () => (
              <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
            ),
            headerTitle: ""
          }}
        />
        <View
          style={{
            flex: 1,
            padding: SIZES.medium
          }}
        >
          <Welcome />
        </View>
      </SafeAreaView>
    </>
  )
}

export default Home