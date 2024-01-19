fetch('https://randomuser.me/api/?noinfo&results=1&exc=login&nat=es,mx')
//La "promesa" response, obtiene el cuerpo en formato JSON usando el metodo .json() , si no se usara, no tendria formato la respuesta
      .then(response => response.json())
//Ahora la respuesta final tiene la key 'data', y dentro de llaves se puede manipular su valor y almacenarlo en otras variables
      .then(data => {
        console.log(data);//Se loguea en consola
        const api=data//se guarda el valor de 'data' (la respuesta en formato JSON) en la variable api
        /*La API SIEMPRE devuelve un vector de un solo elemento, por eso siempre se accede a la informacion
        usando api.results[0], usar api.results no funciona porque no esta accediendo al elemento del vector*/

        //En todos los siguientes casos se cambia el texto de un elemento ubicado por su ID, al texto necesario consumiendo datos de la API

        //Nombre
        let nombre=api.results[0].name.first+" "+api.results[0].name.last;
        console.log("Nombre is logged as :"+nombre);
        document.getElementById("nombre").innerText = nombre;
        //Nacionalidad
        let nacionalidad= traducirAlEspañol(api.results[0].location.country);
        console.log("Nacionalidad: "+api.results[0].location.country);
        document.getElementById("nacionalidad").innerText = "Soy de "+nacionalidad;
        //Direccion
        let direccion=api.results[0].location.street.name+" "+api.results[0].location.street.number;
        let ciudad=api.results[0].location.city;
        document.getElementById("direccion").innerText = "Vivo en "+direccion+" - "+ciudad;
        console.log("Direccion is logged as :"+direccion)
        //Edad
        let edad=api.results[0].dob.age;
        document.getElementById("edad").innerHTML = "Tengo "+edad+" años";
        console.log("Edad: "+edad);
        //Datos de Contacto
            //Email
            let mail=api.results[0].email;
            document.getElementById("mail").innerHTML = mail;
            console.log("Email: "+mail);
            //celular}
            let tel=api.results[0].cell;
            document.getElementById("telefono").innerHTML = tel;
            console.log("Telefono: "+tel)
       //Redes sociales
            //Instagram
            let ig="@"+api.results[0].name.first+"_"+api.results[0].name.last;
            document.getElementById("instagram").innerHTML = ig;
            console.log("Instagram: "+ig);
            //LinkedIN
            let linkedin=api.results[0].name.first+api.results[0].name.last;
            document.getElementById("linkedin").innerHTML = linkedin;
            console.log("Linkedin: "+linkedin);
            //Twitter     
            let twitter="@"+api.results[0].name.last+"_"+api.results[0].name.first;
            document.getElementById("twitter").innerHTML =twitter;
            console.log("Twitter: "+twitter);
            //GitHub
            let github=api.results[0].name.last+api.results[0].name.first;
            document.getElementById("github").innerHTML =github;
            console.log("GitHub: "+github);
            //StackOverflow
            let stackOverflow=api.results[0].name.last+api.results[0].name.first;
            document.getElementById("stack-overflow").innerHTML =stackOverflow;
            console.log("StackOverflow: "+stackOverflow);

        //Foto
        //Se reporta en consola que la imagen se cargó correctamente
        document.getElementById("profile_pic").addEventListener("loadeddata",console.log("La foto de perfil se cargo correctamente"));
/*
        //document.getElementById("profile_pic").addEventListener("loadeddata",document.getElementById("profile-pic").src(api.results[0].picture.large));

        document.getElementById("profile_pic").addEventListener("loadeddata",document.getElementById("spinner").setAttribute("hidden",1));
        
        document.getElementById("profile_pic").src=api.results[0].picture.large*/


        //Se usa un thumbnail para usar como favicon
        document.getElementById("favicon").setAttribute("href",api.results[0].picture.thumbnail)
            //El siguiente bloque de código, cambia el spinner girando por la foto de perfil cuando ésta completa su carga
            const profile_pic = document.getElementById("profile_pic");
            const spinner = document.getElementById("spinner");

            profile_pic.addEventListener("load", function() {
            spinner.style.display = "none";
            profile_pic.style.display = "block";
            });
            profile_pic.src = api.results[0].picture.large;
                  });
            
//La siguiente funcion se usa para escribir en español los resultados de país de la API, sólo se consideran dos países, pero puede ser ampliado
function traducirAlEspañol(paisEnIngles){
      switch (paisEnIngles) {
            case "Spain":
                  return "España"
                  break;
            case "Mexico":
                  return "México"
                  break;
      }
}