var imgAtual = "images/image-product-1.jpg";
var imgAnterior = "images/image-product-1-thumbnail.jpg" ;
var imgAnterior1 = "images/image-product-2-thumbnail.jpg";
var imgAnterior2 = "images/image-product-3-thumbnail.jpg";
var imgAnterior3 = "images/image-product-4-thumbnail.jpg";

function trocar(){
    document.getElementById("trocaimagem").src = imgAtual;
    let aux = imgAtual;
    imgAtual = imgAnterior;
    imgAnterior = aux;
    aux = imgAtual;
    imgAtual = imgAnterior1;
    imgAnterior1 = aux;
    aux = imgAtual;
    imgAtual = imgAnterior2;
    imgAnterior2 = aux;
}