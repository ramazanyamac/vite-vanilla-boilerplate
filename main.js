import "./main.scss";
import axios from "axios";

function cardComponent(image, title) {
    const card = `
    <div class="card">
        <a href="#">
          <img src="${image}" alt="${title}" class="card__img" loading="lazy">
        </a>
        <div class="card__body">
          <h5 class="card__title">${title}</h5>
          <time datetime="2020-01-01" class="card__time">Jul 1, 2020</time>
        </div>
    </div>`;

    return card;
}

async function getCat() {
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/albums/1/photos");
        return res;
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", async function () {
    const { data } = await getCat();
    const cardContainer = document.querySelector(".js-card-container");
    data.forEach((item) => {
        cardContainer.innerHTML += cardComponent(item.url, item.title)
    });
});
