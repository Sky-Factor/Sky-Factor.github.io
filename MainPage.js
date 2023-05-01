function simpleDo() {
    var currTime = 10;
    for (var i = 1; i <= 11; i++) {
        if (i == 11) {
            setTimeout(function () {
                //when it gets to 1 desplay message:
                document.getElementById("countdownTimer").innerHTML = "Enjoy!!";
                location.replace("Portfolio.html");
                
            }, 1000 * i);

            //when it gets to 5 override and displays this message
        } else if (i > 6) {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML =
                    "Going critical! time left = " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
            
            //unless otherwise written or overrided, display this
        } else {
            setTimeout(function () {
                document.getElementById("countdownTimer").innerHTML = "Rendering Portfolio " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
    
        }
        
    }
//allows only one button to be activated at a time: Start Button
    document.getElementById("Start").disabled = true;
    document.getElementById("Stop").disabled = false;
}



//allows only one button to be activated at a time: Stop Button
function Stop()
{
    document.getElementById("Start").disabled = false;
    document.getElementById("Stop").disabled = true;
}


//when the Login button is clicked to go new page
function Login()
{
    location.replace("Login.html");

}


//For checklist Website, add funtion to a button to play a audio clip
function Overview()
{
// Creates audio in directetory from a chosen file
const audio = new Audio("Overview.mp3");
//plays audio upon click
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
      audio.play();
    });
  });
}


// All mainpage buttons will take you to the main page
function Main()
{
    location.replace("MainPage.html");
}