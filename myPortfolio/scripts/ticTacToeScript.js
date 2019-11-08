

// var gameMarker = "x";
var gameMarker;
function changeMarkerToX(){
    console.log("The x button was clicked!")
    gameMarker = "x";
    console.log(gameMarker)
}

function changeMarkerToO(){
    console.log("The o button was clicked!")
    gameMarker = "o";
    console.log(gameMarker)
}


function placeMarkxA(gameMarker){
    console.log(gameMarker);
    if(gameMarker === "x"){
    console.log("The marker is X");
    document.getElementbyId("xA").innerHTML = "X";
}
    else{
    console.log("The marker is o");
    document.getElementbyId("xA").innerHTML = "X";
}
}