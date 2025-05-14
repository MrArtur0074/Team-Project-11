import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const WhereToGoScreen = () => {
    const [peopleCount, setPeopleCount] = useState('');
    const [totalPrice, setTotalPrice] = useState('');

    return (
        <View style={styles.container}>
            {/* Заголовок */}
            <Text style={styles.mainTitle}># Куда Идем?</Text>

            {/* Секция мест */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Мест</Text>
                <TextInput
                    style={styles.input}
                    placeholder="количество человек"
                    value={peopleCount}
                    onChangeText={setPeopleCount}
                    keyboardType="numeric"
                />
            </View>

            {/* Секция цены */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Цена</Text>
                <TextInput
                    style={styles.input}
                    placeholder="общая цена"
                    value={totalPrice}
                    onChangeText={setTotalPrice}
                    keyboardType="numeric"
                />
            </View>

            {/* Разделитель */}
            <View style={styles.divider} />

            {/* Кнопка Применить */}
            <TouchableOpacity style={styles.applyButton}>
                <Text style={styles.applyButtonText}>Применить</Text>
            </TouchableOpacity>

            {/* Разделитель */}
            <View style={styles.divider} />

            {/* Информация о пользователе */}
            <View style={styles.userInfo}>
                <Text style={styles.userName}>NAVAT</Text>
                <Text style={styles.userSubtitle}>Чайка Анна</Text>
            </View>

            {/* Разделитель */}
            <View style={styles.divider} />

            {/* Информация о заведении */}
            <View style={styles.venueInfo}>
                <Text style={styles.venueTitle}>Navat| Чайхана</Text>
                <Text style={styles.venueRating}>4.91 кафе</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    mainTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#333',
    },
    section: {
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
        color: '#333',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
    },
    divider: {
        height: 1,
        backgroundColor: '#eee',
        marginVertical: 20,
    },
    applyButton: {
        backgroundColor: '#6200EE',
        borderRadius: 8,
        padding: 16,
        alignItems: 'center',
    },
    applyButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    userInfo: {
        marginBottom: 20,
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    userSubtitle: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    venueInfo: {
        marginTop: 10,
    },
    venueTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
    },
    venueRating: {
        fontSize: 14,
        color: '#4CAF50',
        marginTop: 5,
    },
});

export default WhereToGoScreen;