/*
Objetivo: Quando clicar no botão, mostra o formulário e a máscara.
1 - Qual botão clicar?
2 - Qual formulário?
3 - Qual mascára?
4 - O que é "mostrar"?
    - Trazer o formulario da esquerda para direita
    - Centralizar o formulario na tela
    - Exibir a mascara
*/

const formulario = document.querySelector(".formulario");
const mascara = document.querySelector(".mascara-formulario")

function mostrarForm(){
    formulario.style.left = "50%";
    formulario.style.transform = "translateX(-50%)";
    mascara.style.visibility = "visible";
}

function esconderForm(){
    formulario.style.left = "-340%";
    formulario.style.transform = "translateX(0)";
    mascara.style.visibility = "hidden";
}