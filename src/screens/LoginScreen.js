import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { login } from '../api/auth';

export default function LoginScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async () => {
        const success = await login({ email, password });
        if (success) {
            alert("Вход выполнен");
            navigation.navigate("Home"); // замени на нужный экран
        } else {
            alert("Неверный email или пароль");
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logo}>
                    <Text style={{ color: '#FFD700' }}>Toi</Text>
                    <Text style={{ fontWeight: 'bold' }}>.kg</Text>
                </Text>
                <Text style={styles.headerText}>Вход</Text>
            </View>

            <View style={styles.form}>
                <Text style={styles.welcome}>Рады видеть вас!</Text>
                <Text style={styles.subtitle}>Войдите, чтобы продолжить</Text>

                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        style={styles.input}
                        keyboardType="email-address"
                    />
                    <MaterialIcons name="email" size={20} color="#999" style={styles.icon} />
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Пароль"
                        value={password}
                        onChangeText={setPassword}
                        style={styles.input}
                        secureTextEntry
                    />
                    <MaterialIcons name="lock-outline" size={20} color="#999" style={styles.icon} />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Войти</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.loginLink}>Нет аккаунта? Зарегистрируйтесь</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFCC00',
    },
    header: {
        marginTop: 60,
        marginLeft: 20,
    },
    logo: {
        fontSize: 32,
    },
    headerText: {
        fontSize: 28,
        color: 'white',
        fontWeight: '600',
    },
    form: {
        backgroundColor: 'white',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        marginTop: 30,
        flex: 1,
    },
    welcome: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: '#999',
        marginBottom: 20,
    },
    inputContainer: {
        position: 'relative',
        marginBottom: 15,
    },
    input: {
        backgroundColor: '#fff',
        padding: 15,
        paddingLeft: 45,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#eee',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3,
    },
    icon: {
        position: 'absolute',
        left: 15,
        top: 17,
    },
    button: {
        backgroundColor: '#FFCC00',
        paddingVertical: 15,
        borderRadius: 15,
        marginTop: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 10,
        elevation: 5,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
    },
    loginLink: {
        textAlign: 'center',
        marginTop: 15,
        textDecorationLine: 'underline',
        fontSize: 14,
    },
});
