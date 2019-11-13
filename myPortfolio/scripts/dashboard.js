
// Add toDo List Functionality
$(function() {

    let $list = $('#ultodo');
    let $newItemForm = $('#newItemForm');

    $newItemForm.on('submit', function(e) {
    e.preventDefault();
    let text = $('input[type="text"]').val();
    $list.append(`<li>${text}</li>`);
    $('input[type="text"]').val('');
    });

    $list.on('click', 'li', function() {
    let $this = $(this);
    $this.remove();
    });
});

// Add GeoLocation
    var myLocation = document.getElementById("my-coordinates")

    function getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(displayPosition)
        }else{
            myLocation.innerHTML = "Not Available"
        }
    }
    function displayPosition(position){
        myLocation.innerHTML= "Longitude: " + position.coords.longitude + " Latitude:" + position.coords.latitude
    }

// Build Functioning Clock
    var showTime = document.getElementById('time');
    var showDate = document.getElementById('showDate');

function time() {
    var today = new Date();
    var s =today.getSeconds();
    var m =today.getMinutes();
    var h =today.getHours();
    if (s<10) {
        s= '0' + s;
    }
    if (h<10) {
        h= '0' + h;
    }
    if (m<10) {
        m= '0' + m;
    }
    var time = h + ":" + m + ":" + s;
    showTime.innerHTML=time;

}
setInterval(time, 1000);

var today = new Date();
var month = today.getMonth();
var date = (month+1) + "-" + today.getDate() + "-" + today.getFullYear();
showDate.innerHTML=date;


