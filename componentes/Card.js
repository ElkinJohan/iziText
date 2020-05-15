import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text, Button, Icon } from "@shoutem/ui";

class Card extends Component {
  state = { sinVer: true };

  render() {
    return (
      <View style={[styles.card, styles.shadow]}>
        <Image
          source={{ uri: this.props.valor.icon }}
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.tittleWelcome}>{this.props.valor.titulo}</Text>
        <Text style={styles.myDescrip}>{this.props.valor.descripcion}</Text>

        {/* <Button
          onPress={() => this.props.navigation.navigate("Detalle")}
          title={"Leer más..."}
        /> */}
        <View
          style={[styles.fixToText, styles.Card, styles.shadow.borderRadius]}
        >
          <Button
            onPress={() => this.props.navigation.navigate("Galeria")}
            style={styles.myButton}
          >
            <Text style={styles.textButton}>Galería</Text>
            <Icon name="photo" />
          </Button>

          <Button
            onPress={() => this.props.navigation.navigate("Camara")}
            style={styles.myButton}
          >
            <Text style={styles.textButton}>Cámara</Text>
            <Icon name="take-a-photo" />
          </Button>

          <Button
            onPress={() => this.props.navigation.navigate("Voz")}
            style={styles.myButton}
          >
            <Text style={styles.textButton}>Voz</Text>
            <Icon name="equalizer" />
          </Button>
        </View>
        {/*
        <View
          style={[styles.fixToText, styles.Card, styles.shadow.borderRadius]}
        >
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
        */}
      </View>
    );
  }
}

export default Card;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    padding: 10,
  },
  shadow: {
    backgroundColor: "#f5deb3",
    paddingVertical: 20,
    width: "92%",
    borderRadius: 10,
    shadowColor: "navy",
    shadowOpacity: 0.9,
    elevation: 10,
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
    //color: "white",
  },
  tittleWelcome: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    fontStyle: "italic",
    //color: "#8fbc8f",
  },
  myDescrip: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 5,
    //color: "#8fbc8f",
  },
});
