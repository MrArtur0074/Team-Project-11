import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ReviewsScreen = () => {
    const reviews = [
        {
            id: 1,
            name: "Руслан Айдар",
            role: "Певец сигма, миллионер",
            rating: 4,
            date: "2 дня назад",
            event: "Выпускной SCA-22B",
            comment: "Место прекрасное и Хрустальное, напоминает замок из мультфильма Золушка. Невероятно классное освещение и яркие тона. Мне очень понравился персонал, вежливые и приветливые. Особенно наш официант Давлет Азимов профессионал в своем деле. Впечатления остались отличные и я не против вернуться сюда в это прекрасное место"
        },
        {
            id: 2,
            name: "Арген Сигма",
            role: "сигма краш бала",
            rating: 4,
            date: "2 недели назад",
            event: "Свадьба Акбара",
            comment: "Очень понравилось, особенно сказочность места, оно кажется будто бы из сказки, освещение и хрустальная мебель и супер фотозона. Остались одни хороший эмоции и впечатления. Единственное что мне немного не понравилось, это официант Адисбек Аскарбеков Я бы лучше его уволил честно."
        },
        {
            id: 3,
            name: "Айвин ОО",
            role: "тик-ток блогер",
            rating: 4,
            date: "2 недели назад",
            event: "Гендер Пати",
            comment: "Классноо вообще, мне очень понравился этот банкетный зал. Мы отлично провели Гендер Пати и это оказался мальчик!!! Ждем сына от моей подруги Алисы. Все понравилось и все отлично. Рекомендую попробовать особое меню для Гендер пати, особенно бисквиты с кремом. Готовят тут прекрасно и я осталась приятно удивлена и готова вернуться в это место снова"
        },
        {
            id: 4,
            name: "Скала Джонсон",
            role: "WWE champion",
            rating: 5,
            date: "2 недели назад",
            event: "Гендер Пати",
            comment: ""
        }
    ];

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <Ionicons
                    key={i}
                    name={i <= rating ? "star" : "star-outline"}
                    size={16}
                    color="#FFD700"
                    style={styles.starIcon}
                />
            );
        }
        return stars;
    };

    return (
        <ScrollView style={styles.container}>
            {/* Заголовок */}
            <View style={styles.header}>
                <Text style={styles.mainTitle}># Отзывы Клиентов</Text>
                <Text style={styles.reviewsCount}>26 отзывов</Text>
            </View>

            {/* Список отзывов */}
            {reviews.map((review) => (
                <View key={review.id} style={styles.reviewCard}>
                    {/* Информация о пользователе */}
                    <View style={styles.userInfo}>
                        <Text style={styles.userName}>{review.name}</Text>
                        <Text style={styles.userRole}>{review.role}</Text>
                    </View>

                    {/* Рейтинг и дата */}
                    <View style={styles.ratingContainer}>
                        <View style={styles.starsContainer}>
                            {renderStars(review.rating)}
                        </View>
                        <Text style={styles.reviewDate}>{review.date}</Text>
                    </View>

                    {/* Событие */}
                    <Text style={styles.eventName}>{review.event}</Text>

                    {/* Текст отзыва */}
                    {review.comment ? (
                        <Text style={styles.reviewText}>{review.comment}</Text>
                    ) : null}

                    {/* Разделитель (кроме последнего элемента) */}
                    {review.id !== reviews.length && <View style={styles.divider} />}
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingTop: 20,
    },
    header: {
        marginBottom: 20,
    },
    mainTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    reviewsCount: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
    },
    reviewCard: {
        marginBottom: 20,
    },
    userInfo: {
        marginBottom: 10,
    },
    userName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    userRole: {
        fontSize: 14,
        color: '#666',
        marginTop: 2,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    starsContainer: {
        flexDirection: 'row',
        marginRight: 10,
    },
    starIcon: {
        marginRight: 2,
    },
    reviewDate: {
        fontSize: 14,
        color: '#888',
    },
    eventName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#333',
        marginBottom: 10,
    },
    reviewText: {
        fontSize: 14,
        color: '#555',
        lineHeight: 20,
    },
    divider: {
        height: 1,
        backgroundColor: '#eee',
        marginVertical: 20,
    },
});

export default ReviewsScreen;