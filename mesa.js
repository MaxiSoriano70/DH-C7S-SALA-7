function totalAPagar(vehiculo,litroConsumido){
    let precio;
    vehiculo=vehiculo.toLowerCase();
    if(vehiculo === 'coche') {
        precio = 86
    } else if (vehiculo==='moto'){
        precio = 70
    } else if (vehiculo==="autobus"){
        precio = 55
    }
    else{
        console.log("El vehiculo no es valido.");
    }
    if(vehiculo==='coche' || vehiculo==='moto' || vehiculo==="autobus"){
        if(litroConsumido>=25){
            console.log((precio*litroConsumido)+50)
        } else console.log((precio*litroConsumido)+25)
    }
}
totalAPagar("COCHE",25)
totalAPagar("coche",30)

totalAPagar("Moto",25)
totalAPagar("moto",30)

totalAPagar("autoBUS",25)
totalAPagar("autob",30)

//INTEGRANTES
/*
Maximiliano Soriano
Melissa guerra
Julieth Villarraga
iker
*/