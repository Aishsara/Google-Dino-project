const dino =document.getElementById("dino");
const cactus = document.getElementById("cactus");
let a=1;

function jump()
{
    if(dino.classList !="jump" ){
        dino.classList.add("jump"); 
        
        a=a+1;
        document.getElementById("score").innerHTML=a;
        setTimeout(function(){dino.classList.remove("jump");},300 ); 
    }
} 

let isAlive = setInterval(function () {
    //get current dino Y position
    let dinoTop =parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    
    //get current dino X position
    let cactusLeft=parseInt(window.getComputedStyle(cactus).getPropertyValue("left")  );
    
    
    //detect collision
    if(cactusLeft<50 && cactusLeft>0 && dinoTop>=150   )
    {
        //collision
        document.getElementById("max1").innerHTML=a;   
        a=0;
        alert("Game Over!")
    }


},10  );
document.addEventListener("keydown",function(event)
{
    jump();
});   