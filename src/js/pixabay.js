import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

async function getPhotos(query, currentPage) {
    loadingIndicatorShow()
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const url = BASE_URL + END_POINT;

    const params = {
        key: '43031538-631b2ceb9342d78106785df9b',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        pageSize: 15,
        page: currentPage,
    };

    try {
        const res = await axios.get(url, { params });
        return res.data;
    } catch (err) {
        return iziToast.error({
           title: 'Hey',
           message: [err],
           theme: 'dark',
          backgroundColor: 'red',
          position: 'topCenter',
          color: 'black',
});
    } finally {
        loadingIndicatorHide()
    }
}
const loadingIndicator = document.querySelector(".loading")

function loadingIndicatorHide() {
    loadingIndicator.classList.add("hide")
}

function loadingIndicatorShow() {
    loadingIndicator.classList.remove("hide")
}


export { getPhotos };

