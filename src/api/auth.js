// src/api/auth.js

import axios from 'axios';

// ⚠️ если Android-эмулятор: http://10.0.2.2
// если физ. телефон — укажи IP компьютера
const BASE_URL = 'http://10.0.2.2:8080/api/auth';

export const register = async ({ name, email, password }) => {
    try {
        const response = await axios.post(`${BASE_URL}/register`, {
            name,
            email,
            password,
        });
        return response.data; // например: "Код отправлен на почту"
    } catch (err) {
        console.error('Ошибка регистрации:', err.response?.data || err.message);
        throw err;
    }
};

export const login = async ({ email, password }) => {
    try {
        const response = await axios.post(`${BASE_URL}/login`, {
            email,
            password,
        });
        return response.data; // например: "Успешный вход"
    } catch (err) {
        console.error('Ошибка входа:', err.response?.data || err.message);
        return false;
    }
};

export const verifyCode = async ({ email, code }) => {
    try {
        const response = await axios.post(`${BASE_URL}/verify`, {
            email,
            code,
        });
        return response.data; // "Email подтвержден"
    } catch (err) {
        console.error('Ошибка подтверждения:', err.response?.data || err.message);
        throw err;
    }
};
