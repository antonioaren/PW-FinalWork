//Cargamos todos los datos a través de JQuery
initReload();

function initReload() {

    $.get('/data/animals.json')
        .then(animals => {
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');
            const animal = animals.find(someOne => someOne.id == id);
            $("#animal--card").append(`
            <div class="card" style="width: 100%;">
                <img class="card-img-top" src="https://www.randomlists.com/img/animals/${animal.picture}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${animal.name}</h5>
                        <p class="card-text">${animal.description}</p>
                </div>
            </div>       
            `);

        })
}
