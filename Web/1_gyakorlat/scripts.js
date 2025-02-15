var tombMeret = 0;
var veletlenTomb = [];

function generalas(){
    tombMeret = parseInt(document.getElementById("meret").value);
    console.log(tombMeret, typeof(tombMeret));

    for(var i = 0; i < tombMeret; i++){
        veletlenTomb[i] = Math.floor(Math.random() * 101);
        console.log(veletlenTomb[i])
    }

    var szamlalo = new Array(100);
    for(var i = 0; i <= 100; i++){
        szamlalo[i] = 0;
    }

    for(var i = 0; i < tombMeret; i++){
        szamlalo[veletlenTomb[i]] += 1
    }

    console.log(veletlenTomb);
    console.log(szamlalo);

    var max = 0;
    var index = 0;
    for(var i = 0; i < szamlalo.length; i++){
        if(szamlalo[i] > max){
            max = szamlalo[i]
            index = i
        }
    }
    console.log(index, max)

    var min = 100;
    index = 0;
    for(var i = 0; i < szamlalo.length; i++){
        if(szamlalo[i] < min){
            min = szamlalo[i]
            index = i
        }
    }
    console.log(index, min)
}

var checkboxDb = 0;
var radioDb = 0;
var checkboxCimkek = [];
var radioCimkek = [];
var radioAlap = 0;

// Opcionális feladat
function darabKiolvas() {
    checkboxDb = parseInt(document.getElementById("checkboxDb").value);
    radioDb = parseInt(document.getElementById("radioDb").value);

    console.log(checkboxDb, radioDb);

    var kiirandoTartalom = "<form>";

    for (var i = 0; i < checkboxDb; i++) {
        kiirandoTartalom += "<label>A(z) " + (i + 1) + ". checkbox címkéje: <input type='text' id='checkbox_" + i + "'></label>";
        kiirandoTartalom += "<label>Legyen bepipálva? <input type='checkbox' id='checkbox_checked_" + i + "'></label><br>";
    }

    for (var i = 0; i < radioDb; i++) {
        kiirandoTartalom += "<label>A(z) " + (i + 1) + ". radiogomb címkéje: <input type='text' id='radio_" + i + "'></label><br>";
    }

    kiirandoTartalom += "Hányadik gomb legyen az alapértelmezetten kiválasztott? ";
    kiirandoTartalom += "<select id='radio_default'>";
    for (var i = 1; i <= radioDb; i++) {
        kiirandoTartalom += "<option value='" + i + "'>" + i + "</option>";
    }
    kiirandoTartalom += "</select><br>";
    kiirandoTartalom += "<button type='button' onclick='harmadikOldalGeneralas()'>Mehet</button>";
    kiirandoTartalom += "</form>";

    document.getElementById("masodik").innerHTML = kiirandoTartalom;
    document.getElementById("masodik").style.display = "block";
    document.getElementById("elso").style.display = "none";
}

function harmadikOldalGeneralas() {
    checkboxCimkek = [];
    for (var i = 0; i < checkboxDb; i++) {
        checkboxCimkek.push(document.getElementById("checkbox_" + i).value);
    }

    radioCimkek = [];
    for (var i = 0; i < radioDb; i++) {
        radioCimkek.push(document.getElementById("radio_" + i).value);
    }

    radioAlap = parseInt(document.getElementById("radio_default").value) - 1;

    var kiirandoTartalom = "<h3>Generált oldalak:</h3><form>";

    for (var i = 0; i < checkboxDb; i++) {
        var checked = document.getElementById("checkbox_checked_" + i).checked ? "checked" : "";
        kiirandoTartalom += "<input type='checkbox' " + checked + " id='checkbox_final_" + i + "'> " + checkboxCimkek[i] + "<br>";
    }

    for (var i = 0; i < radioDb; i++) {
        var checked = (i === radioAlap) ? "checked" : "";
        kiirandoTartalom += "<input type='radio' name='radio' " + checked + " id='radio_final_" + i + "'> " + radioCimkek[i] + "<br>";
    }

    kiirandoTartalom += "</form>";
    document.getElementById("harmadik").innerHTML = kiirandoTartalom;
    document.getElementById("harmadik").style.display = "block";
    document.getElementById("masodik").style.display = "none";
}
