import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const galleryMarkup = handleGalleryMarkup(galleryItems);

function handleGalleryMarkup (items) {
    return items.map(item => `<div class = gallery__item><a class = gallery__link><img class = gallery__image src = "${item.preview}" data-source = "${item.original}" alt = "${item.description}" ></a></div>`).join('');
}

// console.log(galleryMarkup);

galleryList.insertAdjacentHTML('beforeend', galleryMarkup)

galleryList.addEventListener('click', handleGalleryClick)

function handleGalleryClick(event) {
    event.preventDefault()
   
    if(event.target.nodeName !== 'IMG'){ 
        return
    }

    const modalImg = event.target.dataset.source
    console.log(modalImg);

    const instance = basicLightbox.create(
    `<img src="${modalImg}" 
    width="800" height="600">`
)

instance.show();

function handleEscapeClose (event) {
    if (event.code === 'Escape') {
        instance.close()
        window.removeEventListener('keydown', handleEscapeClose)
    }

}
window.addEventListener('keydown', handleEscapeClose)
}
// console.log(basicLightbox);