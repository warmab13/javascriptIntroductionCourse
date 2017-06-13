function pzoom(str){
    let translation = str

    //Hacer esto no nos permite modificar el elemento ya que esto es solo un recurso que viene como parametro
    //str.toUpperCase();

    //Si la palabra termina en "ar", se le quitan esos dos ultimos caracteres
    //Tres formas de declara strings en JS
    /*
    if(str.endWith('ar')){

    }
    if(str.endWith("ar")){

    }
    if(str.endWith(`ar`)){ //Estas utilas nos permiten interpolar variables dentro del string

    }*/
    //Este parametro no esta modificando el string genera un string nuevo y pregunta si terminar con "ar"
    if(str.toLowerCase().endsWith('ar')){
        //slice nos permite cortar caracteres de una cade
        translation = str.slice(0, -2); //Desde el final sacar dos caracteres y hasta el inicio
    }
    return translation;
}


console.log(pzoom("Programar"));