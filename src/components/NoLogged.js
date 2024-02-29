import React from 'react';
import { StyleSheet, View, Text, Button, Image, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import image from "../assets/img/pokeLogin.png"

const NoLogged = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.content}>
            <Image style={styles.image} source={image} resizeMode="contain" />
            <Text style={styles.text}>Para ver esta pantalla tienes que Iniciar Sesión</Text>
            <Button
                title='Ir al Login'
                onPress={() => navigation.navigate("Account")}
            />
        </View>
    )
}

export default NoLogged;

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width * 0.8,
        height: Dimensions.get('window').height * 0.3,
        right: -13,
    },
    content: {
        top: -70,
        marginVertical: 50,
        paddingHorizontal: 20,
    },
    text: {
        textAlign: "center",
        marginBottom: 15,
        fontWeight: "bold",
    }
})
