
let gameMarker = "X";
// let turn = 
function changeMarkerToX(turn){
    console.log("The x button was clicked!");
    gameMarker = "X";
    document.getElementById(turn).innerHTML = gameMarker;
}

function changeMarkerToO(turn){
    console.log("The o button was clicked!");
    gameMarker = "O";
    document.getElementById(turn).innerHTML = gameMarker;
}


function placeMark(mySquare){
    document.getElementById(mySquare).innerHTML = gameMarker;
    if (gameMarker == "X"){
        changeMarkerToO('turnName');
    }else{
        changeMarkerToX('turnName');
    }
}

// function nextTurnO(){
//     gameMarker = "O";
//     changeMarkerToO;
// }
// function nextTurnX(){
//     gameMarker = "X";
// }