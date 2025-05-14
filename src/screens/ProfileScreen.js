import React from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';

const ProfileSettingsScreen = () => {
    const [darkTheme, setDarkTheme] = React.useState(false);
    const [settings, setSettings] = React.useState([
        { id: 1, name: 'Пригласить друзей', enabled: false, hasSwitch: false },
        { id: 2, name: 'Сменить пароль', enabled: false, hasSwitch: false },
        { id: 3, name: 'Сменить язык', enabled: true, hasSwitch: true },
        { id: 4, name: 'Данные Платежа', enabled: false, hasSwitch: false },
        { id: 5, name: 'Помощь', enabled: false, hasSwitch: false },
        { id: 6, name: 'О нас', enabled: false, hasSwitch: false },
        { id: 7, name: 'Контакты', enabled: false, hasSwitch: false },
    ]);

    const toggleSwitch = (id) => {
        setSettings(settings.map(item =>
            item.id === id ? { ...item, enabled: !item.enabled } : item
        ));
    };

    return (
        <View style={[styles.container, darkTheme && styles.darkContainer]}>
            {/* Профиль пользователя */}
            <View style={styles.profileSection}>
                <Text style={[styles.name, darkTheme && styles.darkText]}># Арген Шамыров</Text>
                <Text style={[styles.email, darkTheme && styles.darkText]}>argenshamyrov@gmail.com</Text>
                <Text style={[styles.role, darkTheme && styles.darkText]}>Пользователь</Text>

                <TouchableOpacity style={styles.editButton}>
                    <Text style={styles.editButtonText}>[править]</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.divider} />

            {/* Темная тема */}
            <View style={styles.themeSection}>
                <Text style={[styles.sectionTitle, darkTheme && styles.darkText]}>Темная тема</Text>
                <Switch
                    value={darkTheme}
                    onValueChange={() => setDarkTheme(!darkTheme)}
                    thumbColor={darkTheme ? '#fff' : '#f4f3f4'}
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                />
            </View>

            <View style={styles.divider} />

            {/* Настройки */}
            <View style={styles.settingsSection}>
                <Text style={[styles.sectionTitle, darkTheme && styles.darkText]}>Настройки</Text>

                {settings.map((item) => (
                    <View key={item.id} style={styles.settingItem}>
                        <Text style={[styles.settingText, darkTheme && styles.darkText]}>{item.name}</Text>
                        {item.hasSwitch ? (
                            <Switch
                                value={item.enabled}
                                onValueChange={() => toggleSwitch(item.id)}
                                thumbColor={item.enabled ? '#fff' : '#f4f3f4'}
                                trackColor={{ false: '#767577', true: '#81b0ff' }}
                            />
                        ) : (
                            <Text style={styles.arrow}>➤️</Text>
                        )}
                    </View>
                ))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    darkContainer: {
        backgroundColor: '#121212',
    },
    profileSection: {
        marginBottom: 20,
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    email: {
        fontSize: 16,
        color: '#666',
        marginBottom: 3,
    },
    role: {
        fontSize: 14,
        color: '#888',
        marginBottom: 15,
    },
    editButton: {
        alignSelf: 'flex-start',
    },
    editButtonText: {
        color: '#0066cc',
        fontSize: 14,
    },
    divider: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginVertical: 15,
    },
    themeSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    settingsSection: {
        marginBottom: 30,
    },
    settingItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    settingText: {
        fontSize: 16,
    },
    arrow: {
        fontSize: 16,
    },
    darkText: {
        color: '#fff',
    },
});

export default ProfileSettingsScreen;