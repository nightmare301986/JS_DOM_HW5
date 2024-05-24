//Задание 1
//1. Поиск в интернете (бесплатные api примеры).
//2. Найти любые данные, на произвольную тему.
//3. Создать файл data.js.
//4. Создать переменную которая будет хранить данные из публичных api.

//console.log(data);
const stData = JSON.parse(data);
//console.log(stData);

//Задание 2
//1. Создать файл index.html.
//2. Подключить data.js.
//3. Сформировать контент из данных (картинка загловок и параграф).
//4. Добавить данный контент в вёрстку.
//5. * Добавить стили при необходимости (по желанию).

const divContentEl = document.querySelector('.content');

stData.forEach(element => {
    divContentEl.insertAdjacentHTML('beforeend', `
    <div class = "wrapper">
        <h2>${element.answer}</h2>
        <img src="${element.image}" alt="">
        <p> Файл: ${(element.image).split('/')[5]}</p>
    </div>
    `)
});