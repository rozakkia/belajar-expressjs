
const form = document.querySelector('#form') as HTMLFormElement;
const inputName = document.querySelector('#name') as HTMLInputElement;
const inputAge = document.querySelector('#age') as HTMLInputElement;



form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    console.log(
       inputName.value + inputAge.value
    );
})