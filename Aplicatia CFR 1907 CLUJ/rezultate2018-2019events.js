var ligaI1819Results = document.getElementById("ligaIresults1819");
var cupaRomaniei1819Results = document.getElementById("cupaRomaniei1819results");
var supercupaRomaniei19Results = document.getElementById("supercupaRomaniei19results");
var uefaChampionsLeague1819Results = document.getElementById("uefaChampionsLeague1819results");
var uefaEuropaLeague1819Results = document.getElementById("uefaEuropaLeague1819results");

function showAndHideLigaI1819(){
    if(ligaI1819Results.style.display === "none"){
        ligaI1819Results.style.display = "block";
    }
    else{
        ligaI1819Results.style.display = "none";
    }
}
function showAndHideCupaRomaniei1819(){
    if(cupaRomaniei1819Results.style.display === "none"){
        cupaRomaniei1819Results.style.display = "block";
    }
    else{
        cupaRomaniei1819Results.style.display = "none";
    }
}
function showAndHideSupercupaRomaniei19(){
    if(supercupaRomaniei19Results.style.display === "none"){
        supercupaRomaniei19Results.style.display = "block";
    }
    else{
        supercupaRomaniei19Results.style.display = "none";
    }
}
function showAndHideUefaChampionsLeague1819(){
    if(uefaChampionsLeague1819Results.style.display === "none"){
        uefaChampionsLeague1819Results.style.display = "block";
    }
    else{
        uefaChampionsLeague1819Results.style.display = "none";
    }
}
function showAndHideUefaEuropaLeague1819(){
    if(uefaEuropaLeague1819Results.style.display === "none"){
        uefaEuropaLeague1819Results.style.display = "block";
    }
    else{
        uefaEuropaLeague1819Results.style.display = "none";
    }
}

var LigaI1819MainRound = document.getElementById("LigaI1819MainRoundTable");
var LigaI1819PlayOffRound = document.getElementById("LigaI1819PlayOffTable");
var CUPAR1819 = document.getElementById("CupaRomaniei1819Table");
var SUPERCR19 = document.getElementById("SupercupaRomaniei19Table");
var UEFACHL1819 = document.getElementById("UCHL1819Table");
var UEFAEUROPAL1819 = document.getElementById("UefaEuropaLeagueTable1819");

function showAndHideLigaI1819MainRoundTable(){
    if(LigaI1819MainRound.style.display === "none"){
        LigaI1819MainRound.style.display = "block";
    }
    else{
        LigaI1819MainRound.style.display = "none";
    }
}

function showAndHideLigaI1819PlayOffRoundTable(){
    if(LigaI1819PlayOffRound.style.display === "none"){
        LigaI1819PlayOffRound.style.display = "block";
    }
    else{
        LigaI1819PlayOffRound.style.display = "none";
    }
}

function showAndHideCupaRomaniei1819Table(){
    if(CUPAR1819.style.display === "none"){
        CUPAR1819.style.display = "block";
    }
    else{
        CUPAR1819.style.display = "none";
    }
}

function showAndHideSupercupaRomaniei1819Table(){
    if(SUPERCR19.style.display === "none"){
        SUPERCR19.style.display = "block";
    }
    else{
        SUPERCR19.style.display = "none";
    }
}

function showAndHideUefaChL1819Table(){
    if(UEFACHL1819.style.display === "none"){
        UEFACHL1819.style.display = "block";
    }
    else{
        UEFACHL1819.style.display = "none";
    }
}

function showAndHideUefaEL1819Table(){
    if(UEFAEUROPAL1819.style.display === "none"){
        UEFAEUROPAL1819.style.display = "block";
    }
    else{
        UEFAEUROPAL1819.style.display = "none";
    }
}

function closeLigaI1819MainAndPlayOffResults(){
    if(ligaI1819Results.style.display === "none"){
        ligaI1819Results.style.display = "block";
    }
    else if(ligaI1819Results.style.display === "block" && LigaI1819MainRound.style.display === "block" && LigaI1819PlayOffRound.style.display === "block"){
        LigaI1819PlayOffRound.style.display = "none"; LigaI1819MainRound.style.display = "none"; ligaI1819Results.style.display = "none";
    }
    else if(ligaI1819Results.style.display === "block" && LigaI1819MainRound.style.display === "none" && LigaI1819PlayOffRound.style.display === "none"){
        ligaI1819Results.style.display = "none";
    }
    else if(ligaI1819Results.style.display === "block" && LigaI1819PlayOffRound.style.display === "block"){
        LigaI1819PlayOffRound.style.display = "none"; ligaI1819Results.style.display = "none";
    }
    else if(ligaI1819Results.style.display === "block" && LigaI1819MainRound.style.display === "block"){
        LigaI1819MainRound.style.display = "none"; ligaI1819Results.style.display = "none";
    }
}
function closeCupaRomaniei1819Results(){
    if(cupaRomaniei1819Results.style.display === "none"){
        cupaRomaniei1819Results.style.display = "block";
    }
    else if(cupaRomaniei1819Results.style.display === "block" && CUPAR1819.style.display === "block"){
        CUPAR1819.style.display = "none"; cupaRomaniei1819Results.style.display = "none";
    }
    else if(cupaRomaniei1819Results.style.display === "block" && CUPAR1819.style.display === "none"){
        cupaRomaniei1819Results.style.display = "none"
    }
}
function closeSupercupaRomaniei19Results(){
    if(supercupaRomaniei19Results.style.display === "none"){
        supercupaRomaniei19Results.style.display = "block";
    }
    else if(supercupaRomaniei19Results.style.display === "block" && SUPERCR19.style.display === "block"){
        SUPERCR19.style.display = "none"; supercupaRomaniei19Results.style.display = "none";
    }
    else if(supercupaRomaniei19Results.style.display === "block" && SUPERCR19.style.display === "none"){
        supercupaRomaniei19Results.style.display = "none"
    }
}
function closeUefaChampionsLeague1819Results(){
    if(uefaChampionsLeague1819Results.style.display === "none"){
        uefaChampionsLeague1819Results.style.display = "block";
    }
    else if(uefaChampionsLeague1819Results.style.display === "block" && UEFACHL1819.style.display === "block"){
        UEFACHL1819.style.display = "none"; uefaChampionsLeague1819Results.style.display = "none";
    }
    else if(uefaChampionsLeague1819Results.style.display === "block" && UEFACHL1819.style.display === "none"){
        uefaChampionsLeague1819Results.style.display = "none"
    }
}
function closeUefaEuropaLeague1819Results(){
    if(uefaEuropaLeague1819Results.style.display === "none"){
        uefaEuropaLeague1819Results.style.display = "block";
    }
    else if(uefaEuropaLeague1819Results.style.display === "block" && UEFAEUROPAL1819.style.display === "block"){
        UEFAEUROPAL1819.style.display = "none"; uefaEuropaLeague1819Results.style.display = "none";
    }
    else if(uefaEuropaLeague1819Results.style.display === "block" && UEFAEUROPAL1819.style.display === "none"){
        uefaEuropaLeague1819Results.style.display = "none"
    }
}
