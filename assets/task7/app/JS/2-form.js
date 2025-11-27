const STORAGE_KEY = 'feedback-form-state';
let formData = {
    email: '',
    message: '',
};

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

function loadFormData() {
    const savedData = localStorage.getItem(STORAGE_KEY);

    if (savedData) {
        try {
            const parsedData = JSON.parse(savedData);
            formData = parsedData;

            emailInput.value = formData.email || '';
            messageTextarea.value = formData.message || '';
        } catch (error) {
            console.error('Помилка парсингу даних з localStorage:', error);
        }
    }
}

function saveFormData() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

form.addEventListener('input', (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value.trim();

    if (fieldName === 'email' || fieldName === 'message') {
        formData[fieldName] = fieldValue;
        saveFormData();
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    console.log('Дані форми:', formData);

    localStorage.removeItem(STORAGE_KEY);

    formData = {
        email: '',
        message: '',
    };

    form.reset();
});

loadFormData();
