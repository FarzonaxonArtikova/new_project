let menuList = document.querySelector("#menuList")

function myFunc(){
    if(menuList.style.maxHeight == "200px"){
        menuList.style.maxHeight = "0px"
    }else{
        menuList.style.maxHeight ="200px"
    }
}

var typed = new Typed('#element', {
    strings: ["Vlogs here are the vlogs you need", "Vlogs here are the vlogs you need"],
    typedSpeed :50,
});