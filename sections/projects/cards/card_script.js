class Card {
    constructor(photo, url, title, info, id) {
        this.photo = photo;
        this.url = url;
        this.title = title;
        this.info = info;
        this.id = id;
    }
}

let cards = [
    new Card("valkyrieconnect.webp","https://valkyrieconnect.web.app/" ,"valkyrieconnect.web.app", "Valkyrie Connect", "valkyrieConnect"),
    new Card("valkyrieconnect.webp","https://valkyrieconnect.web.app/" ,"valkyrieconnect.web.app", "Valkyrie Connect", "valkyrieConnect"),
    new Card("valkyrieconnect.webp","https://valkyrieconnect.web.app/" ,"valkyrieconnect.web.app", "Valkyrie Connect", "valkyrieConnect"),
    // Puedes agregar más tarjetas aquí
];

let containerCards = document.getElementById("carousel");

cards.forEach(card => {
    // Crea un nuevo elemento 'div' para representar la tarjeta
    let cardElement = document.createElement('div');
    cardElement.classList.add('card'); // Añade la clase 'card' al elemento

    // Configura el contenido del elemento con las propiedades de la tarjeta
    cardElement.innerHTML = `
    <a href="${card.url}" target="_blank">
        
            <div class="project-photo" style="background-image: url('../../../Assets/img_proyect/${card.photo}')"></div>
            <h2 class="title-card">${card.title}</h2>
            <p class="info-card">${card.info}</p>
       
    </a>

    `;

    // Añade el elemento creado como hijo del contenedor 'containerCards'
    containerCards.appendChild(cardElement);
});


 