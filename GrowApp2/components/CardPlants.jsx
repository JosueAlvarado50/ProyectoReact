import React from "react";
import {
  Box,
  Heading,
  Icon,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
} from "native-base";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
const CardPlants = (props) => {
  console.log(props);
  
  
  return (
    <Box
      rounded="lg"
      overflow="hidden"
      width="72"
      shadow={1}
      _light={{ backgroundColor: "gray.50" }}
      _dark={{ backgroundColor: "gray.700" }}
      margin={3}
    >
      <Box>
        <AspectRatio ratio={16 / 9}>
          <Image
            
            alt="image"
            h="162"
            w="290"
          />
        </AspectRatio>
        <Center
          bg="violet.500"
          _text={{ color: "white", fontWeight: "700", fontSize: "xs" }}
          position="absolute"
          bottom={0}
          px="3"
          py="1.5"
        >
         {props.cardPlantName}
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
          {props.id}
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
        <Text fontWeight="400">
         {props.description}
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Text color="gray.500" fontWeight="400"></Text>
          </HStack>
        </HStack>
      </Stack>
    </Box>
  );
};

export default CardPlants;
