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

    document.querySelector('.content-result').style.display = 'inline-block';

//***** Analysis answers
    let hol = 0;
    let fle = 0;
    let mel = 0;
    let san = 0;
    let TemperHtml = "";

    let ResultsHtml_1 = "<p>Уважаемый," + ResultsData.name + "!</p>";

    if (5 > ResultsData.age || ResultsData.age > 90 ) {
        ResultsHtml_1 += "<p>У Вас присутствует чувство юмора :)</p>";
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
        ResultsHtml_1 += "<p>Вы ответственный и заботливый нежный человек.</p>";
        fle += 1;
        san += 1;
    } else if (ResultsData.pet == "Dog") {
        ResultsHtml_1 += "<p>Вы ответственный и надёжный друг, на которого всегда можно положиться.</p>";
        mel += 1;
    } else { 
        ResultsHtml_1 += "<p>Вы готовы принять заботу о себе, но не готовы тратить время на других.</p>";
        hol += 1;
    }

    if (ResultsData.drink == "Tea") {
        ResultsHtml_1 += "<p>Вы предпочетаете традиционный отдых в спокойной отмосфере.</p>";
        fle += 1;
        mel += 1;
    } else if (ResultsData.pet == "Coffee") {
        ResultsHtml_1 += "<p>Вы предпочетаете поспать, что бы приступить к делу с новыми силами.</p>";
        fle += 1;
        hol += 1;
        san += 1;
    } else if (ResultsData.pet == "Juice") {
        ResultsHtml_1 += "<p>Вы выступаете за здоровый образ жизни.</p>";
        mel += 1;
    } else { 
        ResultsHtml_1 += "<p>Ваша натура требует хорошую компанию для хорошего отдыха.</p>";
        hol += 1;
        san += 1;
    }

    if (ResultsData.move == "Kedy") {
        ResultsHtml_1 += "<p>Вы думаете о своём теле и оно Вас долго будет радовать своей надежностью.</p>";
        mel += 1;
    } else if (ResultsData.pet == "Bike") {
        ResultsHtml_1 += "<p>Вы готовы приобщиться к хорошему делу, если оно не сильно обременительно.</p>";
        san += 1;
    } else { 
        ResultsHtml_1 += "<p>Вы предпочитаете все делать быстро и без лишних прелюдий.</p>";
        hol += 1;
        fle += 1;
    }    

//***** Analysis type

    if (san >= hol & san >= fle & san >= mel) {
        TemperHtml += "Temperament is active, movable and cheerful...";
        document.querySelector('.TypeImg').src="img/sanguine-icon.png";
        TemperHtml_2 = "Сангвиник";
    } else if ( fle >= hol & fle >= mel) {
        TemperHtml += "Темперамент спокойный, неспешный, невозмутимый...";
        document.querySelector('.TypeImg').src="img/phlegmatic-icon.png";
        TemperHtml_2 = "Флегматик";
    } else if ( hol >= mel) {
        TemperHtml += "Темперамент неуравновешенный и вспыльчивый...";
        document.querySelector('.TypeImg').src="img/choleric-icon.png";
        TemperHtml_2 = "Холерик";
    } else { 
        TemperHtml += "Темперамент впечатлительный и ранимый...";
        document.querySelector('.TypeImg').src="img/melancholic-icon.png";
        TemperHtml_2 = "Меланхолик";
    }    

    
    ResultsHtml_1 += "<p>Поздравляем, похоже, Вы - " + TemperHtml_2 + "! </p><p>Мы не претендуем на медицинкие определения, мы с Вами вместе просто немного улыбнулись).</p><p>Хорошего дня!</p>";

    console.log(ResultsHtml_1);
    
    document.querySelector('.ResultHTML').innerHTML = ResultsHtml_1;
    document.querySelector('h3').innerHTML = TemperHtml;
    
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



//******Langueges*****//



// <html lang="ru"> => en . uk

let selectLang = document.getElementById("langChange");
changeLang ();
selectLang.addEventListener('change', changeLang);

function changeLang (){
    let lang = selectLang.value;
    let langEng = document.querySelectorAll('.ENG');
    let langUkr = document.querySelectorAll('.UKR');
    let langRus = document.querySelectorAll('.RUS');


    switch (lang){
        case "EN":
            for (i = 0; i < langEng.length; i++) {
                langEng[i].style.display = "inherit";
                langUkr[i].style.display = "none";
                langRus[i].style.display = "none";
              }                  
            break;
        case "UA":
            for (i = 0; i < langEng.length; i++) {
                langEng[i].style.display = "none";
                langUkr[i].style.display = "inherit";
                langRus[i].style.display = "none";
              }
            break;
        case "RU":
            for (i = 0; i < langEng.length; i++) {
                langEng[i].style.display = "none";
                langUkr[i].style.display = "none";
                langRus[i].style.display = "inherit";
              }
            break;    
    }
}

