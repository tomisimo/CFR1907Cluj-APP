var ligaI1314Results = document.getElementById("ligaIresults1314");
var cupaRomaniei1314Results = document.getElementById("cupaRomaniei1314results");

function showAndHideLigaI1314(){
    if(ligaI1314Results.style.display === "none"){
        ligaI1314Results.style.display = "block";
    }
    else{
        ligaI1314Results.style.display = "none";
    }
}
function showAndHideCupaRomaniei1314(){
    if(cupaRomaniei1314Results.style.display === "none"){
        cupaRomaniei1314Results.style.display = "block";
    }
    else{
        cupaRomaniei1314Results.style.display = "none";
    }
}

var LigaI1314MainRoundTable = document.getElementById("LigaI1314MainRoundResultsTable");
var CupaRomaniei1314Table = document.getElementById("CupaRomaniei1314ResultsTable");
var competitionsPresentationTable1314 = document.getElementById("competitionsTable1314")

function showAndHideLigaI1314MainRoundResults(){
    if(LigaI1314MainRoundTable.style.display === "none"){
        LigaI1314MainRoundTable.style.display = "block";
    }
    else{
        LigaI1314MainRoundTable.style.display = "none";
    }
}

function showAndHideCupaRomaniei1314Results(){
    if(CupaRomaniei1314Table.style.display === "none"){
        CupaRomaniei1314Table.style.display = "block";
    }
    else{
        CupaRomaniei1314Table.style.display = "none";
    }
}
function closeLigaI1314MainResults(){
    if(ligaI1314Results.style.display === "none"){
        ligaI1314Results.style.display = "block"; competitionsPresentationTable1314.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(ligaI1314Results.style.display === "block" && LigaI1314MainRoundTable.style.display === "block"){
        LigaI1314MainRoundTable.style.display = "none"; ligaI1314Results.style.display = "none";
    }
    else if(ligaI1314Results.style.display === "block" && LigaI1314MainRoundTable.style.display === "none"){
        ligaI1314Results.style.display = "none"
    }
}
function closeCupaRomaniei1314Results(){
    if(cupaRomaniei1314Results.style.display === "none"){
        cupaRomaniei1314Results.style.display = "block"; competitionsPresentationTable1314.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(cupaRomaniei1314Results.style.display === "block" && CupaRomaniei1314Table.style.display === "block"){
        CupaRomaniei1314Table.style.display = "none"; cupaRomaniei1314Results.style.display = "none";
    }
    else if(cupaRomaniei1314Results.style.display === "block" && CupaRomaniei1314Table.style.display === "none"){
        cupaRomaniei1314Results.style.display = "none"
    }
}
