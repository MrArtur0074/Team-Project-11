import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import fonts from '../../assets/styles/fonts';

export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/Group 99.png')} style={styles.topImage} />

            <View style={styles.bottomContainer}>
                <Text style={styles.logoText}><Text style={{ color: '#FCD116' }}>Toi</Text>.kg</Text>
                <Text style={styles.title}>Той быстро и удобно</Text>
                <Text style={styles.subtitle}>без лишних трат</Text>

                <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginText}>Вход</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.registerText}>Регистрация</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#FCD116' },
    topImage: {
        width: '100%',
        height: '55%',
        resizeMode: 'cover',
    },
    bottomContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        padding: 24,
        alignItems: 'center',
    },
    logoText: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 16,
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        marginTop: 8,
    },
    subtitle: {
        fontSize: 16,
        color: 'gray',
        marginTop: 4,
        marginBottom: 32,
    },
    loginButton: {
        width: '100%',
        backgroundColor: '#FCD116',
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 12,
    },
    loginText: {
        fontSize: 18,
        fontWeight: '500',
    },
    registerButton: {
        width: '100%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 16,
        borderRadius: 16,
        alignItems: 'center',
    },
    registerText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#000',
    },
});
