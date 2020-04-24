import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ShadowPropTypesIOS, Button } from 'react-native';

//componeente con sintaxis de funcion
//export default function App() {
//  return (
    //<View style={styles.container}>
//      <Text>Rulo!</Text>
 //   </View>
 // );
//}

//componenete tarjeta
class Card extends Component{
  state = {sinVer: true};

  render(props){
    return(
    //sintaxis JSX puedo usar codigo javascript con {}
      <View
        style={
          this.state.sinVer
            ? {backgroundColor: 'blue'}
            :{backgroundColor: 'gray'}
        }
      >
        <Image
          source={this.props.valor.icono}
          style={{width: 50, height: 50}}
        />
        <Text>{this.props.valor.titulo}</Text>
        <Text>{this.props.valor.descripcion}</Text>
        <Button 
          onPress={() => {
            this.setState({ sinVer: false });
          }}
          title={'Ver'}
          disable={!this.state.sinVer}
        />
      </View>
    );
  }
}

//componente con sintaxis de clase
export default class App extends Component{

  tarjetas = [
    {titulo: "Crear Componente",
    descripcion: "Hay 2 formas de crear componentes en react native",
    icono: "https://reactnative.dev/docs/assets/p_cat1.png"
    }, 
    {titulo: "Sintaxis JSX",
    descripcion: "Similar a html pero puede usar javascript dentro",
    icono: "https://reactnative.dev/docs/assets/p_cat1.png"
    }, 
    {titulo: "Props",
    descripcion: "Propiedades por configurar",
    icono: "https://reactnative.dev/docs/assets/p_cat1.png"
    } 
  ];

  render(){
    return(
      <View style={styles.container}>
        <Text>Izi Text</Text>
        <Card valor={this.tarjetas[0]}/>
        <Card valor={this.tarjetas[1]}/>
        <Card valor={this.tarjetas[2]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
