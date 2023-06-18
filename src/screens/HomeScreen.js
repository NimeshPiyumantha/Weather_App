import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, SafeAreaView,Image } from "react-native";
import {theme} from '../theme'

export default function HomeScreen() {
  return (
    <View className="flex-1 relative">
      <StatusBar style="light"/>
      <Image blurRadius={70} source={require('../assets/images/bg.png')}
      className="absolute h-full w-full"
      />
      <SafeAreaView className="flex flex-1">
        {/* Search Section */}
        <View style={{height:'7%'}} className="mx-4 relative z-50">
          <View className="flex-row justify-end item-center rounded-full" style={{backgroundColor: theme.bgWhite(0.2)}}>

          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
