/*jslint browser:true, devel:true, white:true, vars:true */
/*global $:false, intel:false */

document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    widget();
    widget2(b,i,t,C,O,I,N);
}

//Scramble Tweak
$(function(){
	var tweak = $(".tweak");
	tweak.shuffleLetters();
});

//Bitcoin Ticker Api
$(function widget(){
    $.ajax({ 
        async: true,
        type: "GET",
        url: "https://www.bitstamp.net/api/v2/ticker/btceur",
        success: function(results){
            var price = results.last;
            var high = "High &euro;" + results.high;
            var low = "Low &euro;" + results.low;
            var time = results.timestamp;
            var dateTime = new Date(time * 1000);
            var date = dateTime.toLocaleDateString();
            var plus = "+ ";
            var perc = "%";
            var open = results.open;
            var change = price - open;
            var percent = change / 100;
            var value = percent.toLocaleString(
            { minimumFractionDigits: 1 }
            );
            
            if(open < price){
                $("#priceRate").css('color', '#62b436');
                $("#priceRate").append(plus + value + perc);
            }
            else{
                $("#priceRate").css('color', '#e6460e');
                $("#priceRate").append(value + perc);
            }
            
            $("#lastPrice").append(price);
            $("#high").append(high);
            $("#low").append(low);
            $("#timeDate").append(date); 
        },
        error: function(){
            alert("Error can't display values.");
        }
    });
});

//Widget from bitcoin.com
(function widget2(b,i,t,C,O,I,N) {
    window.addEventListener('load',function() {
    if(b.getElementById(C))return;
    I=b.createElement(i),N=b.getElementsByTagName(i)[0];
    I.src=t;I.id=C;N.parentNode.insertBefore(I, N);
    },false);
})(document,'script','https://widgets.bitcoin.com/widget.js','btcwdgt');



