let box1 = document.querySelector(".box1")
let box2 = document.querySelector(".box2")
let box3 = document.querySelector(".box3")
let content = document.querySelector(".content")
let titleDiv = document.querySelector(".titleDiv")

box1.addEventListener("mouseover",function(){

box1.style.width = "30vw"
titleDiv.style.display = "none"
content.style.display = "block"

})

box1.addEventListener("mouseleave",function(){

    box1.style.width = "10vw"

titleDiv.style.display = "block"
content.style.display = "none"
    
    })
    

box2.addEventListener("mouseover",function(){

    box2.style.width = "30vw"
        
})
        
        box2.addEventListener("mouseleave",function(){
        
            box2.style.width = "10vw"
            
            })
    
            
            box3.addEventListener("mouseover",function(){

                box3.style.width = "30vw"
                
                })
                
                box3.addEventListener("mouseleave",function(){
                
                    box3.style.width = "10vw"
                    
                    })
                    


