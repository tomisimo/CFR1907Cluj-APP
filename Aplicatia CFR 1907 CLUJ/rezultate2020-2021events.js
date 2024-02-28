var ligaI2021Results = document.getElementById("ligaIresults2021");
var cupaRomaniei2021Results = document.getElementById("cupaRomaniei2021results");
var supercupaRomaniei21Results = document.getElementById("supercupaRomaniei21results");
var uefaChampionsLeague2021Results = document.getElementById("uefaChampionsLeague2021results");
var uefaEuropaLeague2021Results = document.getElementById("uefaEuropaLeague2021results");

function showAndHideLigaI2021(){
    if(ligaI2021Results.style.display === "none"){
        ligaI2021Results.style.display = "block";
    }
    else{
        ligaI2021Results.style.display = "none";
    }
}
function showAndHideCupaRomaniei2021(){
    if(cupaRomaniei2021Results.style.display === "none"){
        cupaRomaniei2021Results.style.display = "block";
    }
    else{
        cupaRomaniei2021Results.style.display = "none";
    }
}
function showAndHideSupercupaRomaniei21(){
    if(supercupaRomaniei21Results.style.display === "none"){
        supercupaRomaniei21Results.style.display = "block";
    }
    else{
        supercupaRomaniei21Results.style.display = "none";
    }
}
function showAndHideUefaChampionsLeague2021(){
    if(uefaChampionsLeague2021Results.style.display === "none"){
        uefaChampionsLeague2021Results.style.display = "block";
    }
    else{
        uefaChampionsLeague2021Results.style.display = "none";
    }
}
function showAndHideUefaEuropaLeague2021(){
    if(uefaEuropaLeague2021Results.style.display === "none"){
        uefaEuropaLeague2021Results.style.display = "block";
    }
    else{
        uefaEuropaLeague2021Results.style.display = "none";
    }
}

var LigaI2021MainRound = document.getElementById("LigaI2021MainRoundTable");
var LigaI2021PlayOffRound = document.getElementById("LigaI2021PlayOffTable");
var CUPAR2021 = document.getElementById("CupaRomaniei2021Table");
var SUPERCR21 = document.getElementById("SupercupaRomaniei21Table");
var UEFACHL2021 = document.getElementById("UCHL2021Table");
var UEFAEUROPAL2021 = document.getElementById("UefaEuropaLeagueTable2021");
var competitionsPresentationTable2021 = document.getElementById("competitionsTable2021")

function showAndHideLigaI2021MainRoundTable(){
    if(LigaI2021MainRound.style.display === "none"){
        LigaI2021MainRound.style.display = "block";
    }
    else{
        LigaI2021MainRound.style.display = "none";
    }
}

function showAndHideLigaI2021PlayOffRoundTable(){
    if(LigaI2021PlayOffRound.style.display === "none"){
        LigaI2021PlayOffRound.style.display = "block";
    }
    else{
        LigaI2021PlayOffRound.style.display = "none";
    }
}

function showAndHideCupaRomaniei2021Table(){
    if(CUPAR2021.style.display === "none"){
        CUPAR2021.style.display = "block";
    }
    else{
        CUPAR2021.style.display = "none";
    }
}

function showAndHideSupercupaRomaniei21Table(){
    if(SUPERCR21.style.display === "none"){
        SUPERCR21.style.display = "block";
    }
    else{
        SUPERCR21.style.display = "none";
    }
}

function showAndHideUefaChL2021Table(){
    if(UEFACHL2021.style.display === "none"){
        UEFACHL2021.style.display = "block";
    }
    else{
        UEFACHL2021.style.display = "none";
    }
}

function showAndHideUefaEuropaLeague2021Table(){
    if(UEFAEUROPAL2021.style.display === "none"){
        UEFAEUROPAL2021.style.display = "block";
    }
    else{
        UEFAEUROPAL2021.style.display = "none";
    }
}

function closeLigaI2021MainAndPlayOffResults(){
    if(ligaI2021Results.style.display === "none"){
        ligaI2021Results.style.display = "block"; competitionsPresentationTable2021.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(ligaI2021Results.style.display === "block" && LigaI2021MainRound.style.display === "block" && LigaI2021PlayOffRound.style.display === "block"){
        LigaI2021PlayOffRound.style.display = "none"; LigaI2021MainRound.style.display = "none"; ligaI2021Results.style.display = "none";
    }
    else if(ligaI2021Results.style.display === "block" && LigaI2021MainRound.style.display === "none" && LigaI2021PlayOffRound.style.display === "none"){
        ligaI2021Results.style.display = "none";
    }
    else if(ligaI2021Results.style.display === "block" && LigaI2021MainRound.style.display === "block"){
        LigaI2021MainRound.style.display = "none"; ligaI2021Results.style.display = "none";
    }
    else if(ligaI2021Results.style.display === "block" && LigaI2021PlayOffRound.style.display === "block"){
        LigaI2021PlayOffRound.style.display = "none"; ligaI2021Results.style.display = "none";
    }
}
function closeCupaRomaniei2021Results(){
    if(cupaRomaniei2021Results.style.display === "none"){
        cupaRomaniei2021Results.style.display = "block"; competitionsPresentationTable2021.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(cupaRomaniei2021Results.style.display === "block" && CUPAR2021.style.display === "block"){
        CUPAR2021.style.display = "none"; cupaRomaniei2021Results.style.display = "none"
    }
    else if(cupaRomaniei2021Results.style.display === "block" && CUPAR2021.style.display === "none"){
        cupaRomaniei2021Results.style.display = "none"
    }
}
function closeSupercupaRomaniei21Results(){
    if(supercupaRomaniei21Results.style.display === "none"){
        supercupaRomaniei21Results.style.display = "block"; competitionsPresentationTable2021.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(supercupaRomaniei21Results.style.display === "block" && SUPERCR21.style.display === "block"){
        SUPERCR21.style.display = "none"; supercupaRomaniei21Results.style.display = "none";
    }
    else if(supercupaRomaniei21Results.style.display === "block" && SUPERCR21.style.display === "none"){
        supercupaRomaniei21Results.style.display = "none"
    }
}
function closeUefaChampionsLeague2021Results(){
    if(uefaChampionsLeague2021Results.style.display === "none"){
        uefaChampionsLeague2021Results.style.display = "block"; competitionsPresentationTable2021.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(uefaChampionsLeague2021Results.style.display === "block" && UEFACHL2021.style.display === "block"){
        UEFACHL2021.style.display = "none"; uefaChampionsLeague2021Results.style.display = "none";
    }
    else if(uefaChampionsLeague2021Results.style.display === "block" && UEFACHL2021.style.display === "none"){
        uefaChampionsLeague2021Results.style.display = "none"
    }
}
function closeUefaEuropaLeague2021Results(){
    if(uefaEuropaLeague2021Results.style.display === "none"){
        uefaEuropaLeague2021Results.style.display = "block"; competitionsPresentationTable2021.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(uefaEuropaLeague2021Results.style.display === "block" && UEFAEUROPAL2021.style.display === "block"){
        UEFAEUROPAL2021.style.display = "none"; uefaEuropaLeague2021Results.style.display = "none";
    }
    else if(uefaEuropaLeague2021Results.style.display === "block" && UEFAEUROPAL2021.style.display === "none"){
        uefaEuropaLeague2021Results.style.display = "none";
    }
}
