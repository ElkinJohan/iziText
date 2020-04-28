import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import Card from "../componentes/Card";

class Home extends Component {
    capsulas = [
        {titulo: "Bienvenido",
        descripcion: "A continuación seleccione alguna de las tres opciones:",
        icono: "https://i.ya-webdesign.com/images/how-to-create-a-png-16.png"
        },
      ];

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
      <Text>IziText</Text>
      {this.capsulas.map(capsulas => {
        return <Card navigation={this.props.navigation} valor={capsulas}/>;
      })}
    </ScrollView>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
    container: {
      margin: 10,
      flexDirection: "column",
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });