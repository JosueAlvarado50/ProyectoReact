import { Audio } from 'expo-av';
import React, { useState, useEffect, Component } from "react";
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
import { MaterialIcons } from "@expo/vector-icons";
import axios, { Axios } from "axios";
import {
  alignItems,
  backgroundColor,
  backgroundImage,
  height,
  styles,
  width,
} from "styled-system";
import { ImageBackground } from "react-native";
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import { StyleSheet } from "react-native";
function ReproducirMusica() {
    const [value, setValue] = useState(false);
};

export default class App extends Component{
    async componentDidMount() {
        Audio.setAudioModeAsync ({
            allowsRecordingIOS: false,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
            shouldDuckAndroid: true,
            staysActiveInBackground: false,
            playThroughEarpieceAndroid: true
        });
        this.sound = new Audio.Sound();
        const status = {
            shouldPlay: false
        };
        this.sound.loadAsync(require('../assets/Shoot.wav'), status, false);
       
    }
   
    playSound(){
        this.sound.playAsync();
    }
    render(){
    return(
        <View style={{width: "100%", height: "100%", backgroundColor: "#111827"}}>
            <Button style={{ width: "30%", height: "30%" }}
            title="Sonido"
            color="amber.400"
            onPress={this.playSound.bind(this)} ></Button>
        </View>
    );
    }
}
