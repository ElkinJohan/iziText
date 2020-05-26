import React, { Component } from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "@shoutem/ui";

class EnvioServer extends Component {
  constructor(props) {
    super(props);
    this.state = { titulo: "", descripcion: "", icon: "" };
  }

  componentDidMount() {
    fetch("http://181.62.245.222:3000/capsulas", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        titulo: this.state.titulo,
        descripcion: this.state.descripcion,
        icon: this.state.icon,
      }),
    });
  }

  render() {
    return (
      <View>
        <Text> Envio Server </Text>
        <TextInput
          onChangeText={(titu) => this.setState({ titulo: titu })}
          placeholder={"Titulo"}
        ></TextInput>
        <TextInput
          onChangeText={(desc) => this.setState({ descripcion: desc })}
          placeholder={"Descripción"}
        ></TextInput>
        <TextInput
          onChangeText={(ico) => this.setState({ icon: ico })}
          placeholder={"Imagen"}
        ></TextInput>
        <Button onPress={() => this.componentDidMount()}>
          <Text>Enviar</Text>
        </Button>
      </View>
    );
  }
}

export default EnvioServer;
