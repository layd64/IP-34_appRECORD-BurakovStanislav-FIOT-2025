document.addEventListener('DOMContentLoaded', () => {
  const output = document.getElementById('output');
  const sidebar = document.querySelector('.sidebar');

  function setActive(list, target){
    list.forEach(el => el.classList.toggle('is-active', el === target));
  }

  function render(title, html){
    output.innerHTML = '';
    const wrap = document.createElement('div');
    const body = document.createElement('div');
    body.innerHTML = typeof html === 'string' ? html : '';
    wrap.appendChild(body);
    output.appendChild(wrap);
  }

  // Define pill sets for different labs
  function getPillsForLab(labNumber) {
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

    // For labs 3-9, create blank pills ready for content
    const blankPills = [
      { section: 'section1', text: 'Розділ 1' },
      { section: 'section2', text: 'Розділ 2' },
      { section: 'section3', text: 'Розділ 3' },
      { section: 'section4', text: 'Розділ 4' },
      { section: 'section5', text: 'Розділ 5' }
    ];

    if (labNumber === '1') return lab1Pills;
    if (labNumber === '2') return lab2Pills;
    return blankPills;
  }

  function updateSidebarPills(labNumber) {
    // Clear existing pills
    sidebar.innerHTML = '';
    
    // Get pills for current lab
    const pills = getPillsForLab(labNumber);
    
    // Create new pills
    pills.forEach((pill, index) => {
      const pillElement = document.createElement('button');
      pillElement.className = 'pill';
      pillElement.dataset.section = pill.section;
      pillElement.textContent = pill.text;
      
      // Make first pill active
      if (index === 0) {
        pillElement.classList.add('is-active');
      }
      
      sidebar.appendChild(pillElement);
    });
  }

  const tabs = Array.from(document.querySelectorAll('.tab'));
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      setActive(tabs, tab);
      const labNumber = tab.dataset.lab;
      
      // Update sidebar pills for the selected lab
      updateSidebarPills(labNumber);
      
      // Get the new pills and set up event listeners
      const newPills = Array.from(document.querySelectorAll('.pill'));
      setupPillListeners(newPills);
      
      // Автоматично відкривати перший пункт
      const firstPill = newPills[0];
      if (firstPill) {
        firstPill.click();
      }
    });
  });

  function getActiveLabNumber(){
    const activeTab = document.querySelector('.tab.is-active');
    return activeTab ? activeTab.dataset.lab : undefined;
  }

  function setupPillListeners(pills) {
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        setActive(pills, pill);
        const key = pill.dataset.section || '';
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
          section1: 'Розділ 1',
          section2: 'Розділ 2',
          section3: 'Розділ 3',
          section4: 'Розділ 4',
          section5: 'Розділ 5'
        };
        const title = titles[key] || pill.textContent.trim();

        const lab = getActiveLabNumber();
        let html = 'Вміст секції з\'явиться тут.';

      if (key === 'topic' && lab === '1') {
        html = `
          <div>
            <p><strong>Тема практичної:</strong> ТЕГИ ТА АТРИБУТИ HTML-ДОКУМЕНТА. СТРУКТУРНА РОЗМІТКА. GIT.GITHUB. РОБОТА З РЕПОЗИТОРІЯМИ. ОПИС ЛОГІКИ ВЛАСНОГО WEB-ЗАСТОСУНКУ.</p>
            <p><strong>Мета практичної:</strong> Придбати практичні навички роботи з GitHub, репозиторіями, HTML-документом, таблицями, зображеннями, посиланнями, списками, формами. Створити шаблон звітного HTML-документу для відображення результатів роботи всіх лабораторних робіт.</p>
            <p><strong>Назва проєкту:</strong> BookStore Pro</p>
            <p><strong>Тема проєкту:</strong> Веб-застосунок для онлайн-магазину книг</p>
            <p><strong>Мета проєкту:</strong> Прискорення та спрощення процесу купівлі книг, забезпечення зручного доступу до широкого асортименту літератури, створення інтуїтивного інтерфейсу для користувачів, підтримка ефективного управління каталогом і замовленнями для адміністраторів. </p>
            <ul>
              <li><strong>Посилання на репозиторій власного WEB-застосунку:</strong> <a href="https://github.com/layd64/IP-34_appWEB-Burakov-Stanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_appWEB-Burakov-Stanislav-FIOT-2025</a></li>
              <li><strong>Посилання на живу сторінку власного WEB-застосунку:</strong> <a href="https://layd64.github.io/IP-34_appWEB-Burakov-Stanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_appWEB-Burakov-Stanislav-FIOT-2025/</a></li>
              <li><strong>Посилання на репозиторій звітного HTML-документа:</strong> <a href="https://github.com/layd64/IP-34_appRECORD-BurakovStanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_appRECORD-BurakovStanislav-FIOT-2025</a></li>
              <li><strong>Посилання на живу сторінку звітного HTML-документа:</strong> <a href="https://layd64.github.io/IP-34_appRECORD-BurakovStanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_appRECORD-BurakovStanislav-FIOT-2025</a></li>
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
            <p>У ході лабораторної роботи створено головну сторінку веб-застосунку BookStore Pro з семантично правильною структурою HTML. Реалізовано навігацію, герої-секцію, блок рекомендованих книг, секцію категорій із таблицею бестселерів, секцію статистики читання з табличними даними, форму підписки на розсилку та інформативний футер. Досягнуто мети роботи: відпрацьовано верстку контенту різних типів (зображення, списки, таблиці, форма), організовано логічну структуру сторінки та підготовлено основу для подальшого стилювання й інтерактивності.</p>
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
            <p><strong>Тема практичної:</strong> КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ. ІДЕНТИФІКАТОРИ. СТИЛІЗАЦІЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ.</p>
            <p><strong>Мета практичної:</strong> Придбати практичні навички роботи з CSS, селекторами, ідентифікаторами, стилізацією тексту, таблиць, списків та інших елементів HTML-документа.</p>
            <p><strong>Назва проєкту:</strong> BookStore Pro</p>
            <p><strong>Тема проєкту:</strong> Веб-застосунок для онлайн-магазину книг</p>
            <p><strong>Мета проєкту:</strong> Створення сучасного та привабливого інтерфейсу для книжкового магазину з використанням CSS стилів.</p>
            <ul>
              <li><strong>Посилання на репозиторій власного WEB-застосунку:</strong> <a href="https://github.com/layd64/IP-34_appWEB-Burakov-Stanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_appWEB-Burakov-Stanislav-FIOT-2025</a></li>
              <li><strong>Посилання на живу сторінку власного WEB-застосунку:</strong> <a href="https://layd64.github.io/IP-34_appWEB-Burakov-Stanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_appWEB-Burakov-Stanislav-FIOT-2025/</a></li>
              <li><strong>Посилання на репозиторій звітного HTML-документа:</strong> <a href="https://github.com/layd64/IP-34_appRECORD-BurakovStanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_appRECORD-BurakovStanislav-FIOT-2025</a></li>
              <li><strong>Посилання на живу сторінку звітного HTML-документа:</strong> <a href="https://layd64.github.io/IP-34_appRECORD-BurakovStanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_appRECORD-BurakovStanislav-FIOT-2025</a></li>
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
            
            <p><strong>У нашому проєкті використовується зовнішній файл стилів:</strong></p>
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
            
            <h5>Приклад використання в нашому проєкті:</h5>
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
            
            <h5>Приклади з нашого проєкту:</h5>
            <pre><code>/* Стилізація всіх заголовків h1 */
h1 {
  font-family: inherit;
  margin: 0;
  font-size: 28px;
  letter-spacing: .4px;
}

/* Стилізація всіх параграфів */
p {
  margin: 0 0 16px 0;
  line-height: 1.6;
}

/* Стилізація всіх посилань */
a {
  color: var(--text);
  text-decoration: none;
}

/* Стилізація всіх кнопок */
button {
  border: 2px solid var(--border);
  border-radius: 12px;
  padding: 10px 14px;
  background: #f7f7f7;
  cursor: pointer;
}</code></pre>
            
            <h5>Переваги:</h5>
            <ul>
              <li>Простота використання</li>
              <li>Застосовується до всіх елементів певного типу</li>
              <li>Ідеально для базових стилів</li>
            </ul>
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
            
            <h5>Приклади з нашого проєкту:</h5>
            <pre><code>/* Стилізація елементів з класом "header" */
.header {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Стилізація елементів з класом "tab" */
.tab {
  border: 2px solid var(--border);
  border-radius: 12px;
  padding: 10px 14px;
  background: #f7f7f7;
  cursor: pointer;
  font-weight: 600;
}

/* Стилізація активних вкладок */
.tab.is-active {
  background: var(--accent);
}

/* Стилізація елементів з класом "pill" */
.pill {
  border: 2px solid var(--border);
  border-radius: 999px;
  padding: 12px 16px;
  background: #f7f7f7;
  text-align: left;
  cursor: pointer;
}</code></pre>
            
            <h5>HTML використання:</h5>
            <pre><code>&lt;div class="header"&gt;
  &lt;h1 class="title"&gt;Заголовок&lt;/h1&gt;
  &lt;button class="tab is-active"&gt;Вкладка&lt;/button&gt;
&lt;/div&gt;</code></pre>
            
            <h5>Переваги:</h5>
            <ul>
              <li>Можна використовувати кілька разів</li>
              <li>Можна комбінувати кілька класів</li>
              <li>Гнучкість у стилізації</li>
            </ul>
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
            
            <h5>Приклади з нашого проєкту:</h5>
            <pre><code>/* Стилізація елемента з id "output" */
#output {
  flex: 1;
  border: 2px dashed #bbb;
  border-radius: 4px;
  padding: 16px;
  display: flex;
}

/* Стилізація елемента з id "main-content" */
#main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}</code></pre>
            
            <h5>HTML використання:</h5>
            <pre><code>&lt;div id="output" class="viewer__body"&gt;
  &lt;p&gt;Вміст секції&lt;/p&gt;
&lt;/div&gt;

&lt;main id="main-content"&gt;
  &lt;h1&gt;Головний контент&lt;/h1&gt;
&lt;/main&gt;</code></pre>
            
            <h5>Особливості:</h5>
            <ul>
              <li>ID повинен бути унікальним на сторінці</li>
              <li>Вища специфічність ніж у класів</li>
              <li>Використовується для JavaScript навігації</li>
              <li>Ідеально для унікальних елементів</li>
            </ul>
            
            <h5>Правила використання:</h5>
            <ul>
              <li>ID повинен починатися з літери</li>
              <li>Може містити літери, цифри, дефіси та підкреслення</li>
              <li>Чувствий до регістру</li>
            </ul>
          </div>
        `;
      }

      if (key === 'other-selectors' && lab === '2') {
        html = `
          <div>
            <h4>Інші селектори</h4>
            
            <h5>1. Універсальний селектор (*)</h5>
            <pre><code>/* Вибирає всі елементи */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}</code></pre>
            
            <h5>2. Селектори атрибутів</h5>
            <pre><code>/* Елементи з певним атрибутом */
input[type="text"] {
  border: 1px solid #ccc;
}

/* Елементи з певним значенням атрибута */
a[href="https://example.com"] {
  color: blue;
}

/* Елементи з атрибутом, що містить певне слово */
img[alt*="book"] {
  border: 2px solid green;
}</code></pre>
            
            <h5>3. Селектори нащадків та дочірніх елементів</h5>
            <pre><code>/* Нащадки (всі рівні) */
.header h1 {
  color: red;
}

/* Дочірні елементи (тільки перший рівень) */
.header > h1 {
  font-size: 24px;
}</code></pre>
            
            <h5>4. Селектори сусідніх елементів</h5>
            <pre><code>/* Наступний сусідній елемент */
h1 + p {
  margin-top: 10px;
}

/* Всі наступні сусідні елементи */
h1 ~ p {
  color: gray;
}</code></pre>
            
            <h5>5. Псевдокласи</h5>
            <pre><code>/* Стан наведення */
.tab:hover {
  filter: brightness(.96);
}

/* Стан фокуса */
input:focus {
  outline: 2px solid blue;
}

/* Перший та останній елементи */
li:first-child {
  font-weight: bold;
}

li:last-child {
  border-bottom: none;
}</code></pre>
            
            <h5>6. Псевдоелементи</h5>
            <pre><code>/* Перша літера */
p::first-letter {
  font-size: 2em;
  font-weight: bold;
}

/* Перший рядок */
p::first-line {
  color: blue;
}

/* До та після елемента */
.button::before {
  content: "→ ";
}

.button::after {
  content: " ←";
}</code></pre>
            
            <h5>Приклади з нашого проєкту:</h5>
            <pre><code>/* Універсальний селектор для box-sizing */
* {
  box-sizing: border-box;
}

/* Селектор нащадків */
.header__titles {
  text-align: center;
}

/* Псевдоклас hover */
.tab:hover {
  filter: brightness(.96);
}</code></pre>
          </div>
        `;
      }

      if (key === 'css-advanced' && lab === '2') {
        html = `
          <div>
            <h4>CSS: Шрифти. Текст. Таблиці. Фон. Контур. Списки. CSS Просунутий</h4>
            
            <h5>1. Шрифти (Fonts)</h5>
            <pre><code>/* Встановлення шрифту */
body {
  font-family: "Times New Roman", Times, serif;
}

/* Розмір шрифту */
.title {
  font-size: 28px;
}

/* Вага шрифту */
.subtitle {
  font-weight: 700;
}

/* Міжсимвольний інтервал */
.title {
  letter-spacing: .4px;
}

/* Висота рядка */
body {
  line-height: 1.35;
}</code></pre>
            
            <h5>2. Текст (Text)</h5>
            <pre><code>/* Вирівнювання тексту */
.header__titles {
  text-align: center;
}

/* Трансформація тексту */
.subtitle {
  text-transform: uppercase;
}

/* Декорація тексту */
a {
  text-decoration: none;
}

/* Відступи тексту */
p {
  margin: 0 0 16px 0;
}</code></pre>
            
            <h5>3. Таблиці (Tables)</h5>
            <pre><code>/* Стилізація таблиць */
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
  border: 1px solid var(--border);
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
  font-weight: bold;
}

/* Альтернативні рядки */
tr:nth-child(even) {
  background-color: #f9f9f9;
}</code></pre>
            
            <h5>4. Фон (Background)</h5>
            <pre><code>/* Колір фону */
body {
  background: var(--bg);
}

/* Фонове зображення */
.hero {
  background-image: url('hero-bg.jpg');
  background-size: cover;
  background-position: center;
}

/* Градієнт */
.gradient-bg {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
}

/* Повторення фону */
.pattern-bg {
  background-image: url('pattern.png');
  background-repeat: repeat;
}</code></pre>
            
            <h5>5. Контур (Border)</h5>
            <pre><code>/* Основний контур */
.tab {
  border: 2px solid var(--border);
}

/* Округлені кути */
.tab {
  border-radius: 12px;
}

/* Різні стилі контуру */
.dashed-border {
  border: 2px dashed #bbb;
}

.dotted-border {
  border: 1px dotted #ccc;
}

/* Контур з одного боку */
.bottom-border {
  border-bottom: 2px solid var(--text);
}</code></pre>
            
            <h5>6. Списки (Lists)</h5>
            <pre><code>/* Стилізація маркерів списку */
ul {
  list-style-type: disc;
  padding-left: 20px;
}

ol {
  list-style-type: decimal;
  padding-left: 20px;
}

/* Власні маркери */
.custom-list {
  list-style-image: url('custom-bullet.png');
}

/* Приховати маркери */
.no-bullets {
  list-style: none;
  padding-left: 0;
}

/* Стилізація елементів списку */
li {
  margin-bottom: 8px;
  line-height: 1.5;
}</code></pre>
            
            <h5>7. CSS Просунутий</h5>
            <pre><code>/* CSS змінні (Custom Properties) */
:root {
  --border: #1e1e1e;
  --text: #111;
  --bg: #fff;
  --accent: #ffe971;
}

/* Flexbox */
.header {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Grid */
.content {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 16px;
}

/* Медіа-запити */
@media (max-width: 900px) {
  .content {
    grid-template-columns: 1fr;
  }
}

/* Анімації */
.tab {
  transition: all 0.3s ease;
}

.tab:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}</code></pre>
            
            <h5>Приклади з нашого проєкту:</h5>
            <pre><code>/* Використання CSS змінних */
:root {
  --border: #1e1e1e;
  --text: #111;
  --muted: #5c5c5c;
  --bg: #fff;
  --accent: #ffe971;
}

/* Flexbox для header */
.header {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Grid для контенту */
.content {
  display: grid;
  grid-template-columns: 300px 1fr;
  gap: 16px;
}

/* Адаптивний дизайн */
@media (max-width: 900px) {
  .content {
    grid-template-columns: 1fr;
  }
}</code></pre>
          </div>
        `;
      }

      if (key === 'conclusion' && lab === '2') {
        html = `
          <div>
            <h4>ВИСНОВКИ</h4>
            <p>У ході лабораторної роботи №2 було вивчено та практично застосовано основні концепції CSS:</p>
            
            <h5>Досягнуті результати:</h5>
            <ul>
              <li><strong>Способи підключення стилів:</strong> Вивчено різні методи підключення CSS - внутрішні, вбудовані, зовнішні стилі та імпорт. У проєкті використовується зовнішній файл стилів для кращої організації коду.</li>
              
              <li><strong>Селектори:</strong> Освоєно різні типи селекторів - тегів, класів, ідентифікаторів, атрибутів, псевдокласів та псевдоелементів. Кожен тип селектора має своє призначення та специфічність.</li>
              
              <li><strong>Стилізація елементів:</strong> Практично застосовано стилізацію шрифтів, тексту, таблиць, фону, контурів та списків. Використано сучасні CSS технології як Flexbox та Grid для створення адаптивного макету.</li>
              
              <li><strong>CSS змінні:</strong> Використано CSS Custom Properties для централізованого управління кольорами та іншими значеннями, що спрощує підтримку та модифікацію стилів.</li>
              
              <li><strong>Адаптивний дизайн:</strong> Реалізовано медіа-запити для забезпечення коректного відображення на різних пристроях.</li>
            </ul>
            
            <h5>Практичні навички:</h5>
            <ul>
              <li>Створення структурованого CSS коду з логічним групуванням стилів</li>
              <li>Використання семантичних назв класів та ідентифікаторів</li>
              <li>Застосування сучасних CSS технологій для створення сучасного інтерфейсу</li>
              <li>Організація стилів для легкого читання та підтримки</li>
            </ul>
            
            <p>Лабораторна робота дозволила закріпити теоретичні знання про CSS та отримати практичний досвід створення стилізованих веб-сторінок. Створений інтерфейс для звітного документу демонструє ефективне використання CSS для створення професійного та зручного користувацького інтерфейсу.</p>
          </div>
        `;
      }

        render(title, html);
      });
    });
  }

  const initialPills = Array.from(document.querySelectorAll('.pill'));
  setupPillListeners(initialPills);

  const activePill = document.querySelector('.pill.is-active');
  if (activePill) {
    activePill.click();
  }
});


