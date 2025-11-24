// Ключ для localStorage
const STORAGE_KEY = 'feedback-form-state';

// Об'єкт для зберігання даних форми
let formData = {
    email: '',
    message: '',
};

// Отримуємо елементи форми
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

// Завантаження даних з localStorage при завантаженні сторінки
function loadFormData() {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
        try {
            const parsedData = JSON.parse(savedData);
            formData = parsedData;

            // Заповнюємо поля форми збереженими даними
            emailInput.value = formData.email || '';
            messageTextarea.value = formData.message || '';
        } catch (error) {
            console.error('Помилка парсингу даних з localStorage:', error);
        }
    }
}

// Зберігання даних у localStorage
function saveFormData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// Обробник події input (делегування на формі)
form.addEventListener('input', (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value.trim();

    // Оновлюємо об'єкт formData
    if (fieldName === 'email' || fieldName === 'message') {
        formData[fieldName] = fieldValue;
        saveFormData();
    }
});

// Обробник submit форми
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Перевірка чи заповнені всі поля
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    // Виводимо дані в консоль
    console.log('Дані форми:', formData);

    // Очищаємо localStorage
    localStorage.removeItem(STORAGE_KEY);

    // Очищаємо об'єкт formData
    formData = {
        email: '',
        message: '',
    };

    // Очищаємо поля форми
    form.reset();
});

// Завантажуємо дані при завантаженні сторінки
loadFormData();
