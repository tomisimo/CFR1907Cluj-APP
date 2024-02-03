var ligaI1213Results = document.getElementById("ligaIresults1213");
var cupaRomaniei1213Results = document.getElementById("cupaRomaniei1213results");
var uefaChampionsLeague1213Results = document.getElementById("uefaChampionsLeague1213results");
var uefaEuropaLeague1213Results = document.getElementById("uefaEuropaLeague1213results");


function showAndHideLigaI1213(){
    if(ligaI1213Results.style.display === "none"){
        ligaI1213Results.style.display = "block";
    }
    else{
        ligaI1213Results.style.display = "none";
    }
}
function showAndHideCupaRomaniei1213(){
    if(cupaRomaniei1213Results.style.display === "none"){
        cupaRomaniei1213Results.style.display = "block";
    }
    else{
        cupaRomaniei1213Results.style.display = "none";
    }
}
function showAndHideUefaChampionsLeague1213(){
    if(uefaChampionsLeague1213Results.style.display === "none"){
        uefaChampionsLeague1213Results.style.display = "block";
    }
    else{
        uefaChampionsLeague1213Results.style.display = "none";
    }
}
function showAndHideUefaEuropaLeague1213(){
    if(uefaEuropaLeague1213Results.style.display === "none"){
        uefaEuropaLeague1213Results.style.display = "block";
    }
    else{
        uefaEuropaLeague1213Results.style.display = "none";
    }
}

var LigaI1213MainRoundTable = document.getElementById("LigaI1213MainRoundResultsTable");
var CupaRomaniei1213Table = document.getElementById("CupaRomaniei1213ResultsTable");
var UefaChampionsLeague1213Table = document.getElementById("UefaChampionsLeague1213ResultsTable");
var UefaEuropaLeague1213Table = document.getElementById("UefaEuropaLeague1213ResultsTable");

function showAndHideLigaI1213MainRoundResults(){
    if(LigaI1213MainRoundTable.style.display === "none"){
        LigaI1213MainRoundTable.style.display = "block";
    }
    else{
        LigaI1213MainRoundTable.style.display = "none";
    }
}
function showAndHideCupaRomaniei1213Results(){
    if(CupaRomaniei1213Table.style.display === "none"){
        CupaRomaniei1213Table.style.display = "block";
    }
    else{
        CupaRomaniei1213Table.style.display = "none";
    }
}
function showAndHideUefaChampionsLeague1213Results(){
    if(UefaChampionsLeague1213Table.style.display === "none"){
        UefaChampionsLeague1213Table.style.display = "block";
    }
    else{
        UefaChampionsLeague1213Table.style.display = "none";
    }
}
function showAndHideUefaEuropaLeague1213Results(){
    if(UefaEuropaLeague1213Table.style.display === "none"){
        UefaEuropaLeague1213Table.style.display = "block";
    }
    else{
        UefaEuropaLeague1213Table.style.display = "none";
    }
}

function closeLigaI1213MainResults(){
    if(ligaI1213Results.style.display === "none"){
        ligaI1213Results.style.display = "block";
    }
    else if(ligaI1213Results.style.display === "block" && LigaI1213MainRoundTable.style.display === "block"){
        LigaI1213MainRoundTable.style.display = "none"; ligaI1213Results.style.display = "none";
    }
    else if(ligaI1213Results.style.display === "block" && LigaI1213MainRoundTable.style.display === "none"){
        ligaI1213Results.style.display = "none"
    }
}
function closeCupaRomaniei1213Results(){
    if(cupaRomaniei1213Results.style.display === "none"){
        cupaRomaniei1213Results.style.display = "block";
    }
    else if(cupaRomaniei1213Results.style.display === "block" && CupaRomaniei1213Table.style.display === "block"){
        CupaRomaniei1213Table.style.display = "none"; cupaRomaniei1213Results.style.display = "none";
    }
    else if(cupaRomaniei1213Results.style.display === "block" && CupaRomaniei1213Table.style.display === "none"){
        cupaRomaniei1213Results.style.display = "none"
    }
}
function closeUefaChampionsLeague1213Results(){
    if(uefaChampionsLeague1213Results.style.display === "none"){
        uefaChampionsLeague1213Results.style.display = "block";
    }
    else if(uefaChampionsLeague1213Results.style.display === "block" && UefaChampionsLeague1213Table.style.display === "block"){
        UefaChampionsLeague1213Table.style.display = "none"; uefaChampionsLeague1213Results.style.display = "none";
    }
    else if(uefaChampionsLeague1213Results.style.display === "block" && UefaChampionsLeague1213Table.style.display === "none"){
        uefaChampionsLeague1213Results.style.display = "none"
    }
}
function closeUefaEuropaLeague1213Results(){
    if(uefaEuropaLeague1213Results.style.display === "none"){
        uefaEuropaLeague1213Results.style.display = "block";
    }
    else if(uefaEuropaLeague1213Results.style.display === "block" && UefaEuropaLeague1213Table.style.display === "block"){
        UefaEuropaLeague1213Table.style.display = "none"; uefaEuropaLeague1213Results.style.display = "none";
    }
    else if(uefaEuropaLeague1213Results.style.display === "block" && UefaEuropaLeague1213Table.style.display === "none"){
        uefaEuropaLeague1213Results.style.display = "none"
    }
}
