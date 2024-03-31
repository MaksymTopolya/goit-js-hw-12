import { getPhotos } from "./js/pixabay";
import { markupMyImages, markupMyImg } from "./js/render-function";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const list = document.querySelector(".list")
const form = document.querySelector(".form")
const moreBtn = document.querySelector(".more-btn")
const loading = document.querySelector(".loading")
const loadInBtn = document.querySelector(".loading-afterBtn")
form.addEventListener("submit", handleSubmit)
moreBtn.addEventListener("click", loadMore)

let currentPage = 1;
let maxPage = 0;
const pageSize = 15;
let inputValue
hideLoadMore()
const galleryCardHeight = document.querySelector('.list-item').getBoundingClientRect().height;

loadingHideMoreBtn()

async function handleSubmit(event) {
    event.preventDefault()

 inputValue = event.target.elements.search.value
    currentPage = 1
       if (!inputValue) {
    return iziToast.error({
           title: 'Hey',
           message: "Write something to search",
           theme: 'dark',
          backgroundColor: 'red',
          position: 'topCenter',
          color: 'black',
});
    }
    loadingShow()
    
    try {
        const data = await getPhotos(inputValue, currentPage)
        maxPage = Math.ceil(data.totalHits / pageSize);

        if (maxPage === 0) {
          return iziToast.error({
           title: 'Hey',
           message: "You have reached the end",
           theme: 'dark',
          backgroundColor: 'red',
          position: 'topCenter',
          color: 'black',
});
        }

         loadingHide()
        list.innerHTML = markupMyImg(data.hits) 
        showLoadMore()

        window.scrollBy({
            top: galleryCardHeight * 2,
            behavior: 'smooth'
        });

    } catch (error) {
        console.log(error)
    }

}

async function loadMore(event) {
    try {
        hideLoadMore()
        loadingShowMoreBtn()
        const load = await getPhotos(inputValue, currentPage += 1)
        if (maxPage <= currentPage) {
         hideLoadMore()
        }

        loadingHideMoreBtn()
        list.insertAdjacentHTML("beforeend", markupMyImg(load.hits)) 
        showLoadMore()
    } catch (err) {
        console.log(err)
    }
}


function showLoadMore() {
    moreBtn.classList.remove("hide")
}

function hideLoadMore() {
    moreBtn.classList.add("hide")
}




function loadingHide() {
    loading.classList.add("hide")
}

function loadingShow() {
    loading.classList.remove("hide")
}



function loadingHideMoreBtn() {
    loadInBtn.classList.add("hide")
}

function loadingShowMoreBtn() {
    loadInBtn.classList.remove("hide")
}