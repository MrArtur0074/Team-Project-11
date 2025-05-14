import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { verifyCode } from '../api/auth'; // путь подкорректируй

const CodeConfirmationScreen = () => {
    const route = useRoute();
    const { email } = route.params || {}; // безопасно достаём email

    const [code, setCode] = useState('');


    const handleConfirm = async () => {
        try {
            const response = await verifyCode({ email, code });
            alert("Успешно подтвержден");
            navigation.navigate("Login");
        } catch (error) {
            alert("Ошибка подтверждения кода");
        }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Toi.<Text style={styles.logoBold}>kg</Text></Text>
            <Text style={styles.title}>Подтверждение</Text>

            <View style={styles.formBox}>
                <Text style={styles.subtitle}>Подтвердите свой{'\n'}email</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Код подтверждения"
                    placeholderTextColor="#999"
                    value={code}
                    onChangeText={setCode}
                    keyboardType="number-pad"
                />

                <TouchableOpacity style={styles.button} onPress={handleConfirm}>
                    <Text style={styles.buttonText}>Подтвердить</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.link}>Не получили код?</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFC700',
        paddingTop: 60,
        paddingHorizontal: 24,
    },
    logo: {
        fontSize: 32,
        color: '#fff',
    },
    logoBold: {
        fontWeight: 'bold',
        color: '#000',
    },
    title: {
        fontSize: 28,
        color: '#fff',
        marginTop: 4,
        fontWeight: '600',
    },
    formBox: {
        backgroundColor: '#fff',
        width: '100%',
        marginTop: 32,
        padding: 24,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        flex: 1,
    },
    subtitle: {
        fontSize: 20,
        fontWeight: '500',
        marginBottom: 20,
        color: '#000',
    },
    input: {
        height: 52,
        borderRadius: 16,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
        borderWidth: 1,
        borderColor: '#eee',
    },
    button: {
        backgroundColor: '#FFC700',
        paddingVertical: 16,
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 24,
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: '600',
    },
    link: {
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: '#000',
        fontSize: 15,
    },
});

export default CodeConfirmationScreen;
