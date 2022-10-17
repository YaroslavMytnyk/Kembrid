let language = localStorage.getItem('language');
const ua = document.getElementById('ua')
const ru = document.getElementById('ru')
const uaMobile = document.getElementById('uaMobile')
const ruMobile = document.getElementById('ruMobile')

function languageTranslate() {
    // for (let key in languageArr) {
    //     let elem = document.querySelector('.lng-' + key);
    //     if (elem) {
    //         elem.innerHTML = languageArr[key][language];
    //     }
    // }

    for (let key in languageArr) {
        let elements = document.querySelectorAll('.lng-' + key);
        for(let i=0;i<elements.length;i++)
        {
            if (elements[i]) {
                elements[i].innerHTML = languageArr[key][language];
            }
        }
    }



    switch (language) {
        case "ua":
            ua.classList.add("active");
            uaMobile.classList.add("active");
            ru.classList.remove("active");
            ruMobile.classList.remove("active");
            break;
        case "ru":
            ru.classList.add("active");
            ruMobile.classList.add("active");
            ua.classList.remove("active");
            uaMobile.classList.remove("active");
            break;
        default:
            ua.classList.add("active");
            uaMobile.classList.add("active");
            ru.classList.remove("active");
            ruMobile.classList.remove("active");
    }
}

if (language === "ua" || language === "ru") {
    languageTranslate()
}
else {
    localStorage.setItem('language', 'ua');
    languageTranslate()
}

ua.addEventListener('click', () => {
    localStorage.setItem('language', 'ua');
    language = localStorage.getItem('language');
    languageTranslate()
})

ru.addEventListener('click', () => {
    localStorage.setItem('language', 'ru');
    language = localStorage.getItem('language');
    languageTranslate()
})

uaMobile.addEventListener('click', () => {
    localStorage.setItem('language', 'ua');
    language = localStorage.getItem('language');
    languageTranslate()
})

ruMobile.addEventListener('click', () => {
    localStorage.setItem('language', 'ru');
    language = localStorage.getItem('language');
    languageTranslate()
})


