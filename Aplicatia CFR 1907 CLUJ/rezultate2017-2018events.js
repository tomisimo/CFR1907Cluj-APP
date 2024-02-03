var ligaI1718Results = document.getElementById("ligaIresults1718");
var cupaRomaniei1718Results = document.getElementById("cupaRomaniei1718results");
var supercupaRomaniei18Results = document.getElementById("supercupaRomaniei18results");

function showAndHideLigaI1718(){
    if(ligaI1718Results.style.display === "none"){
        ligaI1718Results.style.display = "block";
    }
    else{
        ligaI1718Results.style.display = "none";
    }
}
function showAndHideCupaRomaniei1718(){
    if(cupaRomaniei1718Results.style.display === "none"){
        cupaRomaniei1718Results.style.display = "block";
    }
    else{
        cupaRomaniei1718Results.style.display = "none";
    }
}
function showAndHideSupercupaRomaniei18(){
    if(supercupaRomaniei18Results.style.display === "none"){
        supercupaRomaniei18Results.style.display = "block";
    }
    else{
        supercupaRomaniei18Results.style.display = "none";
    }
}

var LigaI1718MainRoundTable = document.getElementById("LigaI1718MainRoundTable");
var LigaI1718PlayOffTable = document.getElementById("LigaI1718PlayOffTable");
var CupaRomaniei1718Table = document.getElementById("cupaRomaniei1718Table");
var SupercupaRomanei18Table = document.getElementById("supercupaRomaniei18Table");

function showAndHideLigaI1718MainRound(){
    if(LigaI1718MainRoundTable.style.display === "none"){
        LigaI1718MainRoundTable.style.display = "block";
    }
    else{
        LigaI1718MainRoundTable.style.display = "none";
    }
}

function showAndHideLigaI1718PlayOffRound(){
    if(LigaI1718PlayOffTable.style.display === "none"){
        LigaI1718PlayOffTable.style.display = "block";
    }
    else{
        LigaI1718PlayOffTable.style.display = "none";
    }
}
function showAndHideCupaRomaniei1718table(){
    if(CupaRomaniei1718Table.style.display === "none"){
        CupaRomaniei1718Table.style.display = "block";
    }
    else{
        CupaRomaniei1718Table.style.display = "none";
    }
}
function showAndhideSupercupaRomaniei18table(){
    if(SupercupaRomanei18Table.style.display === "none"){
        SupercupaRomanei18Table.style.display = "block";
    }
    else{
        SupercupaRomanei18Table.style.display = "none";
    }
}

function closeLigaI1718MainAndPlayOffResults(){
    if(ligaI1718Results.style.display === "none"){
        ligaI1718Results.style.display = "block";
    }
    else if(ligaI1718Results.style.display === "block" && LigaI1718MainRoundTable.style.display === "block" && LigaI1718PlayOffTable.style.display === "block"){
        LigaI1718PlayOffTable.style.display = "none"; LigaI1718MainRoundTable.style.display = "none"; ligaI1718Results.style.display = "none";
    }
    else if(ligaI1718Results.style.display === "block" && LigaI1718MainRoundTable.style.display === "none" && LigaI1718PlayOffTable.style.display === "none"){
        ligaI1718Results.style.display = "none";
    }
    else if(ligaI1718Results.style.display === "block" && LigaI1718MainRoundTable.style.display === "block"){
        LigaI1718MainRoundTable.style.display = "none"; ligaI1718Results.style.display = "none"
    }
    else if(ligaI1718Results.style.display === "block" && LigaI1718PlayOffTable.style.display === "block"){
        LigaI1718PlayOffTable.style.display = "none"; ligaI1718Results.style.display = "none"
    }
}
function closeCupaRomaniei1718Results(){
    if(cupaRomaniei1718Results.style.display === "none"){
        cupaRomaniei1718Results.style.display = "block";
    }
    else if(cupaRomaniei1718Results.style.display === "block" && CupaRomaniei1718Table.style.display === "block"){
        CupaRomaniei1718Table.style.display = "none"; cupaRomaniei1718Results.style.display = "none"
    }
    else if(cupaRomaniei1718Results.style.display === "block" && CupaRomaniei1718Table.style.display === "none"){
        cupaRomaniei1718Results.style.display = "none"
    }
}
function closeSupercupaRomaniei18Results(){
    if(supercupaRomaniei18Results.style.display === "none"){
        supercupaRomaniei18Results.style.display = "block";
    }
    else if(supercupaRomaniei18Results.style.display === "block" && SupercupaRomanei18Table.style.display === "block"){
        SupercupaRomanei18Table.style.display = "none"; supercupaRomaniei18Results.style.display = "none"
    }
    else if(supercupaRomaniei18Results.style.display === "block" && SupercupaRomanei18Table.style.display === "none"){
        supercupaRomaniei18Results.style.display = "none"
    }
}


