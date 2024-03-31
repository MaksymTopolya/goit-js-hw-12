import axios from "axios";


async function getPhotos(query, currentPage) {

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
        console.log(err)
    }
}

export { getPhotos };

