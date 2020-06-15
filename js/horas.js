var horaDoc = document.querySelector("#hora");
var minutoDoc = document.querySelector("#minuto");
var segundoDoc = document.querySelector("#segundo");

setInterval("meuRelogio()", 1000);

function meuRelogio() {

    var data = new Date();

    var hora = data.getHours();
    var minuto = data.getMinutes();
    var segundo = data.getSeconds();

    if (hora < 10) {
        hora = "0" + hora; 
    }

    if (minuto < 10) {
        minuto = "0" + minuto;
    }

    if (segundo < 10) {
        segundo = "0" + segundo;
    }

    horaDoc.textContent = hora;
    minutoDoc.textContent = minuto;
    segundoDoc.textContent = segundo;
}


