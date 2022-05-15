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
    let ResultsHtml_1;

   // selectLangValue=substr(0).langHash;
    //console.log(selectLangValue);

    switch (selectLangValue){
        case "EN":
            ResultsHtml_1 = "<p><b>Dear, " + ResultsData.name + "!</b></p>";
            break;
        case "UA":                
            ResultsHtml_1 = "<p><b>Шановний, " + ResultsData.name + "!</b></p>";
            break;
        case "RU":
            ResultsHtml_1 = "<p><b>Уважаемый, " + ResultsData.name + "!</b></p>";
            break;
    } 
    

    if (5 > ResultsData.age || ResultsData.age > 90 ) {
        san += 1;
        hol += 1;
        switch (selectLangValue){
            case "EN":
                ResultsHtml_1 += "<p>You have a sense of humor :)</p>";                        
                break;
            case "UA":                
                ResultsHtml_1 += "<p>У вас є почуття гумору :)</p>";
                break;
            case "RU":
                 ResultsHtml_1 += "<p>У Вас присутствует чувство юмора :)</p>";
                break;
        }             
    }

    if (ResultsData.food == "McDonalds") {
        san += 1;
        hol += 1;
        if ( ResultsData.age > 50 ){
            switch (selectLangValue){
                case "EN":
                    ResultsHtml_1 += "<p>You are young souls and are ready for new victories.</p>";                        
                    break;
                case "UA":                
                    ResultsHtml_1 += "<p>Ви молоді душею і готові до нових перемог.</p>";
                    break;
                case "RU":
                     ResultsHtml_1 += "<p>Вы молоды душей и готовы к новым победам.</p>";
                    break;
            }  
        } else {
            switch (selectLangValue){
                case "EN":
                    ResultsHtml_1 += "<p>You value your time and get the maximum from life.</p>";                        
                    break;
                case "UA":                
                    ResultsHtml_1 += "<p>Ви цінуєте свій час і отримуєте максимум від життя.</p>";
                    break;
                case "RU":
                     ResultsHtml_1 += "<p>Вы цените своё время и получаете от жизни максимум.</p>";
                    break;
            }              
        }
    } else {
      
        switch (selectLangValue){
            case "EN":
                ResultsHtml_1 += "<p>In your soul you are a romantic and appreciate  attitude to yourself among others.</p>";                        
                break;
            case "UA":                
                ResultsHtml_1 += "<p>В душі ви романтик і цінуєте ставлення до себе серед інших.</p>";
                break;
            case "RU":
                ResultsHtml_1 += "<p>В душе Вы - романтик и цените отношение к себе среди окружающих.</p>";
                break;
        }      
        fle += 1;
        mel += 1;
    }

    if (ResultsData.pet == "Cat") {
        switch (selectLangValue){
            case "EN":
                ResultsHtml_1 += "<p>You are a responsible and caring gentle person.</p>";                        
                break;
            case "UA":                
                ResultsHtml_1 += "<p>Ви відповідальна і турботлива ніжна людина.</p>";
                break;
            case "RU":
                ResultsHtml_1 += "<p>Вы ответственный и заботливый нежный человек.</p>";
                break;
        }             
        fle += 1;
        san += 1;
    } else if (ResultsData.pet == "Dog") {
        
        switch (selectLangValue){
            case "EN":
                ResultsHtml_1 += "<p>You are a responsible and reliable friend who can always rely on.</p>";                        
                break;
            case "UA":                
                ResultsHtml_1 += "<p>Ви відповідальний і надійний друг, на якого завжди можна покластися.</p>";
                break;
            case "RU":
                ResultsHtml_1 += "<p>Вы ответственный и надёжный друг, на которого всегда можно положиться.</p>";
                break;
        } 
        mel += 1;
    } else {         
        switch (selectLangValue){
            case "EN":
                ResultsHtml_1 += "<p>You are ready to take care of yourself, but are not ready to waste time on others.</p>";                        
                break;
            case "UA":                
                ResultsHtml_1 += "<p>Ви готові прийняти увагу до себе, але не готові витрачати час на інших.</p>";
                break;
            case "RU":
                ResultsHtml_1 += "<p>Вы готовы принять заботу о себе, но не готовы тратить время на других.</p>";
                break;
        } 
        hol += 1;
    }

    if (ResultsData.drink == "Tea") {
        
        switch (selectLangValue){
            case "EN":
                ResultsHtml_1 += "<p>You prefer a traditional rest in a relaxing atmosphere.</p>";                        
                break;
            case "UA":                
                ResultsHtml_1 += "<p>Ви віддаєте перевагу традиційному відпочинку в розслаблюючій атмосфері.</p>";
                break;
            case "RU":
                ResultsHtml_1 += "<p>Вы предпочитаете традиционный отдых в спокойной атмосфере.</p>";
                break;
        } 
        fle += 1;
        mel += 1;
    } else if (ResultsData.pet == "Coffee") {
        
        switch (selectLangValue){
            case "EN":
                ResultsHtml_1 += "<p>You prefer to sleep in order to get down to working with new strength.</p>";                        
                break;
            case "UA":                
                ResultsHtml_1 += "<p>Ви віддаєте перевагу поспати, щоб зайнятися справами з новою силою.</p>";
                break;
            case "RU":
                ResultsHtml_1 += "<p>Вы предпочетаете поспать, что бы приступить к делу с новыми силами.</p>";
                break;
        } 
        fle += 1;
        hol += 1;
        san += 1;
    } else if (ResultsData.pet == "Juice") {
        
        switch (selectLangValue){
            case "EN":
                ResultsHtml_1 += "<p>You prefer to sleep in order to get down to working with new strength.</p>";                        
                break;
            case "UA":                
                ResultsHtml_1 += "<p>Ви прихильник здорового способу життя.</p>";
                break;
            case "RU":
                ResultsHtml_1 += "<p>>Вы выступаете за здоровый образ жизни.</p>";
                break;
        } 
        mel += 1;
    } else { 
        
        switch (selectLangValue){
            case "EN":
                ResultsHtml_1 += "<p>Your nature requires a good company for a good rest.</p>";                        
                break;
            case "UA":                
                ResultsHtml_1 += "<p>Ваша природа вимагає хорошої компанії для гарного відпочинку.</p>";
                break;
            case "RU":
                ResultsHtml_1 += "<p>Ваша натура требует хорошую компанию для хорошего отдыха.</p>";
                break;
        } 
        hol += 1;
        san += 1;
    }

    if (ResultsData.move == "Kedy") {
        
        switch (selectLangValue){
            case "EN":
                ResultsHtml_1 += "<p>You think about your body and it will delight you for a long time with its reliability.</p>";                        
                break;
            case "UA":                
                ResultsHtml_1 += "<p>Ви думаєте про своє тіло, і воно довго буде віддячувати Вам своєю надійністю.</p>";
                break;
            case "RU":
                ResultsHtml_1 += "<p>Вы думаете о своём теле и оно долго будет благодарить Вас своей надежностью.</p>";
            break;
        }
        mel += 1; 
    } else if (ResultsData.pet == "Bike") {
        
        switch (selectLangValue){
            case "EN":
                ResultsHtml_1 += "<p>You think about your body and it will delight you for a long time with its reliability.</p>";                        
                break;
            case "UA":                
                ResultsHtml_1 += "<p>Ви готові приєднатися до хорошої справи, якщо це не дуже обтяжливо.</p>";
                break;
            case "RU":
                ResultsHtml_1 += "<p>Вы готовы приобщиться к хорошему делу, если оно не сильно обременительно.</p>";
            break;
        } 
        san += 1;
    } else { 
        
        switch (selectLangValue){
            case "EN":
                ResultsHtml_1 += "<p>You prefer to do everything quickly and without unnecessary preludes.</p>";                        
                break;
            case "UA":                
                ResultsHtml_1 += "<p>Ви віддаєте перевагу робити все швидко і без зайвих прелюдій.</p>";
                break;
            case "RU":
                ResultsHtml_1 += "<p>Вы предпочитаете все делать быстро и без лишних прелюдий.</p>";
            break;
        } 
        hol += 1;
        fle += 1;
    }    

