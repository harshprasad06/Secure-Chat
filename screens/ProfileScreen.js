import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const ProfileScreen = () => {
  const navigation = useNavigation();
  const logout = () => {
    console.log("logout");
    AsyncStorage.removeItem("authToken");
    navigation.navigate("Login");
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerLeft: () => (
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>Profile</Text>
      ),
      headerRight: () => (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Text style={{fontWeight:'bold'}}>Logout</Text>
          <TouchableOpacity onPress={logout}>
            <FontAwesome name="sign-out" size={24} color="black" />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
