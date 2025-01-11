// IMPORT START
// IziToast Import
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

iziToast.settings({
    titleColor: 'white',
    messageColor: 'white',
    backgroundColor: 'red',
    position: 'topRight',
    maxWidth: 432,
});

// Simple Light Box
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Other JS functions
import { getImages } from "./js/pixabay-api.js"
import { createImageTemplate } from "./js/render-functions.js"

// IMPORT END
const galleryEl = document.querySelector(".js-gallery");
const formElement = document.querySelector("form");
const preloaderElement = document.querySelector(".loader");

const submitQuery = formElement.addEventListener("submit", event => {
    event.preventDefault()

    const formData = new FormData(formElement);
    const searchQuery = formData.get("search-query");

    // Перевірка на пусте поле та пробіли
    if (!searchQuery.trim()) {
        alert('Please enter the search query')
        return
    }

     preloaderElement.removeAttribute('hidden')

    getImages(searchQuery)
        .then(data => {
            preloaderElement.setAttribute('hidden', '');
        if (data.total === 0) {
            iziToast.show({ message: `Sorry, there are no images matching your search query. Please try again!` });
            return null;
        }
        // Create HTML markup for recieved images
        const listImages = createImageTemplate(data.hits);
        // HIDE PRELOADER HERE
        return listImages;
    })
    .then(listImages => {
        // Place recieved images in HTML
        galleryEl.innerHTML = listImages;

        let gallery = new SimpleLightbox('.js-gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
        });
        gallery.refresh();
        gallery.on('error.simplelightbox', function (e) {
        console.log(e); // some usefull information
        });

    })
    .catch(error => {
            console.log(error)
    });
    
})



