import React from "react";
import {
  AntDesign,
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
import { alignItems, backgroundColor, backgroundImage, height, width } from "styled-system";
import { ImageBackground } from "react-native";


var temp2 = require("../assets/temp2.png");
var SecImage = require("../assets/fondo2.jpg");
var terImage = require("../assets/plants_6.png");
var semillas = require("../assets/semillas.png");
var temperatura = require("../assets/temperatura2.png");
var ph = require("../assets/PH.png");
var humedad = require("../assets/humedad.png");
var calendario = require("../assets/calendario.png");
var Luminosidad = require("../assets/icono_luminosidad.png");



function Menu({ navigation }) {
  return (
    <>
    
      <ImageBackground
        
        style={{ width: "100%", height: "100%", backgroundColor:"#111827"}}
      >
        {/* <StatusBar backgroundColor="#166534" barStyle="light-content" /> */}

        {/* <Box safeAreaTop backgroundColor="#166536" /> */}

        <HStack
          px="1"
          py="3"
          justifyContent="space-between"
          alignItems="center"
        >
          <HStack space="4" alignItems="center">
            <IconButton
              icon={
                <Icon
                  size="sm"
                  as={<MaterialIcons name="menu" />}
                  color="white"
                />
              }
            />
            <Text color="white" fontSize="20" fontWeight="bold">
              Grow App
            </Text>
          </HStack>
          <HStack space="2">
            <IconButton
              icon={
                <Icon
                  as={<MaterialIcons name="favorite" />}
                  onPress={() => navigation.navigate("inicio")}
                  size="sm"
                  color="white"
                />
              }
            />
            <IconButton
              icon={
                <Icon
                  as={<MaterialIcons name="search" />}
                  color="white"
                  size="sm"
                />
              }
            />
            <IconButton
              icon={
                <Icon
                  as={<MaterialIcons name="more-vert" />}
                  size="sm"
                  color="white"
                />
              }
            />
          </HStack>
        </HStack>
 {/* -------------------------------------------------Menu Body------------------------------------------------------------------------------- */}       
        <ScrollView>
      <VStack space="2.5" mt="4">
        <Stack direction="row" mb="2.5" mt="1.5" space={5} alignSelf="center">
          <Center
             
            w="150px"
            h="150px"
            bg="#68ecfc"
            rounded="sm"
            _text={{
             
              fontWeight: "medium",
            }}
            shadow={"3"}
          >
            <Button
              style={{ width: "100%", height: "100%" }}
              //colorScheme="transparent"
              backgroundColor="#68ecfc"
              onPress={() => navigation.navigate('plants')}
            >
              <Image
                //source={require('../assets/semillas.png')}
                source={semillas}
                alt="Alternate Text"
                size={"md"}
              />
              <Text bold color="white" textAlign="center" >Plants</Text>
            </Button>
          </Center>
          <Center
            w="150px"
            h="180px"
            
            bg="#f38424"
            
            rounded="sm"
            _text={{
              
              fontWeight: "medium",
            }}
            shadow={"3"}
          >
            <Button
              style={{ width: "100%", height: "100%" }}
              //colorScheme="transparent"
              backgroundColor="#f38424"
              onPress={() => {
                console.log("hello");
              }}
            >
              <Image
                //source={require('../assets/semillas.png')}
                source={temperatura}
                alt="Alternate Text"
                size={"md"}
              />
              <Text bold color="white" textAlign="center" >Temperatures</Text>
            </Button>
          </Center>
        </Stack>

        <Stack direction="row" mb="2.5" mt="1.5" space={5} alignSelf="center">
          <Center
            w="150px"
            h="185px"
            marginTop="-10"
            bg="#149ce0"
            rounded="sm"
            _text={{
              
              fontWeight: "medium",
            }}
            shadow={"3"}
          >
           <Button
              style={{ width: "100%", height: "100%" }}
              //colorScheme="transparent"
              backgroundColor="#149ce0"
              onPress={() => {
                console.log("hello");
              }}
            >
              <Image
                //source={require('../assets/semillas.png')}
                source={temp2}
                alt="Alternate Text"
                size={"md"}
              />
              <Text bold color="white" textAlign="center" >Room Temp</Text>
            </Button>
          </Center>
          <Center
            bg="#3c3cac"
            w="150px"
            h="180px"
            marginTop="-2"
            rounded="sm"
            _text={{
              
              fontWeight: "medium",
            }}
            shadow={"3"}
          >
            <Button
              style={{ width: "100%", height: "100%" }}
              //colorScheme="transparent"
              backgroundColor="#3c3cac"
              onPress={() => navigation.navigate('ph')}>
              <Image
                //source={require('../assets/semillas.png')}
                source={ph}
                alt="Alternate Text"
                size={"md"}
              />
              <Text bold color="white" textAlign="center" >PH</Text>
            </Button>
          </Center>
        </Stack>
        <Stack direction="row" mb="2.5" mt="1.5" space={5} alignSelf="center">
          <Center
            w="150px"
            h="140px"
            marginTop="-9"
            bg="#24a46c"
            rounded="sm"
            _text={{
              
              fontWeight: "medium",
            }}
            shadow={"3"}
          >
            <Button
              style={{ width: "100%", height: "100%" }}
              //colorScheme="transparent"
              backgroundColor="#24a46c"
              onPress={() => {
                console.log("hello");
              }}
            >
              <Image
                //source={require('../assets/semillas.png')}
                source={humedad}
                alt="Alternate Text"
                size={"md"}
              />
              <Text bold color="white" textAlign="center" >humedad</Text>
            </Button>
          </Center>
          <Center
            bg="#94247c"
            size="150"
            marginTop="-2"
            rounded="sm"
            _text={{
              
              fontWeight: "medium",
            }}
            shadow={"3"}
          >
            <Button
              style={{ width: "100%", height: "100%" }}
              backgroundColor="#94247c"
             // onPress={() => {
             //   console.log("hello");
             // }}
             onPress={() => navigation.navigate('calendar')}
            >
              <Image
                //source={require('../assets/semillas.png')}
                source={calendario}
                alt="Alternate Text"
                size={"md"}
              />
              <Text bold color="white" textAlign="center" >Calendar</Text>
              
            </Button>
            
          </Center>
        </Stack>
        <Stack direction="row" mb="2.5" mt="1.5" space={5} alignSelf="center">
          <Center
            w="150px"
            h="185px"
            marginTop="-10"
            bg="#149ce0"
            rounded="sm"
            _text={{
             
              fontWeight: "medium",
            }}
            shadow={"3"}
          >
           <Button
              style={{ width: "100%", height: "100%" }}
              backgroundColor="#dcdc60"
              onPress={() => {
                console.log("hello");
              }}
            >
              <Image
                //source={require('../assets/semillas.png')}
                source={Luminosidad}
                alt="Alternate Text"
                size={"md"}
              />
              <Text bold color="white" textAlign="center" >Brightness</Text>
              
            </Button>
          </Center>
          <Center
            bg="#3c3cac"
            w="150px"
            h="180px"
            marginTop="-2"
            rounded="sm"
            _text={{
              
              fontWeight: "medium",
            }}
            shadow={"3"}
          >
            <Button
              style={{ width: "100%", height: "100%" }}
              //colorScheme="transparent"
              backgroundColor="#3c3cac"
              onPress={() => navigation.navigate('ph')}>
              <Image
                //source={require('../assets/semillas.png')}
                source={ph}
                alt="Alternate Text"
                size={"md"}
              />
              <Text bold color="white" textAlign="center" >PH</Text>
            </Button>
          </Center>
        </Stack>
      </VStack>
    </ScrollView>
  





      </ImageBackground>
    </>
  );
}


export default Menu;
