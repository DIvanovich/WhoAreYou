// let select = document.querySelector('#pets');

// select.onchange = function () {
//     console.log(select.value);
// }

const {form} = document.forms;
form.addEventListener('submit', () => {
    event.preventDefault();
    const {name, age, food, pet, drink, move} = form;
    const Results = { 
        name: name.value,
        age: age.value,
        food: food.value,
        pet: pet.value, 
        drink: drink.value, 
        move: move.value
    };
    console.log(Results);
})



// document.querySelector('form').addEventListener('submit', (event) => {
//     event.preventDefault();
//     const form = document.querySelector('form');
//     console.log(form);
//     const name = form.elements.name.value
// });

// let testform = document.querySelector('#sendform');
// testform.onclick = function(event) {
//     event.preventDefault();
//     console.log('work');
// }

