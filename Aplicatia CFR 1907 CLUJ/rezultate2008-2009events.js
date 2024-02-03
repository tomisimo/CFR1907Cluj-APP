var ligaI0809Results = document.getElementById("ligaIresults0809");
var cupaRomaniei0809Results = document.getElementById("cupaRomanieiResults0809");
var supercup2009Results = document.getElementById("supercup2009results");
var uefaChampionsLeague0809Results = document.getElementById("uefaChampionsLeague0809results");

function showAndHideLigaI0809(){
    if(ligaI0809Results.style.display === "none"){
        ligaI0809Results.style.display = "block";
    }
    else{
        ligaI0809Results.style.display = "none";
    }
}
function showAndHideCupaRomaniei0809(){
    if(cupaRomaniei0809Results.style.display === "none"){
        cupaRomaniei0809Results.style.display = "block";
    }
    else{
        cupaRomaniei0809Results.style.display = "none";
    }
}
function showAndHideSupercup2009(){
    if(supercup2009Results.style.display === "none"){
        supercup2009Results.style.display = "block";
    }
    else{
        supercup2009Results.style.display = "none";
    }
}
function showAndHideUefaChampionsLeague0809(){
    if(uefaChampionsLeague0809Results.style.display === "none"){
        uefaChampionsLeague0809Results.style.display = "block";
    }
    else{
        uefaChampionsLeague0809Results.style.display = "none";
    }
}

var LigaI0809MainRoundTable = document.getElementById("LigaI0809MainRoundResultsTable")
var CupaRomaniei0809Table = document.getElementById("CupaRomaniei0809ResultsTable")
var SupercupaRomaniei09Table = document.getElementById("SupercupaRomaniei09ResultsTable")
var UefaChampionsLeague0809Table = document.getElementById("UefaChampionsLeague0809ResultsTable")

function showAndHideLigaI0809MainRoundResults(){
    if(LigaI0809MainRoundTable.style.display === "none"){
        LigaI0809MainRoundTable.style.display = "block";
    }
    else{
        LigaI0809MainRoundTable.style.display = "none";
    }
}
function showAndHideCupaRomaniei0809Results(){
    if(CupaRomaniei0809Table.style.display === "none"){
        CupaRomaniei0809Table.style.display = "block";
    }
    else{
        CupaRomaniei0809Table.style.display = "none"
    }
}
function showAndHideSupercupaRomaniei09Results(){
    if(SupercupaRomaniei09Table.style.display === "none"){
        SupercupaRomaniei09Table.style.display = "block";
    }
    else{
        SupercupaRomaniei09Table.style.display = "none";
    }
}
function showAndHideUefaChampionsLeague0809Results(){
    if(UefaChampionsLeague0809Table.style.display === "none"){
        UefaChampionsLeague0809Table.style.display = "block";
    }
    else{
        UefaChampionsLeague0809Table.style.display = "none";
    }
}

function closeLigaI0809MainResults(){
    if(ligaI0809Results.style.display === "none"){
        ligaI0809Results.style.display = "block";
    }
    else if(ligaI0809Results.style.display === "block" && LigaI0809MainRoundTable.style.display === "block"){
        LigaI0809MainRoundTable.style.display = "none"; ligaI0809Results.style.display = "none";
    }
    else if(ligaI0809Results.style.display === "block" && LigaI0809MainRoundTable.style.display === "none"){
        ligaI0809Results.style.display = "none"
    }
}
function closeCupaRomaniei0809Results(){
    if(cupaRomaniei0809Results.style.display === "none"){
        cupaRomaniei0809Results.style.display = "block";
    }
    else if(cupaRomaniei0809Results.style.display === "block" && CupaRomaniei0809Table.style.display === "block"){
        CupaRomaniei0809Table.style.display = "none"; cupaRomaniei0809Results.style.display = "none"
    }
    else if(cupaRomaniei0809Results.style.display === "block" && CupaRomaniei0809Table.style.display === "none"){
        cupaRomaniei0809Results.style.display = "none"
    }
}
function closeSupercupaRomaniei09Results(){
    if(supercup2009Results.style.display === "none"){
        supercup2009Results.style.display = "block";
    }
    else if(supercup2009Results.style.display === "block" && SupercupaRomaniei09Table.style.display === "block"){
        SupercupaRomaniei09Table.style.display = "none"; supercup2009Results.style.display = "none"
    }
    else if(supercup2009Results.style.display === "block" && SupercupaRomaniei09Table.style.display === "none"){
        supercup2009Results.style.display = "none"
    }
}
function closeUefaChampionsLeague0809Results(){
    if(uefaChampionsLeague0809Results.style.display === "none"){
        uefaChampionsLeague0809Results.style.display = "block";
    }
    else if(uefaChampionsLeague0809Results.style.display === "block" && UefaChampionsLeague0809Table.style.display === "block"){
        UefaChampionsLeague0809Table.style.display = "none"; uefaChampionsLeague0809Results.style.display = "none";
    }
    else if(uefaChampionsLeague0809Results.style.display === "block" && UefaChampionsLeague0809Table.style.display === "none"){
        uefaChampionsLeague0809Results.style.display = "none"
    }
}


