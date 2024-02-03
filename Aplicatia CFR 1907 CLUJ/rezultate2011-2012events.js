var ligaI1112Results = document.getElementById("ligaIresults1112");
var cupaRomaniei1112Results = document.getElementById("cupaRomaniei1112results");
var supercupaRomaniei12Results = document.getElementById("supercupaRomaniei12results");

function showAndHideLigaI1112(){
    if(ligaI1112Results.style.display === "none"){
        ligaI1112Results.style.display = "block";
    }
    else{
        ligaI1112Results.style.display = "none";
    }
}
function showAndHideCupaRomaniei1112(){
    if(cupaRomaniei1112Results.style.display === "none"){
        cupaRomaniei1112Results.style.display = "block";
    }
    else{
        cupaRomaniei1112Results.style.display = "none";
    }
}
function showAndHideSupercupaRomaniei12(){
    if(supercupaRomaniei12Results.style.display === "none"){
        supercupaRomaniei12Results.style.display = "block";
    }
    else{
        supercupaRomaniei12Results.style.display = "none";
    }
}

var LigaI1112MainRoundTable = document.getElementById("LigaI1112MainRoundResultsTable");
var CupaRomaniei1112Table = document.getElementById("CupaRomaniei1112ResultsTable");
var SupercupaRomaniei12Table = document.getElementById("SupercupaRomaniei12ResultsTable");

function showAndHideLigaI1112MainRoundResults(){
    if(LigaI1112MainRoundTable.style.display === "none"){
        LigaI1112MainRoundTable.style.display = "block";
    }
    else{
        LigaI1112MainRoundTable.style.display = "none";
    }

}
function showAndHideCupaRomaniei1112Results(){
    if(CupaRomaniei1112Table.style.display === "none"){
        CupaRomaniei1112Table.style.display = "block";
    }
    else{
        CupaRomaniei1112Table.style.display = "none";
    }
}
function showAndHideSupercupaRomaniei12Results(){
    if(SupercupaRomaniei12Table.style.display === "none"){
        SupercupaRomaniei12Table.style.display = "block";
    }
    else{
        SupercupaRomaniei12Table.style.display = "none";
    }
}

function closeLigaI1112MainResults(){
    if(ligaI1112Results.style.display === "none"){
        ligaI1112Results.style.display = "block";
    }
    else if(ligaI1112Results.style.display === "block" && LigaI1112MainRoundTable.style.display === "block"){
        LigaI1112MainRoundTable.style.display = "none"; ligaI1112Results.style.display = "none";
    }
    else if(ligaI1112Results.style.display === "block" && LigaI1112MainRoundTable.style.display === "none"){
        ligaI1112Results.style.display = "none";
    }
}
function closeCupaRomaniei1112Results(){
    if(cupaRomaniei1112Results.style.display === "none"){
        cupaRomaniei1112Results.style.display = "block";
    }
    else if(cupaRomaniei1112Results.style.display === "block" && CupaRomaniei1112Table.style.display === "block"){
        CupaRomaniei1112Table.style.display = "none"; cupaRomaniei1112Results.style.display = "none";
    }
    else if(cupaRomaniei1112Results.style.display === "block" && CupaRomaniei1112Table.style.display === "none"){
        cupaRomaniei1112Results.style.display = "none"
    }
}
function closeSupercupaRomaniei12Results(){
    if(supercupaRomaniei12Results.style.display === "none"){
        supercupaRomaniei12Results.style.display = "block";
    }
    else if(supercupaRomaniei12Results.style.display === "block" && SupercupaRomaniei12Table.style.display === "block"){
        SupercupaRomaniei12Table.style.display = "none"; supercupaRomaniei12Results.style.display = "none";
    }
    else if(supercupaRomaniei12Results.style.display === "block" && SupercupaRomaniei12Table.style.display === "none"){
        supercupaRomaniei12Results.style.display = "none"
    }
}
