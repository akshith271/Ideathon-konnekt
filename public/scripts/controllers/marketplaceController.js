import { productService } from '../services/productService.js';
import { imageService } from '../services/imageService.js';
import { renderProductCard } from '../templates/productCard.js';

function _renderProducts(products) {
    const output = document.getElementById('output');
    output.innerHTML = '';
    products.forEach((item) => {
        output.innerHTML += renderProductCard(item);
    });
}
function renderProductsByCategory(category) {
    productService.getByCategory(category).then((products) => {
        _renderProducts(products);
    });
}
function renderProductsBySearch(name) {
    productService.find(name).then((products) => {
        _renderProducts(products);
    });
}
function renderAllProducts() {
    productService.getAll().then((products) => {
        _renderProducts(products);
    });
}
$(document).ready(function () {
    $('#post-ad-modal').on('shown.bs.modal', function () {
        $('#post-ad-trigger').trigger('focus');
    });

    document.querySelector('#post-ad-submit').addEventListener('click', postAd);
    document
        .querySelector('#ad_image')
        .addEventListener('change', imageHandler);

    document.querySelectorAll('.filter-pill').forEach((ele) => {
        const category = ele.id.split('filter-pill-')[1];
        ele.addEventListener('click', (event) =>
            renderProductsByCategory(category)
        );
    });
    const searchHandler = (event) => {
        renderProductsBySearch(searchInputEle.value);
    };

    const searchInputEle = document.querySelector('#search-input');
    searchInputEle.addEventListener('change', searchHandler);
    // searchInputEle.addEventListener('keydown', searchHandler);

    document
        .querySelector('#search-button')
        .addEventListener('click', searchHandler);
    renderAllProducts();
});
function imageHandler(event) {
    const file = event.target.files[0];
    const data = new FormData();
    data.append('image', file);
    imageService.add(data).then((response) => {
        const { data, success } = response;
        if (success) {
            const imgUrlField = document.querySelector('#ad_image_url');
            imgUrlField.value = data.display_url;
            const deleteImgUrlField = document.querySelector(
                '#ad_delete_image_url'
            );
            deleteImgUrlField.value = data.delete_url;
        }
    });
}

function postAd() {
    const formEle = document.getElementById('postAdForm');
    const formData = new FormData(formEle);
    const itr = formData.entries();
    const product = {};
    let current = itr.next();
    while (!current.done) {
        product[current.value[0]] = current.value[1];
        current = itr.next();
    }

    //TODO: Add user details to product object

    productService.add(product);
}
