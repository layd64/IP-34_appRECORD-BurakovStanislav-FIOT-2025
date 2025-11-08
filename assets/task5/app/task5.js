// Завдання 1.1: Функції для роботи з продуктами
const createProduct = (obj, callback) => {
    const product = {
        ...obj,
        id: Date.now() + Math.random()
    };
    callback(product);
};

const logProduct = (product) => {
    console.log('Продукт:', product);
};

const logTotalPrice = (product) => {
    const totalPrice = product.price * (product.quantity || 1);
    console.log('Загальна вартість товару:', totalPrice);
};

// Завдання 1.3: Робота з медикаментами
const processMedicines = () => {
    const medicines = {
        Агалгін: new Date("2022-05-01"),
        Ношпа: new Date("2026-07-02"),
        Альфахолін: new Date("2024-12-21"),
        Аспірин: new Date("2022-08-15"),
        Аспаркам: new Date("2024-04-18"),
    };

    const now = new Date();
    
    // Отримати масив назв препаратів
    const medicineNames = Object.keys(medicines);
    
    // Прибрати медикаменти, в яких строк зберігання вже пройшов
    const validMedicines = Object.entries(medicines)
        .filter(([name, date]) => date > now)
        .sort((a, b) => a[1] - b[1]); // Сортувати у хронологічному порядку
    
    const result = validMedicines.map(([name]) => name);
    
    console.log('Назви препаратів:', medicineNames);
    console.log('Валідні медикаменти (відсортовані):', result);
    
    return result;
};

// Завдання 1.5: Робота з фруктами
const processFruits = () => {
    const fruits = [
        { name: "apple", price: 200 },
        { name: "orange", price: 300 },
        { name: "grapes", price: 750 },
    ];

    const processedFruits = fruits.map((fruit, index) => ({
        id: index + 1,
        name: fruit.name,
        price: fruit.price * 0.8 // Знижка 20%
    }));

    console.log('Фрукти зі знижкою 20% та id:', processedFruits);
    
    return processedFruits;
};

// Завдання 1.7: Клас Client з приватними властивостями
class Client {
    #login;
    #email;

    constructor(login, email) {
        this.#login = login;
        this.#email = email;
    }

    get login() {
        return this.#login;
    }

    set login(value) {
        this.#login = value;
    }

    get email() {
        return this.#email;
    }

    set email(value) {
        this.#email = value;
    }
}

const testClient = () => {
    const client = new Client('user123', 'user@example.com');
    console.log('Початковий login:', client.login);
    console.log('Початковий email:', client.email);
    
    client.login = 'newuser456';
    client.email = 'newuser@example.com';
    
    console.log('Оновлений login:', client.login);
    console.log('Оновлений email:', client.email);
    
    return client;
};

