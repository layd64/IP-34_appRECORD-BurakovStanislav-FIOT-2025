// Завдання 1: SHOW ME
const task1Button = document.getElementById('task1Button');
const task1Input = document.getElementById('task1Input');

task1Button.addEventListener('click', () => {
    console.log(task1Input.value);
});


// Завдання 3: Приховати/Розкрити
const task3Button = document.getElementById('task3Button');
const task3Input = document.getElementById('task3Input');
let isHidden = false;
let originalValue = '';

task3Button.addEventListener('click', () => {
    if (!isHidden) {
        originalValue = task3Input.value;
        task3Input.value = '*'.repeat(originalValue.length);
        task3Button.textContent = 'Розкрити';
        isHidden = true;
    } else {
        task3Input.value = originalValue;
        task3Button.textContent = 'Приховати';
        isHidden = false;
    }
});


// Завдання 5: Клік у зеленому прямокутнику
window.addEventListener('click', (event) => {
    const place = document.getElementById('place');
    const isInsidePlace = place.contains(event.target);
    console.log(isInsidePlace);
});


// Завдання 7: Список категорій
const categories = document.querySelectorAll('#categories .item');
console.log('Number of categories:', categories.length);

categories.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const itemsCount = category.querySelectorAll('li').length;
    console.log('Category:', title);
    console.log('Elements:', itemsCount);
});


// Завдання 8: Форма логіна
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const { email, password } = event.target.elements;

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if (!emailValue || !passwordValue) {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
        email: emailValue,
        password: passwordValue
    };

    console.log(formData);
    event.target.reset();
});


// Завдання 9: Зміна кольору фону
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

changeColorBtn.addEventListener('click', () => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
    colorSpan.textContent = color;
});


// Завдання 10: Створення колекції елементів
const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
    const boxes = [];
    let size = 30;

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxes.push(box);
        size += 10;
    }

    boxesContainer.append(...boxes);
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}

createBtn.addEventListener('click', () => {
    const amount = Number(input.value);

    if (amount < 1 || amount > 100) {
        return;
    }

    destroyBoxes();
    createBoxes(amount);
    input.value = '';
});

destroyBtn.addEventListener('click', destroyBoxes);
