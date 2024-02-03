var ligaI2223Results = document.getElementById("ligaIresults2223");
var cupaRomaniei2223Results = document.getElementById("cupaRomaniei2223results");
var europeanPlayoff2223Results = document.getElementById("europeanPlayoff2223results");
var uefaChampionsLeague2223Results = document.getElementById("uefaChampionsLeague2223results");
var uefaEuropaConferenceLeague2223Results = document.getElementById("uefaEuropaConferenceLeague2223results");

function showAndHideLigaI2223(){
    if(ligaI2223Results.style.display === "none"){
        ligaI2223Results.style.display = "block";
    }
    else{
        ligaI2223Results.style.display = "none";
    }
}
function showAndHideCupaRomaniei2223(){
    if(cupaRomaniei2223Results.style.display === "none"){
        cupaRomaniei2223Results.style.display = "block";
    }
    else{
        cupaRomaniei2223Results.style.display = "none";
    }
}
function showAndHideEuropeanPlayoff2223(){
    if(europeanPlayoff2223Results.style.display === "none"){
        europeanPlayoff2223Results.style.display = "block";
    }
    else{
        europeanPlayoff2223Results.style.display = "none";
    }
}
function showAndHideUefaChampionsLeague2223(){
    if(uefaChampionsLeague2223Results.style.display === "none"){
        uefaChampionsLeague2223Results.style.display = "block";
    }
    else{
        uefaChampionsLeague2223Results.style.display = "none";
    }
}
function showAndHideUefaEuropaConferenceLeague2223(){
    if(uefaEuropaConferenceLeague2223Results.style.display === "none"){
        uefaEuropaConferenceLeague2223Results.style.display = "block";
    }
    else{
        uefaEuropaConferenceLeague2223Results.style.display = "none";
    }
}

var LigaI2223MainRound = document.getElementById("LigaI2223MainRoundTable");
var LigaI2223PlayOffRound = document.getElementById("LigaI2223PlayOffTable");



function showAndHideLigaI2223MainRound(){
    if(LigaI2223MainRound.style.display === "none"){
        LigaI2223MainRound.style.display = "block";
    }
    else{
        LigaI2223MainRound.style.display = "none";
    }
}

function showAndHideLigaI2223PlayOff(){
    if(LigaI2223PlayOffRound.style.display === "none"){
        LigaI2223PlayOffRound.style.display = "block";
    }
    else{
        LigaI2223PlayOffRound.style.display = "none";
    }
}

var CR2223 = document.getElementById("CupaRomaniei2223Table");
var EUROPLOFF2223 = document.getElementById("EuropeanPlayOff2223Table");
var UCHL2223 = document.getElementById("UCHL2223Table");
var UECL2223 = document.getElementById("UECL2223Table");

function showAndHideCupaRomaniei2223Table(){
    if(CR2223.style.display === "none"){
        CR2223.style.display = "block";
    }
    else{
        CR2223.style.display = "none";
    }
}
function showAndHideEuropeanPlayOff2223Table(){
    if(EUROPLOFF2223.style.display === "none"){
        EUROPLOFF2223.style.display = "block";
    }
    else{
        EUROPLOFF2223.style.display = "none"
    }
}
function showAndHideUefaChampionsLeague2223Table(){
    if(UCHL2223.style.display === "none"){
        UCHL2223.style.display = "block";
    }
    else{
        UCHL2223.style.display = "none";
    }
}
function showAndHideUefaEuropaConferenceLeague2223Table(){
    if(UECL2223.style.display === "none"){
        UECL2223.style.display = "block";
    }
    else{
        UECL2223.style.display = "none";
    }
}
function closeLigaI2223MainAndPlayOffResults(){
    if(ligaI2223Results.style.display === "none"){
        ligaI2223Results.style.display = "block";
    }
    else if(ligaI2223Results.style.display === "block" && LigaI2223MainRound.style.display === "block" && LigaI2223PlayOffRound.style.display === "block"){
        LigaI2223PlayOffRound.style.display = "none"; LigaI2223MainRound.style.display = "none"; ligaI2223Results.style.display = "none";
    }
    else if(ligaI2223Results.style.display === "block" && LigaI2223MainRound.style.display === "none" && LigaI2223PlayOffRound.style.display === "none"){
        ligaI2223Results.style.display = "none";
    }
    else if(ligaI2223Results.style.display === "block" && LigaI2223MainRound.style.display === "block"){
        LigaI2223MainRound.style.display = "none"; ligaI2223Results.style.display = "none";
    }
    else if(ligaI2223Results.style.display === "block" && LigaI2223PlayOffRound.style.display === "block"){
        LigaI2223PlayOffRound.style.display = "none"; ligaI2223Results.style.display = "none";
    }
}
function closeCupaRomaniei2223Results(){
    if(cupaRomaniei2223Results.style.display === "none"){
        cupaRomaniei2223Results.style.display = "block";
    }
    else if(cupaRomaniei2223Results.style.display === "block" && CR2223.style.display === "block"){
        CR2223.style.display = "none"; cupaRomaniei2223Results.style.display = "none";
    }
    else if(cupaRomaniei2223Results.style.display === "block" && CR2223.style.display === "none"){
        cupaRomaniei2223Results.style.display = "none";
    }
}
function closeEuropeanPlayOffResults(){
    if(europeanPlayoff2223Results.style.display === "none"){
        europeanPlayoff2223Results.style.display = "block";
    }
    else if(europeanPlayoff2223Results.style.display === "block" && EUROPLOFF2223.style.display === "block"){
        EUROPLOFF2223.style.display = "none"; europeanPlayoff2223Results.style.display = "none";
    }
    else if(europeanPlayoff2223Results.style.display === "block" && EUROPLOFF2223.style.display === "none"){
        europeanPlayoff2223Results.style.display = "none";
    }
}
function closeUefaChampionsLeague2223Results(){
    if(uefaChampionsLeague2223Results.style.display === "none"){
        uefaChampionsLeague2223Results.style.display = "block";
    }
    else if(uefaChampionsLeague2223Results.style.display === "block" && UCHL2223.style.display === "block"){
        UCHL2223.style.display = "none"; uefaChampionsLeague2223Results.style.display = "none";
    }
    else if(uefaChampionsLeague2223Results.style.display === "block" && UCHL2223.style.display === "none"){
        uefaChampionsLeague2223Results.style.display = "none";
    }
}
function closeUefaEuropaConferenceLeague2223Results(){
    if(uefaEuropaConferenceLeague2223Results.style.display === "none"){
        uefaEuropaConferenceLeague2223Results.style.display = "block";
    }
    else if(uefaEuropaConferenceLeague2223Results.style.display === "block" && UECL2223.style.display === "block"){
        UECL2223.style.display = "none"; uefaEuropaConferenceLeague2223Results.style.display = "none";
    }
    else if(uefaEuropaConferenceLeague2223Results.style.display === "block" && UECL2223.style.display === "none"){
        uefaEuropaConferenceLeague2223Results.style.display = "none";
    }
}
