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


