//******Langueges*****//

let selectLang = document.getElementById("langChange");
const selectLangAll = ['EN', 'UA', 'RU']
selectLang.addEventListener('change', changeLang);

changeLangData();

function changeLang (){
    let lang = selectLang.value;
    location.href = window.location.pathname + "#" + lang;
    localStorage.setItem("lang", lang);
    changeLangData ();
    location.reload();
}

function changeLangData (){


    let langHash = window.location.hash;
    let langLocalStorage = localStorage.getItem('lang');
    console.log(langLocalStorage+' langLocalStorage');
    console.log(langHash+' lang hash from window');
    langHash = (langLocalStorage) ? langLocalStorage : langHash.substr(1);
    console.log(langHash+' after compare');

    if (!selectLangAll.includes(langHash)){        
        location.href = window.location.pathname + '#EN';
        location.reload();
    };
    console.log(langHash);
    let langEng = document.querySelectorAll('.ENG');
    let langUkr = document.querySelectorAll('.UKR');
    let langRus = document.querySelectorAll('.RUS');
    let LangLinks = document.getElementsByTagName ("a")  ;
    console.log(LangLinks);
    switch (langHash){
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

    for (i = 0; i < LangLinks.length; i++) {
        let link = LangLinks[i].href;
        LangLinks[i].href = link+'#'+langHash;              
    } 
    
    selectLang.value = langHash;

}