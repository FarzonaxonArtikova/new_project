let menuList = document.querySelector("#menuList")

function myFunc(){
    if(menuList.style.maxHeight == "200px"){
        menuList.style.maxHeight = "0px"
    }else{
        menuList.style.maxHeight ="200px"
    }
}


var typed = new Typed('#element', {
    strings: ["Hello, welcome: Birch Juice <br> Here you can find everything you need", "Hello, welcome: Birch Juice <br> Here you can find everything you need"],
    
});