function calculaMedia() {
    var name = document.getElementById('nome').value;
    var nota1 = document.getElementById('nota1').value;
    var nota2 = document.getElementById('nota2').value;
    var nota3 = document.getElementById('nota3').value;

    var convertNota1 = parseFloat(nota1);
    var convertNota2 = parseFloat(nota2);
    var convertNota3 = parseFloat(nota3);

    var media = ((convertNota1 + convertNota2 + convertNota3) / 3).toFixed(1);
    var resultado = document.getElementById('resultado');
    
    media >= 6 ? resultado.innerHTML = `${name} sua média é ${media}, você foi Aprovado` : resultado.innerHTML = `${name} sua média é ${media}, você foi Reprovado`
}