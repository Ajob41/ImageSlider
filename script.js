let right = document.querySelector("#right");

let left = document.querySelector("#left");


let DivImages = document.querySelector(".images")
let img = document.querySelectorAll("img");


left.addEventListener("click",function(e){
    

    
        
            if(img[0]){
                img[0] = img[1].style.display = "initial";
            img[0].style.display = "none";
            }else if(img[1]){
                img[1] = img[2].style.display = "initial";
            img[1].style.display = "none";
            }else if(img[2]){


                img[2] = img[3].style.display = "initial";
            img[2].style.display = "none";
            }else if(img[3]){
                img[3] = img[0].style.display = "initial";
                img[3].style.display = "none";
            }
        
    
})

