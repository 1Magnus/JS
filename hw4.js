'use strict'

// Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
// 1. Получить все товары, у которых есть фотографии, можете использовать метод filter 
// 2. Отсортируйте товары по цене (от низкой цены к высокой), можете использовать метод sort

const products = [
    { id: 3, price: 127, photos: ["1.jpg", "2.jpg",] },
    { id: 5, price: 499, photos: [] },
    { id: 10, price: 26, photos: ["3.jpg"] },
    { id: 8, price: 78, },
];


function isHavePhotos(product) {
    let photos = product.photos
    if ((photos != undefined) && (photos.length > 0)) {
        return true
    };
    return false
}

const resault = products.filter(isHavePhotos)
console.log(resault)

products.sort(function (product1, product2) {
    if (product1.price > product2.price) {
        return 1
    }
    if (product1.price < product2.price) {
        return -1
    }
    return 0
});

console.log(products)