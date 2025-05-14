import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const UnoPage = () => {
    return (
        <ScrollView style={styles.container}>
            {/* Верхняя строка с временем */}
            <View style={styles.timeContainer}>
                <Text style={styles.timeText}>9:41</Text>
            </View>

            {/* Заголовок и подзаголовок */}
            <View style={styles.headerContainer}>
                <Text style={styles.title}>UNO</Text>
                <Text style={styles.subtitle}>Namabu | Gazi Meyers</Text>
                <Text style={styles.pageIndicator}>1/46</Text>
            </View>

            {/* Основная информация */}
            <View style={styles.infoContainer}>
                <Text style={styles.sectionTitle}>UNO|Banquet Hall</Text>
                <Text style={styles.description}>Хрустальные залы на разное количество человек.</Text>

                <View style={styles.ratingContainer}>
                    <Text style={styles.rating}>4.99</Text>
                    <Text style={styles.ratingLabel}>Мнение клиентов</Text>
                    <Text style={styles.classCount}>26 класса</Text>
                </View>
            </View>

            {/* Блок об основателе */}
            <View style={styles.founderContainer}>
                <Text style={styles.founderName}>Актан Раимбеков</Text>
                <Text style={styles.founderPosition}>Глава UNO</Text>
                <Text style={styles.founderBio}>Опытный основатель сети банкетов</Text>
            </View>

            {/* Описание заведения */}
            <View style={styles.venueContainer}>
                <Text style={styles.sectionTitle}>Заведения</Text>
                <Text style={styles.venueDescription}>
                    UNO – это хрустальный замок с изысканным интерьером, где роскошь встречает современный дизайн. Здесь каждая деталь создаёт атмосферу...
                </Text>
                <TouchableOpacity>
                    <Text style={styles.readMore}>показать еще ></Text>
                </TouchableOpacity>
            </View>

            {/* Секция с залами */}
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Залы</Text>
                <View style={styles.hallItem}>
                    <Text style={styles.hallName}>Зал на 300 человек</Text>
                </View>
                <View style={styles.hallItem}>
                    <Text style={styles.hallName}>Зал на 200 человек</Text>
                </View>
            </View>

            {/* Адрес */}
            <View style={styles.addressContainer}>
                <Text style={styles.sectionTitle}>Адрес</Text>
                <Text style={styles.address}>Улица Канбар-Ага, 75</Text>
            </View>

            {/* Меню */}
            <View style={styles.menuContainer}>
                <Text style={styles.sectionTitle}>Меню ресторана</Text>
            </View>

            {/* Развлечения */}
            <View style={styles.entertainmentContainer}>
                <Text style={styles.sectionTitle}>Развлечения</Text>
                <Text style={styles.entertainmentTitle}>Show Today</Text>
                <Text style={styles.entertainmentDescription}>Развлекательное шоу по мотивам телепередач</Text>
                <Text style={styles.entertainmentHost}>Надырбек Кальбеков</Text>
                <Text style={styles.entertainmentRole}>Лучший Тамада/Ведущий аутист</Text>
            </View>

            {/* Поддержка */}
            <View style={styles.supportContainer}>
                <Text style={styles.sectionTitle}>Поддержка</Text>
                <Text style={styles.supportRole}>Контакты</Text>
                <Text style={styles.supportPerson}>главный маркетолог</Text>
                <Text style={styles.supportPerson}>администратор</Text>
                <Text style={styles.phoneNumber}>+996 555 000 000</Text>
                <Text style={styles.phoneNumber}>+996 555 000 000</Text>
            </View>

            {/* Цена и кнопка */}
            <View style={styles.priceContainer}>
                <Text style={styles.price}>200,000 с</Text>
                <Text style={styles.priceNote}>на 100 человек</Text>
                <TouchableOpacity style={styles.bookButton}>
                    <Text style={styles.bookButtonText}>Забронировать</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    timeContainer: {
        alignItems: 'flex-end',
        marginTop: 10,
    },
    timeText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    headerContainer: {
        marginTop: 20,
        marginBottom: 30,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
    },
    pageIndicator: {
        fontSize: 14,
        color: '#999',
        marginTop: 10,
    },
    infoContainer: {
        marginBottom: 25,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: '#555',
        marginBottom: 15,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    rating: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10,
    },
    ratingLabel: {
        fontSize: 14,
        color: '#666',
        marginRight: 15,
    },
    classCount: {
        fontSize: 14,
        color: '#666',
    },
    founderContainer: {
        marginBottom: 25,
    },
    founderName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    founderPosition: {
        fontSize: 16,
        color: '#444',
        marginTop: 5,
    },
    founderBio: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    venueContainer: {
        marginBottom: 25,
    },
    venueDescription: {
        fontSize: 14,
        color: '#555',
        lineHeight: 20,
    },
    readMore: {
        color: '#0066cc',
        marginTop: 5,
    },
    sectionContainer: {
        marginBottom: 25,
    },
    hallItem: {
        backgroundColor: '#f5f5f5',
        padding: 15,
        borderRadius: 8,
        marginBottom: 10,
    },
    hallName: {
        fontSize: 16,
    },
    addressContainer: {
        marginBottom: 25,
    },
    address: {
        fontSize: 16,
        color: '#555',
    },
    menuContainer: {
        marginBottom: 25,
    },
    entertainmentContainer: {
        marginBottom: 25,
    },
    entertainmentTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 5,
    },
    entertainmentDescription: {
        fontSize: 14,
        color: '#555',
        marginTop: 3,
    },
    entertainmentHost: {
        fontSize: 14,
        fontWeight: '600',
        marginTop: 8,
    },
    entertainmentRole: {
        fontSize: 13,
        color: '#666',
    },
    supportContainer: {
        marginBottom: 25,
    },
    supportRole: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 5,
    },
    supportPerson: {
        fontSize: 14,
        color: '#555',
        marginTop: 3,
    },
    phoneNumber: {
        fontSize: 14,
        color: '#0066cc',
        marginTop: 3,
    },
    priceContainer: {
        marginBottom: 40,
        alignItems: 'center',
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    priceNote: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
    },
    bookButton: {
        backgroundColor: '#000',
        borderRadius: 10,
        padding: 15,
        width: '100%',
        marginTop: 20,
    },
    bookButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default UnoPage;