//***** Analysis type

    if (san >= hol & san >= fle & san >= mel) {        
        document.querySelector('.TypeImg').src="img/sanguine-icon.png"; 
        if (ResultsData.age < 12) {
            document.querySelector('.TypeImgMini').src="img/sanguine-pony.png";            
        }else{
            document.querySelector('.TypeImgMini').src="img/sanguine-cat.jpg";
        }
        switch (selectLangValue){
            case "EN":
                TemperHtml_2 = "Sanguine";
                TemperHtml += "Temperament is active, movable and cheerful...";
                break;
            case "UA":                
                TemperHtml_2 = "Сангвіник";    
                TemperHtml += "Темперамент живий, активний та веселий";
                break;
            case "RU":
                TemperHtml_2 = "Сангвиник";    
                TemperHtml += "Темперамент живой, подвижный и веселый";
                break;
        } 
    } else if ( fle >= hol & fle >= mel) {
        document.querySelector('.TypeImg').src="img/phlegmatic-icon.png";
        if (ResultsData.age < 12) {
            document.querySelector('.TypeImgMini').src="img/phlegmatic-pony.png";
        }else{
            document.querySelector('.TypeImgMini').src="img/phlegmatic-cat.jpg";
        }
        switch (selectLangValue){
            case "EN":
                TemperHtml_2 = "Phlegmatic";    
                TemperHtml += "Temperament is calm, unhurried, imperturbable";
                break;

            case "UA":                
                TemperHtml_2 = "Флегматик";    
                TemperHtml += "Темперамент спокійний, неспішний, незрозумілий";
                break;
            case "RU":
                TemperHtml_2 = "Флегматик";    
                TemperHtml += "Темперамент спокойный, неспешный, невозмутимый";
                break;
        } 

    } else if ( hol >= mel) {
        
        document.querySelector('.TypeImg').src="img/choleric-icon.png";
        if (ResultsData.age < 12) {
            document.querySelector('.TypeImgMini').src="img/choleric-pony.png";
        }else{
            document.querySelector('.TypeImgMini').src="img/choleric-cat.jpg";
        }
        
        switch (selectLangValue){
            case "EN":
                TemperHtml_2 = "Choleric";    
                TemperHtml += "Temperament is unbalanced and hot-tempered";
                break;
            case "UA":                
                TemperHtml_2 = "Холерик";    
                TemperHtml += "Темперамент неврівноважений та гарячий";
                break;
            case "RU":
                TemperHtml_2 = "Холерик";    
                TemperHtml += "Темперамент неуравновешенный и вспыльчивый";
                break;
        } 

    } else {         
        document.querySelector('.TypeImg').src="img/melancholic-icon.png";
        if (ResultsData.age < 12) {
            document.querySelector('.TypeImgMini').src="img/melancholic-pony.png";
        } else{
            document.querySelector('.TypeImgMini').src="img/melancholic-cat.jpg";
        }
        
        switch (selectLangValue){
            case "EN":
                TemperHtml_2 = "Melancholic";    
                TemperHtml += "Temperament is impressionable and vulnerable";
                break;
            case "UA":                
                TemperHtml_2 = "Меланхолик";    
                TemperHtml += "Темперамент вразливий та ранимий";
                break;
            case "RU":
                TemperHtml_2 = "Меланхолик";    
                TemperHtml += "Темперамент впечатлительный и ранимый";
                break;
        } 
        
    }    

    switch (selectLangValue){
        case "EN":
            ResultsHtml_1 += "<p>Congratulations, it seems that you are - " + TemperHtml_2 + "! </p><p>We do not pretend to be medical definitions, we just smiled with you a little).</p><p>A good day!</p>";
            break;
        case "UA":                
            ResultsHtml_1 += "<p>Вітаємо, схоже, Ви - " + TemperHtml_2 + "!</p><p>Ми не претендуємо на медичні визначення, ми просто з Вами трохи посміхнулися).</p> <p>Гарного дня!</p>";
            break;
        case "RU":
            ResultsHtml_1 += "<p>Поздравляем, похоже, Вы - " + TemperHtml_2 + "! </p><p>Мы не претендуем на медицинкие определения, мы с Вами вместе просто немного улыбнулись).</p><p>Хорошего дня!</p>";
            break;
        } 
    
    //console.log(ResultsHtml_1);
    
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

