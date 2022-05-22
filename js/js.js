//******Langueges*****//

let selectLang = document.getElementById("langChange");
let selectLangValue = selectLang.value;
const selectLangAll = ['EN', 'UA', 'RU']
selectLang.addEventListener('change', changeLang);


changeLangData ();

function changeLang (){
    let lang = selectLang.value;
    location.href = window.location.pathname + "#" + lang;
    changeLangData ();
    location.reload();
    
}

function changeLangData (){
    let langHash = window.location.hash;    
    console.log(langHash);
    langHash=langHash.substr(1);
    if (!selectLangAll.includes(langHash)){
        location.href = window.location.pathname + '#EN';
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
        // console.log(link);
        LangLinks[i].href = link+'#'+langHash;
        // console.log(LangLinks[i].href);
        // console.log(langHash);                
    } 
    selectLang.value = langHash;

   // return selectLangValue = langHash;
    
}