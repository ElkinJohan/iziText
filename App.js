import React, { Component } from "react";
import Home from "./vista/Home";
import Camara from "./vista/Camara";
import Voz from "./vista/Voz";
import Galeria from "./vista/Galeria";
import InicioSesion from "./vista/InicioSesion";
import Registro from "./vista/Registro";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Image } from "react-native";

const Stack = createStackNavigator();

function HeaderBar() {
  return (
    <Image
      source={{
        uri:
          "https://images4.wikia.nocookie.net/__cb20110420234548/aceattorney/es/images/c/c6/Tarea_completada.png",
      }}
      style={{ width: 30, height: 30 }}
    />
  );
}

function CapsulasStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ route }) => ({
          title: "Inicio EasyText " + route ? route.params?.usuario : "",
          headerStyle: {
            backgroundColor: "#20b2aa",
          },
          headerTintColor: "white",
        })}
      />
      <Stack.Screen
        name="InicioSesion"
        component={InicioSesion}
        options={{
          headerTitle: (props) => <HeaderBar {...props} />,
        }}
      />
      <Stack.Screen name="Camara" component={Camara} />
      <Stack.Screen name="Voz" component={Voz} />
      <Stack.Screen name="Galeria" component={Galeria} />
      <Stack.Screen name="Registro" component={Registro} />
    </Stack.Navigator>
  );
}

//componente con sintaxis de clase
export default class App extends Component {
  state = {
    fuentesCargadas: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      "Rubik-Black": require("./node_modules/@shoutem/ui/fonts/Rubik-Black.ttf"),
      "Rubik-BlackItalic": require("./node_modules/@shoutem/ui/fonts/Rubik-BlackItalic.ttf"),
      "Rubik-Bold": require("./node_modules/@shoutem/ui/fonts/Rubik-Bold.ttf"),
      "Rubik-BoldItalic": require("./node_modules/@shoutem/ui/fonts/Rubik-BoldItalic.ttf"),
      "Rubik-Italic": require("./node_modules/@shoutem/ui/fonts/Rubik-Italic.ttf"),
      "Rubik-Light": require("./node_modules/@shoutem/ui/fonts/Rubik-Light.ttf"),
      "Rubik-LightItalic": require("./node_modules/@shoutem/ui/fonts/Rubik-LightItalic.ttf"),
      "Rubik-Medium": require("./node_modules/@shoutem/ui/fonts/Rubik-Medium.ttf"),
      "Rubik-MediumItalic": require("./node_modules/@shoutem/ui/fonts/Rubik-MediumItalic.ttf"),
      "Rubik-Regular": require("./node_modules/@shoutem/ui/fonts/Rubik-Regular.ttf"),
      "rubicon-icon-font": require("./node_modules/@shoutem/ui/fonts/rubicon-icon-font.ttf"),
    });

    this.setState({ fuentesCargadas: true });
  }

  render() {
    if (!this.state.fuentesCargadas) {
      return <AppLoading />;
    }
    return (
      <NavigationContainer>
        <CapsulasStack />
      </NavigationContainer>
    );
  }
}
