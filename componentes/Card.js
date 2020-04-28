import React, { Component } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

class Card extends Component {
    state = {sinVer: true};

    render(){
        return(
            <View style={[styles.card, styles.shadow]}>
            <Image
                source={{uri: this.props.valor.icono}}
                style={{width: 50, height: 50}}
            />
            <Text>{this.props.valor.titulo}</Text>
            <Text>{this.props.valor.descripcion}</Text>
            
            <Button 
                onPress={() => this.props.navigation.navigate('Camara')}
                title={'Transcribir con cámara'}
            />
            <Button 
                onPress={() => this.props.navigation.navigate('Voz')}
                title={'Transcribir con voz'}
            />
            <Button 
                onPress={() => this.props.navigation.navigate('Galeria')}
                title={'Abrir galería'}
            />
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
        padding: 50,
    },
    shadow:{
        backgroundColor: "#48d1cc",
        paddingVertical: 50,
        width: "95%",
        borderRadius: 10,
        shadowColor: "#f2f2f2",
        shadowOpacity: 0.9,
        elevation: 10, 
    },
});

