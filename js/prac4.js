const resultado = document.getElementById("resultado");

function buscar() {
    const albumId = document.getElementById("albumId").value;
    const url = 'https://jsonplaceholder.typicode.com/photos?albumId=' + albumId;

    fetch(url, { method: 'GET' })
        .then(response => response.json())
        .then(data => {
            mostrarFotos(data);
        })
        .catch(error => {
            console.error("Error al obtener los datos:", error);
            resultado.textContent = "Error al consultar el servicio web.";
        });
}

function mostrarFotos(data) {
    resultado.innerHTML = "";
    data.forEach(foto => {
        const card = document.createElement("div");
        card.className = "card mb-3 p-3 flex-row align-items-center";

        const img = document.createElement("img");
        img.src = foto.url;
        img.alt = foto.title;
        img.className = "rounded me-3";
        img.width = 120;
        img.height = 120;
        card.appendChild(img);

        const cuerpo = document.createElement("div");

        const titulo = document.createElement("h5");
        titulo.textContent = "Foto " + foto.id;
        cuerpo.appendChild(titulo);

        const ids = document.createElement("p");
        ids.className = "text-secondary mb-1";
        ids.textContent = "Album ID: " + foto.albumId + " · Foto ID: " + foto.id;
        cuerpo.appendChild(ids);

        const texto = document.createElement("p");
        texto.className = "mb-0";
        texto.textContent = foto.title;
        cuerpo.appendChild(texto);

        card.appendChild(cuerpo);
        resultado.appendChild(card);
    });
}
