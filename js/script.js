// inicio de codgo para atualização da data
let data = new Date();
let months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agusto", "Setembro", "Outubro", "Novembro", "Dezembro"];
document.getElementById("mes").innerHTML = months[data.getMonth()];
document.getElementById("ano").innerHTML = data.getFullYear();

// fim do codgo para atualização da data