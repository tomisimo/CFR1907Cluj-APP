var ligaI1617Results = document.getElementById("ligaIresults1617");
var cupaRomaniei1617Results = document.getElementById("cupaRomaniei1617results");
var cupaLigiiRomaniei1617Results = document.getElementById("cupaLigiiRomaniei1617results");

function showAndHideLigaI1617(){
    if(ligaI1617Results.style.display === "none"){
        ligaI1617Results.style.display = "block";
    }
    else{
        ligaI1617Results.style.display = "none";
    }
}
function showAndHideCupaRomaniei1617(){
    if(cupaRomaniei1617Results.style.display === "none"){
        cupaRomaniei1617Results.style.display = "block";
    }
    else{
        cupaRomaniei1617Results.style.display = "none";
    }
}
function showAndHideCupaLigiiRomaniei1617(){
    if(cupaLigiiRomaniei1617Results.style.display === "none"){
        cupaLigiiRomaniei1617Results.style.display = "block";
    }
    else{
        cupaLigiiRomaniei1617Results.style.display = "none";
    }
}

var LigaI1617MainRoundTable = document.getElementById("LigaI1617MainRoundTable");
var LigaI1617PlayOffTable = document.getElementById("LigaI1617PlayOffTable")
var CupaRomaniei1617Table = document.getElementById("cupaRomaniei1617Table")
var CupaLigiiRomaniei1617Table = document.getElementById("cupaLigiiRomaniei1617Table")

function showAndHideLigaI1617MainRound(){
    if(LigaI1617MainRoundTable.style.display === "none"){
        LigaI1617MainRoundTable.style.display = "block";
    }
    else{
        LigaI1617MainRoundTable.style.display = "none";
    }
}
function showAndHideLigaI1617PlayOff(){
    if(LigaI1617PlayOffTable.style.display === "none"){
        LigaI1617PlayOffTable.style.display = "block";
    }
    else{
        LigaI1617PlayOffTable.style.display = "none"
    }
}
function showAndHideCupaRomaniei1617Table(){
    if(CupaRomaniei1617Table.style.display === "none"){
        CupaRomaniei1617Table.style.display = "block";
    }
    else{
        CupaRomaniei1617Table.style.display = "none"
    }

}
function showAndHideCupaLigiiRomaniei1617Table(){
    if(CupaLigiiRomaniei1617Table.style.display === "none"){
        CupaLigiiRomaniei1617Table.style.display = "block";
    }
    else{
        CupaLigiiRomaniei1617Table.style.display = "none"
    }
}

function closeLigaI1617MainAndPlayOffResults(){
    if(ligaI1617Results.style.display === "none"){
        ligaI1617Results.style.display = "block";
    }
    else if(ligaI1617Results.style.display === "block" && LigaI1617MainRoundTable.style.display === "block" && LigaI1617PlayOffTable.style.display === "block"){
        LigaI1617PlayOffTable.style.display = "none"; LigaI1617MainRoundTable.style.display = "none"; ligaI1617Results.style.display = "none";
    }
    else if(ligaI1617Results.style.display === "block" && LigaI1617MainRoundTable.style.display === "none" && LigaI1617PlayOffTable.style.display === "none"){
        ligaI1617Results.style.display = "none";
    }
    else if(ligaI1617Results.style.display === "block" && LigaI1617MainRoundTable.style.display === "block"){
        LigaI1617MainRoundTable.style.display = "none"; ligaI1617Results.style.display = "none";
    }
    else if(ligaI1617Results.style.display === "block" && LigaI1617PlayOffTable.style.display === "block"){
        LigaI1617PlayOffTable.style.display = "none"; ligaI1617Results.style.display = "none";
    }
}
function closeCupaRomaniei1617Results(){
    if(cupaRomaniei1617Results.style.display === "none"){
        cupaRomaniei1617Results.style.display = "block";
    }
    else if(cupaRomaniei1617Results.style.display === "block" && CupaRomaniei1617Table.style.display === "block"){
        CupaRomaniei1617Table.style.display = "none"; cupaRomaniei1617Results.style.display = "none";
    }
    else if(cupaRomaniei1617Results.style.display === "block" && CupaRomaniei1617Table.style.display === "none"){
        cupaRomaniei1617Results.style.display = "none"
    }
}
function closeCupaLigiiRomaniei1617Results(){
    if(cupaLigiiRomaniei1617Results.style.display === "none"){
        cupaLigiiRomaniei1617Results.style.display = "block";
    }
    else if(cupaLigiiRomaniei1617Results.style.display === "block" && CupaLigiiRomaniei1617Table.style.display === "block"){
        CupaLigiiRomaniei1617Table.style.display = "none"; cupaLigiiRomaniei1617Results.style.display = "none";
    }
    else if(cupaLigiiRomaniei1617Results.style.display === "block" && CupaLigiiRomaniei1617Table.style.display === "none"){
        cupaLigiiRomaniei1617Results.style.display = "none"
    }
}


