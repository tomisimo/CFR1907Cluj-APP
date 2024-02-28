var ligaI0607Results = document.getElementById("ligaIresults0607");
var cupaRomaniei0607Results = document.getElementById("cupaRomanieiResults0607");

function showAndHideLigaI0607(){
    if(ligaI0607Results.style.display === "none"){
        ligaI0607Results.style.display = "block";
    }
    else{
        ligaI0607Results.style.display = "none";
    }
}
function showAndHideCupaRomaniei0607(){
    if(cupaRomaniei0607Results.style.display === "none"){
        cupaRomaniei0607Results.style.display = "block";
    }
    else{
        cupaRomaniei0607Results.style.display = "none";
    }
}

var LigaI0607MainRoundTable = document.getElementById("LigaI0607MainRoundResultsTable")
var CupaRomaniei0607Table = document.getElementById("CupaRomaniei0607ResultsTable")
var competitionsPresentationTable0607 = document.getElementById("competitionsTable0607")

function showAndHideLigaI0607MainRoundResults(){
    if(LigaI0607MainRoundTable.style.display === "none"){
        LigaI0607MainRoundTable.style.display = "block";
    }
    else{
        LigaI0607MainRoundTable.style.display = "none";
    }
}
function showAndHideCupaRomaniei0607Results(){
    if(CupaRomaniei0607Table.style.display === "none"){
        CupaRomaniei0607Table.style.display = "block";
    }
    else{
        CupaRomaniei0607Table.style.display = "none";
    }
}
function closeLigaI0607MainResults(){
    if(ligaI0607Results.style.display === "none"){
        ligaI0607Results.style.display = "block"; competitionsPresentationTable0607.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(ligaI0607Results.style.display === "block" && LigaI0607MainRoundTable.style.display === "block"){
        LigaI0607MainRoundTable.style.display = "none"; ligaI0607Results.style.display = "none";
    }
    else if(ligaI0607Results.style.display === "block" && LigaI0607MainRoundTable.style.display === "none"){
        ligaI0607Results.style.display = "none"
    }
}
function closeCupaRomaniei0607Results(){
    if(cupaRomaniei0607Results.style.display === "none"){
        cupaRomaniei0607Results.style.display = "block"; competitionsPresentationTable0607.style.borderColor = "rgb(15, 245, 7)"
    }
    else if(cupaRomaniei0607Results.style.display === "block" && CupaRomaniei0607Table.style.display === "block"){
        CupaRomaniei0607Table.style.display = "none"; cupaRomaniei0607Results.style.display = "none";
    }
    else if(cupaRomaniei0607Results.style.display === "block" && CupaRomaniei0607Table.style.display === "none"){
        cupaRomaniei0607Results.style.display = "none"
    }
}

