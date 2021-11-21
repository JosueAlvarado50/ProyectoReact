import React from "react";
import {
  ImageBackground,
  MaterialIcons,
  Image,
  Center,
  Heading,
  Text,
  Container,
  NativeBaseProvider,
  Box,
  extendTheme,
  Icon,
  Circle,
  Stack,
  Pressable,
  Input,
  Button,
} from "native-base";

var inicioIcon = require("../assets/iconoInicio.png");

const theme = extendTheme({
  components:{
    Button: {
      variants:{
        rounded:({ colorScheme })=>{
          return{
            bg: `${colorScheme}.500`,
            rounded: "full",
          }
        },
      },
    }
  },
})


function Inicio({ navigation }) {
  return (
    <NativeBaseProvider theme ={theme}>
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
                <Box
                  flex={10}
                  alignItems="center"
                  justifyContent="center"
                  rounded="lg"
                  alignSelf="center"
                >
                  <Circle size={250} bg="primary.200">
                  <Image
                    source={inicioIcon}
                    alt="Alternate Text"
                    h="250"
                    w="250"
                  />
                  </Circle>
                  
                  <Heading alignContent="center">
                    GrowApp
                    <Heading color="emerald.500">App</Heading>
                  </Heading>
                  <Text mt="3" fontWeight="medium"></Text>
                  <Button 
                    colorScheme="lightBlue"
                    variant="rounded"
                    onPress={() => navigation.navigate("login")}
                  >
                    <Text fontSize="2xl" color="white">
                      Login
                    </Text>
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
