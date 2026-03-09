const checkbox = document.querySelector('.menu-btn input')
const menu = document.getElementById('menu-overlay')
const body = document.body

checkbox.addEventListener('change', function() {
    if (this.checked) {
        menu.classList.add('activo')
        body.style.overflow = 'hidden'
    } else {
        menu.classList.remove('activo')
        body.style.overflow = 'auto'
    }
})

/* Prueba Leiner */
const datosMenu = {
    junior: [
        { nombre: "Junior Basica", precio: "4.99", img: "Recursos/Guesas/Junior/CheeseBacon.png" },
        { nombre: "Junior Queso", precio: "5.50", img: "Recursos/Guesas/Junior/Cangreburguer.png" },
        { nombre: "Junior Bacon", precio: "5.99", img: "Recursos/Guesas/Junior/Chicken.png" },
        { nombre: "Junior Doble", precio: "6.99", img: "Recursos/Guesas/Junior/JuniorVeggiCheese.png" },
        { nombre: "Junior BBQ", precio: "5.99", img: "Recursos/Guesas/Junior/RedBurger.png" }
    ],
    extreme: [
        { nombre: "Chesy", precio: "7.99", img: "Recursos/Guesas/Extreme/Chesy.png" },
        { nombre: "Double Floor", precio: "10.50", img: "Recursos/Guesas/Extreme/DoubleFloor.png" },
        { nombre: "Extreme Doble", precio: "14.99", img: "Recursos/Guesas/Extreme/ExtremeColesterol.png" },
        { nombre: "The Gorgeus Queen", precio: "11.50", img: "Recursos/Guesas/Extreme/TheGorgeusQueen.png" },
        { nombre: "WhatIsThat", precio: "10.99", img: "Recursos/Guesas/Extreme/WhatIsThat.png" }
    ],
    veggi: [
        { nombre: "LightGuesa", precio: "4.99", img: "Recursos/Guesas/Veggi/LightGuesa.png"},
        { nombre: "Elle", precio: "7.49", img: "Recursos/Guesas/Veggi/Elle.png"},
        { nombre: "Justin Bieber", precio: "20.49", img: "Recursos/Guesas/Veggi/JustinBieber.png"},
        { nombre: "Peppa Pig", precio: "70.49", img: "Recursos/Guesas/Veggi/PeppaPig.png"},
        { nombre: "VeggiKrok", precio: "9.49", img: "Recursos/Guesas/Veggi/VeggiKrok.png"}
    ],
    extras_vacuno: [
        {nombre: "Chicken-Fingers-Eggs", precio: "20.21", img: "Recursos/Guesas/Complementos/Chicken-Fingers-Eggs.png"},
        {nombre: "Boniato Frito", precio: "10.50", img: "Recursos/Guesas/Complementos/FriedBoniato.png"},
        {nombre: "Palomitas de Pollo", precio: "8.50", img: "Recursos/Guesas/Complementos/PALOMITAS-DE-POLLO-CON-QUESO-PARMESANO.png"},
        {nombre: "Patatas Bravas", precio: "12.99", img: "Recursos/Guesas/Complementos/patatas-bravas.png"},
        {nombre: "Coca-Cola Original", precio: "2.99", img: "Recursos/Guesas/Complementos/Coca.png"},
        {nombre: "Pepsi 330ml", precio: "2.49", img: "Recursos/Guesas/Complementos/Pepsi330ml.png"},
        {nombre: "Monster Mango", precio: "3.49", img: "Recursos/Guesas/Complementos/MonsterMango.png"},
        {nombre: "Water Solan De Cabras", precio: "Free", img: "Recursos/Guesas/Complementos/WaterSolanDeCabras.png"}
    ],
    krok: [
        {nombre: "Pollo Krok", precio: "6.49", img: "Recursos/Guesas/Krok/PolloKrok.png"},
        {nombre: "ChickenEgg", precio: "5.49", img: "Recursos/Guesas/Krok/ChickenEgg.png"},
        {nombre: "CrispyBurger", precio: "6.99", img: "Recursos/Guesas/Krok/CrispyBurger.png"},
        {nombre: "Kroker", precio: "5.99", img: "Recursos/Guesas/Krok/Kroker.png"},
        {nombre: "SpicyChicken", precio: "7.99", img: "Recursos/Guesas/Krok/SpicyChicken.png"}
    ],
    extras_pollo: [
        {nombre: "FatWitch", precio: "4.99", img: "Recursos/Guesas/Complementos/FatWitch.png"},
        {nombre: "Dulce De Leche Granizado Casero", precio: "4.99", img: "Recursos/Guesas/Complementos/DulceDeLecheGranizado-Casero.png"},
        {nombre: "Macaron", precio: "2.49", img: "Recursos/Guesas/Complementos/Macaron.png"},
        {nombre: "Helado Vaina Loca", precio: "3.49", img: "Recursos/Guesas/Complementos/Helado.png"},
        {nombre: "Pizzolinos Dulces", precio: "4.49", img: "Recursos/Guesas/Complementos/pizzolinosdulces.png"},
        {nombre: "Tarta Chocolate", precio: "2.99", img: "Recursos/Guesas/Complementos/tartaChocolate.png"},
        {nombre: "Water Fiji", precio: "Free", img: "Recursos/Guesas/Complementos/WaterFiji.png"},
        {nombre: "Water MondarizXL", precio: "Free", img: "Recursos/Guesas/Complementos/WaterMondarizXL.png"},
        {nombre: "Cacaolat", precio: "Free", img: "Recursos/Guesas/Complementos/Cacaolat.png"},
        {nombre: "Chocolate Milshakes", precio: "7.99", img: "Recursos/Guesas/Complementos/Chocolate-Milshakes.png"}
    ]
};

const modalMenu = document.getElementById('modal-menu');
const closeModal = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalGrid = document.getElementById('modal-grid');
const tarjetasComida = document.querySelectorAll('.comida-item');

tarjetasComida.forEach(tarjeta => {
    tarjeta.addEventListener('click', function() {
        const categoria = this.getAttribute('data-categoria');
        const nombreCategoria = this.querySelector('h3').innerText;
        const productos = datosMenu[categoria] || [];

        modalTitle.innerText = nombreCategoria;
        modalGrid.innerHTML = '';

        if (productos.length === 0) {
            modalGrid.innerHTML = '<p style="font-size: 1.5rem; color: var(--GrisFosc);">Proximamente...</p>';
        } else {
            productos.forEach(producto => {
                const div = document.createElement('div');
                div.className = 'producto-item';
                div.innerHTML = `
                    <img src="${producto.img}" alt="${producto.nombre}"">
                    <h4>${producto.nombre}</h4>
                    <p>${producto.precio} €</p>
                    <button class="btn-ordenar">Ordenar</button>
                `;
                modalGrid.appendChild(div);
            });
        }

        modalMenu.classList.add('activo');
    });
});

closeModal.addEventListener('click', function() {
    modalMenu.classList.remove('activo');
});

modalMenu.addEventListener('click', function(e) {
    if (e.target === modalMenu) {
        modalMenu.classList.remove('activo');
    }
});

/* Prueba Leiner */
