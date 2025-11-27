export function getPillsForLab(labNumber) {
  const lab1Pills = [
    { section: 'topic', text: 'Тема Мета Місце розташування сайту, звіту' },
    { section: 'domain', text: 'Опис предметного середовища. Опис бізнес-логіки' },
    { section: 'structure', text: 'Структура документа' },
    { section: 'table-html', text: 'HTML-код ТАБЛИЦІ' },
    { section: 'image-html', text: 'HTML-код ЗОБРАЖЕННЯ' },
    { section: 'form-html', text: 'HTML-код ФОРМИ' },
    { section: 'home', text: 'Головна сторінка WEB-застосунку' },
    { section: 'home-code', text: 'Код головної сторінки WEB-застосунку' },
    { section: 'use-case', text: 'Use Case Діаграма' },
    { section: 'conclusion', text: 'Висновки' }
  ];

  const lab2Pills = [
    { section: 'topic', text: 'Тема, мета ЛР №2. Місце розташування сайту, звіту' },
    { section: 'styles-connection', text: 'Способи підключення стилів' },
    { section: 'selectors', text: 'СЕЛЕКТОРИ' },
    { section: 'tag-selectors', text: 'Селектори тегу' },
    { section: 'class-selectors', text: 'Селектори класу' },
    { section: 'id-selectors', text: 'Селектори ідентифікаторів' },
    { section: 'other-selectors', text: 'Інші селектори' },
    { section: 'css-advanced', text: 'CSS: Шрифти. Текст. Таблиці. Фон. Контур. Списки. CSS Просунутий' },
    { section: 'conclusion', text: 'ВИСНОВКИ' }
  ];

  // Практична робота №3
  const lab3Pills = [
    { section: 'topic', text: 'Тема Мета Місце розташування сайту, звіту' },
    { section: 'task1-layout', text: 'ЗАВДАННЯ №1. Зовнішній вигляд макету. Код макету' },
    { section: 'task2', text: 'ЗАВДАННЯ №2' },
    { section: 'fixed-table', text: 'Фіксована таблична верстка' },
    { section: 'fluid-table', text: 'Гумова таблична верстка' },
    { section: 'fixed-block', text: 'Фіксована блокова верстка' },
    { section: 'fluid-block', text: 'Гумова блокова верстка' },
    { section: 'conclusion', text: 'Висновки' }
  ];

  // Практична робота №3.2
  const lab4Pills = [
    { section: 'topic', text: 'Тема Мета Місце розташування сайту, звіту' },
    { section: 'desktop', text: 'Десктопна версія' },
    { section: 'tablet', text: 'Планшетна версія' },
    { section: 'mobile', text: 'Мобільна версія' },
    { section: 'logical-operators', text: 'Логічні оператори' },
    { section: 'conclusion', text: 'Висновки' }
  ];

  // Практична робота №4
  const lab5Pills = [
    { section: 'topic', text: 'Тема Мета Місце розташування сайту, звіту' },
    { section: 'task1', text: 'Завдання 1' },
    { section: 'task2', text: 'Завдання 2' },
    { section: 'task3', text: 'Завдання 3' },
    { section: 'task4', text: 'Завдання 4' },
    { section: 'task5', text: 'Завдання 5' },
    { section: 'task6', text: 'Завдання 6' },
    { section: 'task7', text: 'Завдання 7' },
    { section: 'task8', text: 'Завдання 8' },
    { section: 'task9', text: 'Завдання 9' },
    { section: 'conclusion', text: 'Висновки' }
  ];

  // Практична робота №5
  const lab6Pills = [
    { section: 'topic', text: 'Тема Мета Місце розташування сайту, звіту' },
    { section: 'task1.1', text: 'Завдання 1.1' },
    { section: 'task1.3', text: 'Завдання 1.3' },
    { section: 'task1.5', text: 'Завдання 1.5' },
    { section: 'task1.7', text: 'Завдання 1.7' },
    { section: 'task1.9', text: 'Завдання 1.9' },
    { section: 'task1.10', text: 'Завдання 1.10' },
    { section: 'task2.1', text: 'Завдання 2.1' },
    { section: 'task2.3', text: 'Завдання 2.3' },
    { section: 'task2.5', text: 'Завдання 2.5' },
    { section: 'task2.7', text: 'Завдання 2.7' },
    { section: 'conclusion', text: 'Висновки' }
  ];

  // Практична робота №6 (Lab 7 in system)
  const lab7Pills = [
    { section: 'topic', text: 'Тема Мета Місце розташування сайту, звіту' },
    { section: 'modal-window', text: 'Модальне вікно у власному застосунку' },
    { section: 'task1', text: 'Завдання 1' },
    { section: 'task3', text: 'Завдання 3' },
    { section: 'task5', text: 'Завдання 5' },
    { section: 'task7', text: 'Завдання 7' },
    { section: 'task8', text: 'Завдання 8' },
    { section: 'task9', text: 'Завдання 9' },
    { section: 'task10', text: 'Завдання 10' },
    { section: 'conclusion', text: 'Висновки' }
  ];

  // Практична робота №7 (Lab 8 in system)
  const lab8Pills = [
    { section: 'topic', text: 'Тема Мета Місце розташування сайту, звіту' },
    { section: 'cart', text: 'Кошик у власному застосунку' },
    { section: 'task1-gallery', text: 'Завдання 1. Галерея зображень' },
    { section: 'task2-feedback', text: 'Завдання 2. Форма зворотного зв\'язку' },
    { section: 'task3-timer', text: 'Завдання 3. Таймер зворотного відліку' },
    { section: 'task4-promise', text: 'Завдання 4. Генератор промісів' },
    { section: 'task5-imagesearch', text: 'Завдання 5. Пошук зображень' },
    { section: 'conclusion', text: 'Висновки' }
  ];

  const blankPills = [
    { section: 'section1', text: 'Розділ 1' },
    { section: 'section2', text: 'Розділ 2' },
    { section: 'section3', text: 'Розділ 3' },
    { section: 'section4', text: 'Розділ 4' },
    { section: 'section5', text: 'Розділ 5' }
  ];

  if (labNumber === '1') return lab1Pills;
  if (labNumber === '2') return lab2Pills;
  if (labNumber === '3') return lab3Pills;
  if (labNumber === '4') return lab4Pills;
  if (labNumber === '5') return lab5Pills;
  if (labNumber === '6') return lab6Pills;
  if (labNumber === '7') return lab7Pills;
  if (labNumber === '8') return lab8Pills;
  return blankPills;
}

export function getSectionTitle(key) {
  const titles = {
    topic: 'Тема, мета, місце розташування',
    domain: 'Опис предметного середовища',
    structure: 'Структура документа',
    'table-html': 'HTML-код таблиці',
    'image-html': 'HTML-код зображення',
    'form-html': 'HTML-код форми',
    home: 'Головна сторінка WEB-застосунку',
    'home-code': 'Код головної сторінки WEB-застосунку',
    conclusion: 'Висновки',
    'use-case': 'Use Case Діаграма',
    'styles-connection': 'Способи підключення стилів',
    selectors: 'СЕЛЕКТОРИ',
    'tag-selectors': 'Селектори тегу',
    'class-selectors': 'Селектори класу',
    'id-selectors': 'Селектори ідентифікаторів',
    'other-selectors': 'Інші селектори',
    'css-advanced': 'CSS: Шрифти. Текст. Таблиці. Фон. Контур. Списки. CSS Просунутий',
    // Lab 3 titles
    'task1-layout': 'ЗАВДАННЯ №1. Зовнішній вигляд макету. Код макету',
    'task2': 'ЗАВДАННЯ №2',
    'fixed-table': 'Фіксована таблична верстка',
    'fluid-table': 'Гумова таблична верстка',
    'fixed-block': 'Фіксована блокова верстка',
    'fluid-block': 'Гумова блокова верстка',
    'task3-flexbox': 'ЗАВДАННЯ №3 FLEXBOX',
    'page-look': 'Зовнішний вигляд сторінки',
    'html-code': 'HTML-код',
    'css-code': 'CSS-код сторінки',
    // Lab 4 titles
    desktop: 'Десктопна версія',
    tablet: 'Планшетна версія',
    mobile: 'Мобільна версія',
    'logical-operators': 'Логічні оператори',
    task1: 'Завдання 1',
    task2: 'Завдання 2',
    task3: 'Завдання 3',
    task4: 'Завдання 4',
    task5: 'Завдання 5',
    task6: 'Завдання 6',
    task7: 'Завдання 7',
    task8: 'Завдання 8',
    task9: 'Завдання 9',
    'task1.1': 'Завдання 1.1',
    'task1.3': 'Завдання 1.3',
    'task1.5': 'Завдання 1.5',
    'task1.7': 'Завдання 1.7',
    'task1.9': 'Завдання 1.9',
    'task1.10': 'Завдання 1.10',
    'task2.1': 'Завдання 2.1',
    'task2.3': 'Завдання 2.3',
    'task2.5': 'Завдання 2.5',
    'task2.7': 'Завдання 2.7',
    // Lab 6 (System 7)
    'modal-window': 'Модальне вікно у власному застосунку',
    // Lab 7 (System 8)
    cart: 'Кошик у власному застосунку',
    'task1-gallery': 'Завдання 1. Галерея зображень',
    'task2-feedback': 'Завдання 2. Форма зворотного зв\'язку',
    'task3-timer': 'Завдання 3. Таймер зворотного відліку',
    'task4-promise': 'Завдання 4. Генератор промісів',
    'task5-imagesearch': 'Завдання 5. Пошук зображень'
  };
  return titles[key];
}

