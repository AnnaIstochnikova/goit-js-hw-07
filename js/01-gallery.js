'use strict';
import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const addImage = galleryItems
  .map(
    image => `<li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', addImage);
gallery.addEventListener('click', imgOnClick);

function imgOnClick(evt) {
  if (evt.target.nodeName !== 'IMG') {
    return;
  }
  const closeButton = e => {
    if (e.key === 'Escape') instance.close();
  };
  const instance = basicLightbox.create(
    `<img src="${evt.target.dataset.source}" width="800" height="600">`,
    {
      onShow: () => {
        document.addEventListener('keydown', closeButton);
      },
      onClose: () => {
        document.removeEventListener('keydown', closeButton);
      },
    }
  );
  instance.show();
}

const blockOnSave = document.querySelectorAll('.gallery__image');
for (const image of blockOnSave) {
  image.addEventListener('click', event => {
    event.preventDefault();
  });
}
