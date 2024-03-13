let header = document.getElementById("navbar")



window.onscroll = function(){
    if(document.body.scrollTop >= 10 || document.documentElement.scrollTop >= 10){
        console.log("scrolling")
        header.classList.add("header-scrolled")
        header.classList.remove("header-no-scrolled")
    } else{
        header.classList.add("header-no-scrolled")
        header.classList.remove("header-scrolled")
    }
}