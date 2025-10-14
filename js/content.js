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
  return blankPills;
}

export function getSectionTitle(key){
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
    section1: 'Розділ 1',
    section2: 'Розділ 2',
    section3: 'Розділ 3',
    section4: 'Розділ 4',
    section5: 'Розділ 5'
  };
  return titles[key];
}

export function getSectionHtml(key, lab){
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

  return html;
}


