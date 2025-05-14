import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function RegisterScreen() {
    const navigation = useNavigation();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        // TODO: регистрация через backend
        navigation.navigate('CodeConfirmation'); // переход на экран подтверждения кода
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logo}>
                    <Text style={{ color: '#FFD700' }}>Toi</Text>
                    <Text style={{ fontWeight: 'bold' }}>.kg</Text>
                </Text>
                <Text style={styles.headerText}>Регистрация</Text>
            </View>

            <View style={styles.form}>
                <Text style={styles.welcome}>Добро пожаловать!</Text>
                <Text style={styles.subtitle}>Планируйте мероприятия быстро и удобно</Text>

                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Введите имя"
                        value={name}
                        onChangeText={setName}
                        style={styles.input}
                    />
                    <Ionicons name="person-outline" size={20} color="#999" style={styles.icon} />
                </View>

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

                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Регистрация</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.loginLink}>Уже есть аккаунт?</Text>
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
