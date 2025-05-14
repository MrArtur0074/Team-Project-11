import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
    // Мок-данные для категорий
    const categories = [
        { id: 1, name: 'Свадьбы', icon: 'heart' },
        { id: 2, name: 'Выпускные', icon: 'school' },
        { id: 3, name: 'Сауны', icon: 'water' },
        { id: 4, name: 'Коворкинг', icon: 'business' },
        { id: 5, name: 'Антикино', icon: 'film' },
    ];

    // Мок-данные для популярных мест
    const popularPlaces = [
        {
            id: 1,
            name: 'Nursultan and Beginni',
            rating: 4.91,
            image: require('./assets/place1.jpg'), // Замените на свои изображения
        },
        {
            id: 2,
            name: 'UNO | Banquet Hall',
            description: 'Банкетные залы',
            events: 'Выпускные/Свадьбы',
            capacity: 'мест: 100-400',
            price: 'от 200 000 сом',
            image: require('./assets/place2.jpg'), // Замените на свои изображения
        },
    ];

    // Мок-данные для навигации
    const navItems = [
        { id: 1, name: 'Поиск', icon: 'search' },
        { id: 2, name: 'Избранное', icon: 'heart' },
        { id: 3, name: 'Куда Пойти?', icon: 'map' },
        { id: 4, name: 'Лист', icon: 'list' },
        { id: 5, name: 'Профиль', icon: 'person' },
    ];

    const renderCategory = ({ item }) => (
        <TouchableOpacity style={styles.categoryItem}>
            <Ionicons name={item.icon} size={24} color="#6200EE" />
            <Text style={styles.categoryText}>{item.name}</Text>
        </TouchableOpacity>
    );

    const renderPlace = ({ item }) => (
        <TouchableOpacity
            style={styles.placeCard}
            onPress={() => navigation.navigate('PlaceDetails', { placeId: item.id })}
        >
            <Image source={item.image} style={styles.placeImage} />
            <View style={styles.placeInfo}>
                <Text style={styles.placeName}>{item.name}</Text>
                {item.rating && (
                    <View style={styles.ratingContainer}>
                        <Ionicons name="star" size={16} color="#FFD700" />
                        <Text style={styles.ratingText}>{item.rating}</Text>
                    </View>
                )}
                {item.description && <Text style={styles.placeDescription}>{item.description}</Text>}
                {item.events && <Text style={styles.placeEvents}>{item.events}</Text>}
                {item.capacity && <Text style={styles.placeCapacity}>{item.capacity}</Text>}
                {item.price && <Text style={styles.placePrice}>{item.price}</Text>}
            </View>
        </TouchableOpacity>
    );

    const renderNavItem = ({ item }) => (
        <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate(item.name)}
        >
            <Ionicons name={item.icon} size={24} color="#6200EE" />
            <Text style={styles.navText}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {/* Заголовок */}
            <Text style={styles.header}># Начать поиск</Text>

            {/* Категории */}
            <FlatList
                horizontal
                data={categories}
                renderItem={renderCategory}
                keyExtractor={item => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriesContainer}
            />

            {/* Популярные места */}
            <FlatList
                data={popularPlaces}
                renderItem={renderPlace}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.placesContainer}
            />

            {/* Навигация */}
            <FlatList
                horizontal
                data={navItems}
                renderItem={renderNavItem}
                keyExtractor={item => item.id.toString()}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.navContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    categoriesContainer: {
        paddingBottom: 20,
    },
    categoryItem: {
        alignItems: 'center',
        marginRight: 20,
        width: 80,
    },
    categoryText: {
        marginTop: 8,
        fontSize: 14,
        textAlign: 'center',
        color: '#333',
    },
    placesContainer: {
        paddingBottom: 20,
    },
    placeCard: {
        flexDirection: 'row',
        backgroundColor: '#f8f8f8',
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 16,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    placeImage: {
        width: 120,
        height: 120,
    },
    placeInfo: {
        flex: 1,
        padding: 12,
    },
    placeName: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 4,
        color: '#333',
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    ratingText: {
        marginLeft: 4,
        fontSize: 14,
        color: '#333',
    },
    placeDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    placeEvents: {
        fontSize: 14,
        color: '#6200EE',
        marginBottom: 4,
    },
    placeCapacity: {
        fontSize: 14,
        color: '#666',
        marginBottom: 4,
    },
    placePrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    navContainer: {
        paddingTop: 12,
        paddingBottom: 24,
    },
    navItem: {
        alignItems: 'center',
        marginHorizontal: 16,
        width: 80,
    },
    navText: {
        marginTop: 8,
        fontSize: 12,
        textAlign: 'center',
        color: '#333',
    },
});

export default HomeScreen;