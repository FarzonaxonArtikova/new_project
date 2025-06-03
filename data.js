let menuList = document.querySelector("#menuList")

function myFunc(){
    if(menuList.style.maxHeight == "200px"){
        menuList.style.maxHeight = "0px"
    }else{
        menuList.style.maxHeight ="200px"
    }
}

var typed = new Typed('#element', {
    strings: ["Welcome, here you can find everything you need!", "Welcome, here you can find everything you need!"],
    
});

var typed = new Typed('#date', {
    strings: ["Здравствуйте, добро пожаловать: Березовый сок <br> Здесь вы найдете все, что вам нужно", "Здравствуйте, добро пожаловать: Березовый сок <br> Здесь вы найдете все, что вам нужно"],
    
});