import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const EventListScreen = ({ navigation }) => {
    // Данные мероприятий
    const events = [
        {
            id: 1,
            title: 'Свадьба Акбара',
            date: 'июнь 23-24, 2025',
            type: 'wedding',
            status: 'upcoming' // upcoming, in-progress, completed
        },
        {
            id: 2,
            title: 'Выпускной SCA-22B',
            date: 'июнь 24-25, 2025',
            type: 'graduation',
            status: 'upcoming'
        },
        {
            id: 3,
            title: 'Гендер Пати',
            date: 'декабрь 26-27, 2024',
            type: 'party',
            status: 'completed'
        }
    ];

    // Получение иконки для типа мероприятия
    const getEventIcon = (type) => {
        switch(type) {
            case 'wedding': return 'heart';
            case 'graduation': return 'school';
            case 'party': return 'wine';
            default: return 'calendar';
        }
    };

    // Получение цвета статуса
    const getStatusColor = (status) => {
        switch(status) {
            case 'upcoming': return '#4CAF50';
            case 'in-progress': return '#FFC107';
            case 'completed': return '#F44336';
            default: return '#9E9E9E';
        }
    };

    return (
        <ScrollView style={styles.container}>
            {/* Заголовок */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}># Лист мероприятий</Text>
                <TouchableOpacity style={styles.filterButton}>
                    <Ionicons name="filter" size={20} color="#6200EE" />
                </TouchableOpacity>
            </View>

            {/* Список мероприятий */}
            {events.map((event) => (
                <TouchableOpacity
                    key={event.id}
                    style={styles.eventCard}
                    onPress={() => navigation.navigate('EventDetails', { eventId: event.id })}
                >
                    {/* Левая часть - иконка */}
                    <View style={styles.eventIconContainer}>
                        <Ionicons
                            name={getEventIcon(event.type)}
                            size={24}
                            color="#6200EE"
                        />
                    </View>

                    {/* Центральная часть - информация */}
                    <View style={styles.eventInfo}>
                        <Text style={styles.eventTitle}>{event.title}</Text>
                        <Text style={styles.eventDate}>{event.date}</Text>
                    </View>

                    {/* Правая часть - статус */}
                    <View style={[styles.eventStatus, { backgroundColor: getStatusColor(event.status) }]}>
                        <Text style={styles.statusText}>
                            {event.status === 'upcoming' ? 'Предстоит' :
                                event.status === 'in-progress' ? 'В процессе' : 'Завершено'}
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}

            {/* Кнопка добавления нового мероприятия */}
            <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigation.navigate('AddEvent')}
            >
                <Ionicons name="add" size={24} color="#FFF" />
                <Text style={styles.addButtonText}>Добавить мероприятие</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    filterButton: {
        padding: 8,
    },
    eventCard: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    eventIconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#EDE7F6',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    eventInfo: {
        flex: 1,
    },
    eventTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 4,
    },
    eventDate: {
        fontSize: 14,
        color: '#666',
    },
    eventStatus: {
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 12,
        marginLeft: 12,
    },
    statusText: {
        fontSize: 12,
        color: '#FFF',
        fontWeight: '500',
    },
    addButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6200EE',
        borderRadius: 8,
        padding: 16,
        marginTop: 8,
    },
    addButtonText: {
        color: '#FFF',
        fontWeight: '600',
        marginLeft: 8,
    },
});

export default EventListScreen;