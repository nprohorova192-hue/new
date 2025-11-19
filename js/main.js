const numElement = document.querySelector('.num');
const numElement1 = document.querySelector('.num-1');
const numElement2 = document.querySelector('.num-2');
const numElement3 = document.querySelector('.num-3');
const numElement4 = document.querySelector('.num-4');
const numNewElement = document.querySelector('.num-new');

const num = prompt('Введите четырѐхразрядное положительное целое число:', '1234');
numElement.textContent = `Исходное число: ${num}`;

const num1 = num % 10;
numElement1.textContent = `Число единиц в исходном числе: ${num1}`;

const num2 = Math.trunc(num / 10) % 10;
numElement2.textContent = `Число десятков в исходном числе: ${num2}`;

const num3 = Math.trunc(num / 100) % 10;
numElement3.textContent = `Число сотен в исходном числе: ${num3}`;

const num4 = Math.trunc(num / 1000) % 10;
numElement4.textContent = `Число тысяч в исходном числе: ${num4}`;

const numNew = `${num2}${num4}${num3}${num1}`;

numNewElement.textContent = `Новое число: ${numNew}`;