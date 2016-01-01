var lang_en = {
    "home": "Home",
    "about": "About",
    "contact": "Contact"
};

var lang_hu = {
    "home": "Főoldal",
    "about": "Rólunk",
    "contact": "Kapcsolat"
};

// Lekérdezzük a nyelvi beállításokat
function getNavigatorLang(){
    return navigator.language.split("-")[0];
}

// Szelektor beállítása nyitáskor
function setSelector(){
    // ellenőrizzük a beállított nyelvet
    if (!localStorage.myLang){
        return;
    }
    
    // A tárolt érték beállítása
    var sel = document.querySelector(".lang-selector");
    sel.value = localStorage.myLang;
}

// Nyelv váltása
function setNewLang(elem){
    //console.log(elem.value);
    localStorage.myLang=elem.value;
    setMenuLang();
}

// Menü nyelvének beállítása
function setMenuLang(){
    // A böngésző beállításainak a lekérése (az objektum nevét állítjuk be vele)
    var currentLang ="lang_" + getNavigatorLang();
    
    // Ha be van állítva a nyelv, akkkor azzal dolgozunk
    if(localStorage.myLang){
        currentLang= "lang_" + localStorage.myLang;
    }
    
    // Menü beállítása
    var menu = document.querySelectorAll("ul.nav li a");
    for (var i=0 ; i < menu.length ; i++){
        //console.log(menu[i]);
        var name = menu[i].getAttribute("data-name");
        menu[i].innerHTML = window[currentLang][name];
    }
}

// Meghívjuk a nyelv beállítást az oldal betöltődésekor
setSelector();
setMenuLang();