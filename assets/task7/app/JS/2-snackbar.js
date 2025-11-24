// Отримуємо форму
const form = document.querySelector('.form');

// Обробник submit форми
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Отримуємо дані з форми
    const formData = new FormData(event.target);
    const delay = Number(formData.get('delay'));
    const state = formData.get('state');

    // Створюємо проміс
    createPromise(delay, state)
        .then((delay) => {
            // Виводимо повідомлення про успішне виконання
            console.log(`✅ Fulfilled promise in ${delay}ms`);

            iziToast.success({
                title: 'Success',
                message: `✅ Fulfilled promise in ${delay}ms`,
                position: 'topRight',
            });
        })
        .catch((delay) => {
            // Виводимо повідомлення про відхилення
            console.log(`❌ Rejected promise in ${delay}ms`);

            iziToast.error({
                title: 'Error',
                message: `❌ Rejected promise in ${delay}ms`,
                position: 'topRight',
            });
        });

    // Очищаємо форму
    event.target.reset();
});

// Функція для створення промісу
function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });
}
