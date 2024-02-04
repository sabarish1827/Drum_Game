// document.getElementsByClassName("w drum")[0].addEventListener("click", btnClicked);
// document.getElementsByClassName("a drum")[0].addEventListener("click", btnClicked);
// document.getElementsByClassName("s drum")[0].addEventListener("click", btnClicked);
// document.getElementsByClassName("d drum")[0].addEventListener("click", btnClicked);
// document.getElementsByClassName("j drum")[0].addEventListener("click", btnClicked);
// document.getElementsByClassName("k drum")[0].addEventListener("click", btnClicked);
// document.getElementsByClassName("l drum")[0].addEventListener("click", btnClicked);

//function to detect the click
function btnClicked()
{
//     var audio = new Audio("sounds/tom-1.mp3");
//     audio.play();
var pressedBtn = this.innerHTML;
makeSound(pressedBtn);
buttonAnimation(pressedBtn);

}

//function to make sound
function makeSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
            case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
            case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
            case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
            case "j":
            var crashmp3 = new Audio("sounds/crash.mp3");
            crashmp3.play();
            break;
            case "k":
            var kickbass = new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            break;
            case "l":
            var snaremp3 = new Audio("sounds/snare.mp3");
            snaremp3.play();
            break;
    
        default:
            break;
    }
}

for(var i=0;i<7;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", btnClicked);
    
}


//keyboard sound
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
  });

  function buttonAnimation(currentKey){
    var activationButton = document.querySelector("." + currentKey);
    activationButton.classList.add("pressed");
    setTimeout(function(){
        activationButton.classList.remove("pressed");
    }, 100)
  }
