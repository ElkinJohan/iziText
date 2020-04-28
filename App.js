import React, { Component } from 'react';
import Home from "./vista/Home";
import Camara from "./vista/Camara";
import Voz from "./vista/Voz";
import Galeria from "./vista/Galeria";
import "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";

const stack = createStackNavigator();

function CapsulasStack(){
  return(
    <stack.Navigator>
      <stack.Screen name="Home" component={Home}/>
      <stack.Screen name="Camara" component={Camara}/>
      <stack.Screen name="Voz" component={Voz}/>
      <stack.Screen name="Galeria" component={Galeria}/>
    </stack.Navigator>
  )
}

//componente con sintaxis de clase
export default class App extends Component{
  render(){
    return (
      <NavigationContainer>
        <CapsulasStack/>
      </NavigationContainer>
    );
  }
}
