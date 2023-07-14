function encriptar(){
    let texto= document.getElementById("texto").value;
    let TituloMensaje=document.getElementById("titulo-mensaje");
    let parrafo=document.getElementById("parrafo");
     let muneco=document.getElementById("muneco");
     let textoE=document.getElementById("parrafo");

    let textoCifrado=texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
    if(texto.length !=0){
        // document.getElementById("texto").value = textoCifrado;
        // texto=textoCifrafo;
        TituloMensaje.textContent="Texto encriptado con exito";
        parrafo.textContent=textoCifrado; 
        // muneco.style.display = 'none';
           
    }
    else{
        TituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Ooops!, Debes ingresar un texto");
    }
}
function desencriptar(){
    let texto= document.getElementById("texto").value;
    let TituloMensaje=document.getElementById("titulo-mensaje");
    let parrafo=document.getElementById("parrafo");
     let muneco=document.getElementById("muneco");
     let textoE=document.getElementById("parrafo");

    let textoCifrado=texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
    if(texto.length !=0){
        // document.getElementById("texto").value = textoCifrado;
        // texto=textoCifrafo;
        TituloMensaje.textContent="Texto desencriptado con exito";
        parrafo.textContent=textoCifrado; 
        // muneco.style.display = 'none';
           
    }
    else{
        TituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
        alert("Ooops!, Debes ingresar un texto");
    }
}