export function getSectionHtml(key, lab) {
  let html = 'Вміст секції з\'явиться тут.';

  // Lab 1
  if (key === 'topic' && lab === '1') {
    html = `
          <div>
            <p><strong>Тема практичної:</strong> ТЕГИ ТА АТРИБУТИ HTML-ДОКУМЕНТА. СТРУКТУРНА РОЗМІТКА. GIT.GITHUB. РОБОТА З РЕПОЗИТОРІЯМИ. ОПИС ЛОГІКИ ВЛАСНОГО WEB-ЗАСТОСУНКУ.</p>
            <p><strong>Мета практичної:</strong> Придбати практичні навички роботи з GitHub, репозиторіями, HTML-документом, таблицями, зображеннями, посиланнями, списками, формами. Створити шаблон звітного HTML-документу для відображення результатів роботи всіх практичних робіт.</p>
            <p><strong>Назва проєкту:</strong> BookStore Pro</p>
            <p><strong>Тема проєкту:</strong> Веб-застосунок для онлайн-магазину книг</p>
            <p><strong>Мета проєкту:</strong> Прискорення та спрощення процесу купівлі книг, забезпечення зручного доступу до широкого асортименту літератури, створення інтуїтивного інтерфейсу для користувачів, підтримка ефективного управління каталогом і замовленнями для адміністраторів. </p>
            <ul>
              <li><strong>Посилання на репозиторій власного WEB-застосунку:</strong> <a href="https://github.com/layd64/IP-34_appWEB-Burakov-Stanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_appWEB-Burakov-Stanislav-FIOT-2025</a></li>
              <li><strong>Посилання на живу сторінку власного WEB-застосунку:</strong> <a href="https://layd64.github.io/IP-34_appWEB-Burakov-Stanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_appWEB-Burakov-Stanislav-FIOT-2025/</a></li>
              <li><strong>Посилання на репозиторій звітного HTML-документа:</strong> <a href="https://github.com/layd64/IP-34_appRECORD-BurakovStanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_appRECORD-BurakovStanislav-FIOT-2025</a></li>
              <li><strong>Посилання на живу сторінку звітного HTML-документа:</strong> <a href="https://layd64.github.io/IP-34_appRECORD-BurakovStanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_appRECORD-BurakovStanislav-FIOT-2025/</a></li>
              <li><strong>Посилання на репозиторій з самостійними роботами:</strong> <a href="https://github.com/layd64/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025</a></li>
              <li><strong>Посилання на живу сторінку з самостійними роботами:</strong> <a href="https://layd64.github.io/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025/</a></li>
              <li><strong>Посилання на макет сторінки у Figma:</strong> <a href="https://www.figma.com/design/JzXNXmCqtPJ3gEQfRZUPc1/BookStore-Pro?node-id=0-1&t=XVJOPUvVyByF5fVK-1" target="_blank" rel="noopener">figma.com/design/JzXNXmCqtPJ3gEQfRZUPc1/BookStore-Pro?node-id=0-1&t=XVJOPUvVyByF5fVK-1/</a></li>
            </ul>
          </div>
        `;
  }

  if (key === 'domain' && lab === '1') {
    html = `
          <div>
            <h3>Опис предметної області</h3>
            <h4>Платформа книжкового онлайн магазину - BookStore Pro</h4>
            <p><strong>Тема проєкту:</strong> Веб-застосунок для онлайн-магазину книг</p>
            <p><strong>Мета проєкту:</strong> Прискорення та спрощення процесу купівлі книг, забезпечення зручного доступу до широкого асортименту літератури, створення інтуїтивного інтерфейсу для користувачів, підтримка ефективного управління каталогом і замовленнями для адміністраторів. </p>
            <p>BookStore Pro - це платформа цифрового книжкового магазину, розроблена для того, щоб змінити спосіб, яким люди відкривають, купують та взаємодіють з книгами. Вона поєднує традиційну книжкову торгівлю з сучасним цифровим комерсом, забезпечуючи інтуїтивний та приємний користувацький досвід.</p>

            <h4>Основна функціональність</h4>
            <ul>
              <li><strong>Каталог книг:</strong> детальні картки з назвами, авторами, жанрами, описами, рейтингами та цінами.</li>
              <li><strong>Облікові записи користувачів:</strong> реєстрація, автентифікація, профілі.</li>
              <li><strong>Пошук та відкриття:</strong> фільтри за жанром, автором, ціною, рейтингами, датою публікації.</li>
              <li><strong>Кошик та оформлення:</strong> безпечні покупки книг.</li>
              <li><strong>Відгуки та рейтинги:</strong> рецензії користувачів, оцінки, обговорення.</li>
              <li><strong>Цифрова бібліотека:</strong> особиста полиця з придбаними книгами та прогресом читання.</li>
              <li><strong>Портал видавців та авторів:</strong> керування творами та взаємодія з читачами.</li>
            </ul>

            <h3>Функціональні вимоги</h3>
            <h4>Управління користувачами</h4>
            <ul>
              <li>Реєстрація з підтвердженням email</li>
              <li>Вхід/вихід</li>
              <li>Профіль та уподобання</li>
              <li>Ролі: клієнт, адміністратор, видавець</li>
            </ul>
            <h4>Управління книгами</h4>
            <ul>
              <li>Каталог і пошук</li>
              <li>Категорії та теги</li>
              <li>Запаси фізичних книг</li>
              <li>Доставка цифрових книг</li>
            </ul>
            <h4>Електронна комерція</h4>
            <ul>
              <li>Кошик</li>
              <li>Рахунки та надсилання email</li>
            </ul>
            <h4>Контент та спільнота</h4>
            <ul>
              <li>Рецензії та рейтинги</li>
              <li>Списки бажань та улюблені</li>
              <li>Підписка на розсилку</li>
            </ul>

            <h3>Нефункціональні вимоги</h3>
            <h4>Продуктивність</h4>
            <ul>
              <li>Завантаження сторінки &lt; 3 с</li>
              <li>Відповідь БД &lt; 500 мс</li>
            </ul>
            <h4>Безпека</h4>
            <ul>
              <li>HTTPS-шифрування всіх передач даних</li>
            </ul>
            <h4>Зручність використання</h4>
            <ul>
              <li>Адаптивний дизайн</li>
              <li>Інтуїтивний інтерфейс</li>
              <li>Підтримка кількох мов</li>
            </ul>

            <h3>Опис бізнес-логіки</h3>
            <h4>1. Реєстрація та автентифікація</h4>
            <ol>
              <li>Користувач вводить email і пароль.</li>
              <li>Система валідує формат email і надійність пароля.</li>
              <li>Створюється обліковий запис із унікальним ID.</li>
              <li>Надсилається лист-підтвердження.</li>
              <li>Збираються уподобання користувача.</li>
            </ol>

            <h4>2. Відкриття та пошук книг</h4>
            <ol>
              <li>Ввід запиту або застосування фільтрів.</li>
              <li>Запит до бази даних із параметрами.</li>
              <li>Ранжування за релевантністю, популярністю та уподобаннями.</li>
              <li>Відображення з пагінацією та сортуванням.</li>
            </ol>

            <h4>3. Процес покупки</h4>
            <ol>
              <li>Додавання книг до кошика.</li>
              <li>Розрахунок ціни з податками та доставкою.</li>
              <li>Оформлення замовлення та оплата через захищений шлюз.</li>
              <li>Надсилання підтвердження замовлення.</li>
              <li>Миттєвий доступ до цифрових книг; фізичні — готуються до відправки.</li>
            </ol>

            <h4>4. Управління контентом</h4>
            <ol>
              <li>Подання метаданих книг видавцями/авторами.</li>
              <li>Перевірка та валідація контенту.</li>
              <li>Категоризація і тегування для пошуку.</li>
              <li>Встановлення цін та доступності.</li>
              <li>Публікація для користувачів.</li>
            </ol>

            <h3>Дорожня карта</h3>
            <h4>Фаза 1 (поточна)</h4>
            <ul>
              <li>Базовий каталог та лендінг</li>
            </ul>
            <h4>Фаза 2</h4>
            <ul>
              <li>Пошук</li>
              <li>Реєстрація/автентифікація</li>
              <li>Кошик та оформлення</li>
              <li>Рекомендації</li>
              <li>Соціальні та спільнота</li>
            </ul>
            <h4>Фаза 3</h4>
            <ul>
              <li>Аудіокниги</li>
              <li>Портал самообслуговування для видавців/авторів</li>
            </ul>

            <h3>Системні вимоги</h3>
            <h4>Мінімальні</h4>
            <ul>
              <li><strong>ОС:</strong> Windows 10, macOS 10.15, Linux, Android 8, iOS 13</li>
              <li><strong>Процесор:</strong> 2 ядра, 1 ГГц</li>
              <li><strong>ОЗП:</strong> 2 ГБ</li>
              <li><strong>Екран:</strong> від 320 px</li>
              <li><strong>Інтернет:</strong> 1 Мбіт/с</li>
            </ul>
            <h4>Рекомендовані</h4>
            <ul>
              <li><strong>ОС:</strong> Windows 11, macOS 12+, Linux LTS, Android 12+, iOS 16+</li>
              <li><strong>Процесор:</strong> 4 ядра, 2 ГГц</li>
              <li><strong>ОЗП:</strong> 4 ГБ+</li>
              <li><strong>Екран:</strong> 1366×768 або вище</li>
              <li><strong>Інтернет:</strong> 5 Мбіт/с+</li>
            </ul>
            <h4>Підтримувані браузери</h4>
            <ul>
              <li>Останні 2 версії: Chrome, Firefox, Edge, Safari</li>
              <li>Увімкнені JavaScript, cookies та LocalStorage</li>
            </ul>
          </div>
        `;
  }

  if (key === 'structure' && lab === '1') {
    html = `
          <div>
            <h4>Коренева директорія</h4>
            <ul>
              <li><strong>index.html</strong> - головна сторінка веб-застосунку</li>
              <li><strong>about.html</strong> - сторінка "Про нас" з додатковою інформацією</li>
            </ul>
            
            <h4>Папка assets</h4>
            <p>Містить всі статичні ресурси проєкту:</p>
            <ul>
              <li><strong>book1.webp</strong> - зображення обкладинки першої книги (формат WebP)</li>
              <li><strong>book2.png</strong> - зображення обкладинки другої книги</li>
              <li><strong>book3.png</strong> - зображення обкладинки третьої книги</li>
              <li><strong>stackOfBooks.png</strong> - головне зображення стопки книг для герої-секції</li>
            </ul>
            
            <p>Така структура забезпечує зручну організацію файлів, де HTML-документи знаходяться в корені, а всі зображення зібрані в окремій папці assets для кращої організації та швидкості завантаження.</p>
          </div>
        `;
  }

  if (key === 'table-html' && lab === '1') {
    html = `
          <div>
            <h4>HTML-код таблиці</h4>
            
            <h4>1) Бестселери цього місяця</h4>
            <pre><code>&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Рейтинг&lt;/th&gt;
      &lt;th&gt;Назва&lt;/th&gt;
      &lt;th&gt;Автор&lt;/th&gt;
      &lt;th&gt;Оцінка&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;1&lt;/td&gt;
      &lt;td&gt;Код майбутнього&lt;/td&gt;
      &lt;td&gt;Сара Джонсон&lt;/td&gt;
      &lt;td&gt;⭐⭐⭐⭐⭐&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;2&lt;/td&gt;
      &lt;td&gt;Таємниця океану&lt;/td&gt;
      &lt;td&gt;Майкл Чен&lt;/td&gt;
      &lt;td&gt;⭐⭐⭐⭐⭐&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;3&lt;/td&gt;
      &lt;td&gt;Цифрова революція&lt;/td&gt;
      &lt;td&gt;Емма Девіс&lt;/td&gt;
      &lt;td&gt;⭐⭐⭐⭐⭐&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;4&lt;/td&gt;
      &lt;td&gt;Код майбутнього&lt;/td&gt;
      &lt;td&gt;Сара Джонсон&lt;/td&gt;
      &lt;td&gt;⭐⭐⭐⭐&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;5&lt;/td&gt;
      &lt;td&gt;Космічна одіссея&lt;/td&gt;
      &lt;td&gt;Роберт Вілсон&lt;/td&gt;
      &lt;td&gt;⭐⭐⭐⭐&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
            <div class="screenshot">
              <img src="assets/task1/tableImages/table1.jpg" alt="Скріншот таблиці Бестселери цього місяця">
            </div>

            <h4>2) Країни-лідери за читанням</h4>
            <pre><code>&lt;table&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;1&lt;/td&gt;
      &lt;td&gt;Сполучені Штати&lt;/td&gt;
      &lt;td&gt;45% від загальної кількості читачів&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;2&lt;/td&gt;
      &lt;td&gt;Великобританія&lt;/td&gt;
      &lt;td&gt;18% від загальної кількості читачів&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;3&lt;/td&gt;
      &lt;td&gt;Канада&lt;/td&gt;
      &lt;td&gt;12% від загальної кількості читачів&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;4&lt;/td&gt;
      &lt;td&gt;Австралія&lt;/td&gt;
      &lt;td&gt;8% від загальної кількості читачів&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;5&lt;/td&gt;
      &lt;td&gt;Німеччина&lt;/td&gt;
      &lt;td&gt;7% від загальної кількості читачів&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
            <div class="screenshot">
              <img src="assets/task1/tableImages/table2.jpg" alt="Скріншот таблиці Країни-лідери за читанням">
            </div>
          </div>
        `;
  }

  if (key === 'image-html' && lab === '1') {
    html = `
          <div>
            <h4>HTML-код зображення</h4>
            <pre><code>&lt;img src="assets/stackOfBooks.png" alt="Modern Library Interior" class="hero-image"&gt;
&lt;img src="assets/book1.webp" alt="Book Cover 1" class="book-image"&gt;
&lt;img src="assets/book2.png" alt="Book Cover 2" class="book-image"&gt;
&lt;img src="assets/book3.png" alt="Book Cover 3" class="book-image"&gt;</code></pre>

            <div class="screenshots-grid">
              <img src="assets/task1/imageImages/image1.jpg" alt="Скріншот зображення 1">
              <img src="assets/task1/imageImages/image2.jpg" alt="Скріншот зображення 2">
              <img src="assets/task1/imageImages/image3.jpg" alt="Скріншот зображення 3">
              <img src="assets/task1/imageImages/image4.jpg" alt="Скріншот зображення 4">
            </div>
          </div>
        `;
  }

  if (key === 'form-html' && lab === '1') {
    html = `
          <div>
            <h4>HTML-код форми</h4>
            <pre><code>&lt;form class="newsletter-form" action="#" method="POST"&gt;
  &lt;div class="form-group"&gt;
    &lt;label for="name"&gt;Повне ім'я:&lt;/label&gt;
    &lt;input type="text" id="name" name="name" required&gt;
  &lt;/div&gt;
  &lt;div class="form-group"&gt;
    &lt;label for="email"&gt;Адреса електронної пошти:&lt;/label&gt;
    &lt;input type="email" id="email" name="email" required&gt;
  &lt;/div&gt;
  &lt;div class="form-group"&gt;
    &lt;label for="interests"&gt;Інтереси читання:&lt;/label&gt;
    &lt;select id="interests" name="interests"&gt;
      &lt;option value="fiction"&gt;Художня література&lt;/option&gt;
      &lt;option value="non-fiction"&gt;Нехудожня література&lt;/option&gt;
      &lt;option value="sci-fi"&gt;Наукова фантастика&lt;/option&gt;
      &lt;option value="mystery"&gt;Детективи&lt;/option&gt;
      &lt;option value="romance"&gt;Романтика&lt;/option&gt;
      &lt;option value="biography"&gt;Біографії&lt;/option&gt;
      &lt;option value="all"&gt;Всі жанри&lt;/option&gt;
    &lt;/select&gt;
  &lt;/div&gt;
  &lt;div class="form-group"&gt;
    &lt;label&gt;
      &lt;input type="checkbox" name="notifications" value="yes"&gt;
      Я хочу отримувати сповіщення про нові видання
    &lt;/label&gt;
  &lt;/div&gt;
  &lt;div class="form-group"&gt;
    &lt;label&gt;
      &lt;input type="checkbox" name="promotions" value="yes"&gt;
      Я хочу отримувати рекламні пропозиції
    &lt;/label&gt;
  &lt;/div&gt;
  &lt;button type="submit"&gt;Підписатися зараз!&lt;/button&gt;
&lt;/form&gt;</code></pre>

            <div class="screenshot">
              <img src="assets/task1/formImages/form1.jpg" alt="Скріншот форми підписки">
            </div>
          </div>
        `;
  }

  if (key === 'home' && lab === '1') {
    html = `
          <div>
            <h4>Головна сторінка WEB-застосунку</h4>
            <div class="screenshots-grid">
              <figure>
                <img src="assets/task1/figmaLayout/bookstorepro.png" alt="Макет Figma головної сторінки">
                <figcaption>Макет головної сторінки (Figma)</figcaption>
              </figure>
              <figure>
                <img src="assets/task1/resultLayout/ResultPage.jpg" alt="Результатна сторінка застосунку">
                <figcaption>Результатна сторінка</figcaption>
              </figure>
            </div>
          </div>
        `;
  }

  if (key === 'home-code' && lab === '1') {
    html = `
          <div>
            <h4>Код головної сторінки WEB-застосунку</h4>
            <pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="uk"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
    &lt;title&gt;BookStore Pro - Ваша цифрова бібліотека&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
        &lt;nav&gt;
            &lt;div class="logo"&gt;
                &lt;h1&gt;BookStore Pro&lt;/h1&gt;
            &lt;/div&gt;
            &lt;ul class="nav-links"&gt;
                &lt;li&gt;&lt;a href="#home"&gt;Головна&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#books"&gt;Книги&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#categories"&gt;Категорії&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="about.html"&gt;Опис&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/nav&gt;
    &lt;/header&gt;

    &lt;main&gt;
        &lt;section id="home" class="hero"&gt;
            &lt;div class="hero-content"&gt;
                &lt;div class="hero-text"&gt;
                    &lt;h1&gt;Welcome!&lt;/h1&gt;
                    &lt;h3&gt;Ласкаво просимо до BookStore Pro!&lt;/h3&gt;
                    &lt;p&gt;Ваш найкращий цифровий досвід читання.&lt;/p&gt;
                &lt;/div&gt;
                &lt;button type="catalogue"&gt;Перейти до каталогу&lt;/button&gt;
                &lt;div class="hero-image-container"&gt;
                    &lt;img src="assets/stackOfBooks.png" alt="Modern Library Interior" class="hero-image"&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/section&gt;

        &lt;section id="books" class="featured-books"&gt;
            &lt;h2&gt;Рекомендовані книги&lt;/h2&gt;
            &lt;div class="books-grid"&gt;
                &lt;div class="book-card"&gt;
                    &lt;img src="assets/book1.webp" alt="Book Cover 1" class="book-image"&gt;
                    &lt;h3&gt;Кобзар&lt;/h3&gt;
                    &lt;div class="book-details"&gt;
                        &lt;p class="book-author"&gt;Т.Шевченко&lt;/p&gt;
                        &lt;p class="book-price"&gt;300 грн&lt;/p&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="book-card"&gt;
                    &lt;img src="assets/book2.png" alt="Book Cover 2" class="book-image"&gt;
                    &lt;h3&gt;Кайдашева сім'я&lt;/h3&gt;
                    &lt;div class="book-details"&gt;
                        &lt;p class="book-author"&gt;І. Нечуй-Левицький&lt;/p&gt;
                        &lt;p class="book-price"&gt;450 грн&lt;/p&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="book-card"&gt;
                    &lt;img src="assets/book3.png" alt="Book Cover 3" class="book-image"&gt;
                    &lt;h3&gt;Енеїда&lt;/h3&gt;
                    &lt;div class="book-details"&gt;
                        &lt;p class="book-author"&gt;І. Котляревський&lt;/p&gt;
                        &lt;p class="book-price"&gt;249 грн&lt;/p&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/section&gt;

        &lt;section id="categories" class="categories"&gt;
            &lt;h2&gt;Категорії книг&lt;/h2&gt;
            &lt;div class="categories-content"&gt;
                &lt;div class="categories-list"&gt;
                    &lt;h3&gt;Популярні жанри&lt;/h3&gt;
                    &lt;ul&gt;
                        &lt;li&gt;Художня література&lt;/li&gt;
                        &lt;li&gt;Наукова фантастика&lt;/li&gt;
                        &lt;li&gt;Детективи та трилери&lt;/li&gt;
                        &lt;li&gt;Романтика&lt;/li&gt;
                        &lt;li&gt;Біографії&lt;/li&gt;
                        &lt;li&gt;Саморозвиток&lt;/li&gt;
                    &lt;/ul&gt;
                &lt;/div&gt;
                
                &lt;div class="bestsellers-table"&gt;
                    &lt;h3&gt;Бестселери цього місяця&lt;/h3&gt;
                    &lt;table&gt;
                        &lt;thead&gt;
                            &lt;tr&gt;
                                &lt;th&gt;Рейтинг&lt;/th&gt;
                                &lt;th&gt;Назва&lt;/th&gt;
                                &lt;th&gt;Автор&lt;/th&gt;
                                &lt;th&gt;Оцінка&lt;/th&gt;
                            &lt;/tr&gt;
                        &lt;/thead&gt;
                        &lt;tbody&gt;
                            &lt;tr&gt;
                                &lt;td&gt;1&lt;/td&gt;
                                &lt;td&gt;Код майбутнього&lt;/td&gt;
                                &lt;td&gt;Сара Джонсон&lt;/td&gt;
                                &lt;td&gt;⭐⭐⭐⭐⭐&lt;/td&gt;
                            &lt;/tr&gt;
                            &lt;tr&gt;
                                &lt;td&gt;2&lt;/td&gt;
                                &lt;td&gt;Таємниця океану&lt;/td&gt;
                                &lt;td&gt;Майкл Чен&lt;/td&gt;
                                &lt;td&gt;⭐⭐⭐⭐⭐&lt;/td&gt;
                            &lt;/tr&gt;
                            &lt;tr&gt;
                                &lt;td&gt;3&lt;/td&gt;
                                &lt;td&gt;Цифрова революція&lt;/td&gt;
                                &lt;td&gt;Емма Девіс&lt;/td&gt;
                                &lt;td&gt;⭐⭐⭐⭐⭐&lt;/td&gt;
                            &lt;/tr&gt;
                            &lt;tr&gt;
                                &lt;td&gt;4&lt;/td&gt;
                                &lt;td&gt;Код майбутнього&lt;/td&gt;
                                &lt;td&gt;Сара Джонсон&lt;/td&gt;
                                &lt;td&gt;⭐⭐⭐⭐&lt;/td&gt;
                            &lt;/tr&gt;
                            &lt;tr&gt;
                                &lt;td&gt;5&lt;/td&gt;
                                &lt;td&gt;Космічна одіссея&lt;/td&gt;
                                &lt;td&gt;Роберт Вілсон&lt;/td&gt;
                                &lt;td&gt;⭐⭐⭐⭐&lt;/td&gt;
                            &lt;/tr&gt;
                        &lt;/tbody&gt;
                    &lt;/table&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/section&gt;

        &lt;section class="reading-stats"&gt;
            &lt;h2&gt;Статистика читання&lt;/h2&gt;
            &lt;div class="stats-content"&gt;
                &lt;h3&gt;Країни-лідери за читанням&lt;/h3&gt;
                
                &lt;table&gt;
                    &lt;tbody&gt;
                        &lt;tr&gt;
                            &lt;td&gt;1&lt;/td&gt;
                            &lt;td&gt;Сполучені Штати&lt;/td&gt;
                            &lt;td&gt;45% від загальної кількості читачів&lt;/td&gt;
                        &lt;/tr&gt;
                        &lt;tr&gt;
                            &lt;td&gt;2&lt;/td&gt;
                            &lt;td&gt;Великобританія&lt;/td&gt;
                            &lt;td&gt;18% від загальної кількості читачів&lt;/td&gt;
                        &lt;/tr&gt;
                        &lt;tr&gt;
                            &lt;td&gt;3&lt;/td&gt;
                            &lt;td&gt;Канада&lt;/td&gt;
                            &lt;td&gt;12% від загальної кількості читачів&lt;/td&gt;
                        &lt;/tr&gt;
                        &lt;tr&gt;
                            &lt;td&gt;4&lt;/td&gt;
                            &lt;td&gt;Австралія&lt;/td&gt;
                            &lt;td&gt;8% від загальної кількості читачів&lt;/td&gt;
                        &lt;/tr&gt;
                        &lt;tr&gt;
                            &lt;td&gt;5&lt;/td&gt;
                            &lt;td&gt;Німеччина&lt;/td&gt;
                            &lt;td&gt;7% від загальної кількості читачів&lt;/td&gt;
                        &lt;/tr&gt;
                    &lt;/tbody&gt;
                &lt;/table&gt;
            &lt;/div&gt;
        &lt;/section&gt;

        &lt;section class="newsletter"&gt;
            &lt;h2&gt;Залишайтесь в курсі&lt;/h2&gt;
            &lt;h3&gt;Підпишіться на нашу розсилку&lt;/h3&gt;
            &lt;form class="newsletter-form" action="#" method="POST"&gt;
                &lt;div class="form-group"&gt;
                    &lt;label for="name"&gt;Повне ім'я:&lt;/label&gt;
                    &lt;input type="text" id="name" name="name" required&gt;
                &lt;/div&gt;
                
                &lt;div class="form-group"&gt;
                    &lt;label for="email"&gt;Адреса електронної пошти:&lt;/label&gt;
                    &lt;input type="email" id="email" name="email" required&gt;
                &lt;/div&gt;
                
                &lt;div class="form-group"&gt;
                    &lt;label for="interests"&gt;Інтереси читання:&lt;/label&gt;
                    &lt;select id="interests" name="interests"&gt;
                        &lt;option value="fiction"&gt;Художня література&lt;/option&gt;
                        &lt;option value="non-fiction"&gt;Нехудожня література&lt;/option&gt;
                        &lt;option value="sci-fi"&gt;Наукова фантастика&lt;/option&gt;
                        &lt;option value="mystery"&gt;Детективи&lt;/option&gt;
                        &lt;option value="romance"&gt;Романтика&lt;/option&gt;
                        &lt;option value="biography"&gt;Біографії&lt;/option&gt;
                        &lt;option value="all"&gt;Всі жанри&lt;/option&gt;
                    &lt;/select&gt;
                &lt;/div&gt;
                
                &lt;div class="form-group"&gt;
                    &lt;label&gt;
                        &lt;input type="checkbox" name="notifications" value="yes"&gt;
                        Я хочу отримувати сповіщення про нові видання
                    &lt;/label&gt;
                &lt;/div&gt;
                
                &lt;div class="form-group"&gt;
                    &lt;label&gt;
                        &lt;input type="checkbox" name="promotions" value="yes"&gt;
                        Я хочу отримувати рекламні пропозиції
                    &lt;/label&gt;
                &lt;/div&gt;
                
                &lt;button type="submit"&gt;Підписатися зараз!&lt;/button&gt;
            &lt;/form&gt;
        &lt;/section&gt;

    &lt;/main&gt;

    &lt;footer&gt;
        &lt;div class="footer-content"&gt;
            &lt;div class="footer-section"&gt;
                &lt;h3&gt;BookStore Pro&lt;/h3&gt;
                &lt;p&gt;Ваша цифрова бібліотека сучасного світу&lt;/p&gt;
            &lt;/div&gt;
            &lt;div class="footer-section"&gt;
                &lt;h4&gt;Швидкі посилання&lt;/h4&gt;
                &lt;ul&gt;
                    &lt;li&gt;&lt;a href="#home"&gt;Головна&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href="#books"&gt;Книги&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href="#categories"&gt;Категорії&lt;/a&gt;&lt;/li&gt;
                    &lt;li&gt;&lt;a href="about.html"&gt;Про проєкт&lt;/a&gt;&lt;/li&gt;
                &lt;/ul&gt;
            &lt;/div&gt;
            &lt;div class="footer-section"&gt;
                &lt;h4&gt;Контактна інформація&lt;/h4&gt;
                &lt;p&gt;Бураков Станіслав ІП-34&lt;/p&gt;
                &lt;p&gt;Телефон: +1 (555) 111-1111&lt;/p&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
          </div>
        `;
  }

  if (key === 'conclusion' && lab === '1') {
    html = `
          <div>
            <h4>Висновки</h4>
            <p>У ході практичної роботи створено головну сторінку веб-застосунку BookStore Pro з семантично правильною структурою HTML. Реалізовано навігацію, герої-секцію, блок рекомендованих книг, секцію категорій із таблицею бестселерів, секцію статистики читання з табличними даними, форму підписки на розсилку та інформативний футер. Досягнуто мети роботи: відпрацьовано верстку контенту різних типів (зображення, списки, таблиці, форма), організовано логічну структуру сторінки та підготовлено основу для подальшого стилювання й інтерактивності.</p>
          </div>
        `;
  }

  if (key === 'use-case' && lab === '1') {
    html = `
          <div>
            <p>Нижче представлена Use Case діаграма, яка показує основні взаємодії користувачів з системою.</p>
            <div class="screenshot">
              <img src="assets/task1/flowchart/UML_FrontEnd.drawio.png" alt="Use Case діаграма для BookStore Pro" style="max-width: 100%; height: auto;">
            </div>
          </div>
        `;
  }

  // Lab 2 content
  if (key === 'topic' && lab === '2') {
    html = `
          <div>
            <p><strong>Тема практичної:</strong> КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. СТИЛЬОВЕ ОФОРМЛЕННЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ В HTML-ДОКУМЕНТАХ.</p>
            <p><strong>Мета практичної:</strong> Придбати практичні навички роботи  з селекторами, ідентифікаторами, списками,  різноманітними властивостями кольору і фону,  зовнішними та внутрішними  відступами,  плаваючими елементами, оформленням текстових елементів.</p>
            <p><strong>Назва проєкту:</strong> BookStore Pro</p>
            <p><strong>Тема проєкту:</strong> Веб-застосунок для онлайн-магазину книг</p>
            <p><strong>Мета проєкту:</strong> Прискорення та спрощення процесу купівлі книг, забезпечення зручного доступу до широкого асортименту літератури, створення інтуїтивного інтерфейсу для користувачів, підтримка ефективного управління каталогом і замовленнями для адміністраторів. </p>
            <ul>
              <li><strong>Посилання на репозиторій власного WEB-застосунку:</strong> <a href="https://github.com/layd64/IP-34_appWEB-Burakov-Stanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_appWEB-Burakov-Stanislav-FIOT-2025</a></li>
              <li><strong>Посилання на живу сторінку власного WEB-застосунку:</strong> <a href="https://layd64.github.io/IP-34_appWEB-Burakov-Stanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_appWEB-Burakov-Stanislav-FIOT-2025/</a></li>
              <li><strong>Посилання на репозиторій звітного HTML-документа:</strong> <a href="https://github.com/layd64/IP-34_appRECORD-BurakovStanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_appRECORD-BurakovStanislav-FIOT-2025</a></li>
              <li><strong>Посилання на живу сторінку звітного HTML-документа:</strong> <a href="https://layd64.github.io/IP-34_appRECORD-BurakovStanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_appRECORD-BurakovStanislav-FIOT-2025/</a></li>
              <li><strong>Посилання на репозиторій з самостійними роботами:</strong> <a href="https://github.com/layd64/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025</a></li>
              <li><strong>Посилання на живу сторінку з самостійними роботами:</strong> <a href="https://layd64.github.io/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025/</a></li>
              <li><strong>Посилання на макет сторінки у Figma:</strong> <a href="https://www.figma.com/design/JzXNXmCqtPJ3gEQfRZUPc1/BookStore-Pro?node-id=0-1&t=XVJOPUvVyByF5fVK-1" target="_blank" rel="noopener">figma.com/design/JzXNXmCqtPJ3gEQfRZUPc1/BookStore-Pro?node-id=0-1&t=XVJOPUvVyByF5fVK-1/</a></li>
            </ul>
          </div>
        `;
  }

  if (key === 'styles-connection' && lab === '2') {
    html = `
          <div>
            <h4>Способи підключення стилів</h4>
            
            <h5>1. Внутрішні стилі (Inline styles)</h5>
            <pre><code>&lt;p style="color: blue; font-size: 16px;"&gt;Текст з внутрішніми стилями&lt;/p&gt;</code></pre>
            
            <h5>2. Вбудовані стилі (Internal styles)</h5>
            <pre><code>&lt;head&gt;
  &lt;style&gt;
    p {
      color: blue;
      font-size: 16px;
    }
  &lt;/style&gt;
&lt;/head&gt;</code></pre>
            
            <h5>3. Зовнішні стилі (External styles)</h5>
            <pre><code>&lt;head&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;</code></pre>
            
            <h5>4. Імпорт стилів</h5>
            <pre><code>&lt;style&gt;
  @import url('styles.css');
&lt;/style&gt;</code></pre>
            
            <p><strong>У моєму проєкті використовується зовнішній файл стилів:</strong></p>
            <pre><code>&lt;link rel="stylesheet" href="styles.css"&gt;</code></pre>
          </div>
        `;
  }

  if (key === 'selectors' && lab === '2') {
    html = `
          <div>
            <h4>СЕЛЕКТОРИ</h4>
            <p>Селектори CSS - це патерни, які використовуються для вибору елементів HTML, до яких будуть застосовані стилі.</p>
            
            <h5>Основні типи селекторів:</h5>
            <ul>
              <li><strong>Селектори тегу</strong> - вибирають елементи за назвою тегу</li>
              <li><strong>Селектори класу</strong> - вибирають елементи за значенням атрибута class</li>
              <li><strong>Селектори ідентифікаторів</strong> - вибирають елементи за значенням атрибута id</li>
              <li><strong>Універсальний селектор</strong> - вибирає всі елементи</li>
              <li><strong>Селектори атрибутів</strong> - вибирають елементи за атрибутами</li>
              <li><strong>Псевдокласи та псевдоелементи</strong> - для стилізації станів та частин елементів</li>
            </ul>
            
            <h5>Приклад використання в моєму проєкті:</h5>
            <pre><code>/* Селектор тегу */
body {
  margin: 0;
  font-family: "Times New Roman", Times, serif;
}

/* Селектор класу */
.header {
  display: flex;
  flex-direction: column;
}

/* Селектор ідентифікатора */
#output {
  flex: 1;
  border: 2px dashed #bbb;
}</code></pre>
          </div>
        `;
  }

  if (key === 'tag-selectors' && lab === '2') {
    html = `
          <div>
            <h4>Селектори тегу</h4>
            <p>Селектори тегу використовуються для стилізації всіх елементів певного типу на сторінці.</p>
            
            <h5>Синтаксис:</h5>
            <pre><code>назва_тегу {
  властивість: значення;
}</code></pre>
            
            <h5>Приклади з мого проєкту:</h5>
            <pre><code>/* Стилізація всіх заголовків h1 */
h1 {
  font-size: 36px;
  font-weight: bold;
  color: #000000;
  font-family: 'Inria Serif', serif;
}

/* Стилізація всіх заголовків h2 */
h2 {
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 50px;
}

/* Стилізація всіх заголовків h3 */
h3 {
  font-size: 24px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 20px;
}

/* Стилізація всіх параграфів */
p {
  font-size: 18px;
  color: #000000;
  margin-bottom: 10px;
}

/* Стилізація всіх посилань */
a {
  text-decoration: none;
  color: #000000;
  font-weight: normal;
  font-size: 18px;
  transition: color 0.3s ease;
}

/* Стилізація всіх кнопок */
button {
  background-color: #F7A823;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}</code></pre>
            
            <h5>HTML використання:</h5>
            <pre><code>&lt;h1&gt;BookStore Pro&lt;/h1&gt;
&lt;h2&gt;Рекомендовані книги&lt;/h2&gt;
&lt;p&gt;Ваш найкращий цифровий досвід читання.&lt;/p&gt;
&lt;a href="#books"&gt;Книги&lt;/a&gt;
&lt;button&gt;В КОРЗИНУ&lt;/button&gt;</code></pre>
            
            <h5>Зображення результату:</h5>
            <img src="assets/task2/selectorTag.png" alt="Результат стилізації тегів" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
          </div>
        `;
  }

  if (key === 'class-selectors' && lab === '2') {
    html = `
          <div>
            <h4>Селектори класу</h4>
            <p>Селектори класу використовуються для стилізації елементів з певним класом. Класи можуть використовуватися кілька разів на сторінці.</p>
            
            <h5>Синтаксис:</h5>
            <pre><code>.назва_класу {
  властивість: значення;
}</code></pre>
            
            <h5>Приклади з мого проєкту:</h5>
            <pre><code>/* Стилізація елементів з класом "hero" */
.hero {
  padding: 50px 0;
  background-color: #FFF6E8;
}

/* Стилізація елементів з класом "book-card" */
.book-card {
  background-color: white;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.book-card:hover {
  transform: translateY(-5px);
}

/* Стилізація елементів з класом "nav-links" */
.nav-links {
  display: flex;
  list-style: none;
  gap: 60px;
}

.nav-links a {
  text-decoration: none;
  color: #000000;
  font-weight: normal;
  font-size: 18px;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #F7A823;
}

/* Стилізація елементів з класом "books-grid" */
.books-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: clamp(24px, 5vw, 100px);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Стилізація елементів з класом "footer-section" */
.footer-section h3,
.footer-section h4 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 15px;
}</code></pre>
            
            <h5>HTML використання:</h5>
            <pre><code>&lt;section class="hero"&gt;
  &lt;div class="hero-content"&gt;
    &lt;h2&gt;Welcome!&lt;/h2&gt;
  &lt;/div&gt;
&lt;/section&gt;

&lt;div class="book-card"&gt;
  &lt;img src="assets/kobzar.png" alt="Book Cover"&gt;
  &lt;h3&gt;Кобзар&lt;/h3&gt;
  &lt;button&gt;В КОРЗИНУ&lt;/button&gt;
&lt;/div&gt;

&lt;ul class="nav-links"&gt;
  &lt;li&gt;&lt;a href="#home"&gt;Головна&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#books"&gt;Книги&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</code></pre>
            
            <h5>Зображення результату:</h5>
            <img src="assets/task2/selectorClass.png" alt="Результат стилізації класів" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
          </div>
        `;
  }

  if (key === 'id-selectors' && lab === '2') {
    html = `
          <div>
            <h4>Селектори ідентифікаторів</h4>
            <p>Селектори ідентифікаторів використовуються для стилізації унікальних елементів на сторінці. ID повинен бути унікальним в межах документа.</p>
            
            <h5>Синтаксис:</h5>
            <pre><code>#назва_id {
  властивість: значення;
}</code></pre>
            
            <h5>Приклади з мого проєкту:</h5>
            <pre><code>/* Стилізація поля вводу з id "name" */
#name {
  width: 100%;
  padding: 12px;
  border: 1px solid #ffffff;
  font-size: 16px;
  background-color: white;
  color: #000000;
}

/* Стилізація поля вводу з id "email" */
#email {
  width: 100%;
  padding: 12px;
  border: 1px solid #ffffff;
  font-size: 16px;
  background-color: white;
  color: #000000;
}

/* Стилізація селекту з id "interests" */
#interests {
  width: 100%;
  padding: 12px;
  border: 1px solid #ffffff;
  font-size: 16px;
  background-color: white;
  color: #000000;
}</code></pre>
            
            <h5>HTML використання:</h5>
            <pre><code>&lt;input type="text" id="name" name="name" required&gt;
&lt;input type="email" id="email" name="email" required&gt;
&lt;select id="interests" name="interests"&gt;
  &lt;option value="fiction"&gt;Художня література&lt;/option&gt;
&lt;/select&gt;</code></pre>
            
            <h5>Зображення результату:</h5>
            <img src="assets/task2/selectorID.png" alt="Результат стилізації ідентифікаторів" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
          </div>
        `;
  }

  if (key === 'other-selectors' && lab === '2') {
    html = `
          <div>
            <h4>Інші селектори</h4>

            
            <h5>Приклади з мого проєкту:</h5>
            <pre><code>/* 1. Універсальний селектор (*) */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 2. Селектори атрибутів */
.form-group input[type="checkbox"] {
  width: auto;
  margin-right: 10px;
}

.form-group label:has(input[type="checkbox"]) {
  display: flex;
  align-items: center;
  color: white;
  font-size: 14px;
}

/* 3. Псевдокласи */
.nav-links a:hover {
  color: #F7A823;
}

.hero-content button:hover {
  background-color: #e6951f;
}

.book-card:hover {
  transform: translateY(-5px);
}

.newsletter button:hover {
  background-color: #1d1304;
}

.footer-section ul li a:hover {
  opacity: 100%;
}

/* 4. Псевдоелементи */
.button-container::before {
  content: '';
  position: absolute;
  top: 8px;
  left: 8px;
  right: -8px;
  bottom: -8px;
  background-color: #CC7A29;
  z-index: 1;
}

.newsletter-container::before {
  content: '';
  position: absolute;
  top: 14px;
  left: 14px;
  right: -14px;
  bottom: -14px;
  background-color: #CC7A29;
  z-index: 1;
}

.categories-list li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #000000;
  font-weight: bold;
}

.form-group input::placeholder {
  color: #F7A823;
}

/* 5. Селектори нащадків */
.bestsellers-table tr:last-child td {
  border-bottom: none;
}

.reading-stats tr:last-child td {
  border-bottom: none;
}</code></pre>
            
            <h5>HTML використання:</h5>
            <pre><code>&lt;!-- Універсальний селектор застосовується до всіх елементів --&gt;
&lt;div class="button-container"&gt;
  &lt;button&gt;Кнопка з псевдоелементом&lt;/button&gt;
&lt;/div&gt;

&lt;!-- Селектори атрибутів --&gt;
&lt;input type="checkbox" name="notifications" value="yes"&gt;
&lt;label&gt;Я хочу отримувати сповіщення&lt;/label&gt;

&lt;!-- Псевдокласи --&gt;
&lt;ul class="nav-links"&gt;
  &lt;li&gt;&lt;a href="#home"&gt;Головна&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;

&lt;!-- Псевдоелементи --&gt;
&lt;ul class="categories-list"&gt;
  &lt;li&gt;&lt;a href="#"&gt;Художня література&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</code></pre>
            
            <h5>Зображення результату:</h5>
            <img src="assets/task2/selectorOther.png" alt="Результат стилізації інших селекторів" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
          </div>
        `;
  }

  if (key === 'css-advanced' && lab === '2') {
    html = `
          <div>
            <h4>CSS: Шрифти. Текст. Таблиці. Фон. Контур. Списки. CSS Просунутий</h4>
            <h5>Приклади з мого проєкту:</h5>
            <pre><code>/* 1. Шрифти (Fonts) */
body {
  font-family: 'Inter', sans-serif;
  background-color: #FFF6E8;
  color: #000000;
  line-height: 1.6;
}

.logo h1 {
  font-size: 36px;
  font-weight: bold;
  color: #000000;
  font-family: 'Inria Serif', serif;
}

.hero-text h2 {
  font-size: 128px;
  font-weight: bold;
  color: #000000;
  font-family: 'Inria Serif', serif;
}

/* 2. Текст (Text) */
.featured-books h2 {
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  color: #000000;
  margin-bottom: 50px;
}

.nav-links a {
  text-decoration: none;
  color: #000000;
  font-weight: normal;
  font-size: 18px;
  transition: color 0.3s ease;
}

/* 3. Таблиці (Tables) */
.bestsellers-table table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
}

.bestsellers-table th {
  background-color: #F7A823;
  color: white;
  padding: 15px 10px;
  font-weight: 300;
  font-size: 18px;
}

.bestsellers-table td {
  padding: 12px 10px;
  border-bottom: 1px solid #000000;
  font-size: 14px;
}

.reading-stats table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
}

.reading-stats td {
  padding: 15px 20px;
  border-bottom: 1px solid #000000;
  font-size: 16px;
}

/* 4. Фон (Background) */
body {
  background-color: #FFF6E8;
}

.hero {
  padding: 50px 0;
  background-color: #FFF6E8;
}

.book-card {
  background-color: white;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.newsletter-form {
  padding: 40px 130px;
  background-color: #F7A823;
  text-align: center;
  position: relative;
  z-index: 2;
}

footer {
  background-color: #382D21;
  color: white;
  padding: 60px 0 40px;
}

/* 5. Контур (Border) */
.book-card {
  background-color: white;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 12px;
  border: 1px solid #ffffff;
  font-size: 16px;
  background-color: white;
  color: #000000;
}

/* 6. Списки (Lists) */
.nav-links {
  display: flex;
  list-style: none;
  gap: 60px;
}

.categories-list ul {
  list-style: none;
}

.categories-list li {
  padding: 8px 0;
  color: #000000;
  font-size: 16px;
  position: relative;
  padding-left: 20px;
}

.categories-list li::before {
  content: "→";
  position: absolute;
  left: 0;
  color: #000000;
  font-weight: bold;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 8px;
}

/* 7. CSS Просунутий */
/* Flexbox */
.nav-links {
  display: flex;
  list-style: none;
  gap: 60px;
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  gap: 60px;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Grid */
.books-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: clamp(24px, 5vw, 100px);
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.categories-content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Анімації та переходи */
.nav-links a {
  transition: color 0.3s ease;
}

.book-card {
  transition: transform 0.3s ease;
}

.book-card:hover {
  transform: translateY(-5px);
}

.hero-content button {
  transition: background-color 0.3s ease;
}

.newsletter button {
  transition: background-color 0.3s ease;
}

/* Медіа-запити для адаптивності */
@media (max-width: 1200px) {
  .books-grid {
    gap: 60px;
  }
  .categories-content {
    gap: 40px;
  }
}

@media (max-width: 992px) {
  .hero-text h2 {
    font-size: 72px;
  }
  .categories-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
  }
  .books-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}</code></pre>
            
            <h5>HTML використання:</h5>
            <pre><code>&lt;!-- Шрифти та текст --&gt;
&lt;h1&gt;BookStore Pro&lt;/h1&gt;
&lt;h2&gt;Рекомендовані книги&lt;/h2&gt;
&lt;p&gt;Ваш найкращий цифровий досвід читання.&lt;/p&gt;

&lt;!-- Таблиці --&gt;
&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;РЕЙТИНГ&lt;/th&gt;
      &lt;th&gt;НАЗВА&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;1&lt;/td&gt;
      &lt;td&gt;Код майбутнього&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;

&lt;!-- Списки --&gt;
&lt;ul class="nav-links"&gt;
  &lt;li&gt;&lt;a href="#home"&gt;Головна&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#books"&gt;Книги&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;

&lt;!-- Фон та контур --&gt;
&lt;div class="book-card"&gt;
  &lt;img src="assets/kobzar.png" alt="Book Cover"&gt;
  &lt;h3&gt;Кобзар&lt;/h3&gt;
&lt;/div&gt;</code></pre>
            
            <h5>Зображення результату:</h5>
            <img src="assets/task2/lastSection.png" alt="Результат стилізації CSS властивостей" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
          </div>
        `;
  }

  if (key === 'conclusion' && lab === '2') {
    html = `
          <div>
            <h4>ВИСНОВКИ</h4>
            <p>У ході практичної роботи було вивчено способи підключення стилів - внутрішні, вбудовані, зовнішні та імпортовані, при цьому для кращої організації коду застосовано зовнішній CSS-файл. Освоєно різні типи селекторів, включно з тегами, класами, ідентифікаторами, атрибутами, псевдокласами та псевдоелементами, а також принципи їхньої специфічності. Реалізовано стилізацію шрифтів, тексту, таблиць, фону, контурів і списків. У проєкті застосовано медіа-запити для забезпечення коректного відображення сторінки на різних пристроях. Під час виконання роботи сформовано навички створення структурованого CSS-коду, використання семантичних назв класів та ефективної організації стилів. Лаботорна робота дозволила закріпити теоретичні знання та отримати практичний досвід створення сучасного, адаптивного та професійно стилізованого інтерфейсу.</p>
          </div>
        `;
  }

  // Lab 3 content
  if (key === 'topic' && lab === '3') {
    html = `
          <div>
            <p><strong>Тема практичної:</strong> ВЕРСТКА HTML-ДОКУМЕНТУ. БЛОКОВА ВЕРСТКА.  ВЕРСТКА ЗАСОБАМИ CSS та FLEXBOX. АДАПТИВНА ВЕРСТКА. МЕДІА-ЗАПИТИ. МЕТАТЕГ VIEWPORT</p>
            <p><strong>Мета практичної:</strong> Придбати практичні навички роботи  верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з'ясувати переваги та недоліки типів макетів веб-сторінок; придбати практичні навички роботи  верстки сторінок засобами CSS та FLEXBOX</p>
            <p><strong>Назва проєкту:</strong> BookStore Pro</p>
            <p><strong>Тема проєкту:</strong> Веб-застосунок для онлайн-магазину книг</p>
            <p><strong>Мета проєкту:</strong> Прискорення та спрощення процесу купівлі книг, забезпечення зручного доступу до широкого асортименту літератури, створення інтуїтивного інтерфейсу для користувачів, підтримка ефективного управління каталогом і замовленнями для адміністраторів. </p>
            <ul>
              <li><strong>Посилання на репозиторій власного WEB-застосунку:</strong> <a href="https://github.com/layd64/IP-34_appWEB-Burakov-Stanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_appWEB-Burakov-Stanislav-FIOT-2025</a></li>
              <li><strong>Посилання на живу сторінку власного WEB-застосунку:</strong> <a href="https://layd64.github.io/IP-34_appWEB-Burakov-Stanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_appWEB-Burakov-Stanislav-FIOT-2025/</a></li>
              <li><strong>Посилання на репозиторій звітного HTML-документа:</strong> <a href="https://github.com/layd64/IP-34_appRECORD-BurakovStanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_appRECORD-BurakovStanislav-FIOT-2025</a></li>
              <li><strong>Посилання на живу сторінку звітного HTML-документа:</strong> <a href="https://layd64.github.io/IP-34_appRECORD-BurakovStanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_appRECORD-BurakovStanislav-FIOT-2025/</a></li>
              <li><strong>Посилання на репозиторій з самостійними роботами:</strong> <a href="https://github.com/layd64/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025</a></li>
              <li><strong>Посилання на живу сторінку з самостійними роботами:</strong> <a href="https://layd64.github.io/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025/</a></li>
              <li><strong>Посилання на макет сторінки у Figma:</strong> <a href="https://www.figma.com/design/JzXNXmCqtPJ3gEQfRZUPc1/BookStore-Pro?node-id=0-1&t=XVJOPUvVyByF5fVK-1" target="_blank" rel="noopener">figma.com/design/JzXNXmCqtPJ3gEQfRZUPc1/BookStore-Pro?node-id=0-1&t=XVJOPUvVyByF5fVK-1/</a></li>
            </ul>
          </div>
        `;
  }

  if (key === 'task1-layout' && lab === '3') {
    html = `
          <div>
            <h4>ЗАВДАННЯ №1. Зовнішній вигляд макету. Код макету</h4>
            <p>У цьому завданні було поліпшено мій власний сайту BookStore Pro з використанням сучасних методів верстки. Макет включає адаптивний дизайн для різних пристроїв та реалізує всі необхідні функціонально-стилістичні вимоги.</p>
            
            <h5>Посилання:</h5>
            <ul>
              <li><strong>Посилання на репозиторій з кодом власного веб-застосунку:</strong> <a href="https://github.com/layd64/IP-34_appWEB-Burakov-Stanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_appWEB-Burakov-Stanislav-FIOT-2025</a></li>
              <li><strong>Посилання на макет у Figma:</strong> <a href="https://www.figma.com/design/JzXNXmCqtPJ3gEQfRZUPc1/BookStore-Pro?node-id=0-1&t=XVJOPUvVyByF5fVK-1" target="_blank" rel="noopener">figma.com/design/JzXNXmCqtPJ3gEQfRZUPc1/BookStore-Pro?node-id=0-1&t=XVJOPUvVyByF5fVK-1/</a></li>
            </ul>

            <h5>Зовнішній вигляд сайту:</h5>
            <div class="screenshots-grid">
              <figure>
                <img src="assets/task3/screenshots/1.png" alt="Скріншот десктопної версії" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
                <figcaption>Десктопна версія</figcaption>
              </figure>
              <figure>
                <img src="assets/task3/screenshots/2.png" alt="Скріншот мобільної версії" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
                <figcaption>Мобільна версія</figcaption>
              </figure>
            </div>
            
            <h5>Макет у Figma:</h5>
            <div class="screenshot">
              <img src="assets/task3/bookstorepro.png" alt="Макет BookStore Pro у Figma" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
            </div>
          </div>
        `;
  }

  if (key === 'task2' && lab === '3') {
    html = `
          <div>
            <h4>ЗАВДАННЯ №2</h4>    
            <h4>Таблична верстка:</h4>
            <p>Метод створення макету веб-сторінки за допомогою HTML-таблиць. <strong>Переваги:</strong> простота створення, надійність у старих браузерах. <strong>Недоліки:</strong> не семантична, складна підтримка, погані можливості адаптивності.</p>
            
            <h4>Блокова верстка:</h4>
            <p>Сучасний метод створення макету за допомогою CSS-блоків та властивостей позиціонування. <strong>Переваги:</strong> семантичність, гнучкість, кращі можливості адаптивності. <strong>Недоліки:</strong> складніша реалізація, потребує знання CSS.</p>
            
            <h4>Фіксована верстка:</h4>
            <p>Має статичні розміри елементів, що забезпечує стабільність, але погіршує адаптивність до різних розмірів екранів.</p>
            
            <h4>Гумова верстка:</h4>
            <p>Використовує відносні одиниці вимірювання (% , em, rem, vw, vh), що забезпечує кращу адаптивність до різних розмірів екранів та орієнтації пристрою.</p>
          </div>
        `;
  }

  if (key === 'fixed-table' && lab === '3') {
    html = `
          <div>
            <h4>Фіксована таблична верстка</h4>
            <p>Фіксована таблична верстка використовує статичні розміри для елементів таблиці. Всі розміри задаються в пікселях, що забезпечує стабільний вигляд на різних пристроях.</p>
            
            <h5>Варіант 4 - Фіксована таблична верстка:</h5>
            <div class="screenshot">
              <img src="assets/task3/screenshots/variant4.png" alt="Варіант 4 - Фіксована таблична верстка" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
            </div>
            
            <h5>Посилання на сторінку:</h5>
            <p><a href="assets/task3/taskPages/index-table.html" target="_blank" rel="noopener">Переглянути фіксовану табличну верстку</a></p>
          </div>
        `;
  }

  if (key === 'fluid-table' && lab === '3') {
    html = `
          <div>
            <h4>Гумова таблична верстка</h4>
            <p>Гумова таблична верстка використовує відносні розміри та відсотки для створення адаптивного макету. Таблиця автоматично підлаштовується під розмір вікна браузера.</p>
            
            
            <h5>Посилання на сторінку:</h5>
            <p><a href="assets/task3/taskPages/index-table-fluid.html" target="_blank" rel="noopener">Переглянути гумову табличну верстку</a></p>
          </div>
        `;
  }

  if (key === 'fixed-block' && lab === '3') {
    html = `
          <div>
            <h4>Фіксована блокова верстка</h4>
            <p>Фіксована блокова верстка використовує статичні розміри для блоків та елементів. Всі розміри задаються в пікселях, що забезпечує стабільний вигляд.</p>
            
            <h5>Варіант 5 - Фіксована блокова верстка:</h5>
            <div class="screenshot">
              <img src="assets/task3/screenshots/variant5.png" alt="Варіант 5 - Фіксована блокова верстка" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
            </div>
            
            <h5>Посилання на сторінку:</h5>
            <p><a href="assets/task3/taskPages/index-blocks.html" target="_blank" rel="noopener">Переглянути фіксовану блокову верстку</a></p>
          </div>
        `;
  }

  if (key === 'fluid-block' && lab === '3') {
    html = `
          <div>
            <h4>Гумова блокова верстка</h4>
            <p>Гумова блокова верстка використовує відносні розміри та Flexbox для створення адаптивного макету. Блоки автоматично підлаштовуються під розмір вікна браузера.</p>
            
            
            <h5>Посилання на сторінку:</h5>
            <p><a href="assets/task3/taskPages/index-blocks-fluid.html" target="_blank" rel="noopener">Переглянути гумову блокову верстку</a></p>
          </div>
        `;
  }

  if (key === 'conclusion' && lab === '3') {
    html = `
          <div>
            <h4>Висновки</h4>
            <p>У ході практичної роботи було вивчено різні методи верстки веб-сторінок: табличну та блокову, фіксовану та гумову. Освоєно принципи створення макетів за допомогою HTML-таблиць та CSS-блоків, вивчено переваги та недоліки кожного підходу. Реалізовано чотири варіанти верстки: фіксовану табличну, гумову табличну, фіксовану блокову та гумову блокову. Порівняно адаптивні можливості різних методів верстки. У проєкті застосовано сучасні CSS-технології, включно з Flexbox та CSS Grid для створення гнучких макетів. Реалізовано адаптивну навігацію з трансформацією у "бургер-меню" на мобільних пристроях, адаптивну сітку контенту з динамічною перебудовою залежно від ширини екрана. Застосовано медіа-запити для адаптації стилів під різні розміри екранів та орієнтацію пристрою, використано відносні одиниці вимірювання (% , em, rem, vw, vh) для забезпечення гнучкості та масштабованості інтерфейсу. Під час виконання роботи сформовано навички створення семантичних компонентів інтерфейсу, реалізації візуальних ефектів та анімацій, а також ефективної організації файлової структури веб-застосунку. Лабораторна робота дозволила закріпити теоретичні знання та отримати практичний досвід створення сучасних, адаптивних макетів веб-сторінок з використанням Flexbox та медіа-запитів.</p>
          </div>
        `;
  }

  // Lab 3.2 content
  if (key === 'topic' && lab === '4') {
    html = `
          <div>
            <p><strong>Тема практичної:</strong> АДАПТИВНА ВЕРСТКА. МЕДІА-ЗАПИТИ. МЕТАТЕГ VIEWPORT. СТРАТЕГІЯ MOBILE FIRST.</p>
            <p><strong>Мета практичної:</strong> Адаптивна верстка. Медіа-запити. Медіа-типи. Медіа-функції.Метатег viewport. Інструменти розробника. Стратегія Mobile First.</p>
            <p><strong>Назва проєкту:</strong> BookStore Pro</p>
            <p><strong>Тема проєкту:</strong> Веб-застосунок для онлайн-магазину книг</p>
            <p><strong>Мета проєкту:</strong> Прискорення та спрощення процесу купівлі книг, забезпечення зручного доступу до широкого асортименту літератури, створення інтуїтивного інтерфейсу для користувачів, підтримка ефективного управління каталогом і замовленнями для адміністраторів.</p>
            <ul>
              <li><strong>Посилання на репозиторій власного WEB-застосунку:</strong> <a href="https://github.com/layd64/IP-34_appWEB-Burakov-Stanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_appWEB-Burakov-Stanislav-FIOT-2025</a></li>
              <li><strong>Посилання на живу сторінку власного WEB-застосунку:</strong> <a href="https://layd64.github.io/IP-34_appWEB-Burakov-Stanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_appWEB-Burakov-Stanislav-FIOT-2025/</a></li>
              <li><strong>Посилання на репозиторій звітного HTML-документа:</strong> <a href="https://github.com/layd64/IP-34_appRECORD-BurakovStanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_appRECORD-BurakovStanislav-FIOT-2025</a></li>
              <li><strong>Посилання на живу сторінку звітного HTML-документа:</strong> <a href="https://layd64.github.io/IP-34_appRECORD-BurakovStanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_appRECORD-BurakovStanislav-FIOT-2025/</a></li>
              <li><strong>Посилання на репозиторій з самостійними роботами:</strong> <a href="https://github.com/layd64/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025</a></li>
              <li><strong>Посилання на живу сторінку з самостійними роботами:</strong> <a href="https://layd64.github.io/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025/</a></li>
              <li><strong>Посилання на макет сторінки у Figma:</strong> <a href="https://www.figma.com/design/JzXNXmCqtPJ3gEQfRZUPc1/BookStore-Pro?node-id=0-1&t=XVJOPUvVyByF5fVK-1" target="_blank" rel="noopener">figma.com/design/JzXNXmCqtPJ3gEQfRZUPc1/BookStore-Pro?node-id=0-1&t=XVJOPUvVyByF5fVK-1/</a></li>
            </ul>
          </div>
        `;
  }

  if (key === 'desktop' && lab === '4') {
    html = `
          <div>
            <h4>Десктопна версія</h4>
            <p>Десктопна версія сайту BookStore Pro оптимізована для екранів з роздільною здатністю від 769px і вище. Використовується повноцінна навігація, великі зображення книг та розширена сітка контенту.</p>
            
            <h4>Особливості десктопної версії:</h4>
            <ul>
              <li><strong>Повна навігація:</strong> Всі пункти меню відображаються в одному рядку</li>
              <li><strong>Сітка книг:</strong> 2-3 книги в ряд з повними деталями</li>
              <li><strong>Великі зображення:</strong> Обкладинки книг відображаються в повному розмірі</li>
              <li><strong>Розширена сітка:</strong> Максимальна ширина контенту</li>
            </ul>

          <h4>Додаткова адаптивність для великих екранів:</h4>
            <p>Для забезпечення більшої респонсивності десктопної версії використовується медіа-запит на 1200 пікселів. Це дозволяє оптимізувати відступи та розміри елементів для екранів, які менші за стандартний десктопний розмір, але все ще більші за планшетні пристрої.</p>

            <h4>Медіа-запити для десктопної версії:</h4>
            <pre><code>/* Responsive design для десктопної версії */
@media (max-width: 1200px) {
    .books-grid {
        gap: 3.75rem;
    }
    .categories-content {
        gap: 2.5rem;
    }
    .reading-stats {
        padding-left: 1.25rem;
        padding-right: 1.25rem;
    }
}</code></pre>



            <h4>Скріншот десктопної версії:</h4>
            <div class="screenshot">
              <img src="assets/task3.2/screenshots/desktop.png" alt="Десктопна версія BookStore Pro" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
            </div>
          </div>
        `;
  }

  if (key === 'tablet' && lab === '4') {
    html = `
          <div>
            <h4>Планшетна версія</h4>
            <p>Планшетна версія сайту BookStore Pro оптимізована для екранів з роздільною здатністю від 426px до 768px.</p>
            
            <h5>Особливості планшетної версії:</h5>
            <ul>
              <li><strong>Оптимізовані зображення:</strong> Обкладинки книг масштабуються відповідно до розміру екрана</li>
              <li><strong>Гнучка сітка:</strong> Контент адаптується до ширини екрана</li>
              <li><strong>Збережена функціональність:</strong> Всі основні функції залишаються доступними</li>
            </ul>

            <h5>Медіа-запити для планшетної версії:</h5>
            <pre><code>/* Tablets */
@media (max-width: 768px) and (orientation: landscape) {
    nav {
        padding: 0 1rem;
    }
    .nav-links {
        gap: 1.5rem;
        flex-wrap: wrap;
    }
    .burger-menu {
        display: none;
    }
    .hero-text h2 {
        font-size: 4.5rem;
    }
    .hero-content {
        gap: 2rem;
    }
    .books-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 2.5rem;
        padding: 0 3.125rem;
    }
    .book-image {
        width: 100%;
        height: auto;
        aspect-ratio: 3 / 4;
    }
    .categories-content {
        grid-template-columns: 1fr;
    }
    .categories-list {
        text-align: center;
    }
    .categories-list ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.25rem;
    }
    .categories-list li {
        padding-left: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }
    .categories-list li::before {
        position: static;
        margin-right: 0;
    }
    .stats-content {
        overflow-x: auto;
    }

    .newsletter-form {
        padding: 2rem 3rem;
    }
}</code></pre>

            <h5>Скріншот планшетної версії:</h5>
            <div class="screenshot">
              <img src="assets/task3.2/screenshots/tablet.png" alt="Планшетна версія BookStore Pro" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
            </div>
          </div>
        `;
  }

  if (key === 'mobile' && lab === '4') {
    html = `
          <div>
            <h4>Мобільна версія</h4>
            <p>Мобільна версія сайту BookStore Pro оптимізована для екранів з роздільною здатністю до 425px. Використовується вертикальна навігація, одна колонка контенту та оптимізовані для дотику елементи.</p>
            
            <h5>Особливості мобільної версії:</h5>
            <ul>
              <li><strong>Вертикальна навігація:</strong> Меню перетворюється на вертикальний список у бургер-меню</li>
              <li><strong>Одна колонка:</strong> Всі книги відображаються в одній колонці</li>
              <li><strong>Оптимізовані кнопки:</strong> Збільшені кнопки для зручності натискання</li>
              <li><strong>Спрощена сітка:</strong> Мінімальні відступи та компактний дизайн</li>
            </ul>

            <h5>Медіа-запити для мобільної версії:</h5>
            <pre><code>/* Phones */
@media (max-width: 425px) {
    header {
        border-bottom: 0.0625rem solid #757575;
        position: relative;
    }
    nav {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: 0;
    }
    .nav-links {
        display: none;
    }
    .burger-menu {
        display: block;
    }
    .logo h1 {
        font-size: 1.75rem;
    }
    .nav-links {
        display: none;
    }
    .burger-menu {
        display: block;
    }
    .hero {
        padding: 0;
    }
    .hero-content {
        padding: 0;
        flex-direction: column;
        text-align: center;
    }
    .hero-text h1 {
        font-size: 2.625rem;
    }
    .hero-image {
        height: 18.75rem;
    }
    .books-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    .book-image {
        width: 100%;
        height: auto;
        aspect-ratio: 3 / 4;
    }
    .bestsellers-table {
        padding: 1.25rem;
        overflow-x: auto;
    }
    .reading-stats td {
        padding: 0.75rem 0.625rem;
        font-size: 0.875rem;

    }
    .newsletter-container{
        padding: 0 1.25rem;
    }
    .newsletter-container::before{
        top: 0.625rem;
        left: 1.875rem;
        right: 0.625rem;
        bottom: -0.625rem;
    }
    .newsletter h2 {
        font-size: 1.75rem;
    }
    .newsletter h3 {
        font-size: 1rem;
    }
    .newsletter-form {
        padding: 1.5rem;
    }
    .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
    }
}

</code></pre>

            <h5>Скріншот мобільної версії:</h5>
            <div class="screenshot">
              <img src="assets/task3.2/screenshots/phone.png" alt="Мобільна версія BookStore Pro" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
            </div>
          </div>
        `;
  }

  if (key === 'logical-operators' && lab === '4') {
    html = `
          <div>
            <h4>Логічні оператори</h4>
            <p>У проєкті BookStore Pro використовуються логічні оператори в медіа-запитах для створення складних умов адаптивної верстки. Це дозволяє точно контролювати, коли застосовуються певні стилі.</p>
            
            <h5>Логічні оператори:</h5>
            
            <h5>1. OR оператор (або) - кома (,)</h5>
            <p>Найчастіше використовуваний оператор у проєкті. Дозволяє застосовувати стилі, якщо виконана хоча б одна з умов.</p>

            <h5>2. AND оператор (і) - ключове слово and</h5>
            <p>Використовується для поєднання кількох умов, які повинні виконуватися одночасно.</p>

            <h5>3. NOT оператор (не) - ключове слово not</h5>
            <p>Використовується для застосування стилів, якщо умова НЕ виконана. Дозволяє виключати певні пристрої або умови.</p>
 
            <h4>Практичні приклади з проєкту BookStore Pro:</h4>
            
            <h5>AND оператор для планшетів:</h5>
            <pre><code>/* Застосовується для планшетів (до 992px) ТА альбомної орієнтації */
@media (max-width: 992px) and (orientation: landscape) {
    .hero-text h2 {
        font-size: 4.5rem;
    }
    .hero-content {
        gap: 2rem;
    }
    .books-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 2.5rem;
        padding: 0 3.125rem;
    }
}</code></pre>

            <h4>Переваги використання логічних операторів:</h4>
            <ul>
              <li><strong>OR оператор (,):</strong> Дозволяє застосовувати однакові стилі для різних умов, що спрощує код</li>
              <li><strong>AND оператор (and):</strong> Забезпечує точний контроль для конкретних комбінацій умов</li>
              <li><strong>NOT оператор (not):</strong> Дозволяє виключати певні пристрої або умови, створюючи інверсні умови</li>
              <li><strong>Гнучкість:</strong> Можливість створювати складні умови для різних пристроїв</li>
              <li><strong>Оптимізація:</strong> Можливість групувати схожі стилі для різних breakpoint</li>
            </ul>
        `;
  }

  if (key === 'conclusion' && lab === '4') {
    html = `
          <div>
            <h4>Висновки</h4>
            <p>У ході практичної роботи було вивчено принципи адаптивної верстки та створення responsive дизайну для різних пристроїв. Освоєно використання медіа-запитів для адаптації стилів під різні розміри екранів, включно з десктопною, планшетною та мобільною версіями. Вивчено метатег viewport та його роль у забезпеченні коректного відображення на мобільних пристроях. Реалізовано логічні оператори для створення складних умов у медіа-запитах. Реалізовано адаптивну сітку контенту з динамічною перебудовою залежно від ширини екрана, оптимізовано навігацію для різних пристроїв та забезпечено зручність користування на дотикових екранах. Під час виконання роботи сформовано навички створення адаптивних макетів, використання сучасних CSS-технологій для responsive дизайну та оптимізації користувацького досвіду на різних пристроях. Лабораторна робота дозволила закріпити теоретичні знання та отримати практичний досвід створення сучасних, адаптивних веб-інтерфейсів, що коректно працюють на всіх типах пристроїв.</p>
          </div>
        `;
  }

  // Lab 5 (Практична робота №4) content
  if (key === 'topic' && lab === '5') {
    html = `
          <div>
            <p><strong>Тема практичної:</strong> ОСНОВИ JAVASCRIPT У HTML-ДОКУМЕНТІ. ШАБЛОНІ РЯДКИ. КЕРУВАННЯ ПОРЯДКОМ ОБЧИСЛЕНЬ. МАСИВИ. МЕТОДИ МАСИВІВ. ФУНКЦІЇ</p>
            <p><strong>Мета практичної:</strong> Придбати практичні навички роботи з конструкціями мови JS, масивами та фугкціями у js-сценаріях.  Реалізація програм засовами мови JAVASCRIPT.</p>
            <p><strong>Назва проєкту:</strong> BookStore Pro</p>
            <p><strong>Тема проєкту:</strong> Веб-застосунок для онлайн-магазину книг</p>
            <p><strong>Мета проєкту:</strong> Прискорення та спрощення процесу купівлі книг, забезпечення зручного доступу до широкого асортименту літератури, створення інтуїтивного інтерфейсу для користувачів, підтримка ефективного управління каталогом і замовленнями для адміністраторів.</p>
            <ul>
              <li><strong>Посилання на репозиторій власного WEB-застосунку:</strong> <a href="https://github.com/layd64/IP-34_appWEB-Burakov-Stanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_appWEB-Burakov-Stanislav-FIOT-2025</a></li>
              <li><strong>Посилання на живу сторінку власного WEB-застосунку:</strong> <a href="https://layd64.github.io/IP-34_appWEB-Burakov-Stanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_appWEB-Burakov-Stanislav-FIOT-2025/</a></li>
              <li><strong>Посилання на репозиторій звітного HTML-документа:</strong> <a href="https://github.com/layd64/IP-34_appRECORD-BurakovStanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_appRECORD-BurakovStanislav-FIOT-2025</a></li>
              <li><strong>Посилання на живу сторінку звітного HTML-документа:</strong> <a href="https://layd64.github.io/IP-34_appRECORD-BurakovStanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_appRECORD-BurakovStanislav-FIOT-2025/</a></li>
              <li><strong>Посилання на репозиторій з самостійними роботами:</strong> <a href="https://github.com/layd64/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025</a></li>
              <li><strong>Посилання на живу сторінку з самостійними роботами:</strong> <a href="https://layd64.github.io/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025/</a></li>
              <li><strong>Посилання на макет сторінки у Figma:</strong> <a href="https://www.figma.com/design/JzXNXmCqtPJ3gEQfRZUPc1/BookStore-Pro?node-id=0-1&t=XVJOPUvVyByF5fVK-1" target="_blank" rel="noopener">figma.com/design/JzXNXmCqtPJ3gEQfRZUPc1/BookStore-Pro?node-id=0-1&t=XVJOPUvVyByF5fVK-1/</a></li>
            </ul>
          </div>
        `;
  }

  if (key === 'task1' && lab === '5') {
    html = `
          <div>
            <h4>Завдання 1</h4>
            <p>Перевірка числа на позитивність, негативність або нуль. Використання умовних операторів та функції prompt для введення даних.</p>
            
            <h5>Програмний код:</h5>
            <pre><code>// Завдання 1
buttons[0].addEventListener('click', function() {
    const value = prompt('Введіть число:');
    
    if (value === null) {
        console.log('Введення скасовано');
        return;
    }
    
    console.log(\`Введене значення: \${value}\`);
    
    const numValue = Number(value);
    
    if (isNaN(numValue)) {
        alert('Введено не числове значення');
    } else if (numValue < 0) {
        alert('Число від\'ємне');
    } else if (numValue > 0) {
        alert('Число додатнє');
    } else {
        alert('Число дорівнює нулю');
    }
});</code></pre>

            <h5>Скріншоти результатів виконання:</h5>
            <div class="screenshots-grid">
              <figure>
                <img src="assets/task4/screenshots/task1.1.png" alt="Скріншот завдання 1.1" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
              <figure>
                <img src="assets/task4/screenshots/task1.2.png" alt="Скріншот завдання 1.2" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
              <figure>
                <img src="assets/task4/screenshots/task1.3.png" alt="Скріншот завдання 1.3" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
            </div>
            
            <h5>Опис:</h5>
            <p>Програма запитує у користувача число через prompt, перевіряє його тип за допомогою Number() та isNaN(), а потім виводить повідомлення про те, чи є число додатнім, від'ємним або дорівнює нулю.</p>
          </div>
        `;
  }

  if (key === 'task2' && lab === '5') {
    html = `
          <div>
            <h4>Завдання 2</h4>
            <p>Визначення пори року за номером місяця. Використання оператора switch для багатозначних умов.</p>
            
            <h5>Програмний код:</h5>
            <pre><code>// Завдання 2
buttons[1].addEventListener('click', function() {
    const number = prompt('Введіть число від 1 до 4:');
    let result;
    
    switch(number) {
        case '1':
            result = 'зима';
            break;
        case '2':
            result = 'весна';
            break;
        case '3':
            result = 'літо';
            break;
        case '4':
            result = 'осінь';
            break;
        default:
            result = 'невідомий місяць';
    }
    
    console.log(\`Результат: \${result}\`);
    alert(\`Результат: \${result}\`);
});</code></pre>

            <h5>Скріншоти результатів виконання:</h5>
            <div class="screenshots-grid">
              <figure>
                <img src="assets/task4/screenshots/task2.1.png" alt="Скріншот завдання 2.1" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
              <figure>
                <img src="assets/task4/screenshots/task2.2.png" alt="Скріншот завдання 2.2" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
            </div>
            
            <h5>Опис:</h5>
            <p>Програма використовує оператор switch для визначення пори року за номером місяця (1-зима, 2-весна, 3-літо, 4-осінь). У разі введення невалідного значення повертається "невідомий місяць".</p>
          </div>
        `;
  }

  if (key === 'task3' && lab === '5') {
    html = `
          <div>
            <h4>Завдання 3</h4>
            <p>Система авторизації з перевіркою логіну та пароля. Використання вкладених умовних операторів.</p>
            
            <h5>Програмний код:</h5>
            <pre><code>// Завдання 3
buttons[2].addEventListener('click', function() {
    const adminLogin = 'Admin';
    const adminPassword = 'admin123';
    const userLogin = 'User';
    const userPassword = 'user123';
    
    const login = prompt('Введіть логін:');
    
    console.log(\`Введений логін: \${login}\`);
    
    if (login === null || login === '') {
        alert('Cancelled');
        return;
    }
    
    const trimmedLogin = login.trim();
    
    if (trimmedLogin === 'Admin') {
        const password = prompt('Введіть пароль:');
        if (password === adminPassword) {
            alert('Hello, Admin');
        } else if (password === null || password === '') {
            alert('Cancelled');
        } else {
            alert('I don\'t know you');
        }
    } else if (trimmedLogin === 'User') {
        const password = prompt('Введіть пароль:');
        if (password === userPassword) {
            alert('Hello, User');
        } else if (password === null || password === '') {
            alert('Cancelled');
        } else {
            alert('I don\'t know you');
        }
    } else {
        alert('I don\'t know you');
    }
});</code></pre>

            <h5>Скріншоти результатів виконання:</h5>
            <div class="screenshots-grid">
              <figure>
                <img src="assets/task4/screenshots/task3.1.png" alt="Скріншот завдання 3.1" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
              <figure>
                <img src="assets/task4/screenshots/task3.2.png" alt="Скріншот завдання 3.2" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
              <figure>
                <img src="assets/task4/screenshots/task3.3.png" alt="Скріншот завдання 3.3" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
            </div>
            
            <h5>Опис:</h5>
            <p>Програма реалізує систему авторизації з двома типами користувачів: Admin (пароль: admin123) та User (пароль: user123). Використовується метод trim() для очищення введених даних від пробілів, вкладені умовні оператори для перевірки паролів та обробка скасування операції.</p>
          </div>
        `;
  }

  if (key === 'task4' && lab === '5') {
    html = `
          <div>
            <h4>Завдання 4</h4>
            <p>Розрахунок загальної вартості замовлення дроїдів. Використання функцій для інкапсуляції логіки.</p>
            
            <h5>Програмний код:</h5>
            <pre><code>// Завдання 4
buttons[3].addEventListener('click', function() {
    function makeTransaction(quantity, pricePerDroid) {
        const totalPrice = quantity * pricePerDroid;
        return \`You ordered \${quantity} droids worth \${totalPrice} credits!\`;
    }
    
    const quantityInput = prompt('Введіть кількість дроїдів:');
    if (quantityInput === null) {
        alert('Операцію скасовано');
        return;
    }
    
    const priceInput = prompt('Введіть ціну одного дроїда:');
    if (priceInput === null) {
        alert('Операцію скасовано');
        return;
    }
    
    const quantity = Number(quantityInput);
    const pricePerDroid = Number(priceInput);
    
    if (isNaN(quantity) || isNaN(pricePerDroid)) {
        alert('Будь ласка, введіть числові значення');
        return;
    }
    
    const result = makeTransaction(quantity, pricePerDroid);
    console.log(result);
    alert(result);
});</code></pre>

            <h5>Скріншоти результатів виконання:</h5>
            <div class="screenshots-grid">
              <figure>
                <img src="assets/task4/screenshots/task4.1.png" alt="Скріншот завдання 4.1" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
              <figure>
                <img src="assets/task4/screenshots/task4.2.png" alt="Скріншот завдання 4.2" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
              <figure>
                <img src="assets/task4/screenshots/task4.3.png" alt="Скріншот завдання 4.3" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
            </div>
            
            <h5>Опис:</h5>
            <p>Програма використовує функцію makeTransaction для розрахунку загальної вартості замовлення. Функція приймає кількість дроїдів та ціну за один дроїд, обчислює загальну вартість та повертає рядок з інформацією про замовлення. Реалізовано перевірку валідності введених даних.</p>
          </div>
        `;
  }

  if (key === 'task5' && lab === '5') {
    html = `
          <div>
            <h4>Завдання 5</h4>
            <p>Перевірка повідомлення на наявність заборонених слів. Використання методів роботи з рядками.</p>
            
            <h5>Програмний код:</h5>
            <pre><code>// Завдання 5
buttons[4].addEventListener('click', function() {
    function checkForSpam(message) {
        const lowerMessage = message.toLowerCase();
        return lowerMessage.includes('spam') || lowerMessage.includes('sale');
    }
    
    const message = prompt('Введіть повідомлення для перевірки:');
    
    if (message === null) {
        alert('Операцію скасовано');
        return;
    }
    
    const hasSpam = checkForSpam(message);
    const result = hasSpam ? 'Знайдено заборонені слова (spam або sale)' : 'Заборонених слів не знайдено';
    
    console.log(\`Повідомлення: "\${message}"\`);
    console.log(\`Результат перевірки: \${hasSpam}\`);
    alert(result);
});</code></pre>

            <h5>Скріншоти результатів виконання:</h5>
            <div class="screenshots-grid">
              <figure>
                <img src="assets/task4/screenshots/task5.1.png" alt="Скріншот завдання 5.1" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
              <figure>
                <img src="assets/task4/screenshots/task5.2.png" alt="Скріншот завдання 5.2" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
            </div>
            
            <h5>Опис:</h5>
            <p>Програма використовує функцію checkForSpam для перевірки повідомлення на наявність заборонених слів (spam або sale). Використовується метод toLowerCase() для приведення рядка до нижнього регістру та метод includes() для пошуку підрядків. Перевірка відбувається без урахування регістру.</p>
          </div>
        `;
  }

  if (key === 'task6' && lab === '5') {
    html = `
          <div>
            <h4>Завдання 6</h4>
            <p>Фільтрація масиву чисел за значенням. Використання циклів та методів роботи з масивами.</p>
            
            <h5>Програмний код:</h5>
            <pre><code>// Завдання 6
buttons[5].addEventListener('click', function() {
    function filterArray(numbers, value) {
        const filteredArray = [];
        
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > value) {
                filteredArray.push(numbers[i]);
            }
        }
        
        return filteredArray;
    }
    
    const numbersInput = prompt('Введіть числа через кому (наприклад: 1, 2, 3, 4, 5):');
    if (numbersInput === null) {
        alert('Операцію скасовано');
        return;
    }
    
    const valueInput = prompt('Введіть значення для фільтрації:');
    if (valueInput === null) {
        alert('Операцію скасовано');
        return;
    }
    
    const numbersStrings = numbersInput.split(',').map(item => item.trim());
    const numbers = numbersStrings.map(Number);
    const value = Number(valueInput);
    
    if (numbers.some(isNaN) || isNaN(value)) {
        alert('Будь ласка, введіть правильні числові значення');
        return;
    }
    
    const filtered = filterArray(numbers, value);
    console.log('Початковий масив:', numbers);
    console.log('Значення для фільтрації:', value);
    console.log('Відфільтрований масив:', filtered);
    alert(\`Результат: [\${filtered.join(', ')}]\`);
});</code></pre>

            <h5>Скріншоти результатів виконання:</h5>
            <div class="screenshots-grid">
              <figure>
                <img src="assets/task4/screenshots/task6,1.png" alt="Скріншот завдання 6.1" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
              <figure>
                <img src="assets/task4/screenshots/task6.2.png" alt="Скріншот завдання 6.2" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
              <figure>
                <img src="assets/task4/screenshots/task6.3.png" alt="Скріншот завдання 6.3" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
            </div>
            
            <h5>Опис:</h5>
            <p>Програма реалізує функцію filterArray, яка фільтрує масив чисел, залишаючи лише ті, які більші за задане значення. Використовується цикл for для ітерації по масиву, метод split() для розбиття рядка на масив, map() для перетворення рядків у числа, та join() для об'єднання результатів.</p>
          </div>
        `;
  }

  if (key === 'task7' && lab === '5') {
    html = `
          <div>
            <h4>Завдання 7</h4>
            <p>Знаходження мінімального та максимального значення для парних та непарних індексів. Сортування масиву методом вибору в порядку спадання.</p>
            
            <h5>Програмний код:</h5>
            <pre><code>// Завдання 7
buttons[6].addEventListener('click', function() {
    // Функція для знаходження мін/макс для парних/непарних індексів
    function findMinMaxForIndices(arr) {
        const evenValues = [];
        const oddValues = [];
        
        for (let i = 0; i < arr.length; i++) {
            if (i % 2 === 0) {
                evenValues.push(arr[i]);
            } else {
                oddValues.push(arr[i]);
            }
        }
        
        const evenMax = evenValues.length > 0 ? Math.max(...evenValues) : null;
        const evenMin = evenValues.length > 0 ? Math.min(...evenValues) : null;
        const oddMax = oddValues.length > 0 ? Math.max(...oddValues) : null;
        const oddMin = oddValues.length > 0 ? Math.min(...oddValues) : null;
        
        return { evenMax, evenMin, oddMax, oddMin };
    }
    
    // Функція для сортування масиву в порядку спадання методом вибору
    function selectionSortDesc(arr) {
        const sortedArr = [...arr];
        
        for (let i = 0; i < sortedArr.length - 1; i++) {
            let maxIndex = i;
            
            for (let j = i + 1; j < sortedArr.length; j++) {
                if (sortedArr[j] > sortedArr[maxIndex]) {
                    maxIndex = j;
                }
            }
            
            if (maxIndex !== i) {
                [sortedArr[i], sortedArr[maxIndex]] = [sortedArr[maxIndex], sortedArr[i]];
            }
        }
        
        return sortedArr;
    }
    
    const sizeInput = prompt('Введіть кількість елементів масиву:');
    if (sizeInput === null) {
        alert('Операцію скасовано');
        return;
    }
    
    const size = Number(sizeInput);
    if (isNaN(size) || size <= 0) {
        alert('Будь ласка, введіть додатнє число');
        return;
    }
    
    const arr = [];
    for (let i = 0; i < size; i++) {
        const elementInput = prompt(\`Введіть елемент \${i + 1}:\`);
        if (elementInput === null) {
            alert('Операцію скасовано');
            return;
        }
        const element = Number(elementInput);
        if (isNaN(element)) {
            alert('Будь ласка, введіть числове значення');
            return;
        }
        arr.push(element);
    }
    
    console.log('Вхідний масив:', arr);
    
    const { evenMax, evenMin, oddMax, oddMin } = findMinMaxForIndices(arr);
    console.log('Максимум серед парних індексів:', evenMax);
    console.log('Мінімум серед парних індексів:', evenMin);
    console.log('Максимум серед непарних індексів:', oddMax);
    console.log('Мінімум серед непарних індексів:', oddMin);
    
    const sortedArr = selectionSortDesc(arr);
    console.log('Вихідний масив (відсортований):', sortedArr);
    
    alert(\`Вхідний масив: [\${arr.join(', ')}]\\nВихідний масив: [\${sortedArr.join(', ')}]\\n\\nПеревірте консоль для деталей!\`);
});</code></pre>

            <h5>Скріншоти результатів виконання:</h5>
            <div class="screenshots-grid">
              <figure>
                <img src="assets/task4/screenshots/task7.1.png" alt="Скріншот завдання 7.1" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
              <figure>
                <img src="assets/task4/screenshots/task7.2.png" alt="Скріншот завдання 7.2" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
              <figure>
                <img src="assets/task4/screenshots/task7.3.png" alt="Скріншот завдання 7.3" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
            </div>
            
            <h5>Опис:</h5>
            <p>Програма реалізує дві функції: findMinMaxForIndices (знаходить мінімум та максимум для елементів з парними та непарними індексами) та selectionSortDesc (сортує масив методом вибору в порядку спадання). Використовуються оператор модуля (%) для визначення парності індексу, Math.max/Math.min для знаходження екстремумів, та деструктуризація масивів для обміну значень.</p>
          </div>
        `;
  }

  if (key === 'task8' && lab === '5') {
    html = `
          <div>
            <h4>Завдання 8</h4>
            <p>Робота з двовимірними масивами. Створення масивів додатніх та від'ємних чисел. Модифікація елементів масиву.</p>
            
            <h5>Програмний код:</h5>
            <pre><code>// Завдання 8
buttons[7].addEventListener('click', function() {
    // Створити двовимірний масив додатніх та від'ємних чисел
    const rows = 3;
    const cols = 4;
    const twoDArray = [];
    
    for (let i = 0; i < rows; i++) {
        twoDArray[i] = [];
        for (let j = 0; j < cols; j++) {
            // Генерувати випадкові числа від -50 до 50
            twoDArray[i][j] = Math.floor(Math.random() * 101) - 50;
        }
    }
    
    console.log('Двовимірний масив:', twoDArray);
    
    // Створити масиви додатніх та від'ємних чисел
    const positiveArray = [];
    const negativeArray = [];
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (twoDArray[i][j] > 0) {
                positiveArray.push(twoDArray[i][j]);
            } else if (twoDArray[i][j] < 0) {
                negativeArray.push(twoDArray[i][j]);
            }
        }
    }
    
    console.log('Масив додатніх чисел:', positiveArray);
    console.log('Масив від\'ємних чисел:', negativeArray);
    
    alert('Двовимірний масив створено!\\n\\nПеревірте консоль для деталей!');
    
    // Замінити третій елемент додатнього масиву на від'ємне значення з prompt
    if (positiveArray.length >= 3) {
        const replacementInput = prompt('Введіть від\'ємне число для заміни третього елемента додатнього масиву:');
        if (replacementInput !== null) {
            const replacement = Number(replacementInput);
            if (!isNaN(replacement) && replacement < 0) {
                positiveArray[2] = replacement;
                console.log('Масив додатніх чисел після заміни:', positiveArray);
                alert(\`Третій елемент замінено на \${replacement}\\n\\nПеревірте консоль для деталей!\`);
            } else {
                alert('Будь ласка, введіть від\'ємне число');
            }
        }
    } else {
        alert('Недостатньо додатніх чисел у масиві для заміни');
    }
});</code></pre>

            <h5>Скріншоти результатів виконання:</h5>
            <div class="screenshots-grid">
              <figure>
                <img src="assets/task4/screenshots/task8.1.png" alt="Скріншот завдання 8.1" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
              <figure>
                <img src="assets/task4/screenshots/task8.2.png" alt="Скріншот завдання 8.2" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
              <figure>
                <img src="assets/task4/screenshots/task8.3.png" alt="Скріншот завдання 8.3" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
              <figure>
                <img src="assets/task4/screenshots/task8.4.png" alt="Скріншот завдання 8.4" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
            </div>
            
            <h5>Опис:</h5>
            <p>Програма створює двовимірний масив (3x4) з випадкових чисел від -50 до 50, розділяє числа на додатні та від'ємні масиви, а потім дозволяє замінити третій елемент додатнього масиву на від'ємне значення через prompt. Використовуються вкладені цикли для роботи з двовимірним масивом, Math.random() для генерації випадкових чисел, та умовні оператори для фільтрації.</p>
          </div>
        `;
  }

  if (key === 'task9' && lab === '5') {
    html = `
          <div>
            <h4>Завдання 9</h4>
            <p>Створення інтерактивного слайд-шоу зображень з можливістю управління швидкістю, розміром та циклічністю. Робота з DOM та таймерами.</p>
            
            <h5>Програмний код:</h5>
            <pre><code>buttons[8].addEventListener('click', function() {
        // Створити вікно слайд-шоу
        const modal = document.createElement('div');
        modal.className = 'slideshow-modal';
        modal.innerHTML = \`
            &lt;div class="slideshow-container"&gt;
                &lt;div class="slideshow-header"&gt;
                    &lt;h3&gt;Слайд-шоу&lt;/h3&gt;
                    &lt;button class="close-slideshow"&gt;&amp;times;&lt;/button&gt;
                &lt;/div&gt;
                &lt;div class="slideshow-controls"&gt;
                    &lt;div class="control-group"&gt;
                        &lt;label&gt;Час (сек):&lt;/label&gt;
                        &lt;input type="number" id="slideshow-speed" value="3" min="1" max="10"&gt;
                    &lt;/div&gt;
                    &lt;div class="control-group"&gt;
                        &lt;label&gt;Розмір (%):&lt;/label&gt;
                        &lt;input type="number" id="slideshow-size" value="100" min="50" max="200"&gt;
                    &lt;/div&gt;
                    &lt;div class="control-group"&gt;
                        &lt;label&gt;
                            &lt;input type="checkbox" id="slideshow-loop" checked&gt; Циклічність
                        &lt;/label&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
                &lt;div class="slideshow-content"&gt;
                    &lt;img id="slideshow-image" src="assets/kobzar.png" alt="Slideshow image"&gt;
                &lt;/div&gt;
                &lt;div class="slideshow-nav"&gt;
                    &lt;button class="prev-btn"&gt;‹&lt;/button&gt;
                    &lt;button class="play-pause-btn"&gt;Пауза&lt;/button&gt;
                    &lt;button class="next-btn"&gt;›&lt;/button&gt;
                &lt;/div&gt;
            &lt;/div&gt;
        \`;
        
        document.body.appendChild(modal);
        
        // Масив зображень
        const images = [
            'assets/kobzar.png',
            'assets/book1.webp',
            'assets/book2.png',
            'assets/book3.png',
            'assets/stackOfBooks.png',
            'assets/stackOfBooks2.png'
        ];
        
        let currentIndex = 0;
        let isPlaying = true;
        let slideshowInterval;
        let slideDuration = 3;
        
        const imgElement = document.getElementById('slideshow-image');
        const speedInput = document.getElementById('slideshow-speed');
        const sizeInput = document.getElementById('slideshow-size');
        const loopCheckbox = document.getElementById('slideshow-loop');
        const playPauseBtn = modal.querySelector('.play-pause-btn');
        const prevBtn = modal.querySelector('.prev-btn');
        const nextBtn = modal.querySelector('.next-btn');
        const closeBtn = modal.querySelector('.close-slideshow');
        
        function updateImage() {
            imgElement.src = images[currentIndex];
        }
        
        function startSlideshow() {
            if (slideshowInterval) {
                clearInterval(slideshowInterval);
            }
            
            slideshowInterval = setInterval(() => {
                if (isPlaying) {
                    currentIndex++;
                    if (currentIndex >= images.length) {
                        if (loopCheckbox.checked) {
                            currentIndex = 0;
                        } else {
                            currentIndex = images.length - 1;
                            isPlaying = false;
                            playPauseBtn.textContent = 'Відтворити';
                        }
                    }
                    updateImage();
                }
            }, slideDuration * 1000);
        }
        
        function updateSize() {
            const size = sizeInput.value;
            imgElement.style.width = size + '%';
            imgElement.style.height = 'auto';
        }
        
        function updateSpeed() {
            slideDuration = parseInt(speedInput.value);
            if (isPlaying) {
                startSlideshow();
            }
        }
        
        // Обробники подій
        playPauseBtn.addEventListener('click', () => {
            isPlaying = !isPlaying;
            playPauseBtn.textContent = isPlaying ? 'Пауза' : 'Відтворити';
        });
        
        prevBtn.addEventListener('click', () => {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = loopCheckbox.checked ? images.length - 1 : 0;
            }
            updateImage();
        });
        
        nextBtn.addEventListener('click', () => {
            currentIndex++;
            if (currentIndex >= images.length) {
                currentIndex = loopCheckbox.checked ? 0 : images.length - 1;
            }
            updateImage();
        });
        
        closeBtn.addEventListener('click', () => {
            clearInterval(slideshowInterval);
            modal.remove();
        });
        
        speedInput.addEventListener('change', updateSpeed);
        sizeInput.addEventListener('change', updateSize);
        
        // Ініціалізація
        updateImage();
        updateSize();
        startSlideshow();
    });</code></pre>

            <h5>Скріншоти результатів виконання:</h5>
            <div class="screenshots-grid">
              <figure>
                <img src="assets/task4/screenshots/task9.1.png" alt="Скріншот завдання 9.1" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
              <figure>
                <img src="assets/task4/screenshots/task9.2.png" alt="Скріншот завдання 9.2" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
            </div>
            
            <h5>Опис:</h5>
            <p>Програма створює інтерактивне слайд-шоу з можливістю управління швидкістю переключення, розміром зображення, циклічністю перегляду. Використовуються методи роботи з DOM (createElement, appendChild, querySelector, addEventListener), таймери (setInterval, clearInterval), масиви для зберігання шляхів до зображень, та обробка подій для навігації (попереднє/наступне зображення, пауза/відтворення, закриття модального вікна).</p>
          </div>
        `;
  }

  if (key === 'conclusion' && lab === '5') {
    html = `
          <div>
            <h4>Висновки</h4>
            <p>У ході практичної роботи було вивчено основи мови JavaScript, включно з типами даних, операторами, умовними інструкціями, циклами, функціями, об'єктами та масивами. Освоєно роботу з вбудованими методами для роботи з рядками та масивами. Реалізовано систему авторизації з використанням вкладених умовних операторів та обробки помилок.</p>
            <p>Вивчено роботу з функціями як засобом інкапсуляції логіки та організації коду. Реалізовано алгоритми фільтрації масивів, сортування методом вибору, знаходження мінімальних та максимальних значень для різних груп елементів. Освоєно роботу з двовимірними масивами та модифікацію їх елементів.</p>
            <p>Реалізовано інтерактивне слайд-шоу з використанням DOM API для динамічного створення елементів, обробки подій та управління таймерами. Під час виконання роботи сформовано навички використання методів prompt() та alert() для взаємодії з користувачем, консольного виведення для налагодження, та обробки помилок введення.</p>
            <p>Лабораторна робота дозволила закріпити теоретичні знання про синтаксис JavaScript, оператори порівняння та логічні оператори, умовні інструкції if-else та switch-case, цикли for та while, функції та їх параметри, роботу з об'єктами та масивами, а також отримати практичний досвід створення інтерактивних веб-застосунків з використанням JavaScript.</p>
          </div>
        `;
  }

  // Lab 6 (Практична робота №5) content
  if (key === 'topic' && lab === '6') {
    html = `
          <div>
            <p><strong>Тема практичної:</strong> ОБ'ЄКТ. МЕТОДИ ОБ'ЄКТА. МАСИВ ОБ'ЄКТІВ. ДЕСТРУКТУРИЗАЦІЯ ОБ'ЄКТІВ. CALLBACK. СТРІЛОЧНІ ФУНКЦІЇ. СТРІЛОЧНІ ФУНКЦІЇ ЯК КОЛБЕКИ. ПЕРЕБИРАЮЧІ МЕТОДИ МАСИВУ</p>
            <p><strong>Мета практичної:</strong> Придбати практичні навички роботи з об'єктами. Методи об'єкта. Callback. Стрілочні функції. Стрілочні функції як колбеки. Реалізація програм засовами мови JAVASCRIPT
</p>
            <p><strong>Назва проєкту:</strong> BookStore Pro</p>
            <p><strong>Тема проєкту:</strong> Веб-застосунок для онлайн-магазину книг</p>
            <p><strong>Мета проєкту:</strong> Прискорення та спрощення процесу купівлі книг, забезпечення зручного доступу до широкого асортименту літератури, створення інтуїтивного інтерфейсу для користувачів, підтримка ефективного управління каталогом і замовленнями для адміністраторів.</p>
            <ul>
              <li><strong>Посилання на виконані завдання:</strong> <a href="assets/task5/app/task5.html" target="_blank" rel="noopener">assets/task5/app/task5.html</a></li>
              <li><strong>Посилання на репозиторій власного WEB-застосунку:</strong> <a href="https://github.com/layd64/IP-34_appWEB-Burakov-Stanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_appWEB-Burakov-Stanislav-FIOT-2025</a></li>
              <li><strong>Посилання на живу сторінку власного WEB-застосунку:</strong> <a href="https://layd64.github.io/IP-34_appWEB-Burakov-Stanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_appWEB-Burakov-Stanislav-FIOT-2025/</a></li>
              <li><strong>Посилання на репозиторій звітного HTML-документа:</strong> <a href="https://github.com/layd64/IP-34_appRECORD-BurakovStanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_appRECORD-BurakovStanislav-FIOT-2025</a></li>
              <li><strong>Посилання на живу сторінку звітного HTML-документа:</strong> <a href="https://layd64.github.io/IP-34_appRECORD-BurakovStanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_appRECORD-BurakovStanislav-FIOT-2025/</a></li>
              <li><strong>Посилання на репозиторій з самостійними роботами:</strong> <a href="https://github.com/layd64/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025</a></li>
              <li><strong>Посилання на живу сторінку з самостійними роботами:</strong> <a href="https://layd64.github.io/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025/</a></li>
              <li><strong>Посилання на макет сторінки у Figma:</strong> <a href="https://www.figma.com/design/JzXNXmCqtPJ3gEQfRZUPc1/BookStore-Pro?node-id=0-1&t=XVJOPUvVyByF5fVK-1" target="_blank" rel="noopener">figma.com/design/JzXNXmCqtPJ3gEQfRZUPc1/BookStore-Pro?node-id=0-1&t=XVJOPUvVyByF5fVK-1/</a></li>
            </ul>
          </div>
        `;
  }

  if (key === 'task1.1' && lab === '6') {
    html = `
          <div>
            <h4>Завдання 1.1</h4>
            <p><strong>Опис:</strong> Реалізація функції createProduct, яка приймає об'єкт товару та callback-функцію. Функція створює новий продукт з унікальним id та викликає callback з цим продуктом. Продемонстровано використання функцій вищого порядку та стрілочних функцій.</p>
            
            <h5>Посилання на застосунок:</h5>
            <p><a href="assets/task5/app/task5.html" target="_blank" rel="noopener">assets/task5/app/task5.html</a></p>
            
            <h5>Програмний код:</h5>
            <pre><code>// Завдання 1.1: Функції для роботи з продуктами
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

// Використання:
const productObj = { name: 'Телефон', price: 10000, quantity: 2 };
createProduct(productObj, logProduct);
createProduct(productObj, logTotalPrice);</code></pre>

            <h5>Скріншоти результатів виконання:</h5>
            <div>
              <figure>
                <img src="assets/task5/screenshots/task1.1.png" alt="Скріншот завдання 1.1" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
            </div>
            
            <h5>Пояснення:</h5>
            <p>Функція createProduct використовує оператор spread (...) для копіювання властивостей об'єкта та додає унікальний id на основі поточного часу та випадкового числа. Callback-функції logProduct та logTotalPrice демонструють різні способи обробки продукту: логування самого продукту та обчислення загальної вартості з урахуванням кількості.</p>
          </div>
        `;
  }

  if (key === 'task1.3' && lab === '6') {
    html = `
          <div>
            <h4>Завдання 1.3</h4>
            <p><strong>Опис:</strong> Реалізація функції для роботи з медикаментами. Потрібно отримати масив назв препаратів, прибрати медикаменти з простроченим строком зберігання та відсортувати валідні медикаменти за датою виготовлення.</p>
            
            <h5>Посилання на застосунок:</h5>
            <p><a href="assets/task5/app/task5.html" target="_blank" rel="noopener">assets/task5/app/task5.html</a></p>
            
            <h5>Програмний код:</h5>
            <pre><code>// Завдання 1.3: Робота з медикаментами
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
};</code></pre>

            <h5>Скріншоти результатів виконання:</h5>
            <div>
              <figure>
                <img src="assets/task5/screenshots/task1.3.png" alt="Скріншот завдання 1.3" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
            </div>
            
            <h5>Пояснення:</h5>
            <p>Використано метод Object.keys() для отримання масиву назв препаратів. Object.entries() дозволяє отримати пари ключ-значення для подальшої обробки. Метод filter() видаляє медикаменти з простроченим строком зберігання, порівнюючи дату з поточною. Метод sort() сортує медикаменти за датою виготовлення у зростаючому порядку. Метод map() трансформує масив пар [назва, дата] у масив назв.</p>
          </div>
        `;
  }

  if (key === 'task1.5' && lab === '6') {
    html = `
          <div>
            <h4>Завдання 1.5</h4>
            <p><strong>Опис:</strong> Реалізація функції для обробки масиву фруктів. Потрібно додати id до кожного фрукту та застосувати знижку 20% до ціни.</p>
            
            <h5>Посилання на застосунок:</h5>
            <p><a href="assets/task5/app/task5.html" target="_blank" rel="noopener">assets/task5/app/task5.html</a></p>
            
            <h5>Програмний код:</h5>
            <pre><code>// Завдання 1.5: Робота з фруктами
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
};</code></pre>

            <h5>Скріншоти результатів виконання:</h5>
            <div>
              <figure>
                <img src="assets/task5/screenshots/task1.5.png" alt="Скріншот завдання 1.5" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
            </div>
            
            <h5>Пояснення:</h5>
            <p>Використано метод map() для трансформації масиву фруктів. Кожному фрукту додається id на основі індексу, а ціна зменшується на 20% (множиться на 0.8). Використано стрілочну функцію та короткий синтаксис об'єктного літералу для створення нового об'єкта з оновленими властивостями.</p>
          </div>
        `;
  }

  if (key === 'task1.7' && lab === '6') {
    html = `
          <div>
            <h4>Завдання 1.7</h4>
            <p><strong>Опис:</strong> Реалізація класу Client з приватними властивостями #login та #email. Клас повинен мати геттери та сеттери для доступу до цих властивостей.</p>
            
            <h5>Посилання на застосунок:</h5>
            <p><a href="assets/task5/app/task5.html" target="_blank" rel="noopener">assets/task5/app/task5.html</a></p>
            
            <h5>Програмний код:</h5>
            <pre><code>// Завдання 1.7: Клас Client з приватними властивостями
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
};</code></pre>

            <h5>Скріншоти результатів виконання:</h5>
            <div>
              <figure>
                <img src="assets/task5/screenshots/task1.7.png" alt="Скріншот завдання 1.7" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
            </div>
            
            <h5>Пояснення:</h5>
            <p>Використано синтаксис приватних полів класу з префіксом #. Це забезпечує інкапсуляцію даних, роблячи властивості недоступними ззовні класу. Геттери та сеттери дозволяють контролювати доступ до приватних властивостей та валідувати дані при необхідності.</p>
          </div>
        `;
  }

  if (key === 'task1.9' && lab === '6') {
    html = `
          <div>
            <h4>Завдання 1.9</h4>
            <p><strong>Опис:</strong> Реалізація функції для підрахунку кількості кожного тегу в масиві твітів. Потрібно зібрати статистику використання тегів.</p>
            
            <h5>Посилання на застосунок:</h5>
            <p><a href="assets/task5/app/task5.html" target="_blank" rel="noopener">assets/task5/app/task5.html</a></p>
            
            <h5>Програмний код:</h5>
            <pre><code>// Завдання 1.9: Підрахунок тегів
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
};</code></pre>

            <h5>Скріншоти результатів виконання:</h5>
            <div>
              <figure>
                <img src="assets/task5/screenshots/task1.9.png" alt="Скріншот завдання 1.9" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
            </div>
            
            <h5>Пояснення:</h5>
            <p>Використано вкладені цикли forEach() для обходу масиву твітів та масиву тегів у кожному твіті. Використано об'єкт tagCounts як акумулятор для зберігання кількості кожного тегу. Використано логічний оператор || для ініціалізації лічильника тегу значенням 0, якщо тег ще не зустрічався. Це демонструє роботу з вкладеними структурами даних та агрегацію даних.</p>
          </div>
        `;
  }

  if (key === 'task1.10' && lab === '6') {
    html = `
          <div>
            <h4>Завдання 1.10</h4>
            <p><strong>Опис:</strong> Реалізація функції для перевірки правильності закриття дужок у рядку. Потрібно перевірити, чи всі дужки ((), {}, []) правильно закриті та парні.</p>
            
            <h5>Посилання на застосунок:</h5>
            <p><a href="assets/task5/app/task5.html" target="_blank" rel="noopener">assets/task5/app/task5.html</a></p>
            
            <h5>Програмний код:</h5>
            <pre><code>// Завдання 1.10: Перевірка правильності закриття дужок
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
        console.log(\`"\${testCase.substring(0, 30)}..." => \${result}\`);
    });
};</code></pre>

            <h5>Скріншоти результатів виконання:</h5>
            <div>
              <figure>
                <img src="assets/task5/screenshots/task1.10.png" alt="Скріншот завдання 1.10" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
            </div>
            
            <h5>Пояснення:</h5>
            <p>Алгоритм використовує структуру даних "стек" (stack) для відстеження відкритих дужок. При зустрічі відкриваючої дужки вона додається до стеку. При зустрічі закриваючої дужки перевіряється, чи відповідає вона останній відкритій дужці зі стеку. Якщо стек порожній після обробки всього рядка, всі дужки правильно закриті. Це класичний приклад використання стеку для розв'язання задач перевірки вкладеності.</p>
          </div>
        `;
  }

  if (key === 'task2.1' && lab === '6') {
    html = `
          <div>
            <h4>Завдання 2.1</h4>
            <p><strong>Опис:</strong> Реалізація функції для об'єднання всіх values з масивів об'єктів в один масив. Використати метод flatMap() для трансформації та "сплющення" масиву.</p>
            
            <h5>Посилання на застосунок:</h5>
            <p><a href="assets/task5/app/task5.html" target="_blank" rel="noopener">assets/task5/app/task5.html</a></p>
            
            <h5>Програмний код:</h5>
            <pre><code>// Завдання 2.1: Об'єднати всі values з масивів в один масив
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
};</code></pre>

            <h5>Скріншоти результатів виконання:</h5>
            <div>
              <figure>
                <img src="assets/task5/screenshots/task2.1.png" alt="Скріншот завдання 2.1" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
            </div>
            
            <h5>Пояснення:</h5>
            <p>Метод flatMap() поєднує функціональність map() та flat(). Він застосовує функцію до кожного елемента масиву та "сплющує" результат на один рівень глибини. У цьому випадку кожен об'єкт трансформується в масив values, а потім всі масиви об'єднуються в один плоский масив. Це ефективніше за послідовне використання map() та flat().</p>
          </div>
        `;
  }

  if (key === 'task2.3' && lab === '6') {
    html = `
          <div>
            <h4>Завдання 2.3</h4>
            <p><strong>Опис:</strong> Реалізація функції для перевірки, чи всі числа в масиві є парними. Використати метод every() для перевірки умови для всіх елементів.</p>
            
            <h5>Посилання на застосунок:</h5>
            <p><a href="assets/task5/app/task5.html" target="_blank" rel="noopener">assets/task5/app/task5.html</a></p>
            
            <h5>Програмний код:</h5>
            <pre><code>// Завдання 2.3: Перевірити, чи всі числа парні
const checkAllEven = () => {
    const numbers = [2, 4, 6, 8, 10];
    
    const allEven = numbers.every(num => num % 2 === 0);
    
    console.log('Масив чисел:', numbers);
    console.log('Всі числа парні?', allEven);
    
    return allEven;
};</code></pre>

            <h5>Скріншоти результатів виконання:</h5>
            <div>
              <figure>
                <img src="assets/task5/screenshots/task2.3.png" alt="Скріншот завдання 2.3" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
            </div>
            
            <h5>Пояснення:</h5>
            <p>Метод every() повертає true, якщо всі елементи масиву задовольняють заданій умові. У цьому випадку перевіряється, чи залишок від ділення кожного числа на 2 дорівнює 0, що означає парність. Метод every() зупиняється при першому елементі, який не задовольняє умову, повертаючи false. Якщо всі елементи пройшли перевірку, повертається true.</p>
          </div>
        `;
  }

  if (key === 'task2.5' && lab === '6') {
    html = `
          <div>
            <h4>Завдання 2.5</h4>
            <p><strong>Опис:</strong> Реалізація функції для сортування масиву рядків за алфавітом. Використати метод sort() для сортування масиву.</p>
            
            <h5>Посилання на застосунок:</h5>
            <p><a href="assets/task5/app/task5.html" target="_blank" rel="noopener">assets/task5/app/task5.html</a></p>
            
            <h5>Програмний код:</h5>
            <pre><code>// Завдання 2.5: Відсортувати масив рядків за алфавітом
const sortStrings = () => {
    const stringArray = ['banana', 'orange', 'apple', 'pear'];
    
    const sorted = [...stringArray].sort();
    
    console.log('Початковий масив:', stringArray);
    console.log('Відсортований масив:', sorted);
    
    return sorted;
};</code></pre>

            <h5>Скріншоти результатів виконання:</h5>
            <div>
              <figure>
                <img src="assets/task5/screenshots/task2.5.png" alt="Скріншот завдання 2.5" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
            </div>
            
            <h5>Пояснення:</h5>
            <p>Метод sort() сортує елементи масиву на місці та повертає відсортований масив. Для рядків використовується алфавітне сортування за замовчуванням. Оператор spread (...) використовується для створення копії масиву перед сортуванням, щоб не змінювати оригінальний масив. Це демонструє принцип іммутабельності даних.</p>
          </div>
        `;
  }

  if (key === 'task2.7' && lab === '6') {
    html = `
          <div>
            <h4>Завдання 2.7</h4>
            <p><strong>Опис:</strong> Реалізація класу Calculator з методом chaining (ланцюжковим викликом методів). Клас повинен підтримувати послідовні виклики методів для виконання математичних операцій.</p>
            
            <h5>Посилання на застосунок:</h5>
            <p><a href="assets/task5/app/task5.html" target="_blank" rel="noopener">assets/task5/app/task5.html</a></p>
            
            <h5>Програмний код:</h5>
            <pre><code>// Завдання 2.7: Клас Calculator з методом chaining
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
};</code></pre>

            <h5>Скріншоти результатів виконання:</h5>
            <div>
              <figure>
                <img src="assets/task5/screenshots/task2.7.png" alt="Скріншот завдання 2.7" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
              </figure>
            </div>
            
            <h5>Пояснення:</h5>
            <p>Метод chaining реалізується шляхом повернення this з методів класу. Це дозволяє послідовно викликати методи на одному об'єкті. Клас Calculator зберігає поточне значення у властивості value. Кожен метод (add, subtract, multiply, divide) модифікує це значення та повертає this для подальших викликів. Метод number() встановлює початкове значення. Додано обробку помилок для випадку ділення на нуль. Це демонструє патерн Fluent Interface та роботу з контекстом виклику (this).</p>
          </div>
        `;
  }

  if (key === 'conclusion' && lab === '6') {
    html = `
          <div>
            <h4>Висновки</h4>
            <p>У ході практичної роботи №5 було вивчено основи роботи з об'єктами, методами об'єктів, класами та прототипами в JavaScript. Освоєно використання функцій вищого порядку, стрілочних функцій та замикань для створення більш елегантного та функціонального коду.</p>
            <p>Реалізовано функції з використанням callback-функцій, що демонструє концепцію функцій вищого порядку. Вивчено роботу з методами масивів: map(), filter(), sort(), forEach(), flatMap(), every(). Ці методи дозволяють працювати з масивами в функціональному стилі, роблячи код більш читабельним та підтримуваним.</p>
            <p>Освоєно роботу з приватними полями з префіксом #, геттерами та сеттерами. Реалізовано клас Client з інкапсуляцією даних та клас Calculator з методом chaining, що демонструє використання контексту виклику.</p>
            <p>Реалізовано алгоритми для роботи з датами, об'єктами та масивами: фільтрація медикаментів за строком зберігання, сортування даних, підрахунок статистики тегів, перевірка правильності закриття дужок з використанням структури даних "стек".</p>
            <p>Практична робота дозволила закріпити теоретичні знання про об'єктно-орієнтоване програмування в JavaScript, функціональне програмування, роботу з методами масивів та об'єктів, а також отримати практичний досвід створення класів та використання сучасних можливостей мови JavaScript для написання чистого та ефективного коду.</p>
          </div>
        `;
  }

  // Lab 6 (System 7) Content
  if (key === 'topic' && lab === '7') {
    html = `
      <div>
        <p><strong>Тема практичної:</strong> ПРОТОТИПИ. КЛАСИ. ОБ'ЄКТНА МОДЕЛЬ ДОКУМЕНТА (DOM). ПОДІЇ. ОБ'ЄКТ ПОДІЇ. ДЕЛЕГУВАННЯ ПОДІЙ. </p>
        <p><strong>Мета практичної:</strong> придбати практичні навички роботи з DOM, подіями. делегуванням подій. </p>
        <p><strong>Назва проєкту:</strong> BookStore Pro</p>
        <p><strong>Тема проєкту:</strong> Веб-застосунок для онлайн-магазину книг</p>
        <p><strong>Мета проєкту:</strong> Прискорення та спрощення процесу купівлі книг, забезпечення зручного доступу до широкого асортименту літератури, створення інтуїтивного інтерфейсу для користувачів, підтримка ефективного управління каталогом і замовленнями для адміністраторів.</p>
        <ul>
          <li><strong>Посилання на виконані завдання:</strong> <a href="assets/task6/app/index.html" target="_blank">assets/task6/app/index.html</a></li>
          <li><strong>Посилання на репозиторій власного WEB-застосунку:</strong> <a href="https://github.com/layd64/IP-34_appWEB-Burakov-Stanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_appWEB-Burakov-Stanislav-FIOT-2025</a></li>
          <li><strong>Посилання на живу сторінку власного WEB-застосунку:</strong> <a href="https://layd64.github.io/IP-34_appWEB-Burakov-Stanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_appWEB-Burakov-Stanislav-FIOT-2025/</a></li>
          <li><strong>Посилання на репозиторій звітного HTML-документа:</strong> <a href="https://github.com/layd64/IP-34_appRECORD-BurakovStanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_appRECORD-BurakovStanislav-FIOT-2025</a></li>
          <li><strong>Посилання на живу сторінку звітного HTML-документа:</strong> <a href="https://layd64.github.io/IP-34_appRECORD-BurakovStanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_appRECORD-BurakovStanislav-FIOT-2025/</a></li>
          <li><strong>Посилання на репозиторій з самостійними роботами:</strong> <a href="https://github.com/layd64/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025</a></li>
          <li><strong>Посилання на живу сторінку з самостійними роботами:</strong> <a href="https://layd64.github.io/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025/</a></li>
          <li><strong>Посилання на макет сторінки у Figma:</strong> <a href="https://www.figma.com/design/JzXNXmCqtPJ3gEQfRZUPc1/BookStore-Pro?node-id=0-1&t=XVJOPUvVyByF5fVK-1" target="_blank" rel="noopener">figma.com/design/JzXNXmCqtPJ3gEQfRZUPc1/BookStore-Pro?node-id=0-1&t=XVJOPUvVyByF5fVK-1/</a></li>
        </ul>
      </div>
    `;
  }

  if (key === 'modal-window' && lab === '7') {
    html = `
      <div>
        <h4>Модальне вікно у власному застосунку</h4>
        <p>У власному застосунку BookStore Pro реалізовано модальне вікно для перегляду деталей книги. При кліку на картку книги відкривається модальне вікно з розширеною інформацією: назва, автор, опис, ціна та кнопка додавання в кошик.</p>
        
        <h5>HTML (index.html)</h5>
        <pre><code>&lt;div id="bookModal" class="modal"&gt;
    &lt;div class="modal-backdrop"&gt;&lt;/div&gt;
    &lt;div class="modal-content"&gt;
        &lt;button class="modal-close" aria-label="Close modal"&gt;&times;&lt;/button&gt;
        &lt;div class="modal-body"&gt;
            &lt;img id="modalImage" src="" alt="Book Cover" class="modal-image"&gt;
            &lt;div class="modal-info"&gt;
                &lt;p id="modalPrice" class="modal-price"&gt;&lt;/p&gt;
                &lt;h2 id="modalTitle" class="modal-title"&gt;&lt;/h2&gt;
                &lt;p id="modalAuthor" class="modal-author"&gt;&lt;/p&gt;
                &lt;p id="modalDescription" class="modal-description"&gt;&lt;/p&gt;
                &lt;button class="modal-cart-btn"&gt;В КОШИК&lt;/button&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>

        <h5>CSS (styles.css)</h5>
        <pre><code>.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    animation: fadeIn 0.3s ease;
}

.modal.active {
    display: block;
}</code></pre>

        <h5>JavaScript (script.js)</h5>
        <pre><code>// --- Book Modal Logic ---
const bookModal = document.getElementById('bookModal');
const booksGrid = document.querySelector('.books-grid');
const modalImage = document.getElementById('modalImage');
const modalPrice = document.getElementById('modalPrice');
const modalTitle = document.getElementById('modalTitle');
const modalAuthor = document.getElementById('modalAuthor');
const modalDescription = document.getElementById('modalDescription');
const modalCartBtn = document.querySelector('.modal-cart-btn');

// Delegate click event on parent element .books-grid
booksGrid.addEventListener('click', function (event) {
    const bookCard = event.target.closest('.book-card');
    const addToCartBtn = event.target.closest('button');

    if (bookCard) {
        // Get data from book card
        const image = bookCard.querySelector('.book-image').src;
        const price = bookCard.querySelector('.book-price').textContent;
        const title = bookCard.querySelector('h3').textContent;
        const author = bookCard.querySelector('.book-author').textContent;
        const description = bookCard.getAttribute('data-description');

        const bookData = { image, price, title, author, description };

        if (addToCartBtn) {
            // Add to cart directly
            addToCart(bookData);
        } else {
            // Open modal
            modalImage.src = image;
            modalPrice.textContent = price;
            modalTitle.textContent = title;
            modalAuthor.textContent = author;
            modalDescription.textContent = description;

            // Store current book data on the modal button for adding to cart later
            modalCartBtn.onclick = function () {
                addToCart(bookData);
                bookModal.classList.remove('active');
                document.body.style.overflow = '';
            };

            bookModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }
});

// Generic Modal Closing Logic
const modals = document.querySelectorAll('.modal');
const closeButtons = document.querySelectorAll('.modal-close');
const backdrops = document.querySelectorAll('.modal-backdrop');

function closeAllModals() {
    modals.forEach(modal => modal.classList.remove('active'));
    document.body.style.overflow = '';
}

closeButtons.forEach(btn => {
    btn.addEventListener('click', closeAllModals);
});

backdrops.forEach(backdrop => {
    backdrop.addEventListener('click', closeAllModals);
});

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeAllModals();
    }
});</code></pre>

        <h5>Скріншоти результатів виконання:</h5>
        <div>
          <figure>
            <img src="assets/task6/screenshots/modal.png" alt="Скріншот модального вікна" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
            <figcaption>Вигляд модального вікна з детальною інформацією про книгу</figcaption>
          </figure>
        </div>

        <h5>Пояснення:</h5>
        <p><strong>Делегування подій:</strong> Замість додавання слухача подій на кожну картку книги, використовується один слухач на батьківському елементі <code>.books-grid</code>. Це оптимізує продуктивність, особливо при великій кількості елементів.</p>
        <p><strong>Відкриття модального вікна:</strong> При кліку на картку (але не на кнопку "В кошик") зчитуються дані з DOM-елементів картки (зображення, ціна, заголовок, автор) та атрибуту <code>data-description</code>. Ці дані динамічно вставляються у відповідні елементи модального вікна.</p>
        <p><strong>Закриття модального вікна:</strong> Реалізовано універсальну функцію <code>closeAllModals</code>, яка спрацьовує при кліку на кнопку закриття (хрестик), на затемнений фон (backdrop) або при натисканні клавіші Escape.</p>
        <p><strong>Блокування прокрутки:</strong> При відкритті модального вікна до <code>body</code> додається стиль <code>overflow: hidden</code>, щоб запобігти прокрутці основної сторінки.</p>
      </div>
    `;
  }

  if (key === 'task1' && lab === '7') {
    html = `
      <div>
        <h4>Завдання 1: SHOW ME</h4>
        <p><strong>Опис:</strong> Реалізовано функціонал, де при кліку на кнопку текст з інпуту виводиться в консоль. Це базовий приклад роботи з подією click та доступу до властивостей DOM-елементів.</p>
        
        <h5>Посилання на застосунок:</h5>
        <p><a href="assets/task6/app/index.html" target="_blank">assets/task6/app/index.html</a></p>

        <h5>HTML</h5>
        <pre><code>&lt;input type="text" id="task1Input" placeholder="Введіть текст..."&gt;
&lt;button id="task1Button"&gt;SHOW ME&lt;/button&gt;</code></pre>

        <h5>JavaScript</h5>
        <pre><code>const task1Button = document.getElementById('task1Button');
const task1Input = document.getElementById('task1Input');

task1Button.addEventListener('click', () => {
    console.log(task1Input.value);
});</code></pre>

        <h5>Скріншоти результатів виконання:</h5>
        <div>
          <figure>
            <img src="assets/task6/screenshots/task6_1.png" alt="Скріншот завдання 1" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
          </figure>
        </div>

        <h5>Пояснення:</h5>
        <p>Використовується метод addEventListener для додавання слухача події 'click' на кнопку. При кліку зчитується значення властивості value інпуту та виводиться в консоль.</p>
      </div>
    `;
  }

  if (key === 'task3' && lab === '7') {
    html = `
      <div>
        <h4>Завдання 3: Приховати/Розкрити</h4>
        <p><strong>Опис:</strong> Реалізовано кнопку, яка приховує введені дані в інпуті (замінює на зірочки) та розкриває їх назад. Це імітує функціонал показу/приховування паролю.</p>
        
        <h5>Посилання на застосунок:</h5>
        <p><a href="assets/task6/app/index.html" target="_blank">assets/task6/app/index.html</a></p>

        <h5>HTML</h5>
        <pre><code>&lt;input type="text" id="task3Input" placeholder="Введіть текст..."&gt;
&lt;button id="task3Button"&gt;Приховати&lt;/button&gt;</code></pre>

        <h5>JavaScript</h5>
        <pre><code>const task3Button = document.getElementById('task3Button');
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
});</code></pre>

        <h5>Скріншоти результатів виконання:</h5>
        <div>
          <figure>
            <img src="assets/task6/screenshots/task6_3.png" alt="Скріншот завдання 3" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
          </figure>
        </div>

        <h5>Пояснення:</h5>
        <p>Змінна isHidden відстежує поточний стан. При приховуванні оригінальне значення зберігається, а в інпут записується рядок із зірочок тієї ж довжини. При розкритті оригінальне значення повертається в інпут.</p>
      </div>
    `;
  }

  if (key === 'task5' && lab === '7') {
    html = `
      <div>
        <h4>Завдання 5: Клік у зеленому прямокутнику</h4>
        <p><strong>Опис:</strong> Відслідковування кліку: чи відбувся він всередині зеленого прямокутника, чи зовні. Демонстрація роботи з координатами та перевіркою цільового елемента події.</p>
        
        <h5>Посилання на застосунок:</h5>
        <p><a href="assets/task6/app/index.html" target="_blank">assets/task6/app/index.html</a></p>

        <h5>HTML</h5>
        <pre><code>&lt;div id="place"&gt;&lt;/div&gt;</code></pre>

        <h5>CSS</h5>
        <pre><code>#place {
    width: 200px;
    height: 100px;
    background-color: green;
}</code></pre>

        <h5>JavaScript</h5>
        <pre><code>window.addEventListener('click', (event) => {
    const place = document.getElementById('place');
    const isInsidePlace = place.contains(event.target);
    console.log(isInsidePlace);
});</code></pre>

        <h5>Скріншоти результатів виконання:</h5>
        <div>
          <figure>
            <img src="assets/task6/screenshots/task6_5.png" alt="Скріншот завдання 5" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
          </figure>
        </div>

        <h5>Пояснення:</h5>
        <p>Слухач подій додається на об'єкт window. Метод Node.contains() перевіряє, чи є event.target (елемент, по якому клікнули) нащадком елемента place або самим елементом place.</p>
      </div>
    `;
  }

  if (key === 'task7' && lab === '7') {
    html = `
      <div>
        <h4>Завдання 7: Список категорій</h4>
        <p><strong>Опис:</strong> Підрахунок кількості категорій та елементів у кожній категорії. Робота з навігацією по DOM-дереву.</p>
        
        <h5>Посилання на застосунок:</h5>
        <p><a href="assets/task6/app/index.html" target="_blank">assets/task6/app/index.html</a></p>

        <h5>HTML</h5>
        <pre><code>&lt;ul id="categories"&gt;
    &lt;li class="item"&gt;
        &lt;h2&gt;Animals&lt;/h2&gt;
        &lt;ul&gt;
            &lt;li&gt;Cat&lt;/li&gt;
            &lt;li&gt;Hamster&lt;/li&gt;
            &lt;li&gt;Horse&lt;/li&gt;
            &lt;li&gt;Parrot&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/li&gt;
    &lt;!-- ... --&gt;
&lt;/ul&gt;</code></pre>

        <h5>JavaScript</h5>
        <pre><code>const categories = document.querySelectorAll('#categories .item');
console.log('Number of categories:', categories.length);

categories.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const itemsCount = category.querySelectorAll('li').length;
    console.log('Category:', title);
    console.log('Elements:', itemsCount);
});</code></pre>

        <h5>Скріншоти результатів виконання:</h5>
        <div>
          <figure>
            <img src="assets/task6/screenshots/task6_7.png" alt="Скріншот завдання 7" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
          </figure>
        </div>

        <h5>Пояснення:</h5>
        <p>Використовується querySelectorAll для отримання всіх елементів категорій. Потім за допомогою forEach відбувається ітерація по кожній категорії, де знаходяться заголовок та кількість вкладених елементів списку.</p>
      </div>
    `;
  }

  if (key === 'task8' && lab === '7') {
    html = `
      <div>
        <h4>Завдання 8: Форма логіна</h4>
        <p><strong>Опис:</strong> Обробка відправки форми, валідація полів та виведення даних об'єктом у консоль. Запобігання перезавантаженню сторінки.</p>
        
        <h5>Посилання на застосунок:</h5>
        <p><a href="assets/task6/app/index.html" target="_blank">assets/task6/app/index.html</a></p>

        <h5>HTML</h5>
        <pre><code>&lt;form class="login-form"&gt;
    &lt;label&gt;
        Email
        &lt;input type="email" name="email" /&gt;
    &lt;/label&gt;
    &lt;label&gt;
        Password
        &lt;input type="password" name="password" /&gt;
    &lt;/label&gt;
    &lt;button type="submit"&gt;Log in&lt;/button&gt;
&lt;/form&gt;</code></pre>

        <h5>JavaScript</h5>
        <pre><code>const loginForm = document.querySelector('.login-form');

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
});</code></pre>

        <h5>Скріншоти результатів виконання:</h5>
        <div>
          <figure>
            <img src="assets/task6/screenshots/task6_8.png" alt="Скріншот завдання 8" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
          </figure>
        </div>

        <h5>Пояснення:</h5>
        <p>Метод event.preventDefault() запобігає стандартній відправці форми. Доступ до полів форми здійснюється через властивість elements. Після успішної валідації дані збираються в об'єкт, а форма очищується методом reset().</p>
      </div>
    `;
  }

  if (key === 'task9' && lab === '7') {
    html = `
      <div>
        <h4>Завдання 9: Зміна кольору фону</h4>
        <p><strong>Опис:</strong> Зміна кольору фону сторінки на випадковий hex-колір при кліку на кнопку. Демонстрація роботи з інлайн-стилями через JavaScript.</p>
        
        <h5>Посилання на застосунок:</h5>
        <p><a href="assets/task6/app/index.html" target="_blank">assets/task6/app/index.html</a></p>

        <h5>HTML</h5>
        <pre><code>&lt;div class="widget"&gt;
    &lt;p&gt;Background color: &lt;span class="color"&gt;-&lt;/span&gt;&lt;/p&gt;
    &lt;button type="button" class="change-color"&gt;Change color&lt;/button&gt;
&lt;/div&gt;</code></pre>

        <h5>JavaScript</h5>
        <pre><code>function getRandomHexColor() {
    return \`#\${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}\`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

changeColorBtn.addEventListener('click', () => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
    colorSpan.textContent = color;
});</code></pre>

        <h5>Скріншоти результатів виконання:</h5>
        <div>
          <figure>
            <img src="assets/task6/screenshots/task6_9.png" alt="Скріншот завдання 9" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
          </figure>
        </div>

        <h5>Пояснення:</h5>
        <p>Функція getRandomHexColor генерує випадковий колір. При кліку на кнопку цей колір присвоюється властивості document.body.style.backgroundColor, а також виводиться текстове значення кольору.</p>
      </div>
    `;
  }

  if (key === 'task10' && lab === '7') {
    html = `
      <div>
        <h4>Завдання 10: Створення колекції елементів</h4>
        <p><strong>Опис:</strong> Створення та очищення колекції квадратів з випадковим кольором та зростаючим розміром. Робота з динамічним створенням та видаленням елементів DOM.</p>
        
        <h5>Посилання на застосунок:</h5>
        <p><a href="assets/task6/app/index.html" target="_blank">assets/task6/app/index.html</a></p>

        <h5>HTML</h5>
        <pre><code>&lt;div id="controls"&gt;
    &lt;input type="number" min="1" max="100" step="1" /&gt;
    &lt;button type="button" data-create&gt;Create&lt;/button&gt;
    &lt;button type="button" data-destroy&gt;Destroy&lt;/button&gt;
&lt;/div&gt;
&lt;div id="boxes"&gt;&lt;/div&gt;</code></pre>

        <h5>JavaScript</h5>
        <pre><code>const controls = document.querySelector('#controls');
const input = controls.querySelector('input');
const createBtn = controls.querySelector('[data-create]');
const destroyBtn = controls.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

function createBoxes(amount) {
    const boxes = [];
    let size = 30;

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = \`\${size}px\`;
        box.style.height = \`\${size}px\`;
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

destroyBtn.addEventListener('click', destroyBoxes);</code></pre>

        <h5>Скріншоти результатів виконання:</h5>
        <div>
          <figure>
            <img src="assets/task6/screenshots/task6_10.png" alt="Скріншот завдання 10" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
          </figure>
        </div>

        <h5>Пояснення:</h5>
        <p>Функція createBoxes створює масив div-елементів з заданими стилями та додає їх у контейнер за одну операцію append(...boxes) для оптимізації продуктивності. destroyBoxes очищує вміст контейнера через innerHTML = ''.</p>
      </div>
    `;
  }

  if (key === 'conclusion' && lab === '7') {
    html = `
      <div>
        <h4>Висновки</h4>
        <p>У ході виконання лабораторної роботи було набуто практичних навичок роботи з подіями в JavaScript. Реалізовано обробку кліків, відправку форм, зміну стилів елементів та динамічне створення DOM-елементів. Також розглянуто роботу з об'єктом події та методами запобігання дефолтній поведінці браузера.</p>
        <p>Детально вивчено механізм делегування подій, що дозволяє оптимізувати продуктивність при роботі з великою кількістю елементів. Розглянуто методи роботи з координатами миші та елементів на сторінці. Отримано досвід створення інтерактивних інтерфейсів, таких як модальні вікна, галереї та динамічні списки.</p>
        <p>Виконання завдань сприяло кращому розумінню взаємодії користувача з веб-сторінкою та методів реагування на ці дії за допомогою JavaScript.</p>
      </div>
    `;
  }

  // Lab 7 (System 8) Content
  if (key === 'topic' && lab === '8') {
    html = `
      <div>
        <p><strong>Тема практичної:</strong> МОДУЛЬНОСТЬ КОДУ. NODE.JS. JSON. WEB STORAGE API. АСИНХРОННІСТЬ. ПРОМІСИ. HTTP-ЗАПИТИ. REST API. AJAX. КРОС-ДОМЕННІ ЗАПИТИ. ПАГІНАЦІЯ. CRUD</p>
        <p><strong>Мета практичної:</strong> придбати практичні навички роботи створення модального вікна; повторити процес створення макету, зокрема створення макету галереї довільних зображень; закріпити навички роботи з делегуванням подій.
Придбати практичні навички роботи створення промісу. Методи then(), catch(,finally().Ланцюжки промісів. Методи класу Promise. Протокол HTTP. Протокол HTTPS.. REST API Формат запиту. HTTP-методи. HTTP-заголовки. AJAX. Fetch API. Робота з публічним REST API</p>
        <p><strong>Назва проєкту:</strong> BookStore Pro</p>
        <p><strong>Тема проєкту:</strong> Веб-застосунок для онлайн-магазину книг</p>
        <p><strong>Мета проєкту:</strong> Прискорення та спрощення процесу купівлі книг, забезпечення зручного доступу до широкого асортименту літератури, створення інтуїтивного інтерфейсу для користувачів, підтримка ефективного управління каталогом і замовленнями для адміністраторів.</p>
        <ul>
          <li><strong>Посилання на виконані завдання:</strong> <a href="assets/task7/app/home.html" target="_blank">assets/task7/app/home.html</a></li>
          <li><strong>Посилання на репозиторій власного WEB-застосунку:</strong> <a href="https://github.com/layd64/IP-34_appWEB-Burakov-Stanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_appWEB-Burakov-Stanislav-FIOT-2025</a></li>
          <li><strong>Посилання на живу сторінку власного WEB-застосунку:</strong> <a href="https://layd64.github.io/IP-34_appWEB-Burakov-Stanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_appWEB-Burakov-Stanislav-FIOT-2025/</a></li>
          <li><strong>Посилання на репозиторій звітного HTML-документа:</strong> <a href="https://github.com/layd64/IP-34_appRECORD-BurakovStanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_appRECORD-BurakovStanislav-FIOT-2025</a></li>
          <li><strong>Посилання на живу сторінку звітного HTML-документа:</strong> <a href="https://layd64.github.io/IP-34_appRECORD-BurakovStanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_appRECORD-BurakovStanislav-FIOT-2025/</a></li>
          <li><strong>Посилання на репозиторій з самостійними роботами:</strong> <a href="https://github.com/layd64/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025</a></li>
          <li><strong>Посилання на живу сторінку з самостійними роботами:</strong> <a href="https://layd64.github.io/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025/</a></li>
          <li><strong>Посилання на макет сторінки у Figma:</strong> <a href="https://www.figma.com/design/JzXNXmCqtPJ3gEQfRZUPc1/BookStore-Pro?node-id=0-1&t=XVJOPUvVyByF5fVK-1" target="_blank" rel="noopener">figma.com/design/JzXNXmCqtPJ3gEQfRZUPc1/BookStore-Pro?node-id=0-1&t=XVJOPUvVyByF5fVK-1/</a></li>
        </ul>
      </div>
    `;
  }

  if (key === 'cart' && lab === '8') {
    html = `
      <div>
        <h4>Кошик у власному застосунку</h4>
        <p>У власному застосунку BookStore Pro реалізовано повнофункціональний кошик товарів. Дані про обрані книги зберігаються в <code>localStorage</code>, що забезпечує збереження стану кошика навіть після перезавантаження сторінки або закриття браузера.</p>
        
        <h5>HTML (index.html)</h5>
        <pre><code>&lt;div id="cartModal" class="modal"&gt;
    &lt;div class="modal-backdrop"&gt;&lt;/div&gt;
    &lt;div class="modal-content cart-modal-content"&gt;
        &lt;button class="modal-close" aria-label="Close modal"&gt;&times;&lt;/button&gt;
        &lt;div class="cart-modal-body"&gt;
            &lt;h2&gt;Ваш Кошик&lt;/h2&gt;
            &lt;div class="cart-items-container"&gt;
                &lt;!-- Cart items will be populated here --&gt;
                &lt;p class="empty-cart-message"&gt;Ваш кошик порожній&lt;/p&gt;
            &lt;/div&gt;
            &lt;div class="cart-pagination"&gt;&lt;/div&gt;
            &lt;div class="cart-footer"&gt;
                &lt;div class="cart-total"&gt;
                    &lt;span&gt;Разом:&lt;/span&gt;
                    &lt;span id="cartTotalAmount"&gt;0 грн&lt;/span&gt;
                &lt;/div&gt;
                &lt;button class="checkout-btn"&gt;ОФОРМИТИ ЗАМОВЛЕННЯ&lt;/button&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>

        <h5>JavaScript (script.js)</h5>
        <pre><code>// --- Cart Logic ---
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartBtn = document.getElementById('cartBtn');
const cartCount = document.getElementById('cartCount');
const cartItemsContainer = document.querySelector('.cart-items-container');
const cartTotalAmount = document.getElementById('cartTotalAmount');

function updateCartUI() {
    const count = cart.length;
    cartCount.textContent = count;
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(book) {
    cart.push(book);
    updateCartUI();
    alert(\`Книгу "\${book.title}" додано до кошика!\`);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
    renderCart();
}

function renderCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;

    // Calculate total price
    cart.forEach(item => {
        const priceValue = parseInt(item.price.replace(/\D/g, ''));
        total += priceValue;
    });
    cartTotalAmount.textContent = \`\${total} грн\`;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '&lt;p class="empty-cart-message"&gt;Ваш кошик порожній&lt;/p&gt;';
        return;
    }

    // Pagination Logic (simplified for display)
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = cart.slice(startIndex, endIndex);

    itemsToShow.forEach((item, i) => {
        const actualIndex = startIndex + i;
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = \`
            &lt;img src="\${item.image}" alt="\${item.title}" class="cart-item-image"&gt;
            &lt;div class="cart-item-details"&gt;
                &lt;div class="cart-item-title"&gt;\${item.title}&lt;/div&gt;
                &lt;div class="cart-item-author"&gt;\${item.author}&lt;/div&gt;
                &lt;div class="cart-item-price"&gt;\${item.price}&lt;/div&gt;
            &lt;/div&gt;
            &lt;button class="cart-item-remove" data-index="\${actualIndex}"&gt;&times;&lt;/button&gt;
        \`;
        cartItemsContainer.appendChild(cartItem);
    });

    // Add event listeners to remove buttons
    const removeButtons = document.querySelectorAll('.cart-item-remove');
    removeButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const index = parseInt(this.getAttribute('data-index'));
            removeFromCart(index);
        });
    });
}</code></pre>

        <h5>Скріншоти результатів виконання:</h5>
        <div>
          <figure>
            <img src="assets/task7/screenshots/cart.png" alt="Скріншот кошика" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
            <figcaption>Вигляд кошика з доданими товарами</figcaption>
          </figure>
        </div>

        <h5>Пояснення:</h5>
        <p><strong>LocalStorage:</strong> Використовується для зберігання масиву об'єктів книг. При завантаженні сторінки дані зчитуються з <code>localStorage.getItem('cart')</code>, а при будь-якій зміні (додавання/видалення) оновлюються через <code>localStorage.setItem</code>.</p>
        <p><strong>Додавання товару:</strong> Функція <code>addToCart</code> додає об'єкт книги до масиву <code>cart</code> та оновлює лічильник товарів у шапці сайту.</p>
        <p><strong>Рендеринг кошика:</strong> Функція <code>renderCart</code> очищує контейнер та заново створює HTML-елементи для кожного товару в кошику. Також вона підраховує загальну вартість, видаляючи нечислові символи з ціни (наприклад, "грн") для коректних математичних операцій.</p>
        <p><strong>Видалення товару:</strong> Кожен елемент кошика має кнопку видалення з атрибутом <code>data-index</code>. При кліку викликається функція <code>removeFromCart</code>, яка видаляє елемент з масиву за індексом та перемальовує кошик.</p>
        <p><strong>Пагінація:</strong> Реалізовано розбиття товарів на сторінки (по 5 товарів на сторінку), що дозволяє зручно переглядати велику кількість замовлень.</p>
      </div>
    `;
  }

  if (key === 'task1-gallery' && lab === '8') {
    html = `
      <div>
        <h4>Завдання 1. Галерея зображень</h4>
        <p><strong>Опис:</strong> Створено галерею зображень з використанням бібліотеки basicLightbox. Реалізовано делегування подій для обробки кліків по зображеннях та відкриття їх у модальному вікні.</p>
        
        <h5>Посилання на застосунок:</h5>
        <p><a href="assets/task7/app/index.html" target="_blank">assets/task7/app/index.html</a></p>

        <h5>HTML (index.html)</h5>
        <pre><code>&lt;div class="container"&gt;
    &lt;h1&gt;Галерея зображень&lt;/h1&gt;
    &lt;ul class="gallery"&gt;&lt;/ul&gt;
&lt;/div&gt;</code></pre>

        <h5>JavaScript (gallery.js)</h5>
        <pre><code>const images = [
    {
        preview: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        original: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
        description: 'Гірський пейзаж з озером',
    },
    // ... інші зображення
];

const gallery = document.querySelector('.gallery');

function createGalleryMarkup(images) {
    return images
        .map(({ preview, original, description }) => \`
    &lt;li class="gallery__item"&gt;
      &lt;a class="gallery__link" href="\${original}"&gt;
        &lt;img
          class="gallery__image"
          src="\${preview}"
          alt="\${description}"
          data-source="\${original}"
        /&gt;
      &lt;/a&gt;
    &lt;/li&gt;
  \`).join('');
}

gallery.innerHTML = createGalleryMarkup(images);

gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') return;

    const largeImageURL = event.target.dataset.source;
    const imageDescription = event.target.alt;

    const instance = basicLightbox.create(\`
    &lt;div class="modal"&gt;
      &lt;img src="\${imageURL}" alt="\${description}"&gt;
      &lt;p class="modal__description"&gt;\${description}&lt;/p&gt;
    &lt;/div&gt;
  \`);

    instance.show();
}</code></pre>

        <h5>Скріншоти результатів виконання:</h5>
        <div>
          <figure>
            <img src="assets/task7/screenshots/task7_1.png" alt="Скріншот завдання 1" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
          </figure>
        </div>

        <h5>Пояснення:</h5>
        <p>Масив об'єктів images містить дані про зображення. Функція createGalleryMarkup генерує HTML-розмітку галереї. Делегування подій на елементі ul.gallery дозволяє обробляти кліки по всіх зображеннях одним слухачем. Бібліотека basicLightbox використовується для створення та показу модального вікна з великим зображенням.</p>
      </div>
    `;
  }

  if (key === 'task2-feedback' && lab === '8') {
    html = `
      <div>
        <h4>Завдання 2. Форма зворотного зв'язку</h4>
        <p><strong>Опис:</strong> Реалізовано форму зворотного зв'язку, яка зберігає введені дані в LocalStorage. При перезавантаженні сторінки дані відновлюються з сховища. Це запобігає втраті даних користувача при випадковому оновленні сторінки.</p>
        
        <h5>Посилання на застосунок:</h5>
        <p><a href="assets/task7/app/2-form.html" target="_blank">assets/task7/app/2-form.html</a></p>

        <h5>HTML (2-form.html)</h5>
        <pre><code>&lt;form class="feedback-form" autocomplete="off"&gt;
    &lt;label&gt;
        Email
        &lt;input type="email" name="email" autofocus /&gt;
    &lt;/label&gt;
    &lt;label&gt;
        Message
        &lt;textarea name="message" rows="8"&gt;&lt;/textarea&gt;
    &lt;/label&gt;
    &lt;button type="submit"&gt;Submit&lt;/button&gt;
&lt;/form&gt;</code></pre>

        <h5>JavaScript (2-form.js)</h5>
        <pre><code>const STORAGE_KEY = 'feedback-form-state';
let formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');

function loadFormData() {
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        try {
            formData = JSON.parse(savedData);
            emailInput.value = formData.email || '';
            messageTextarea.value = formData.message || '';
        } catch (error) {
            console.error('Error parsing data:', error);
        }
    }
}

form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }
    console.log('Дані форми:', formData);
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
    formData = { email: '', message: '' };
});

loadFormData();</code></pre>

        <h5>Скріншоти результатів виконання:</h5>
        <div>
          <figure>
            <img src="assets/task7/screenshots/task7_2.png" alt="Скріншот завдання 2" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
          </figure>
        </div>

        <h5>Пояснення:</h5>
        <p>Подія input використовується для відстеження змін у полях форми та збереження їх у LocalStorage (з використанням JSON.stringify). При завантаженні сторінки функція loadFormData перевіряє наявність збережених даних та заповнює поля форми. При відправці форми (submit) дані виводяться в консоль, сховище очищується, а форма скидається.</p>
      </div>
    `;
  }

  if (key === 'task3-timer' && lab === '8') {
    html = `
      <div>
        <h4>Завдання 3. Таймер зворотного відліку</h4>
        <p><strong>Опис:</strong> Створено таймер зворотного відліку з використанням бібліотеки flatpickr для вибору дати та часу. Використовується iziToast для сповіщень. Таймер оновлює інтерфейс щосекунди, показуючи дні, години, хвилини та секунди до обраної дати.</p>
        
        <h5>Посилання на застосунок:</h5>
        <p><a href="assets/task7/app/1-timer.html" target="_blank">assets/task7/app/1-timer.html</a></p>

        <h5>HTML (1-timer.html)</h5>
        <pre><code>&lt;div class="controls"&gt;
    &lt;input type="text" id="datetime-picker" placeholder="Виберіть дату і час" /&gt;
    &lt;button type="button" data-start disabled&gt;Start&lt;/button&gt;
&lt;/div&gt;
&lt;div class="timer"&gt;
    &lt;div class="field"&gt;
        &lt;span class="value" data-days&gt;00&lt;/span&gt;
        &lt;span class="label"&gt;Days&lt;/span&gt;
    &lt;/div&gt;
    &lt;!-- ... --&gt;
&lt;/div&gt;</code></pre>

        <h5>JavaScript (1-timer.js)</h5>
        <pre><code>const dateTimePicker = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
// ... elements selection

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
            iziToast.error({ title: 'Помилка', message: 'Please choose a date in the future', position: 'topRight' });
            startButton.disabled = true;
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
            iziToast.success({ title: 'Завершено', message: 'Таймер завершив зворотний відлік!' });
            return;
        }

        updateTimerDisplay(convertMs(timeRemaining));
    }, 1000);
}

startButton.addEventListener('click', startTimer);</code></pre>

        <h5>Скріншоти результатів виконання:</h5>
        <div>
          <figure>
            <img src="assets/task7/screenshots/task7_3.png" alt="Скріншот завдання 3" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
          </figure>
        </div>

        <h5>Пояснення:</h5>
        <p>Бібліотека flatpickr налаштована для вибору дати та часу. Валідація дати відбувається в методі onClose. Таймер реалізовано через setInterval, який щосекунди обчислює різницю між поточною та обраною датою. Функція convertMs переводить мілісекунди в дні/години/хвилини/секунди, а addLeadingZero форматує числа.</p>
      </div>
    `;
  }

  if (key === 'task4-promise' && lab === '8') {
    html = `
      <div>
        <h4>Завдання 4. Генератор промісів</h4>
        <p><strong>Опис:</strong> Створено генератор промісів, який дозволяє створювати проміси з заданою затримкою та станом (fulfilled/rejected). Результат обробляється та виводиться через iziToast. Демонстрація роботи з Promise API.</p>
        
        <h5>Посилання на застосунок:</h5>
        <p><a href="assets/task7/app/2-snackbar.html" target="_blank">assets/task7/app/2-snackbar.html</a></p>

        <h5>HTML (2-snackbar.html)</h5>
        <pre><code>&lt;form class="form"&gt;
    &lt;label&gt;Delay (ms) &lt;input type="number" name="delay" required /&gt;&lt;/label&gt;
    &lt;fieldset&gt;
        &lt;legend&gt;State&lt;/legend&gt;
        &lt;label&gt;&lt;input type="radio" name="state" value="fulfilled" required /&gt; Fulfilled&lt;/label&gt;
        &lt;label&gt;&lt;input type="radio" name="state" value="rejected" required /&gt; Rejected&lt;/label&gt;
    &lt;/fieldset&gt;
    &lt;button type="submit"&gt;Create notification&lt;/button&gt;
&lt;/form&gt;</code></pre>

        <h5>JavaScript (2-snackbar.js)</h5>
        <pre><code>const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const delay = Number(formData.get('delay'));
    const state = formData.get('state');

    createPromise(delay, state)
        .then((delay) => {
            iziToast.success({ title: 'Success', message: \`✅ Fulfilled promise in \${delay}ms\`, position: 'topRight' });
        })
        .catch((delay) => {
            iziToast.error({ title: 'Error', message: \`❌ Rejected promise in \${delay}ms\`, position: 'topRight' });
        });
    
    event.target.reset();
});

function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') resolve(delay);
            else reject(delay);
        }, delay);
    });
}</code></pre>

        <h5>Скріншоти результатів виконання:</h5>
        <div>
          <figure>
            <img src="assets/task7/screenshots/task7_4.png" alt="Скріншот завдання 4" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
          </figure>
        </div>

        <h5>Пояснення:</h5>
        <p>Функція createPromise повертає новий Promise, який виконується (resolve) або відхиляється (reject) через заданий час (setTimeout). Обробка результату відбувається через методи .then() та .catch().</p>
      </div>
    `;
  }

  if (key === 'task5-imagesearch' && lab === '8') {
    html = `
      <div>
        <h4>Завдання 5. Пошук зображень</h4>
        <p><strong>Опис:</strong> Реалізовано пошук зображень через Pixabay API. Використовується SimpleLightbox для перегляду зображень та iziToast для сповіщень. Асинхронні запити виконуються за допомогою fetch.</p>
        
        <h5>Посилання на застосунок:</h5>
        <p><a href="assets/task7/app/pixabay.html" target="_blank">assets/task7/app/pixabay.html</a></p>

        <h5>HTML (pixabay.html)</h5>
        <pre><code>&lt;form class="search-form" id="search-form"&gt;
    &lt;input type="text" name="searchQuery" placeholder="Пошук зображень..." /&gt;
    &lt;button type="submit"&gt;Пошук&lt;/button&gt;
&lt;/form&gt;
&lt;ul class="gallery"&gt;&lt;/ul&gt;</code></pre>

        <h5>JavaScript (pixabay.js)</h5>
        <pre><code>const API_KEY = '53392650-cb5a126039c0f747b2d5505c6';
const BASE_URL = 'https://pixabay.com/api/';
const searchForm = document.getElementById('search-form');
const gallery = document.querySelector('.gallery');
let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
    event.preventDefault();
    const searchQuery = event.target.elements.searchQuery.value.trim();
    if (searchQuery === '') return;

    gallery.innerHTML = '';
    fetchImages(searchQuery)
        .then((data) => {
            if (data.hits.length === 0) {
                iziToast.error({ title: 'Помилка', message: 'No images found!' });
                return;
            }
            renderGallery(data.hits);
            lightbox.refresh();
        })
        .catch((error) => console.error(error));
}

function fetchImages(query) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    });
    return fetch(\`\${BASE_URL}?\${params}\`).then(res => res.json());
}

function renderGallery(images) {
    const markup = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => \`
        &lt;li class="gallery-item"&gt;
            &lt;a class="gallery-link" href="\${largeImageURL}"&gt;
                &lt;img class="gallery-image" src="\${webformatURL}" alt="\${tags}" /&gt;
                &lt;div class="gallery-info"&gt;
                    &lt;span&gt;Likes: \${likes}&lt;/span&gt;
                    &lt;span&gt;Views: \${views}&lt;/span&gt;
                    &lt;span&gt;Comments: \${comments}&lt;/span&gt;
                    &lt;span&gt;Downloads: \${downloads}&lt;/span&gt;
                &lt;/div&gt;
            &lt;/a&gt;
        &lt;/li&gt;
    \`).join('');
    gallery.innerHTML = markup;
}</code></pre>

        <h5>Скріншоти результатів виконання:</h5>
        <div>
          <figure>
            <img src="assets/task7/screenshots/task7_5.png" alt="Скріншот завдання 5" style="max-width: 100%; height: auto; border: 1px solid #ddd; border-radius: 8px;">
          </figure>
        </div>

        <h5>Пояснення:</h5>
        <p>Функція fetchImages виконує HTTP-запит до Pixabay API з параметрами пошуку. URLSearchParams допомагає зручно формувати рядок запиту. Отримані дані рендеряться в HTML за допомогою шаблонних рядків. SimpleLightbox ініціалізується один раз і оновлюється методом refresh() після додавання нових зображень.</p>
      </div>
    `;
  }

  if (key === 'conclusion' && lab === '8') {
    html = `
      <div>
        <h4>Висновки</h4>
        <p>У ході виконання лабораторної роботи було поглиблено знання з асинхронного програмування в JavaScript (Promises, async/await). Набуто навичок роботи з зовнішніми бібліотеками (flatpickr, iziToast, SimpleLightbox, basicLightbox) та API (Pixabay). Також відпрацьовано роботу з LocalStorage для збереження стану застосунку.</p>
        <p>Особливу увагу приділено модульності коду та використанню бандлерів (на прикладі теоретичного вивчення, хоча в рамках даного звіту код представлений у вигляді окремих файлів для наочності). Розглянуто формат JSON для обміну даними та методи його парсингу/стрінгіфікації.</p>
        <p>Практичне застосування цих технологій дозволило створити більш складні та функціональні веб-застосунки, що взаємодіють з користувачем та зовнішніми сервісами.</p>
      </div>
    `;
  }

  return html;
}


