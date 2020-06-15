var diaDoc = document.querySelector("#dia");
var mesDoc = document.querySelector("#mes");
var anoDoc = document.querySelector("#ano");

setInterval("myDate()", 1000);

function myDate() {
    var data = new Date();

    var dia = data.getDate();
    var mes = data.getMonth() + 1;
    var ano = data.getFullYear();

    if (dia < 10) {
        dia = "0" + dia;
    } 
    
    if(mes < 10){
        mes = "0" + mes;
    }

    diaDoc.textContent = dia;
    mesDoc.textContent = mes;
    anoDoc.textContent = ano;
}