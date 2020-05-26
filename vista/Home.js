import React, { Component } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Card from "../componentes/Card";
import { Text, Button } from "@shoutem/ui";

class Home extends Component {
  capsulas = [
    {
      titulo: "Bienvenido",
      descripcion: "Seleccione una opción:",
      icon:
        "https://images4.wikia.nocookie.net/__cb20110420234548/aceattorney/es/images/c/c6/Tarea_completada.png",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView style={ScrollView} contentContainerStyle={styles.container}>
        <Text style={styles.tittle}>Easy Text</Text>
        <View>
          <Button
            onPress={() => this.props.navigation.navigate("EnvioServer")}
            style={styles.myButton}
          >
            <Text style={styles.textButton}>Envío Server</Text>
          </Button>
        </View>
        {this.capsulas.map((capsula, key) => {
          return (
            <Card
              navigation={this.props.navigation}
              key={key}
              valor={capsula}
            />
          );
        })}
        <View style={[styles.fixToText, styles.container, styles.borderRadius]}>
          <Button
            onPress={() => this.props.navigation.navigate("InicioSesion")}
            style={styles.myButton}
          >
            <Text style={styles.textButton}>Iniciar sesión</Text>
          </Button>
          <Button
            onPress={() => this.props.navigation.navigate("Registro")}
            style={styles.myButton}
          >
            <Text style={styles.textButton}>Registrarse</Text>
          </Button>
        </View>
      </ScrollView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  ScrollView: {
    width: "100%",
  },
  container: {
    margin: 1,
    flexDirection: "column",
    backgroundColor: "#ffefd5",
    alignItems: "center",
    justifyContent: "center",
  },
  tittle: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
    fontStyle: "italic",
    //color: "white",
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  myButton: {
    backgroundColor: "#8fbc8f",
    borderRadius: 20,
    marginVertical: 4,
  },
  textButton: {
    textAlign: "center",
    fontSize: 13.5,
    fontWeight: "bold",
    fontStyle: "italic",
  },
});