// Завдання 1.9: Підрахунок тегів
const countTags = () => {
    const tweets = [
        { id: "000", likes: 5, tags: ["js", "nodejs"] },
        { id: "001", likes: 2, tags: ["html", "css"] },
        { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
        { id: "003", likes: 8, tags: ["css", "react"] },
        { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
    ];

    const tagCounts = {};
    
    tweets.forEach(tweet => {
        tweet.tags.forEach(tag => {
            tagCounts[tag] = (tagCounts[tag] || 0) + 1;
        });
    });

    console.log('Кількість тегів:', tagCounts);
    
    return tagCounts;
};

// Завдання 1.10: Перевірка правильності закриття дужок
const checkBrackets = (str) => {
    const stack = [];
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    const openBrackets = Object.keys(pairs);
    const closeBrackets = Object.values(pairs);

    for (let char of str) {
        if (openBrackets.includes(char)) {
            stack.push(char);
        } else if (closeBrackets.includes(char)) {
            if (stack.length === 0) {
                return false;
            }
            const lastOpen = stack.pop();
            if (pairs[lastOpen] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

const testCheckBrackets = () => {
    const testCases = [
        'function test() { return [1, 2, 3]; }',
        'function test() { return [1, 2, 3]; ',
        'function test() { return [1, 2, 3; }',
        '(){}[]',
        '([{}])',
        '([)]',
        '((()))',
        '({[}])'
    ];

    console.log('Тестування функції checkBrackets:');
    testCases.forEach(testCase => {
        const result = checkBrackets(testCase);
        console.log(`"${testCase.substring(0, 30)}..." => ${result}`);
    });
};

// Завдання 2.1: Об'єднати всі values з масивів в один масив
const combineValues = () => {
    const data = [
        { id: 1, values: [1, 2, 3] },
        { id: 2, values: [4, 5, 6] },
        { id: 3, values: [7, 8, 9] },
    ];

    const result = data.flatMap(item => item.values);
    
    console.log('Початкові дані:', data);
    console.log('Об\'єднаний масив:', result);
    
    return result;
};

// Завдання 2.3: Перевірити, чи всі числа парні
const checkAllEven = () => {
    const numbers = [2, 4, 6, 8, 10];
    
    const allEven = numbers.every(num => num % 2 === 0);
    
    console.log('Масив чисел:', numbers);
    console.log('Всі числа парні?', allEven);
    
    return allEven;
};

// Завдання 2.5: Відсортувати масив рядків за алфавітом
const sortStrings = () => {
    const stringArray = ['banana', 'orange', 'apple', 'pear'];
    
    const sorted = [...stringArray].sort();
    
    console.log('Початковий масив:', stringArray);
    console.log('Відсортований масив:', sorted);
    
    return sorted;
};

// Завдання 2.7: Клас Calculator з методом chaining
class Calculator {
    constructor() {
        this.value = 0;
    }

    number(value) {
        this.value = value;
        return this;
    }

    getResult() {
        return this.value;
    }

    add(value) {
        this.value += value;
        return this;
    }

    subtract(value) {
        this.value -= value;
        return this;
    }

    divide(value) {
        if (value === 0) {
            throw new Error('Неможливо ділити на нуль');
        }
        this.value /= value;
        return this;
    }

    multiply(value) {
        this.value *= value;
        return this;
    }
}

const testCalculator = () => {
    try {
        const calc = new Calculator();
        
        const result = calc
            .number(10)      // Встановлюємо початкове значення 10
            .add(5)          // Додаємо 5 (10 + 5 = 15)
            .subtract(3)     // Віднімаємо 3 (15 - 3 = 12)
            .multiply(4)     // Множимо на 4 (12 * 4 = 48)
            .divide(2)       // Ділимо на 2 (48 / 2 = 24)
            .getResult();    // Отримуємо результат: 24

        console.log('Результат обчислень:', result);
        
        return result;
    } catch (error) {
        console.error('Помилка:', error.message);
        return null;
    }
};

// Обробка кліків на кнопки завдань
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.task-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const taskNumber = this.getAttribute('data-task');
            const buttonNumber = this.getAttribute('data-number');
            
            console.log(`\n=== Завдання ${taskNumber}, Кнопка ${buttonNumber} ===`);
            
            // Завдання 1
            if (taskNumber === '1') {
                if (buttonNumber === '1') {
                    // Завдання 1.1
                    const productObj = { name: 'Телефон', price: 10000, quantity: 2 };
                    createProduct(productObj, logProduct);
                    createProduct(productObj, logTotalPrice);
                } else if (buttonNumber === '3') {
                    // Завдання 1.3
                    processMedicines();
                } else if (buttonNumber === '5') {
                    // Завдання 1.5
                    processFruits();
                } else if (buttonNumber === '7') {
                    // Завдання 1.7
                    testClient();
                } else if (buttonNumber === '9') {
                    // Завдання 1.9
                    countTags();
                } else if (buttonNumber === '10') {
                    // Завдання 1.10
                    testCheckBrackets();
                } else {
                    console.log('Завдання ще не реалізовано');
                }
            } else if (taskNumber === '2') {
                // Завдання 2
                if (buttonNumber === '1') {
                    // Завдання 2.1
                    combineValues();
                } else if (buttonNumber === '3') {
                    // Завдання 2.3
                    checkAllEven();
                } else if (buttonNumber === '5') {
                    // Завдання 2.5
                    sortStrings();
                } else if (buttonNumber === '7') {
                    // Завдання 2.7
                    testCalculator();
                } else {
                    console.log('Завдання ще не реалізовано');
                }
            } else {
                console.log('Завдання ще не реалізовано');
            }
        });
    });
});

