initReload();

function initReload() {
    let animales = [
        {
            nombre: "flufy",
            raza: "Pastor" 
        }
    ];
    
    for (let values = 0; values <12; values++) {
        $(".fill--up").append(`
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="https://picsum.photos/210px18${values}/" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Ver Detalle</a>
            </div>
        </div>       
        `);
    }

}