// var docTitle = document.title;

// function showDocTitle(){console.log(document.title)}

// if (docTitle == "Bacon Article 1"){
//     document.body.style.backgroundColor = "green";
//     console.log("check");
// }

var docTitle = document.title;
var lookFor1 = docTitle.innerHTML.indexOf("1");

function showDocTitle(){console.log(lookFor1)}

if (lookFor1 != -1){
    document.body.style.backgroundColor = "green";
}