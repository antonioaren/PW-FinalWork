//Cargamos todos los datos a través de JQuery
initReload();

function initReload() {

    $.get('/data/plants.json')
        .then(plants => {
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');
            const plant = plants.find(plant => plant.id == id);
            $("#plant--card").append(`
            <div class="card" style="width: 100%;">
                <img class="card-img-top" src="https://picsum.photos/210x18${plant.picture}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${plant.name}</h5>
                        <p class="card-text">${plant.description}</p>
                </div>
            </div>       
            `);

        })
}
