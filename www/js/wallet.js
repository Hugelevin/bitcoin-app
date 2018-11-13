/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false */

//Scramble Tweak
$(function(){
	var tweak = $(".tweak");
	tweak.shuffleLetters();
});

document.addEventListener("deviceready", function(){
}, false);  


//Write to the created file
function writeFile() {
    var type = window.TEMPORARY;
    var size = 5*1024*1024;
    window.requestFileSystem(type, size, successCallback, errorCallback)
    var textArea = document.getElementById("text").value + "\n";
    
    function successCallback(fs) {
        fs.root.getFile("log.txt", {create: true}, function(fileEntry) {
            
            fileEntry.createWriter(function(fileWriter) {
                fileWriter.onwriteend = function(e) {
                    alert("Address Saved");
                };
                fileWriter.onerror = function(e) {
                    alert("Address failed to save: ");
                };

                var blob = new Blob([textArea], {type: "text/plain"});
                fileWriter.write(blob);
            }, errorCallback);
        }, errorCallback);
    }
    
    function errorCallback(error) {
        alert("Error while trying to save the address");
    }
}


//Read from the saved file
function readFile() {
   var type = window.TEMPORARY;
   var size = 5*1024*1024;
   window.requestFileSystem(type, size, successCallback, errorCallback)

   function successCallback(fs) {
      fs.root.getFile("log.txt", {}, function(fileEntry) {

         fileEntry.file(function(file) {
            var reader = new FileReader();

            reader.onloadend = function(e) {
               var textArea = document.getElementById("text");
               alert(textArea.value = this.result);
            };
            reader.readAsText(file);
         }, errorCallback);
      }, errorCallback);
   }

   function errorCallback(error) {
      alert("Please enter an address");
   }
}


//Remove from the saved file
function removeFile() {
   var type = window.TEMPORARY;
   var size = 5*1024*1024;
   window.requestFileSystem(type, size, successCallback, errorCallback)

   function successCallback(fs) {
      fs.root.getFile("log.txt", {create: false}, function(fileEntry) {

         fileEntry.remove(function() {
            alert("Address Cleared");
         }, errorCallback);
      }, errorCallback);
   }

   function errorCallback(error) {
      alert("There is nothing to clear");
   }
}


