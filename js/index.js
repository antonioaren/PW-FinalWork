function getDataFromForm(e) {
    e.preventDefault();
    newUser = {
        name: $("#name").val().toLowerCase(),
        telefono: $("#tel").val().toLowerCase(),
        email: $("#email").val().toLowerCase(),
        email_confirm: $("#email_confirm").val().toLowerCase(),
        pass: $("#pass").val().toLowerCase(),
    }

    if (!validation(newUser)) {
        return;
    } else {
        sendToServer(newUser)
    }
}

function validation(user) {
    var isOk = true;
    if (user.name.length < 3) {
        toastr.error("Nombre necesita tener una longitud mayor a 3");
        isOk = false;
    }
    if (user.telefono.length < 3) {
        isOk = false;
        toastr.error("El teléfono introducido no es válido");
    }
    if (user.email == '') {
        toastr.error("El correo es inválido");
        isOk = false;
    } else if (user.email != user.email_confirm) {
        toastr.error("Los emails no coinciden");
        isOk = false;
    }
    if (user.pass == '' || user.pass.length < 5) {
        toastr.error("Debes introducir alguna contraseña de al menos 5 caracteres");
        isOk = false;
    }
    return isOk;
}

function sendToServer(userData) {
    localStorage.setItem('userData', JSON.stringify(userData));
    removeForm(userData);
}

function gotToPlants() {
    location.href = "/plants.php";
}


function goToAnimals() {
    location.href = "/animals.php";
}

function loginForm(e) {
    e.preventDefault();
    $.get('/data/users.json')
        .then(users => {
            loginData = {
                email: $("#email").val().toLowerCase(),
                pass: $("#pass").val().toLowerCase(),
            }
            if (loginData.email === '' || loginData.pass === '') return alert('Introduce datos válidos por favor.')
            const user = users.find(user => user.email == loginData.email && user.pass == loginData.pass);
            if (user) {
                localStorage.setItem('userData', JSON.stringify(user));
                removeForm(user);

                toastr.success('Usuario logeado con éxito')
                setTimeout(() => {
                    location.href = '/'
                    
                }, 2000);
            } else {
                toastr.error('No existe un usuario con esos datos')
            }
        })

    return;
}


function removeForm(userData) {
    $('#form1').html('');
    $('h2#title-form').html('');
    $('#title-form').append(`<b> Welcome to the web ${userData.name}`);
    $('a[href="./joinus.php"]').text(`Hi ${userData.name} !`);
    $('a[href="./login.php"]').text('logout')
        .click(e => localStorage.removeItem('userData'))
}

function checkUserIsLogged() {
    const userData = JSON.parse(localStorage.getItem('userData'))
    if (userData) {
        removeForm(userData);

    }
}


checkUserIsLogged();
