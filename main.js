let box1 = document.querySelector(".box1")
let box2 = document.querySelector(".box2")
let box3 = document.querySelector(".box3")
let content1 = document.querySelector(".content1")
let titleDiv = document.querySelector(".titleDiv")

box1.addEventListener("mouseover",function(){

box1.style.width = "30vw"

titleDiv.style.display = "none"
content1.style.display = "block"
content1.style.transitionDelay = "2s"

})

box1.addEventListener("mouseleave",function(){

    box1.style.width = "10vw"
titleDiv.style.display = "block"
content1.style.display = "none"
    
    })
    

