import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, TextInput } from "react-native";
import { theme } from "../theme";
import { MagnifyingGlassIcon, XMarkIcon } from 'react-native-heroicons/outline'

export default function HomeScreen() {
  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        blurRadius={70}
        source={require("../assets/images/bg.png")}
        className="absolute h-full w-full"
      />
      <SafeAreaView className="flex flex-1">
        {/* Search Section */}
        <View style={{ height: "7%" }} className="mx-4 relative z-50">
          <View
            className="flex-row justify-end item-center rounded-full"
            style={{ backgroundColor: theme.bgWhite(0.2) }}
          >
            <TextInput
              placeholder="Search City"
              placeholderTextColor={"lightgray"}
              className="pl-6 h-10 flex-1 text-base text-white"
            />
            <TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
