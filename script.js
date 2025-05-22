// Оптимизированная версия с localStorage
const places = JSON.parse(localStorage.getItem("places")) || [
    { 
        title: "Тайлайд", 
        description: "Райский остров с белоснежными пляжами", 
        image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
    }
];

function saveToStorage() {
    localStorage.setItem("places", JSON.stringify(places));
}

function renderCards() {
    const container = document.getElementById("cardsContainer");
    container.innerHTML = "";
    
    places.forEach((place, index) => {
        const card = document.createElement("div");
        card.className = "card animated";
        card.innerHTML = `
            <img src="${place.image}" alt="Туристическое направление: ${place.title}" loading="lazy">
            <h3>${place.title}</h3>
            <p>${place.description}</p>
            <button onclick="deleteCard(${index})">Удалить</button>
        `;
        container.appendChild(card);
    });
}

// Остальные функции остаются без изменений
