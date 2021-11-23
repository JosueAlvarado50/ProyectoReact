import React from 'react';
import { Center, Heading, Text, Container, NativeBaseProvider, Box,ImageBackground } from 'native-base';
import Login from './components/Login'
import Inicio from './components/Inicio';
import Menu from './components/Menu';
import Calendar from './components/Calendar';
import CardCalendar from './components/CardCalendar';
import CardTime from './components/Calendario';


import axios, {Axios} from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import viewPh from './components/viewPh';
import ViewPlants from './components/ViewPlants';

const Stack = createNativeStackNavigator();

export default function App( )  {
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
            <Stack.Screen name="cardCalendar" component={CardCalendar}/>
            <Stack.Screen name="cardTime" component={CardTime}/>


            
          </Stack.Navigator>
           
          
          
      </NativeBaseProvider>
    </NavigationContainer>
    
  )
}