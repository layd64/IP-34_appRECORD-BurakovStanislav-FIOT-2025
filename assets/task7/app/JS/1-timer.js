const dateTimePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysValue = document.querySelector('[data-days]');
const hoursValue = document.querySelector('[data-hours]');
const minutesValue = document.querySelector('[data-minutes]');
const secondsValue = document.querySelector('[data-seconds]');

let userSelectedDate = null;
let timerId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const selectedDate = selectedDates[0];

        if (selectedDate <= new Date()) {
            iziToast.error({
                title: 'Помилка',
                message: 'Please choose a date in the future',
                position: 'topRight',
            });

            startButton.disabled = true;
            userSelectedDate = null;
        } else {
            userSelectedDate = selectedDate;
            startButton.disabled = false;
        }
    },
};

flatpickr(dateTimePicker, options);

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function updateTimerDisplay({ days, hours, minutes, seconds }) {
    daysValue.textContent = addLeadingZero(days);
    hoursValue.textContent = addLeadingZero(hours);
    minutesValue.textContent = addLeadingZero(minutes);
    secondsValue.textContent = addLeadingZero(seconds);
}

function startTimer() {
    startButton.disabled = true;
    dateTimePicker.disabled = true;

    timerId = setInterval(() => {
        const currentTime = new Date();
        const timeRemaining = userSelectedDate - currentTime;

        if (timeRemaining <= 0) {
            clearInterval(timerId);

            updateTimerDisplay({ days: 0, hours: 0, minutes: 0, seconds: 0 });

            dateTimePicker.disabled = false;

            iziToast.success({
                title: 'Завершено',
                message: 'Таймер завершив зворотний відлік!',
                position: 'topRight',
            });

            return;
        }

        const time = convertMs(timeRemaining);
        updateTimerDisplay(time);
    }, 1000);
}

startButton.addEventListener('click', startTimer);
