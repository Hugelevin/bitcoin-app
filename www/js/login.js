/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false */

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    checkConnection();
}

//Scramble Tweak
$(function(){
	var tweak = $(".tweak");
	tweak.shuffleLetters();
});

document.addEventListener("deviceready", function(){
}, false);  


//Netwok Information
function checkConnection() {
    var networkState = navigator.connection.type;
    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';
        if ((states[networkState]) == states[Connection.NONE]) {
            alert("No Internet Connection. Please switch on internet connection.");
        }
        else{
            alert("Good, you have " + states[networkState] + "!");
        }
}

// Below function Executes on click of login button.
function validate(){
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    if ( username === "u" && password === "p"){
        alert ("Login Successful");
        window.location.href= "widget.html"; // Redirecting to other page.
        return false;
    }
    else{
        alert("INCORRECT: Username or Password");
    }
}



