import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CreateEventScreen = () => {
    const [guestCount, setGuestCount] = useState('7');
    const [selectedHall, setSelectedHall] = useState(null);

    const halls = [
        { id: 1, name: 'Зал на 300 человек' },
        { id: 2, name: 'Зал на 200 человек' },
        { id: 3, name: 'VIP зал' }
    ];

    return (
        <ScrollView style={styles.container}>
            {/* Заголовок */}
            <Text style={styles.mainTitle}># Создание Мероприятия</Text>

            {/* Информация о месте */}
            <View style={styles.venueContainer}>
                <Text style={styles.venueName}>UNO</Text>
                <Text style={styles.venueType}>UNO/Banquet Hall</Text>
                <Text style={styles.venueAddress}>ул Камбар-Ата, 75</Text>
            </View>

            {/* Разделитель */}
            <View style={styles.divider} />

            {/* Количество гостей */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Количество гостей</Text>
                <View style={styles.guestInputContainer}>
                    <TextInput
                        style={styles.input}
                        value={guestCount}
                        onChangeText={setGuestCount}
                        keyboardType="numeric"
                    />
                    <Text style={styles.guestNote}>С.7</Text>
                </View>
            </View>

            {/* Разделитель */}
            <View style={styles.divider} />

            {/* Выбор зала */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Зал</Text>
                {halls.map((hall) => (
                    <TouchableOpacity
                        key={hall.id}
                        style={[
                            styles.hallButton,
                            selectedHall === hall.id && styles.hallButtonSelected
                        ]}
                        onPress={() => setSelectedHall(hall.id)}
                    >
                        <Text style={[
                            styles.hallButtonText,
                            selectedHall === hall.id && styles.hallButtonTextSelected
                        ]}>
                            {hall.name}
                        </Text>
                        {selectedHall === hall.id && (
                            <Ionicons name="checkmark" size={20} color="#6200EE" />
                        )}
                    </TouchableOpacity>
                ))}
            </View>

            {/* Кнопка продолжения */}
            <TouchableOpacity style={styles.nextButton}>
                <Text style={styles.nextButtonText}>Продолжить</Text>
                <Ionicons name="arrow-forward" size={20} color="#FFF" />
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 20,
    },
    mainTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#333',
    },
    venueContainer: {
        marginBottom: 20,
    },
    venueName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    venueType: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
    },
    venueAddress: {
        fontSize: 14,
        color: '#888',
        marginTop: 3,
    },
    divider: {
        height: 1,
        backgroundColor: '#EEE',
        marginVertical: 20,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 15,
        color: '#333',
    },
    guestInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
        width: 80,
        marginRight: 10,
    },
    guestNote: {
        fontSize: 14,
        color: '#888',
    },
    hallButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#DDD',
        borderRadius: 8,
        padding: 15,
        marginBottom: 10,
    },
    hallButtonSelected: {
        borderColor: '#6200EE',
        backgroundColor: '#F3E5FF',
    },
    hallButtonText: {
        fontSize: 16,
        color: '#333',
    },
    hallButtonTextSelected: {
        color: '#6200EE',
        fontWeight: '600',
    },
    nextButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6200EE',
        borderRadius: 8,
        padding: 16,
        marginTop: 30,
    },
    nextButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
        marginRight: 10,
    },
});

export default CreateEventScreen;