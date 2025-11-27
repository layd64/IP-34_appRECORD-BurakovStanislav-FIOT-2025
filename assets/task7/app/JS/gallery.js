const images = [
    {
        preview: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
        original: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200',
        description: 'Гірський пейзаж з озером',
    },
    {
        preview: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400',
        original: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200',
        description: 'Ліс і природа',
    },
    {
        preview: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=400',
        original: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200',
        description: 'Захід сонця над морем',
    },
    {
        preview: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400',
        original: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200',
        description: 'Туманний ранок у горах',
    },
    {
        preview: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400',
        original: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200',
        description: 'Зелений ліс',
    },
    {
        preview: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=400',
        original: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=1200',
        description: 'Річка в лісі',
    },
    {
        preview: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400',
        original: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200',
        description: 'Вершини гір',
    },
    {
        preview: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400',
        original: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200',
        description: 'Пляж і океан',
    },
    {
        preview: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=400',
        original: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=1200',
        description: 'Водоспад у горах',
    },
];

const gallery = document.querySelector('.gallery');

function createGalleryMarkup(images) {
    return images
        .map(
            ({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
          data-source="${original}"
        />
      </a>
    </li>
  `
        )
        .join('');
}

gallery.innerHTML = createGalleryMarkup(images);

gallery.addEventListener('click', onGalleryClick);

function onGalleryClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'IMG') {
        return;
    }

    const largeImageURL = event.target.dataset.source;
    const imageDescription = event.target.alt;

    console.log('Посилання на велике зображення:', largeImageURL);

    openModal(largeImageURL, imageDescription);
}

function openModal(imageURL, description) {
    const instance = basicLightbox.create(`
    <div class="modal">
      <img src="${imageURL}" alt="${description}">
      <p class="modal__description">${description}</p>
    </div>
  `);

    instance.show();
}
