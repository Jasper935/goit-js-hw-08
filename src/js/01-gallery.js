import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items.js';
// Change code below this line



const gallery = document.querySelector('.gallery')

const res = galleryItems.reduce((acc, el) =>
    acc += ` <a class="gallery__item" href="${el.original}">
    <img class="gallery__image" data-source="${el.original}" src="${el.preview}" alt="${el.description}" />
  </a>`
    , '')
   

gallery.insertAdjacentHTML('afterbegin', res)



 new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250 
 });