import { View, Text, ScrollView, SafeAreaView } from "react-native"
import { Stack, useRouter } from "expo-router"
import { StatusBar } from 'expo-status-bar';

import { SIZES, COLORS, icons, images } from "../constants"
import { Welcome, ScreenHeaderBtn } from "../components"

const Home = () => {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView style={{flex: 1, backgroundColor: "#7b65f7"}}>
        <Stack.Screen 
          options={{
            headerStyle: { backgroundColor: COLORS.lightWhite },
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
        <ScrollView>
          <View
            style={{
              flex: 1,
              padding: SIZES.medium
            }}
          >
            <Welcome />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  )
}

export default Home