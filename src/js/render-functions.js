import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = null;

export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  gallery.innerHTML = ''; 

  const markup = images.map((image) => {
    return `
      <a href="${image.largeImageURL}" class="gallery-item">
        <img src="${image.webformatURL}" alt="${image.tags}" title="${image.tags}" class="gallery-image"/>
        <div class="info">
          <p class="article-strick" ><b class="main-word" >Likes:</b> ${image.likes}</p>
          <p class="article-strick" ><b class="main-word" >Views:</b> ${image.views}</p>
          <p class="article-strick" ><b class="main-word" >Comments:</b> ${image.comments}</p>
          <p class="article-strick" ><b class="main-word" >Downloads:</b> ${image.downloads}</p>
        </div>
      </a>`;
  }).join('');
    

  gallery.insertAdjacentHTML('beforeend', markup);
 
  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a');
  } else {
    lightbox.refresh();
  }
}
