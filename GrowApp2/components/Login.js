import React, { useState } from 'react';
import {Image, Center, Heading, Text, Container, NativeBaseProvider, Box, Button, Icon, Stack, Pressable, Input } from 'native-base';
import axios from 'axios';
import {MaterialIcons} from "@expo/vector-icons"
import Inicio from './Inicio';
import Menu from './Menu';

var Luminosidad = require("../assets/icono_luminosidad.png");
var avatarIconn = require("../assets/avatar.png");


function Login({navigation}) {

    const[isHidden, setIsHidden] = useState(false)
    const[value, setValue] = useState({
        nickname:'',
        password:''})
        
    const handleClick = () => setIsHidden(!isHidden)
    const handleSubmit = async () => {
        const request = {};
        request.nickname = value.nickname;
        request.password = value.password;
        
        axios.post('http://192.168.100.3/api/users/login.php', 
                    request, 
                    {   'mode': 'cors', 
                        'headers':
                        {'Content-Type': 'application/json', 
                         'Access-Control-Allow-Origin': '*'}
                    })
            .then((response) => {
                console.log(response.data);
                if (response.data == true) {
                    navigation.navigate('menu');
                }
            }, (error) => {
                console.log(error);
            });

    };
    const Submit = () =>{
        return <Button  backgroundColor="green.400" onPress={(handleSubmit)}>
            <Text fontSize="lg" color="white">Login</Text>
            </Button>
    }
    return (
        <NativeBaseProvider >
        <Box flex={15} bg="#111827"  p="2"  alignItems="center" justifyContent="center">
        <Center  px="3">
            <Container alignSelf="center">
                <Stack space={5} w="100%" direction="column" alignItems="center">
                <Image
                //source={require('../assets/semillas.png')}
                source={avatarIconn}
                alt="Alternate Text"
                size={"xl"}
                h="250"
                w="250"
              />
                <Input style={{color:"white"}} size="lg" 
                        InputLeftElement={
                            <Icon as={<MaterialIcons name="person" />} 
                            size={5}
                            ml="2"
                            color="muted.100"
                            />
                            
                        } I
                        placeholder="Nickname" 
                    onChangeText={(text) => setValue({ ...value,nickname:text})}
                    />
                <Input style={{color:"white"}} size="lg" placeholder="Password" 
                    type={isHidden ? "text" : "password"}
                    onChangeText={(text) => setValue({ ...value,password:text})}
                    InputRightElement={
                        <Pressable p={2}  onPress={handleClick}>
                            <Icon as={<MaterialIcons name={isHidden ? "visibility-off" : "visibility"}
                            
                            />}
                            color="muted.100"
                            size={5}
                            ml="2"
                            name="home"/>
                            </Pressable>
                    }
                    />
                    <Submit />
                    </Stack>
                </Container>
        </Center>

        </Box>
        
        
  </NativeBaseProvider>
  );
}
export default Login;