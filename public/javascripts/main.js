"use strict";
var form = document.querySelector('#form');
var inputName = document.querySelector('#name');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(inputName.value);
});
