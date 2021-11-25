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
import React, { useState } from "react";
import {
  Center,
  
  Heading,
  Text,
  Container,
  NativeBaseProvider,
  Box,
  ImageBackground,
  StatusBar,
} from "native-base";
import Login from "./components/Login";
import Inicio from "./components/Inicio";
import Menu from "./components/Menu";
import Calendar from "./components/Calendar";
/*   */
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

/* import {gyroscope, magnetometer} from 'react-native-sensors'; */

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];


const Stack = createNativeStackNavigator();

export default function App() {

  /* const subscription = magnetometer.subscribe(({ x, y, z, timestamp }) =>
  console.log({ x, y, z, timestamp })
); */
const [hidden, setHidden] = useState(false);
const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[0]);
  return (
    
    <NavigationContainer>
      <StatusBar  animated={true}
        backgroundColor="#111827"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}></StatusBar>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName="inicio">
          <Stack.Group
            screenOptions={{ headerStyle: { backgroundColor: "#171717" } }}
          >
            <Stack.Screen
              options={{
                title: "Inicio",
                headerStyle: {
                  backgroundColor: "#111827",
                },
                headerTintColor: "#f0f9ff",
                headerTitleStyle: {
                  fontWeight: "bold",
                  color: "#f0f9ff",
                },
              }}
              name="inicio"
              component={Inicio}
            />
            <Stack.Screen
             options={{
              title: "Inicio",
              headerStyle: {
                backgroundColor: "#111827",
              },
              headerTintColor: "#f0f9ff",
              headerTitleStyle: {
                fontWeight: "bold",
                color: "#f0f9ff",
              },
            }}
              name="login"
              component={Login}
            />
            <Stack.Screen
              options={{
                title: "Inicio",
                headerStyle: {
                  backgroundColor: "#111827",
                },
                headerTintColor: "#f0f9ff",
                headerTitleStyle: {
                  fontWeight: "bold",
                  color: "#f0f9ff",
                },
              }}
              name="menu"
              component={Menu}
            />
            <Stack.Screen
              options={{
                title: "Inicio",
                headerStyle: {
                  backgroundColor: "#111827",
                },
                headerTintColor: "#f0f9ff",
                headerTitleStyle: {
                  fontWeight: "bold",
                  color: "#f0f9ff",
                },
              }}
              name="ph"
              component={viewPh}
            />
            <Stack.Screen
             options={{
              title: "Inicio",
              headerStyle: {
                backgroundColor: "#111827",
              },
              headerTintColor: "#f0f9ff",
              headerTitleStyle: {
                fontWeight: "bold",
                color: "#f0f9ff",
              },
            }}
              name="plants"
              component={ViewPlants}
            />
            <Stack.Screen
              options={{
                title: "Inicio",
                headerStyle: {
                  backgroundColor: "#111827",
                },
                headerTintColor: "#f0f9ff",
                headerTitleStyle: {
                  fontWeight: "bold",
                  color: "#f0f9ff",
                },
              }}
              name="calendar"
              component={Calendar}
            />
            <Stack.Screen
              options={{
                title: "Inicio",
                headerStyle: {
                  backgroundColor: "#111827",
                },
                headerTintColor: "#f0f9ff",
                headerTitleStyle: {
                  fontWeight: "bold",
                  color: "#f0f9ff",
                },
              }}
              name="temp"
              component={viewTemp}
            />
            <Stack.Screen
              options={{
                title: "Inicio",
                headerStyle: {
                  backgroundColor: "#111827",
                },
                headerTintColor: "#f0f9ff",
                headerTitleStyle: {
                  fontWeight: "bold",
                  color: "#f0f9ff",
                },
              }}
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
