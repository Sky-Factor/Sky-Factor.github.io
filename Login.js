function checkCreds()
{
    
    //Gives a quick warning allowing me to see that the program so far works
    alert("check Creds")

var FirstName = document.getElementById("FirstName").value;
var LastName = document.getElementById("LastName").value;
var BadgeNumber = document.getElementById("BadgeNumber").value;
//creates a varible with the adition of first and last name
var FullName = FirstName + " " + LastName;


//checks that full name doesnt exceed 20 digits but is more then 3
if(FullName.length > 20 || FullName.length <3)
    {
        //if conditions are not met, display:
        document.getElementById("loginStatus").innerHTML = "Please input First and Last Name"; 
        return;
    }


//badge Number may not be over 3 digits
if(BadgeNumber >999 || BadgeNumber < 100)
    {
        document.getElementById("loginStatus").innerHTML = "Invalid Badge Number"; 
        return;
    }



else if(FullName.length <= 20 || FullName.length <=3)
    {
//changes the top of the html text that we gave an id to, to login credentials with 
//the info from the var ids we made
    document.getElementById("loginStatus").innerHTML = "Login Credentials " + FullName + " " + BadgeNumber;
//If true, send alert:
    alert("Welcome Captian! Please click enter to proceed");
//Then take them to:

    location.replace("Checklist website.html");
    }  
}

function Main()
{
    location.replace("MainPage.html");
}

function sound(src) {

    this.sound = document.createElement("audio");
   this.sound.src = src;
   this.play = function() {
    
     this.sound.play();   
    }
    }
