import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    TextInput,
    Image,
    ScrollView,
    Keyboard
} from 'react-native';
import img from "../../assets/img/pokeBall.png"
import { useFormik } from "formik";
import * as Yup from "yup";
import { user, userDetails } from "../../utils/userDB";
import useAuth from '../../hooks/useAuth';

export default function LoginForm() {
    const [errro, setError] = useState("");
    const { login } = useAuth();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (formValue) => {
            setError("")
            const { username, password } = formValue;

            if (username !== user.username || password !== user.password) {
                setError("El usuario o la contraseña no son correctos")
            } else {
                login(userDetails);
            }
        },
    });

    return (
        <ScrollView>
            <View>
                <Image style={styles.img} source={img} />
                <Text style={styles.title}>Iniciar Sesión</Text>
                <TextInput
                    placeholder='Nombre de usuario'
                    style={styles.input}
                    autoCapitalize="none"
                    value={formik.values.username}
                    onChangeText={(text) => formik.setFieldValue("username", text)}
                />
                <TextInput
                    placeholder='Contraseña'
                    style={styles.input}
                    autoCapitalize="none"
                    secureTextEntry={true}
                    value={formik.values.password}
                    onChangeText={(text) => formik.setFieldValue("password", text)}
                />
                <Button style={styles.button} title='Entrar' onPress={formik.handleSubmit} />

                <Text style={styles.error}>{formik.errors.username}</Text>
                <Text style={styles.error}>{formik.errors.password}</Text>

                <Text style={styles.error}>{errro}</Text>
            </View>
        </ScrollView >
    )
}

function initialValues() {
    return {
        username: "",
        password: ""
    }
}

function validationSchema() {
    return {
        username: Yup.string().required("El usuario es obligatorio"),
        password: Yup.string().required("La contraseña es obligatorio")
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 28,
        fontWeight: "bold",
        top: -10,
        marginBottom: 15
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    error: {
        textAlign: "center",
        color: "#f00",
        marginTop: 20
    },
    img: {
        alignSelf: "center",
        width: 200,
        height: 200,
        top: -20
    },
    button: {
        width: 20,
        height: 40,
        top: 10,
        borderRadius: 10
    }
})