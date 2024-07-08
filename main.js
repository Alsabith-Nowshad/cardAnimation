let box1 = document.querySelector(".box1")
let box2 = document.querySelector(".box2")
let box3 = document.querySelector(".box3")
let content1 = document.querySelector(".content1")
let titleDiv1 = document.querySelector(".titleDiv1")

box1.addEventListener("mouseover",function(){

    box1.style.background = "linear-gradient(to right, #ffffff, #acdb1d)";
box1.style.width = "30vw"
titleDiv1.style.display = "none"
content1.style.display = "block"

})

box1.addEventListener("mouseleave",function(){
    box1.style.background = "#ffffff";
    box1.style.width = "10vw"
titleDiv1.style.display = "block"
content1.style.display = "none"
    
    })
    
    let content2 = document.querySelector(".content2")
    let titleDiv2 = document.querySelector(".titleDiv2")
    


box2.addEventListener("mouseover",function(){
    box2.style.background = "linear-gradient(to right, #ffffff, #acdb1d)";
    box2.style.width = "30vw"
    titleDiv2.style.display = "none"
    content2.style.display = "block"
 
    
    })
    
    box2.addEventListener("mouseleave",function(){
        box2.style.background = "#ffffff";
        box2.style.width = "10vw"
    titleDiv2.style.display = "block"
    content2.style.display = "none"
      
 })
    
let content3 = document.querySelector(".content3")
let titleDiv3 = document.querySelector(".titleDiv3")

box3.addEventListener("mouseover",function(){
    box3.style.background = "linear-gradient(to right, #ffffff, #acdb1d)";
box3.style.width = "30vw"
titleDiv3.style.display = "none"
content3.style.display = "block"

})

box3.addEventListener("mouseleave",function(){
    box3.style.background = "#ffffff";
    box3.style.width = "10vw"
titleDiv3.style.display = "block"
content3.style.display = "none"
    
    })
    

