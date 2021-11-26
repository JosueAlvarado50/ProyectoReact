import React, { useState, useEffect } from "react";
import {
  AspectRatio,
  AntDesign,
  View,
  Divider,
  ScrollView,
  Stack,
  StatusBar,
  IconButton,
  Icon,
  VStack,
  HStack,
  Image,
  Center,
  Heading,
  Text,
  Container,
  NativeBaseProvider,
  Box,
  Button,
} from "native-base";
import { ImageBackground } from "react-native";
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { StyleSheet } from "react-native";

function MenuCamara ({navigation}){

        return(
            <View style={{ width: "100%", height: "100%", backgroundColor: "#111827" }}>
                <Button               onPress={() => navigation.navigate('picture')}
                style={{ width: "30%", height: "30%" }}>
                   <Text  bold color="white" textAlign="center" >Fotografia</Text>
                </Button>
                <Button               onPress={() => navigation.navigate('music')}
                style={{ width: "30%", height: "30%" }}>
                   <Text  bold color="white" textAlign="center" >Musica</Text>
                </Button>
            </View>
            
        );
    


const styles = StyleSheet.create({
    MenuCamara:{
        backgroundColor: '#050',
        flex: 1,
    },
    btn:{
        backgroundColor: '#025',
        padding: 0,
        borderRadius: 8,
        margin: 16,
    },
    txt:{
        color: '#ff0',
        textAlign: 'center',
        fontSize: 20,
    },
});
}
export default MenuCamara;

