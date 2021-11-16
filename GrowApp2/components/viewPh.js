import React from "react";
import {
  AspectRatio,
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
  return (
    <>
      <ImageBackground
        style={{ width: "100%", height: "100%", backgroundColor: "#111827" }}
      >
        <ScrollView>
          <Box flex={15} p="2" alignItems="center" justifyContent="center">
            <Box
              rounded="lg"
              overflow="hidden"
              width="72"
              shadow={1}
              _light={{ backgroundColor: "gray.50" }}
              _dark={{ backgroundColor: "gray.700" }}
            >
              <Box>
                <AspectRatio ratio={16 / 9}>
                  <Image
                    source={{
                      uri: "https://jardineriaplantasyflores.com/wp-content/uploads/2014/12/C%C3%B3mo-medir-el-pH.jpg",
                    }}
                    alt="image"
                  />
                </AspectRatio>
              </Box>
              <Stack p="10" space={2} bg="#48546c">
                <Stack space={2}>
                  
                  <Heading size="sm" ml="-1" color="coolGray.100" textAlign='justify'>
                    Medir el pH de la tierra sirve para conocer el grado de
                    acidez o alcalinidad de nuestros suelos,
                  </Heading>
                  <Text
                    fontSize="xs"
                    _light={{ color: "violet.500" }}
                    _dark={{ color: "violet.300" }}
                    fontWeight="500"
                    ml="-0.5"
                    mt="-1"
                  >
                    The Silicon Valley of India.
                  </Text>
                </Stack>
                <Text fontWeight="400" color="coolGray.100" textAlign='justify'>
                  El pH se define como la cantidad de iones de
                  hidrógeno libres presentes en el suelo, y se expresa en el
                  concepto de acidez, de acuerdo con la siguiente escala, que va
                  de 0 a 14:
                </Text>
                <Text fontWeight="400" color="coolGray.100"lineHeight= "13" >
                  &gt;   Ácido: hasta 6,5.
                </Text>
                <Text fontWeight="400" color="coolGray.100" lineHeight= "13">
                  &gt;   Neutro: 7.
                </Text>
                <Text fontWeight="400" color="coolGray.100" lineHeight= "13">
                  &gt;   Alcalino: a partir de 7,5.
                </Text>

                <HStack
                  alignItems="center"
                  space={4}
                  justifyContent="space-between"
                >
                  <Center  p="1">
                  <Box  bg="primary.400" p="12" rounded="lg">
                    <Text  fontSize="xs" color="darkBlue.500">0</Text>
                    
                  </Box>
                  </Center>
                  
                  
                  
                </HStack>
              </Stack>
            </Box>
          </Box>
        </ScrollView>
      </ImageBackground>
    </>
  );
}

export default viewPh;
