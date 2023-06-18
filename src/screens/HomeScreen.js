import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, SafeAreaView } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 relative">
      <StatusBar style="light"/>
      <Image source={require('../assets/images/bg.png')}
    </View>
  );
}
