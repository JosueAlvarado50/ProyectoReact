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
import { MaterialIcons } from "@expo/vector-icons";
import axios, { Axios } from "axios";
import {
  alignItems,
  backgroundColor,
  backgroundImage,
  height,
  width,
} from "styled-system";
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

function viewPh({ navigation }) {
  const[isHidden, setIsHidden] = useState(false)
  const[value, setValue] = useState({
      id:'',
      cantidad_ph:'',
      fecha_hora:''
  });
  const [users, setUsers] = useState([])
  const formData = new FormData();
  formData.append('id', value.id)
  formData.append('cantidad_ph', value.cantidad_ph)
  formData.append('fecha_hora', value.fecha_hora)
  useEffect(() => {
    const getData = async () =>{
    const response = await axios.post('http://172.17.204.47/index_ph.php')
    setUsers(response.data)
    console.log("USER", users)    
    }
    getData()
}, []);
  return (
    <>
      <ImageBackground
        style={{ width: "100%", height: "100%", backgroundColor: "#111827" }}
      >
        <ScrollView>
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
           {users.map((user) =>
           
           (
            <Box
            maxW="80"
            margin="5"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            _light={{
              backgroundColor: "gray.50",
            }}
          >
            <Box>
              <AspectRatio w="100%" ratio={16 / 9}>
                <Image
                  source={ph}
                  alt="image"
                />
              </AspectRatio>
              <Center
                bg="violet.500"
                width="120"
                height="130"
                _dark={{
                  bg: "violet.400",
                }}
                _text={{
                  color: "warmGray.50",
                  fontWeight: "700",
                  fontSize: "8xl",
                }}
                position="absolute"
                bottom="0"
                px="3"
                py="1.5"
              >
                {user.cantidad_ph}
              </Center>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Heading size="md" ml="-1">
                  Fecha de Registro
                </Heading>
                <Text
                  fontSize="xs"
                  _light={{
                    color: "violet.500",
                  }}
                  _dark={{
                    color: "violet.400",
                  }}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1"
                >
                  {user.fecha_hora}
                </Text>
              </Stack>
              <Text fontWeight="400">
                Bengaluru (also called Bangalore) is the center of India's high-tech
                industry. The city is also known for its parks and nightlife.
              </Text>
              <HStack alignItems="center" space={4} justifyContent="space-between">
                <HStack alignItems="center">
                  <Text
                    color="coolGray.600"
                    _dark={{
                      color: "warmGray.200",
                    }}
                    fontWeight="400"
                  >
                    6 mins ago
                  </Text>
                </HStack>
              </HStack>
            </Stack>
          </Box>

           ))}
           
        </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
}

export default viewPh;
