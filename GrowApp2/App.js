/* import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box } from 'native-base';
export default function App() {
  return (
    <View style={styles.container}>
      <NativeBaseProvider>
        <Box>Hello world</Box>
      </NativeBaseProvider>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */
import React from "react";
import {
  Center,
  Heading,
  Text,
  Container,
  NativeBaseProvider,
  Box,
  ImageBackground,
} from "native-base";
import Login from "./components/Login";
import Inicio from "./components/Inicio";
import Menu from "./components/Menu";
import Calendar from "./components/Calendar";

import viewTemp from "./components/viewTemp";

import axios, { Axios } from "axios";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import viewPh from "./components/viewPh";
import ViewPlants from "./components/ViewPlants";
import viewHumedad from "./components/viewHumedad";
import { backgroundColor } from "styled-system";
import CardCalendar from "./components/CardCalendar";
import CardTime from "./components/Calendario";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName="inicio">
          <Stack.Group
            screenOptions={{ headerStyle: { backgroundColor: "#171717" } }}
          >
            <Stack.Screen
              options={{
                title: "Inicio",
                headerStyle: {
                  backgroundColor: "#f0f9ff",
                },
                headerTintColor: "#f0f9ff",
                headerTitleStyle: {
                  fontWeight: "bold",
                  color: "#171717",
                },
              }}
              name="inicio"
              component={Inicio}
            />
            <Stack.Screen
              options={{ title: "Login" }}
              name="login"
              component={Login}
            />
            <Stack.Screen
              options={{ title: "" }}
              name="menu"
              component={Menu}
            />
            <Stack.Screen
              options={{ title: "PH" }}
              name="ph"
              component={viewPh}
            />
            <Stack.Screen
              options={{ title: "Plants" }}
              name="plants"
              component={ViewPlants}
            />
            <Stack.Screen
              options={{ title: "Calendar" }}
              name="calendar"
              component={Calendar}
            />
            <Stack.Screen
              options={{ title: "Temperature" }}
              name="temp"
              component={viewTemp}
            />
            <Stack.Screen
              options={{ title: "Humidity" }}
              name="viewHumedad"
              component={viewHumedad}
            />
            <Stack.Screen name="cardCalendar" component={CardCalendar} />
            <Stack.Screen name="cardTime" component={CardTime} />
          </Stack.Group>
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
