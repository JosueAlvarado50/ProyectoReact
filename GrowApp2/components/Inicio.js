import React from "react";
import {
  ImageBackground,
  MaterialIcons,Image,
  Center,
  Heading,
  Text,
  Container,
  NativeBaseProvider,
  Box,
  Icon,
  Stack,
  Pressable,
  Input,
  Button,
} from "native-base";

var inicioIcon = require("../assets/iconoInicio.png");

function Inicio({ navigation }) {
  return (
    <NativeBaseProvider>
      <Box
        flex={15}
        bg="#111827"
        p="2"
        alignItems="center"
        justifyContent="center"
      >
        <Center px="3">
          <Container alignSelf="center">
            <Stack space={5} w="100%" direction="column" alignItems="center">
            <Center>
                <Box flex={10}  alignItems="center"justifyContent="center"  rounded="lg"alignSelf="center">
                    <Image
                    source={inicioIcon}
                    alt="Alternate Text"
                    h="250"
                    w="250"
                    />
                    <Heading alignContent="center">
                    Grow yoshuna jotillo! 
                    <Heading color="emerald.500">App</Heading>
                    </Heading>
                    <Text mt="3" fontWeight="medium">
                    </Text>
                    <Button  backgroundColor="#585454" onPress={() => navigation.navigate('login')}>
                        <Text fontSize="xl" color="white"  >Login</Text>
                        </Button>
                </Box>
                </Center>
            </Stack>
          </Container>
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}
export default Inicio;
