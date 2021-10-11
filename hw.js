// конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет принимать текст
//  и записывать его в свойство text объекта.
// б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код. 
// Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
// Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству highlighted значение true.

'use strict';

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;

}

Post.prototype.edit = function (text) {
    this.text = text;
};


function AttachedPost(author, text, date) {
    Post.call(this, author, text, date)
    this.highlighted = false;

}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
};

let post1 = new Post('Автор1', 'Текст', 'Дата');
console.log(post1);
post1.edit('text');
console.log(post1);

let post2 = new AttachedPost('Автор2', 'Текст', 'Дата');
console.log(post2);
post2.edit('abca');
post2.makeTextHighlighted();
console.log(post2);

// =====================================================================================

