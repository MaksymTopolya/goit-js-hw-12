import { getPhotos } from "./js/pixabay";
import { markupMyImages, markupMyImg } from "./js/render-function";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const list = document.querySelector(".list")
const form = document.querySelector(".form")
const moreBtn = document.querySelector(".more-btn")
const loadingAfterButton = document.querySelector(".loading-afterBtn")
form.addEventListener("submit", handleSubmit)
moreBtn.addEventListener("click", loadMore)

let currentPage = 1;
let maxPage = 0;
const pageSize = 15;
let searchQuery 
hideLoadMore()
loadingAfterButtonHide()

async function handleSubmit(event) {
    event.preventDefault()

 searchQuery = event.target.elements.search.value
    currentPage = 1
       if (!searchQuery) {
    return iziToast.error({
           title: 'Hey',
           message: "Write something to search",
           theme: 'dark',
          backgroundColor: 'red',
          position: 'topCenter',
          color: 'black',
});
    }
    
    try {
        const data = await getPhotos(searchQuery, currentPage)
        maxPage = Math.ceil(data.totalHits / pageSize);
        if (data.hits.length === 0) {
          return iziToast.error({
           title: 'Hey',
           message: "We can not find something",
           theme: 'dark',
          backgroundColor: 'red',
          position: 'topCenter',
          color: 'black',
});
        }
        list.innerHTML = ''

        list.innerHTML = markupMyImg(data.hits) 
        showLoadMore()
        const galleryCardHeight = document.querySelector('.list-item').getBoundingClientRect().height;
        window.scrollBy({
            top: galleryCardHeight * 2,
            behavior: 'smooth'
        });

    } catch (error) {
        return iziToast.error({
           title: 'Hey',
           message: [error],
           theme: 'dark',
          backgroundColor: 'red',
          position: 'topCenter',
          color: 'black',
});
    }

}

async function loadMore(event) {
    try {
        hideLoadMore()
        loadingAfterButtonShow()
        let load; 
        if (maxPage > currentPage) {
            load = await getPhotos(searchQuery, currentPage += 1)
        }
        if (maxPage <= currentPage) {
            hideLoadMore()
        }

        loadingAfterButtonHide()
        list.insertAdjacentHTML("beforeend", markupMyImg(load.hits))
        const galleryCardHeight = document.querySelector('.list-item').getBoundingClientRect().height;
        window.scrollBy({
            top: galleryCardHeight * 2,
            behavior: 'smooth'
        });
        showLoadMore()
    } catch (err) {
        console.error(err); 
        return iziToast.error({
           title: 'Hey',
           message: [err],
           theme: 'dark',
          backgroundColor: 'red',
          position: 'topCenter',
          color: 'black',
        });
    }
}



function showLoadMore() {
    moreBtn.classList.remove("hide")
}

function hideLoadMore() {
    moreBtn.classList.add("hide")
}



function loadingAfterButtonHide() {
    loadingAfterButton.classList.add("hiden")
}

function loadingAfterButtonShow() {
    loadingAfterButton.classList.remove("hiden")
}