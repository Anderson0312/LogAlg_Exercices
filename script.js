

function calcular() {
    var val1 = document.getElementById('val1');
    var val2 = document.getElementById('val2');
    var res = document.getElementById('res');

    let n1 = parseFloat(val1.value)
    let n2 = parseFloat(val2.value)
    let sum = n1 + n2;
    res.innerHTML = sum
}


