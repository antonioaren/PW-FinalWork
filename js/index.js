function getDataFromForm() {
    newUser = {
        name: $("#name").value().toLowerCase,    
        telefono: $("#tel").value().toLowerCase,   
        email: $("#emaii").value().toLowerCase,    
        email_confirm: $("#email_confirm").value().toLowerCase        
    }
    
    if (!validacion()) {
        console.log("Valores no validos");
        return;        
    }

    
    

}

function validation(user) {
    var isOk = true;

    if (user.name.lenght < 3) {
        alert("Nombre necesita tener una longitud mayor a 3");
        isOk = false;        
    }
    if (user.telefono.lenght < 3) {

        isOk = false;
    }
    if (!user.email.lenght === user.email) {
        alert("Los emails no coinciden");
        isOk = false;        
    }    
    return true;        
}

function sendToServer(user) {
    
}

function gotToPlants () {
    location.href = "/plants.html";
}


function goToAnimals() {
    location.href = "/animals.html";           
}