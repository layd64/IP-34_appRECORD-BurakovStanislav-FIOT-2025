// Елементи DOM
const dateTimePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');

// Змінні для зберігання даних
let userSelectedDate = null;
let timerId = null;

// Налаштування flatpickr
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];

        // Перевірка чи дата в майбутньому
        if (selectedDate <= new Date()) {
            // Показуємо повідомлення через iziToast
            iziToast.error({
                title: 'Помилка',
                message: 'Please choose a date in the future',
                position: 'topRight',
            });

            // Деактивуємо кнопку
            startButton.disabled = true;
            userSelectedDate = null;
        } else {
            // Дата валідна - активуємо кнопку
            userSelectedDate = selectedDate;
            startButton.disabled = false;
        }
    },
};

// Ініціалізація flatpickr
flatpickr(dateTimePicker, options);

// Функція для конвертації мілісекунд у дні, години, хвилини, секунди
function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

// Функція для додавання 0 перед числом
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

// Функція для оновлення інтерфейсу таймера
function updateTimerDisplay({ days, hours, minutes, seconds }) {
    daysValue.textContent = addLeadingZero(days);
    hoursValue.textContent = addLeadingZero(hours);
    minutesValue.textContent = addLeadingZero(minutes);
    secondsValue.textContent = addLeadingZero(seconds);
}

// Функція для запуску таймера
function startTimer() {
    // Деактивуємо кнопку і input
    startButton.disabled = true;
    dateTimePicker.disabled = true;

    // Запускаємо інтервал
    timerId = setInterval(() => {
        const currentTime = new Date();
        const timeRemaining = userSelectedDate - currentTime;

        // Перевіряємо чи час не вийшов
        if (timeRemaining <= 0) {
            // Зупиняємо таймер
            clearInterval(timerId);

            // Встановлюємо 00:00:00:00
            updateTimerDisplay({ days: 0, hours: 0, minutes: 0, seconds: 0 });

            // Активуємо input для нового вибору
            dateTimePicker.disabled = false;

            // Показуємо повідомлення
            iziToast.success({
                title: 'Завершено',
                message: 'Таймер завершив зворотний відлік!',
                position: 'topRight',
            });

            return;
        }

        // Оновлюємо інтерфейс
        const time = convertMs(timeRemaining);
        updateTimerDisplay(time);
    }, 1000);
}

// Обробник кліка на кнопку Start
startButton.addEventListener('click', startTimer);
