const revertir = (mensaje) => {
    let mensajeInvertido = "";
    let [...arrayMensaje] = mensaje;

    for(let i = arrayMensaje.length - 1; i >= 0; i--){
        mensajeInvertido += arrayMensaje[i];;
    }

    return mensajeInvertido;
};

const transformarArrayACadena = (array) => {
    let cadena = "";

    for (let i = 0; i < array.length; i++) {
      cadena += array[i];
    }

    return cadena;
};

const cifrado = (conjuro) => {

    conjuro = conjuro.toLowerCase();
    conjuro = conjuro.replaceAll(" ", "_");

    let [...arrayConjuro] = conjuro;
    
    arrayConjuro.forEach((letra, indice) => {
      if(letra == "a"){
        arrayConjuro[indice] = "^";
      }else if(letra == "e"){
        arrayConjuro[indice] = "%";
      }else if(letra == "i"){
        arrayConjuro[indice] = "&";
      }else if(letra == "o"){
        arrayConjuro[indice] = "#";
      }else if(letra == "u"){
        arrayConjuro[indice] = "@";
      }
    });

    conjuro = transformarArrayACadena(arrayConjuro);
    conjuro = revertir(conjuro);
    
    return conjuro;
};

//console.log(cifrado("hola me llamo pepe"));

const descifrar = (mensajeCifrado) => {

    let mensajeDescifrado = mensajeCifrado.replaceAll("_", " ");
    mensajeDescifrado = revertir(mensajeDescifrado);

    [...arrayMensaje] = mensajeDescifrado;

    arrayMensaje.forEach((letra, indice) => {
      if(letra == "^"){
        arrayMensaje[indice] = "a";
      }else if(letra == "%"){
        arrayMensaje[indice] = "e";
      }else if(letra == "&"){
        arrayMensaje[indice] = "i";
      }else if(letra == "#"){
        arrayMensaje[indice] = "o";
      }else if(letra == "@"){
        arrayMensaje[indice] = "u";
      }
    });

    let descifrado = transformarArrayACadena(arrayMensaje);
    return descifrado;
};

//console.log(descifrar("%p%p_#m^ll_%m_^l#h"));

let salida = false;

while(!salida){

    opcion = prompt("Elija la opción deseada: \n1. Cifrar\n2. Descifrar\n3. Salir").toLowerCase();
    if(opcion == "salir"){
        salida = true;
    }

    /*
    while(opcion != "cifrar" || opcion != "descifrar" || opcion != "salir"){
        alert("Introduce una opción válida");
        opcion = prompt("Elija la opción deseada: \n1. Cifrar\n2. Descifrar\n3. Salir").toLowerCase();
    }
    */

    let conjuro = prompt("Introduce el conjuro");

    if(opcion == "cifrar"){
        alert(`Tu mensaje cifrado es: ${cifrado(conjuro)}`);
    }

    if(opcion == "descifrar"){
        alert(`Tu mensaje descifrado es: ${descifrar(conjuro)}`);
    }

}