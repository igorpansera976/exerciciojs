document.getElementById('botao').onclick = function () {
    var idade = document.getElementById('idades').value;
    var string = idade.split(',');

    var menor = [];
    var maior = [];

    for (var i = 0; i < string.length; i++) {
        if (string[i] < 18) {
            Array.prototype.push(menor++);
        } else {
            Array.prototype.push(maior++);
        }
    }

    document.getElementById('maior').innerHTML = 'Maiores de 18 anos: ' + maior;
    document.getElementById('menor').innerHTML = 'Menores de 18 anos: ' + menor;

}