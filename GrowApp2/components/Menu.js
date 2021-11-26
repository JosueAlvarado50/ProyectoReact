import React from "react";
import {
  AntDesign,
  Divider,
  ScrollView,
  useDisclose,
  Stack,
  StatusBar,
  Stagger,
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
import {
  alignItems,
  backgroundColor,
  backgroundImage,
  height,
  width,
} from "styled-system";
import { ImageBackground } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

var temp2 = require("../assets/temp2.png");
var SecImage = require("../assets/fondo2.jpg");
var terImage = require("../assets/plants_6.png");
var semillas = require("../assets/semillas.png");
var temperatura = require("../assets/temperatura2.png");
var ph = require("../assets/PH.png");
var humedad = require("../assets/humedad.png");
var calendario = require("../assets/calendario.png");
var Luminosidad = require("../assets/icono_luminosidad.png");
var camara = require("../assets/camara.png");


function Menu({ navigation }) {
  const { isOpen, onToggle } = useDisclose();
  return (
    <>
      <ImageBackground
        style={{ width: "100%", height: "100%", backgroundColor: "#111827" }}
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
            <Stack
              direction="row"
              mb="2.5"
              mt="1.5"
              space={5}
              alignSelf="center"
            >
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
                  onPress={() => navigation.navigate("plants")}
                >
                  <Image
                    //source={require('../assets/semillas.png')}
                    source={semillas}
                    alt="Alternate Text"
                    size={"md"}
                  />
                  <Text bold color="white" textAlign="center">
                    Plants
                  </Text>
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
                  onPress={() => navigation.navigate("temp")}
                >
                  <Image
                    //source={require('../assets/semillas.png')}
                    source={temperatura}
                    alt="Alternate Text"
                    size={"md"}
                  />
                  <Text bold color="white" textAlign="center">
                    Temperatures
                  </Text>
                </Button>
              </Center>
            </Stack>

            <Stack
              direction="row"
              mb="2.5"
              mt="1.5"
              space={5}
              alignSelf="center"
            >
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
                  <Text bold color="white" textAlign="center">
                    Room Temp
                  </Text>
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
                  backgroundColor="#149ce4"
                  onPress={() => navigation.navigate("ph")}
                >
                  <Image
                    //source={require('../assets/semillas.png')}
                    source={ph}
                    alt="Alternate Text"
                    size={"md"}
                  />
                  <Text bold color="white" textAlign="center">
                    PH
                  </Text>
                </Button>
              </Center>
            </Stack>
            <Stack
              direction="row"
              mb="2.5"
              mt="1.5"
              space={5}
              alignSelf="center"
            >
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
                  onPress={() => navigation.navigate("viewHumedad")}
                >
                  <Image
                    //source={require('../assets/semillas.png')}
                    source={humedad}
                    alt="Alternate Text"
                    size={"md"}
                  />
                  <Text bold color="white" textAlign="center">
                    humedad
                  </Text>
                </Button>
              </Center>
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
              onPress={() => navigation.navigate('camara')}
            >
              <Image
                //source={require('../assets/semillas.png')}
                source={camara}
                alt="Alternate Text"
                size={"md"}
              />
              <Text bold color="white" textAlign="center" >Camara</Text>
            </Button>
          </Center>
          </Stack>
                


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
                  onPress={() => navigation.navigate("calendar")}
                >
                  <Image
                    //source={require('../assets/semillas.png')}
                    source={calendario}
                    alt="Alternate Text"
                    size={"md"}
                  />
                  <Text bold color="white" textAlign="center">
                    Calendar
                  </Text>
                </Button>
              </Center>
            </Stack>
            <Stack
              direction="row"
              mb="2.5"
              mt="1.5"
              space={5}
              alignSelf="center"
            >
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
                  <Text bold color="white" textAlign="center">
                    Brightness
                  </Text>
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
                  onPress={() => navigation.navigate("ph")}
                >
                  <Image
                    //source={require('../assets/semillas.png')}
                    source={ph}
                    alt="Alternate Text"
                    size={"md"}
                    
                  />
                  <Text bold color="white" textAlign="center">
                    PH
                  </Text>
                </Button>
              </Center>
            </Stack>
            
          </VStack>
        </ScrollView>
        <Center
               marginTop="-210"
               

               rounded="sm"
                _text={{
                  fontWeight: "medium",
                }}
                
              >
                <Box >
                  <Box alignItems="center" minH="220" >
                    <Stagger
                      visible={isOpen}
                      initial={{
                        opacity: 0,
                        scale: 0,
                        translateY: 34,
                      }}
                      animate={{
                        translateY: 0,
                        scale: 1,
                        opacity: 1,
                        transition: {
                          type: "spring",
                          mass: 0.8,
                          stagger: {
                            offset: 30,
                            reverse: true,
                          },
                        },
                      }}
                      exit={{
                        translateY: 34,
                        scale: 0.5,
                        opacity: 0,
                        transition: {
                          duration: 100,
                          stagger: {
                            offset: 30,
                            reverse: true,
                          },
                        },
                      }}
                    >
                      <IconButton
                        mb="4"
                        variant="solid"
                        bg="indigo.500"
                        colorScheme="indigo"
                        borderRadius="full"
                        icon={
                          <Icon
                            as={MaterialIcons}
                            size="6"
                            name="location-pin"
                            _dark={{
                              color: "warmGray.50",
                            }}
                            color="warmGray.50"
                          />
                        }
                      />
                      <IconButton
                        mb="4"
                        variant="solid"
                        bg="yellow.400"
                        colorScheme="yellow"
                        borderRadius="full"
                        icon={
                          <Icon
                            as={MaterialCommunityIcons}
                            _dark={{
                              color: "warmGray.50",
                            }}
                            size="6"
                            name="microphone"
                            color="warmGray.50"
                          />
                        }
                      />
                      <IconButton
                        mb="4"
                        variant="solid"
                        bg="teal.400"
                        colorScheme="teal"
                        borderRadius="full"
                        icon={
                          <Icon
                            as={MaterialCommunityIcons}
                            _dark={{
                              color: "warmGray.50",
                            }}
                            size="6"
                            name="video"
                            color="warmGray.50"
                          />
                        }
                      />
                      <IconButton
                        mb="4"
                        variant="solid"
                        bg="red.500"
                        colorScheme="red"
                        borderRadius="full"
                        icon={
                          <Icon
                            as={MaterialIcons}
                            size="6"
                            name="photo-library"
                            _dark={{
                              color: "warmGray.50",
                            }}
                            color="warmGray.50"
                          />
                        }
                      />
                    </Stagger>
                  </Box>
                  <HStack alignItems="center">
                    <IconButton
                      variant="solid"
                      borderRadius="full"
                      size="lg"
                      onPress={onToggle}
                      bg="cyan.400"
                      icon={
                        <Icon
                          as={MaterialCommunityIcons}
                          size="6"
                          name="dots-horizontal"
                          color="warmGray.50"
                          _dark={{
                            color: "warmGray.50",
                          }}
                        />
                      }
                    />
                  </HStack>
                </Box>
              </Center>
      </ImageBackground>
    </>
  );
}
export default Menu;
