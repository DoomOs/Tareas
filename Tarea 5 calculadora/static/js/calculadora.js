
let numeroCalculadora = '';
function agregarnumero(number) {
    numeroCalculadora += number; 
    document.getElementById('display').value = numeroCalculadora; 
}

function calcular() {
    try {
        const resultado = math.evaluate(numeroCalculadora); // se utiliza math, para asegurar que sea una expresion matematica
        document.getElementById('display').value = resultado; 
        numeroCalculadora = resultado.toString(); 
    } catch (error) {
        document.getElementById('display').value = 'Error'; 
        numeroCalculadora = ''; 
    }
}

function limpiar() {
    numeroCalculadora = '';
    document.getElementById('display').value = '';
}