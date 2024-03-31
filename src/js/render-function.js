
export function markupMyImages({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) {
    return `
        <li class="list-item">
            <a href="${largeImageURL}" class="photo" data-lightbox="photos">
                <img src="${webformatURL}" class="photo" data-img="${largeImageURL}">
            </a>
            <div class="desc">
                <ul class="info">
                    <li class="mini-item">
                        <h3 class="mini-title">Likes</h3>
                        <p class="about-photo">${likes}</p>
                    </li>
                    <li class="mini-item">
                        <h3 class="mini-title">Views</h3>
                        <p class="about-photo">${views}</p>
                    </li>
                    <li class="mini-item">
                        <h3 class="mini-title">Comments</h3>
                        <p class="about-photo">${comments}</p>
                    </li>
                    <li class="mini-item">
                        <h3 class="mini-title">Downloads</h3>
                        <p class="about-photo">${downloads}</p>
                    </li>
                </ul>
            </div>
        </li>
    `;
}

export function markupMyImg(arr) {
    return arr.map(markupMyImages).join('');
}