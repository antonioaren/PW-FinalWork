//Cargamos todos los datos a través de JQuery
initReload();

function initReload() {
    
    $.get('/data/animals.json')
        .then(animals => {
            animals.forEach(animal => {
                $(".fill--up").append(`
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="https://www.randomlists.com/img/animals/${animal.picture}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${animal.name}</h5>
                            <p class="card-text">${animal.summary}</p>
                            <a href="/animal.html?id=${animal.id}" class="btn btn-primary">Ver Detalle</a>
                    </div>
                </div>       
                `);

            });
        })
}
