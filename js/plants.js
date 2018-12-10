//Cargamos todos los datos a través de JQuery
initReload();

function initReload() {

    $.get('/data/plants.json')
        .then(plants => {
            plants.forEach(plant => {
                $("#plants--cards").append(`
                <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src="https://picsum.photos/210x18${plant.id}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${plant.name}</h5>
                            <p class="card-text">${plant.summary}</p>
                            <a href="/plant.php?id=${plant.id}" class="btn btn-primary">Ver Detalle</a>
                    </div>
                </div>       
                `);

            });

        })
}