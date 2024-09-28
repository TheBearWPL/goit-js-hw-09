import { images } from './gallery-items'; // Import images from gallery-items.js
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const galleryItems = images
  .map(
    ({ preview, original, description }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img
            class="gallery-image"
            src="${preview}"
            alt="${description}"
          />
        </a>
      </li>
    `
  )
  .join('');

gallery.innerHTML = galleryItems;

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', // Używa atrybutu alt jako podpisu
  captionDelay: 250, // Opóźnienie w wyświetleniu podpisu
});
