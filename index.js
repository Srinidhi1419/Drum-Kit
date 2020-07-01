//Making Sounds by using Buttons
var numberOfDrumButtons=document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButtons;i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        
        let buttonInnerHTML=this.innerHTML
        
        makeSound(buttonInnerHTML);
        buttonAnimaton(buttonInnerHTML);
    });
   
}

//Making Sounds by Using Keyboard
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimaton(event.key);
});

//Function for Playing Relevant Sound
function makeSound(key){
    switch (key) {
        case "a":
            let tom2=new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3=new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom1=new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            let kick=new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "k":
            let snare=new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "l":
            let crash=new Audio("sounds/crash.mp3");
            crash.play();
            break;
        default:
            console.log(buttonInnerHTML);
            break;
    } 
}

function  buttonAnimaton(currentKey){
    let activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed")}, 100)
}
