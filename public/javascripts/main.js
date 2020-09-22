"use strict";
var form = document.querySelector('#form');
var inputName = document.querySelector('#name');
var inputAge = document.querySelector('#age');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(inputName.value + inputAge.value);
});
