var data = new Date();
var Month = new Array;

Month[0] = "Janeiro";
Month[1] = "Fevereiro";
Month[2] = "Março";
Month[3] = "Abril";
Month[4] = "Maio";
Month[5] = "Junho";
Month[6] = "Julho";
Month[7] = "Agosto";
Month[8] = "Setembro";
Month[9] = "Outubro";
Month[10] = "Novembro";
Month[11] = "Dezembro";
var dia = data.getDate();
var mes = data.getMonth();
var ano = data.getFullYear();

document.getElementById('data1').innerHTML = dia + ' / ' + (mes + 1) + ' / ' + ano;
document.getElementById('data2').innerHTML = ano + ' - ' + (mes + 1) + ' - ' + dia;
document.getElementById('data3').innerHTML = dia + ' de ' + Month[mes] + ' de ' + ano;