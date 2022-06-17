import React from "react"
import {View,Text} from "react-native"
import  {createNativeStackNavigator} from "@react-navigation/native-stack"
import HomeScreen from "./screens/HomeScreen"
import ChatScreen from "./screens/ChatScreen"

const Stack=createNativeStackNavigator();

//give every screen a relevant name
const StackNavigator=()=>{
    return(
        <StackNavigator>
        
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />

        </StackNavigator>

    );
};

export default StackNavigator