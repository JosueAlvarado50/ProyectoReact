//import { DatePicker } from "@material-ui/pickers";
import React, {Component} from "react";
import { View, Button, Platform, SafeAreaView } from "react-native";
//import { SafeAreaView } from "react-native";
import { DateTimePicker } from "@react-native-community/datetimepicker";
import Modal from 'react-native-modal';
import { height } from "styled-system";
import CardCalendar from './CardCalendar';
import CardTime from './Calendario';


function Calendar({ navigation }) {
  
  return(
    <SafeAreaView>
      <View>
        <View>
          {/* <Button onPress={() => navigation.navigate('cardCalendar')}  title="show date picker"></Button> */}
          <CardCalendar/>
          
        </View>
        <View>
          {/* <Button onPress={() => navigation.navigate('cardTime')} title="show time picker"></Button> */}
          <CardTime/>
        </View>
        
      </View>
      
      
    </SafeAreaView>
  );
}


export default Calendar;