import dbService from './dbService.js';

const BASE_URL = '/products';

export const productService = {
    getAll: function () {
        return dbService.get(BASE_URL);
    },

    add: function (product) {
        return dbService.post(BASE_URL, product);
    },

    get: function (id) {},

    delete: function (id) {},

    find: function (name) {
        // return dbService.get(`${BASE_URL}?name_like=${name}`);
        return dbService.get(`${BASE_URL}?q=${name}`);
    },
    getByCategory: function (category) {
        if (!category) return this.getAll();

        return dbService.get(`${BASE_URL}?category=${category}`);
    },



};
