import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const addImage = galleryItems
  .map(
    image => `<li class="gallery__item">
    <a class="gallery__link" href="${image.original}">
    <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
  </a>
</li>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', addImage);

let simpleLightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

const blockOnSave = document.querySelectorAll('.gallery__image');
for (const image of blockOnSave) {
  image.addEventListener('click', event => {
    event.preventDefault();
  });
}
