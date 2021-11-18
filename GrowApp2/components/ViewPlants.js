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
import {
  alignItems,
  backgroundColor,
  backgroundImage,
  height,
  width,
} from "styled-system";
import { ImageBackground } from "react-native";
import CardPlants from './CardPlants';
import axios, { Axios } from "axios";

var gerAmaranto = require("../assets/gerAmaranto.jpg")
var gerTrigo = require("../assets/gerTrigo.jpg")
var gerRabano = require("../assets/gerRabano.jpg")

function ViewPlants(props) {
  const[isHidden, setIsHidden] = useState(false)
  const[value, setValue] = useState({
      name:'',
      description:'',
      imagePlant:''
  });
  const handleChange = (event) =>
  {
      setValue(event.target.value)
      console.log(value);
  }
  const [users, setUsers] = useState([])
  const formData = new FormData();
  formData.append('name', value.name)
  formData.append('description', value.description)
  formData.append('imagePlant', value.imagePlant)


  useEffect(() => {
      const getData = async () =>{
      const response = await axios.post('http://192.168.100.3/indexPlants.php')
      setUsers(response.data)
      console.log("USER", users)    
      }
      getData()
  }, []);


  return (
   
      <ImageBackground
        style={{ width: "100%", height: "100%", backgroundColor: "#111827" }}
      >
        <ScrollView>
          <Box flex={15} p="5"  alignItems="center" justifyContent="center" marginBottom={5}>
            
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
           {users.map((user) =>
           
           (<CardPlants id={user.id} cardPlantName={user.name} description={user.description} 
            ></CardPlants>))}
           
        </View>

          </Box>
        </ScrollView>
      </ImageBackground>
   
  );
}

export default ViewPlants;
