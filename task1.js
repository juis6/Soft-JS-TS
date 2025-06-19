// На HTML-сторінці є ненумерований список з id="list", який містить 5 елементів <li>
// Використовуючи засоби DOM, отримай доступ до всіх елементів списку та виведи їх вміст в консоль (console.log) в такому порядку:
// перший елемент → останній елемент → другий елемент → третій елемент → четвертий елемент
// *Додатково: кількість елементів може бути довільною і невідомою наперед
// *Додатково: на сторінці можуть бути інші списки, всередині потрібного списку можуть бути інші елементи, крім <li>.
// Вважайте, що скрипт підключено в кінці body, тести не генерують подію `DOMContentLoaded`.

const list = document.getElementById('list');
const listItems = list.getElementsByTagName('li');

if (listItems.length > 0) {
    console.log(listItems[0].textContent);
}

if (listItems.length > 0) {
    console.log(listItems[listItems.length - 1].textContent);
}

if (listItems.length > 1) {
    console.log(listItems[1].textContent);
}

if (listItems.length > 2) {
    console.log(listItems[2].textContent);
}

if (listItems.length > 3) {
    console.log(listItems[3].textContent);
}