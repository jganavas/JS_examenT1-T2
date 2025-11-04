const heroes = [];

const aniadirHeroe = (nombre, clase, reino) => {
    let heroe = {nombre: nombre, clase: clase, reino: reino, misionesCompletadas: 0};
    heroes.push(heroe);
};

const listarHeroes = (heroes) => {
    heroes.forEach((heroe) => {
      let {nombre, clase, reino, misionesCompletadas} = heroe;
      return `Nombre: ${nombre} (${reino}) - Clase: ${clase} - Misiones cumplidas: ${misionesCompletadas}`;
    });
};

const buscarHeroe = (nombreBuscar) => {
    let heroe = heroes.find((heroe) => heroe.nombre == nombreBuscar);
    if(!heroe){
        return("Dicho heroe no existe");
    }else{
        return heroe;
    }
};

const mision = (nombreBuscar) => {

    let res = "";

    let heroe = buscarHeroe(nombreBuscar);
    if(!heroe){
        res = "Dicho heroe no existe";
    }else{
        heroe.misionesCompletadas++;
        res = `Misión añadida a ${heroe.nombre}`;
    }
    return res;
};

const mejor = (heroes) => {
    let maxMisiones = 0;
    heroes.forEach((heroe) => {
        if (heroe.misionesCompletadas > maxMisiones){
            maxMisiones = heroe.misionesCompletadas;
        }
    });

    return heroes.filter((heroe) => heroe.misionesCompletadas == maxMisiones);
};

let opcion = "";

do{
    alert("¡Bienvenido a la agencia de Aventuras del Reino!");
    opcion = prompt("¿Qué deseas hacer?\n1.Introducir nuevo héroe(nuevo)\n2. Mostrar los héroes registrados(listar)\n3. Buscar un héroe(buscar)\n 4. Aniadir una misión cumplida a un héroe(mision)\n5. Saber quién es el mejor héroe(mejor)\n6. Salir");

    opcion = opcion.toLowerCase();

    if(opcion == "nuevo"){
        let nombre = prompt("Introduce el nombre del héroe");
        let nave = prompt("¿Qué nave lleva?");
        let planeta = prompt("¿Cuál es su planeta de origen?");

        aniadirHeroe(nombre, nave, planeta);
        alert("¡Heroe añadido!");
        continue;
    }
    if(opcion == "listar"){
        alert(listarHeroes(heroes));
        continue;
    }
    if(opcion == "buscar"){
        let heroe = prompt("Introduzca el nombre del heroe");
        alert(buscarHeroe(heroe));
        continue;
    }
    if(opcion == "mision"){
        let heroe = prompt("Introduzca el nombre del heroe");
        alert(mision(heroe));
        continue;
    }
    if(opcion == "mejor"){
        alert(mejor);
        continue;
    }

}while(opcion != "salir");


