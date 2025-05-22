// Исходный массив объектов
let places = [
    { 
        title: "Тайлайд", 
        description: "Райский остров с белоснежными пляжами", 
        image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
    },
    { 
        title: "Мадагаскар", 
        description: "Уникальная природа и заповедники", 
        image: "https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
    }
];

// Функция рендеринга карточек
function renderCards() {
    let container = document.getElementById("cardsContainer");
    container.innerHTML = "";
    
    places.forEach((place, index) => {
        let card = document.createElement("div");
        card.className = "card animated";
        card.style.animationDelay = `${index * 0.1}s`;
        card.innerHTML = `
            <img src="${place.image}" alt="${place.title}">
            <h3>${place.title}</h3>
            <p>${place.description}</p>
            <button onclick="deleteCard(${index})">Удалить</button>
        `;
        container.appendChild(card);
    });
}

// Функция добавления нового места
function addPlace() {
    const title = document.getElementById("titleInput").value;
    const description = document.getElementById("descriptionInput").value;
    const image = document.getElementById("imageInput").value;

    if (!title || !description || !image) {
        alert("Заполните все поля!");
        return;
    }

    places.push({ title, description, image });
    renderCards();
    
    // Очистка формы
    document.getElementById("titleInput").value = "";
    document.getElementById("descriptionInput").value = "";
    document.getElementById("imageInput").value = "";
}

// Функция удаления карточки
function deleteCard(index) {
    if (confirm("Удалить это направление?")) {
        places.splice(index, 1);
        renderCards();
    }
}

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", function() {
    renderCards();
    
    // Анимация для элементов
    document.querySelectorAll(".animated").forEach(el => {
        el.style.opacity = "0";
    });
});
