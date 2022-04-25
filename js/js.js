// let select = document.querySelector('#pets');

// select.onchange = function () {
//     console.log(select.value);
// }

//***** 


function checkSend (el) {
    const form = document.forms.mainForm;
    console.log(form);
    console.log(form.Food.value);

    
    const {name, age, food, pet, drink, move} = form;
        let ResultsData = { 
            name: form.Name.value,
            age: form.age.value,
            food: form.Food.value,
            pet: form.pet.value, 
            drink: form.drink.value, 
            move: form.move.value
        }
    console.log(ResultsData);
    
//***** Analysis answers
    let hol = 0;
    let fle = 0;
    let mel = 0;
    let san = 0;

    let ResultsHtml_1 = "<p>Dear," + ResultsData.name + "!</p>";

    if (5 > ResultsData.age || ResultsData.age > 90 ) {
        ResultsHtml_1 += "<p>У Вас есть чувство юмора :)</p>";
        san += 1;
        hol += 1;
    }

    if (ResultsData.food == "McDonalds") {
        san += 1;
        hol += 1;
        if ( ResultsData.age > 50 ){
            ResultsHtml_1 += "<p>Вы молоды душей и готовы к новым победам.</p>";
        } else {
            ResultsHtml_1 += "<p>Вы цените своё время и получаете от жизни максимум.</p>";
        }
    } else {
        ResultsHtml_1 += "<p>В душе Вы - романтик и цените отношение к себе среди окружающих.</p>";
        fle += 1;
        mel += 1;
    }

    if (ResultsData.pet == "Cat") {
        ResultsHtml_1 += "<p>Вы ответственный и заботливый нежный человек</p>";
        fle += 1;
        san += 1;
    } else if (ResultsData.pet == "Dog") {
        ResultsHtml_1 += "<p>Вы ответственный и надёжный друг, на которого всегда можно положиться</p>";
        mel += 1;
    } else { 
        ResultsHtml_1 += "<p>Вы готовы принять заботу о себе, но не готовы тратить время на других</p>";
        hol += 1;
    }

    if (ResultsData.drink == "Coffee") {
        ResultsHtml_1 += "<p>Вы предпочетаете поспать, что бы приступить к делу с новыми силами.</p>";
        fle += 1;
        hol += 1;
    } else if (ResultsData.pet == "Juice") {
        ResultsHtml_1 += "<p>Вы выступаете за здоровый образ жизни.</p>";
        mel += 1;
    } else { 
        ResultsHtml_1 += "<p>Ваша натура требует хорошую компанию для хорошего отдыха</p>";
        hol += 1;
        san += 1;
    }

    if (ResultsData.move == "Kedy") {
        ResultsHtml_1 += "<p>Вы думаете о своём теле и оно Вас долго будет радрвать своей надежностью.</p>";
        mel += 1;
    } else if (ResultsData.pet == "Bike") {
        ResultsHtml_1 += "<p>Вы готовы приобщиться к хорошему делу, если оно не сильно обременительно.</p>";
        san += 1;
    } else { 
        ResultsHtml_1 += "<p>Вы предпочитаете все делать быстро и без лишних прелюдий</p>";
        hol += 1;
        fle += 1;
    }    

    ResultsHtml_1 += "<p></p><p>Мы не претендуем на медицинкие определения, мы с Вами вместе просто немного улыбнулись). </p><p>Хорошего дня!</p>";

    console.log(ResultsHtml_1);

    document.querySelector('.ResultHTML').innerHTML += ResultsHtml_1;


    return false;
}


// const {form} = document.forms;
// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const {name, age, food, pet, drink, move} = form;
//     const Results = { 
//         name: name.value,
//         age: age.value,
//         food: food.value,
//         pet: pet.value, 
//         drink: drink.value, 
//         move: move.value
//     };
//     console.log(Results);
// }, { "passive": false })

//************

// let mainFormis = document.forms.mainForm;
// console.log(mainFormis);
// let mainFormRadioDrink = mainFormis.drink.value;
// let mainFormInputName = mainFormis.name;
// console.log(document.querySelector("form"));
// console.log(mainFormRadioDrink);

//************

// mainFormRadioDrink.addEventListener("change", function (e) {
//        console.log(mainFormRadioDrink);
// });

// mainFormInputName.addEventListener("input", function (event) {
//     console.log('value: ${mainFormInputName.value}');
// });

//************

// document.getElementById("#form-1").addEventListener('submit', (event) => {
//     event.preventDefault();
//     console.log("ok");
//     const form = document.getElementById("#form-1");
//     console.dir(form);
//     const name = form.elements.name.value
//     form.reset();
    
// });

//************

// let testform = document.querySelector('#sendform');
// testform.onclick = function(event) {
//     event.preventDefault();
//     console.log('work');
// }

