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
import React from 'react';
import { Center, Heading, Text, Container, NativeBaseProvider, Box,ImageBackground } from 'native-base';
import Login from './components/Login'
import Inicio from './components/Inicio';
import Menu from './components/Menu';
import Calendar from './components/Calendario';
import viewTemp from './components/viewTemp';


import axios, {Axios} from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import viewPh from './components/viewPh';
import ViewPlants from './components/ViewPlants';

const Stack = createNativeStackNavigator();

export default function App( ) {
  return (
    
    <NavigationContainer  >
        <NativeBaseProvider>

        <Stack.Screen 
        name="Home"
        component={Inicio}
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#111827',
          },
          headerTintColor: '#111827',
          headerTitleStyle: {
            fontWeight: 'bold',
            
          },
        }}
      />
      
          
          <Stack.Navigator initialRouteName="inicio">
            
            <Stack.Screen name="menu" component={Menu} />
            <Stack.Screen color name="inicio" component={Inicio} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="ph" component={viewPh} />
            <Stack.Screen name="plants" component={ViewPlants} />
            <Stack.Screen name="calendar" component={Calendar} />
            <Stack.Screen name="temp" component={viewTemp} />

            
          </Stack.Navigator>
           
          
          
      </NativeBaseProvider>
    </NavigationContainer>
    
  )
}