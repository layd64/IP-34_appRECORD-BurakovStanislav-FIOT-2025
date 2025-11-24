// ВАЖЛИВО: Замініть YOUR_API_KEY на ваш справжній ключ API з Pixabay
const API_KEY = '53392650-cb5a126039c0f747b2d5505c6';
const BASE_URL = 'https://pixabay.com/api/';

// Елементи DOM
const searchForm = document.getElementById('search-form');
const gallery = document.querySelector('.gallery');
const loaderContainer = document.querySelector('.loader-container');

// Ініціалізація SimpleLightbox
let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

// Обробник submit форми
searchForm.addEventListener('submit', onSearch);

function onSearch(event) {
    event.preventDefault();

    // Отримуємо пошуковий запит
    const searchQuery = event.target.elements.searchQuery.value.trim();

    // Перевірка на порожній рядок
    if (searchQuery === '') {
        iziToast.warning({
            title: 'Увага',
            message: 'Будь ласка, введіть пошуковий запит!',
            position: 'topRight',
        });
        return;
    }

    // Очищаємо галерею перед новим пошуком
    clearGallery();

    // Показуємо індикатор завантаження
    showLoader();

    // Виконуємо запит до API
    fetchImages(searchQuery)
        .then((data) => {
            // Приховуємо індикатор завантаження
            hideLoader();

            // Перевіряємо чи є результати
            if (data.hits.length === 0) {
                iziToast.error({
                    title: 'Помилка',
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                });
                return;
            }

            // Відображаємо зображення
            renderGallery(data.hits);

            // Оновлюємо SimpleLightbox
            lightbox.refresh();
        })
        .catch((error) => {
            // Приховуємо індикатор завантаження
            hideLoader();

            // Показуємо повідомлення про помилку
            iziToast.error({
                title: 'Помилка',
                message: 'Щось пішло не так. Спробуйте ще раз!',
                position: 'topRight',
            });

            console.error('Error fetching images:', error);
        });
}

// Функція для виконання запиту до Pixabay API
function fetchImages(query) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
    });

    return fetch(`${BASE_URL}?${params}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
}

// Функція для відображення галереї
function renderGallery(images) {
    const markup = images
        .map(
            ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
                <img 
                    class="gallery-image" 
                    src="${webformatURL}" 
                    alt="${tags}" 
                />
                <div class="gallery-info">
                    <div class="info-item">
                        <b>Likes</b>
                        <span>${likes}</span>
                    </div>
                    <div class="info-item">
                        <b>Views</b>
                        <span>${views}</span>
                    </div>
                    <div class="info-item">
                        <b>Comments</b>
                        <span>${comments}</span>
                    </div>
                    <div class="info-item">
                        <b>Downloads</b>
                        <span>${downloads}</span>
                    </div>
                </div>
            </a>
        </li>
    `
        )
        .join('');

    // Додаємо розмітку в DOM за одну операцію
    gallery.innerHTML = markup;
}

// Функція для очищення галереї
function clearGallery() {
    gallery.innerHTML = '';
}

// Функція для показу індикатора завантаження
function showLoader() {
    loaderContainer.style.display = 'flex';
}

// Функція для приховування індикатора завантаження
function hideLoader() {
    loaderContainer.style.display = 'none';
}
