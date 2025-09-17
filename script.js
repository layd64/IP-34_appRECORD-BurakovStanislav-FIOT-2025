document.addEventListener('DOMContentLoaded', () => {
  const output = document.getElementById('output');

  function setActive(list, target){
    list.forEach(el => el.classList.toggle('is-active', el === target));
  }

  function render(title, html){
    output.innerHTML = '';
    const wrap = document.createElement('div');
    const h = document.createElement('h3');
    h.textContent = title;
    const body = document.createElement('div');
    body.innerHTML = typeof html === 'string' ? html : '';
    wrap.appendChild(h);
    wrap.appendChild(body);
    output.appendChild(wrap);
  }

  const tabs = Array.from(document.querySelectorAll('.tab'));
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      setActive(tabs, tab);
      // Автоматично відкривати перший пункт ("Тема, мета, місце розташування")
      const firstPill = document.querySelector('.pill[data-section="topic"]');
      if (firstPill) {
        setActive(pills, firstPill);
        firstPill.click();
      }
    });
  });

  const pills = Array.from(document.querySelectorAll('.pill'));
  function getActiveLabNumber(){
    const activeTab = document.querySelector('.tab.is-active');
    return activeTab ? activeTab.dataset.lab : undefined;
  }

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
        conclusion: 'Висновки'
      };
      const title = titles[key] || pill.textContent.trim();

      const lab = getActiveLabNumber();
      let html = 'Вміст секції з’явиться тут.';

      if (key === 'topic' && lab === '1') {
        html = `
          <div>
            <p><strong>Тема:</strong> ТЕГИ ТА АТРИБУТИ HTML-ДОКУМЕНТА. СТРУКТУРНА РОЗМІТКА. GIT.GITHUB. РОБОТА З РЕПОЗИТОРІЯМИ. ОПИС ЛОГІКИ ВЛАСНОГО WEB-ЗАСТОСУНКУ.</p>
            <p><strong>Мета:</strong> придбати практичні навички роботи з GitHub, репозиторіями, HTML-документом, таблицями, зображеннями, посиланнями, списками, формами. Створити шаблон звітного HTML-документу для відображення результатів роботи всіх лабораторних робіт.</p>
            <ul>
              <li><strong>Посилання на репозиторій власного WEB-застосунку:</strong> <a href="https://github.com/layd64/IP-34_appWEB-Burakov-Stanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_appWEB-Burakov-Stanislav-FIOT-2025</a></li>
              <li><strong>Посилання на живу сторінку власного WEB-застосунку:</strong> <a href="https://layd64.github.io/IP-34_appWEB-Burakov-Stanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_appWEB-Burakov-Stanislav-FIOT-2025/</a></li>
              <li><strong>Посилання на репозиторій звітного HTML-документа:</strong> <a href="https://github.com/layd64/IP-34_appRECORD-BurakovStanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_appRECORD-BurakovStanislav-FIOT-2025</a></li>
              <li><strong>Посилання на живу сторінку звітного HTML-документа:</strong> <em>буде додано після публікації GitHub Pages</em></li>
              <li><strong>Посилання на репозиторій з самостійними роботами:</strong> <a href="https://github.com/layd64/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025" target="_blank" rel="noopener">github.com/layd64/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025</a></li>
              <li><strong>Посилання на живу сторінку з самостійними роботами:</strong> <a href="https://layd64.github.io/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025/" target="_blank" rel="noopener">layd64.github.io/IP-34_-INDEPENDENT--Burakov-Stanislav-FIOT-2025/</a></li>
            </ul>
          </div>
        `;
      }

      if (key === 'domain' && lab === '1') {
        html = `
          <div>
            <h4>Опис предметної області</h4>
            <h5>Платформа книжкового онлайн магазину — BookStore Pro</h5>
            <p>BookStore Pro — це платформа цифрового книжкового магазину, розроблена для того, щоб змінити спосіб, яким люди відкривають, купують та взаємодіють з книгами. Вона поєднує традиційну книжкову торгівлю з сучасним цифровим комерсом, забезпечуючи інтуїтивний та приємний користувацький досвід.</p>

            <h5>Основна функціональність</h5>
            <ul>
              <li><strong>Каталог книг:</strong> детальні картки з назвами, авторами, жанрами, описами, рейтингами та цінами.</li>
              <li><strong>Облікові записи користувачів:</strong> реєстрація, автентифікація, профілі.</li>
              <li><strong>Пошук та відкриття:</strong> фільтри за жанром, автором, ціною, рейтингами, датою публікації.</li>
              <li><strong>Кошик та оформлення:</strong> безпечні покупки книг.</li>
              <li><strong>Відгуки та рейтинги:</strong> рецензії користувачів, оцінки, обговорення.</li>
              <li><strong>Цифрова бібліотека:</strong> особиста полиця з придбаними книгами та прогресом читання.</li>
              <li><strong>Портал видавців та авторів:</strong> керування творами та взаємодія з читачами.</li>
            </ul>

            <div>
              <h5>Цільова аудиторія</h5>
              <p>Ентузіасти книг, студенти, професіонали, звичайні читачі, освітні установи. Платформа підходить як для індивідуальних, так і для оптових покупців.</p>
            </div>

            <h4>Опис бізнес-логіки</h4>
            <h5>1. Реєстрація та автентифікація</h5>
            <ol>
              <li>Користувач вводить email і пароль.</li>
              <li>Система валідує формат email і надійність пароля.</li>
              <li>Створюється обліковий запис із унікальним ID.</li>
              <li>Надсилається лист-підтвердження.</li>
              <li>Збираються уподобання користувача.</li>
            </ol>

            <h5>2. Відкриття та пошук книг</h5>
            <ol>
              <li>Ввід запиту або застосування фільтрів.</li>
              <li>Запит до бази даних із параметрами.</li>
              <li>Ранжування за релевантністю, популярністю та уподобаннями.</li>
              <li>Відображення з пагінацією та сортуванням.</li>
            </ol>

            <h5>3. Процес покупки</h5>
            <ol>
              <li>Додавання книг до кошика.</li>
              <li>Розрахунок ціни з податками та доставкою.</li>
              <li>Оформлення замовлення та оплата через захищений шлюз.</li>
              <li>Надсилання підтвердження замовлення.</li>
              <li>Миттєвий доступ до цифрових книг; фізичні — готуються до відправки.</li>
            </ol>

            <h5>4. Управління контентом</h5>
            <ol>
              <li>Подання метаданих книг видавцями/авторами.</li>
              <li>Перевірка та валідація контенту.</li>
              <li>Категоризація і тегування для пошуку.</li>
              <li>Встановлення цін та доступності.</li>
              <li>Публікація для користувачів.</li>
            </ol>

            <h4>Функціональні вимоги</h4>
            <h5>Управління користувачами</h5>
            <ul>
              <li>Реєстрація з підтвердженням email</li>
              <li>Вхід/вихід</li>
              <li>Профіль та уподобання</li>
              <li>Ролі: клієнт, адміністратор, видавець</li>
            </ul>
            <h5>Управління книгами</h5>
            <ul>
              <li>Каталог і пошук</li>
              <li>Категорії та теги</li>
              <li>Запаси фізичних книг</li>
              <li>Доставка цифрових книг</li>
            </ul>
            <h5>Електронна комерція</h5>
            <ul>
              <li>Кошик</li>
              <li>Рахунки та надсилання email</li>
            </ul>
            <h5>Контент та спільнота</h5>
            <ul>
              <li>Рецензії та рейтинги</li>
              <li>Списки бажань та улюблені</li>
              <li>Підписка на розсилку</li>
            </ul>

            <h4>Нефункціональні вимоги</h4>
            <h5>Продуктивність</h5>
            <ul>
              <li>Завантаження сторінки &lt; 3 с</li>
              <li>Відповідь БД &lt; 500 мс</li>
            </ul>
            <h5>Безпека</h5>
            <ul>
              <li>HTTPS-шифрування всіх передач даних</li>
            </ul>
            <h5>Зручність використання</h5>
            <ul>
              <li>Адаптивний дизайн</li>
              <li>Інтуїтивний інтерфейс</li>
              <li>Підтримка кількох мов</li>
            </ul>

            <h4>Дорожня карта</h4>
            <h5>Фаза 1 (поточна)</h5>
            <ul>
              <li>Базовий каталог та лендінг</li>
            </ul>
            <h5>Фаза 2</h5>
            <ul>
              <li>Пошук</li>
              <li>Реєстрація/автентифікація</li>
              <li>Кошик та оформлення</li>
              <li>Рекомендації</li>
              <li>Соціальні та спільнота</li>
            </ul>
            <h5>Фаза 3</h5>
            <ul>
              <li>Аудіокниги</li>
              <li>Портал самообслуговування для видавців/авторів</li>
            </ul>

            <h4>Системні вимоги</h4>
            <h5>Мінімальні</h5>
            <ul>
              <li><strong>ОС:</strong> Windows 10, macOS 10.15, Linux, Android 8, iOS 13</li>
              <li><strong>Процесор:</strong> 2 ядра, 1 ГГц</li>
              <li><strong>ОЗП:</strong> 2 ГБ</li>
              <li><strong>Екран:</strong> від 320 px</li>
              <li><strong>Інтернет:</strong> 1 Мбіт/с</li>
            </ul>
            <h5>Рекомендовані</h5>
            <ul>
              <li><strong>ОС:</strong> Windows 11, macOS 12+, Linux LTS, Android 12+, iOS 16+</li>
              <li><strong>Процесор:</strong> 4 ядра, 2 ГГц</li>
              <li><strong>ОЗП:</strong> 4 ГБ+</li>
              <li><strong>Екран:</strong> 1366×768 або вище</li>
              <li><strong>Інтернет:</strong> 5 Мбіт/с+</li>
            </ul>
            <h5>Підтримувані браузери</h5>
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
            <h4>Структура документа (розділена на частини)</h4>

            <h5>Таблиці</h5>
            <p>1) Таблиця «Бестселери цього місяця»</p>
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
    &lt;tr&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;Код майбутнього&lt;/td&gt;&lt;td&gt;Сара Джонсон&lt;/td&gt;&lt;td&gt;⭐⭐⭐⭐⭐&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;Таємниця океану&lt;/td&gt;&lt;td&gt;Майкл Чен&lt;/td&gt;&lt;td&gt;⭐⭐⭐⭐⭐&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;3&lt;/td&gt;&lt;td&gt;Цифрова революція&lt;/td&gt;&lt;td&gt;Емма Девіс&lt;/td&gt;&lt;td&gt;⭐⭐⭐⭐⭐&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;4&lt;/td&gt;&lt;td&gt;Код майбутнього&lt;/td&gt;&lt;td&gt;Сара Джонсон&lt;/td&gt;&lt;td&gt;⭐⭐⭐⭐&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;5&lt;/td&gt;&lt;td&gt;Космічна одіссея&lt;/td&gt;&lt;td&gt;Роберт Вілсон&lt;/td&gt;&lt;td&gt;⭐⭐⭐⭐&lt;/td&gt;&lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>

            <p>2) Таблиця «Країни-лідери за читанням»</p>
            <pre><code>&lt;table&gt;
  &lt;tbody&gt;
    &lt;tr&gt;&lt;td&gt;1&lt;/td&gt;&lt;td&gt;Сполучені Штати&lt;/td&gt;&lt;td&gt;45% від загальної кількості читачів&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;2&lt;/td&gt;&lt;td&gt;Великобританія&lt;/td&gt;&lt;td&gt;18% від загальної кількості читачів&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;3&lt;/td&gt;&lt;td&gt;Канада&lt;/td&gt;&lt;td&gt;12% від загальної кількості читачів&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;4&lt;/td&gt;&lt;td&gt;Австралія&lt;/td&gt;&lt;td&gt;8% від загальної кількості читачів&lt;/td&gt;&lt;/tr&gt;
    &lt;tr&gt;&lt;td&gt;5&lt;/td&gt;&lt;td&gt;Німеччина&lt;/td&gt;&lt;td&gt;7% від загальної кількості читачів&lt;/td&gt;&lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>

            <h5>Зображення</h5>
            <pre><code>&lt;img src="assets/stackOfBooks.png" alt="Modern Library Interior" class="hero-image"&gt;
&lt;img src="assets/book1.webp" alt="Book Cover 1" class="book-image"&gt;
&lt;img src="assets/book2.png" alt="Book Cover 2" class="book-image"&gt;
&lt;img src="assets/book3.png" alt="Book Cover 3" class="book-image"&gt;</code></pre>

            <h5>Списки</h5>
            <p>1) Меню навігації</p>
            <pre><code>&lt;ul class="nav-links"&gt;
  &lt;li&gt;&lt;a href="#home"&gt;Головна&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#books"&gt;Книги&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#categories"&gt;Категорії&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="about.html"&gt;Опис&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</code></pre>
            <p>2) Популярні жанри</p>
            <pre><code>&lt;ul&gt;
  &lt;li&gt;Художня література&lt;/li&gt;
  &lt;li&gt;Наукова фантастика&lt;/li&gt;
  &lt;li&gt;Детективи та трилери&lt;/li&gt;
  &lt;li&gt;Романтика&lt;/li&gt;
  &lt;li&gt;Біографії&lt;/li&gt;
  &lt;li&gt;Саморозвиток&lt;/li&gt;
&lt;/ul&gt;</code></pre>
            <p>3) Швидкі посилання у футері</p>
            <pre><code>&lt;ul&gt;
  &lt;li&gt;&lt;a href="#home"&gt;Головна&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#books"&gt;Книги&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#categories"&gt;Категорії&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="about.html"&gt;Про проєкт&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</code></pre>

            <h5>Посилання</h5>
            <pre><code>&lt;a href="#home"&gt;Головна&lt;/a&gt;
&lt;a href="#books"&gt;Книги&lt;/a&gt;
&lt;a href="#categories"&gt;Категорії&lt;/a&gt;
&lt;a href="about.html"&gt;Опис / Про проєкт&lt;/a&gt;</code></pre>

            <p>Повний код сторінки надано вище; тут наведені фрагменти, згруповані за типами елементів.</p>
          </div>
        `;
      }

      if (key === 'table-html' && lab === '1') {
        html = `
          <div>
            <h4>HTML-код таблиці</h4>

            <h5>1) Бестселери цього місяця</h5>
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

            <h5>2) Країни-лідери за читанням</h5>
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

      render(title, html);
    });
  });

  // Показати вміст за замовчуванням для активної пігулки
  const activePill = document.querySelector('.pill.is-active');
  if (activePill) {
    activePill.click();
  }
});


