// let select = document.querySelector('#pets');

// select.onchange = function () {
//     console.log(select.value);
// }

const {form} = document.forms;
form.addEventListener('submit', (event) => {
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
}, { "passive": false })

// let mainFormis = document.forms.mainForm;
// console.log(mainFormis);
// let mainFormRadioDrink = mainFormis.drink.value;
// let mainFormInputName = mainFormis.name;
// console.log(document.querySelector("form"));
// console.log(mainFormRadioDrink);



// mainFormRadioDrink.addEventListener("change", function (e) {
//        console.log(mainFormRadioDrink);
//    });

// mainFormInputName.addEventListener("input", function (event) {
//     console.log('value: ${mainFormInputName.value}');
// });


// document.getElementById("#form-1").addEventListener('submit', (event) => {
//     event.preventDefault();
//     console.log("ok");
//     const form = document.getElementById("#form-1");
//     console.dir(form);
//     const name = form.elements.name.value
//     form.reset();
    
// });



// let testform = document.querySelector('#sendform');
// testform.onclick = function(event) {
//     event.preventDefault();
//     console.log('work');
// }

