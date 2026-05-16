/* Boton guesa */
const checkbox = document.querySelector('.menu-btn input')
const menu = document.getElementById('menu-overlay')
const body = document.body

checkbox.addEventListener('change', function() {
    if (this.checked) {
        menu.classList.add('activo')
        body.style.overflow = 'hidden'
    }
    else {
        menu.classList.remove('activo')
        body.style.overflow = 'auto'
    }
})

/* Datos Menu */
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

/* Logica Menu */
const modalMenu = document.getElementById('modal-menu');
const closeModal = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalGrid = document.getElementById('modal-grid');
const tarjetasComida = document.querySelectorAll('.comida-item');

tarjetasComida.forEach(tarjeta => {
    tarjeta.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-ordenar')) {
            return;
        }
        
        const categoria = this.getAttribute('data-categoria');
        if (!categoria) {
            return;
        }

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
                    <img src="${producto.img}" alt="${producto.nombre}">
                    <h4>${producto.nombre}</h4>
                    <p>${producto.precio} EUR</p>
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

// Al hacer click en "Ordenar" se redirige a reservas
document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('btn-ordenar')) {
        alert('Producto seleccionado. Redirigiendo a la seccion de reservas.');
        const vistaReservas = document.querySelector('.nav-link[data-target="reservas"]');
        if (vistaReservas) {
            vistaReservas.click();
        }
    }
});

// updates
// Navegacion entre vistas (index.html, carta.html, reservas.html)
const linksNavegacion = document.querySelectorAll('.nav-link')
const vistas = document.querySelectorAll('.vista')

linksNavegacion.forEach(link => {
    link.addEventListener('click', function() {
        const target = this.getAttribute('data-target')
        
        vistas.forEach(vista => {
            vista.style.display = 'none'
            vista.classList.remove('activa')
        })
        
        linksNavegacion.forEach(l => l.classList.remove('activa'))
        
        const vistaDestino = document.getElementById('vista-' + target)
        if (vistaDestino) {
            vistaDestino.style.display = 'block'
            vistaDestino.classList.add('activa')
        }
        
        this.classList.add('activa')
        
        menu.classList.remove('activo')
        body.style.overflow = 'auto'
        checkbox.checked = false
    })
})

// Local Storage de info del restaurante
const infoRestaurante = {
    diasCerrado: [1],
    horaApertura: "13:00",
    horaCierre: "23:30",
    maxPersonas: 20
};

if (!localStorage.getItem('infoGuesas')) {
    localStorage.setItem('infoGuesas', JSON.stringify(infoRestaurante));
}

// Validacion Formulario Reservas
const formReserva = document.getElementById('formulario-reserva');
const resumenReserva = document.getElementById('resumen-reserva');

const validarVacio = (valor) => valor.trim() !== '';
const validarContacto = (valor) => /^[0-9]{9}$/.test(valor) || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
const validarFecha = (valor, diasCerrados) => {
    if (!valor) return false;
    const fechaElegida = new Date(valor);
    const hoy = new Date();
    hoy.setHours(0, 0, 0, 0);
    if (fechaElegida < hoy) return false;
    return !diasCerrados.includes(fechaElegida.getDay());
};
const validarHora = (valor, apertura, cierre) => {
    if (!valor) return false;
    return valor >= apertura && valor <= cierre;
};
const validarPersonas = (valor, maximo) => {
    const num = parseInt(valor);
    return num > 0 && num <= maximo;
};

const mostrarError = (input, spanId, mensaje, valido) => {
    const span = document.getElementById(spanId);
    if (!valido) {
        span.textContent = mensaje;
        input.classList.remove('campo-valido');
        input.classList.add('campo-invalido');
        setTimeout(() => input.classList.remove('campo-invalido'), 400);
    } else {
        span.textContent = '';
        input.classList.remove('campo-invalido');
        input.classList.add('campo-valido');
    }
    return valido;
};

if (formReserva) {
    const inputs = formReserva.querySelectorAll('input');
    const info = JSON.parse(localStorage.getItem('infoGuesas'));

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            validarCampo(input, info);
        });
    });

    const validarCampo = (input, info) => {
        let valido = true;
        let msj = '';
        
        if (input.name === 'nombre') {
            valido = validarVacio(input.value);
            msj = 'El nombre es obligatorio.';
        } else if (input.name === 'contacto') {
            valido = validarContacto(input.value);
            msj = 'Introduce un telefono de 9 cifras o un email valido.';
        } else if (input.name === 'fecha') {
            valido = validarFecha(input.value, info.diasCerrado);
            msj = 'Fecha invalida o dia de cierre.';
        } else if (input.name === 'hora') {
            valido = validarHora(input.value, info.horaApertura, info.horaCierre);
            msj = `El horario es de ${info.horaApertura} a ${info.horaCierre}.`;
        } else if (input.name === 'personas') {
            valido = validarPersonas(input.value, info.maxPersonas);
            msj = `Debe ser entre 1 y ${info.maxPersonas} personas.`;
        }
        
        return mostrarError(input, `error-${input.name}`, msj, valido);
    };

    formReserva.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            formReserva.dispatchEvent(new Event('submit'));
        }
    });

    formReserva.addEventListener('submit', (e) => {
        e.preventDefault();
        let todoValido = true;
        let primerError = null;

        inputs.forEach(input => {
            if (!validarCampo(input, info)) {
                todoValido = false;
                if (!primerError) primerError = input;
            }
        });

        if (!todoValido) {
            primerError.focus();
            return;
        }

        const reservas = JSON.parse(localStorage.getItem('reservasGuesas')) || [];
        const fechaVal = document.getElementById('campo-fecha').value;
        const horaVal = document.getElementById('campo-hora').value;

        const duplicada = reservas.some(r => r.fecha === fechaVal && r.hora === horaVal);

        if (duplicada) {
            mostrarError(document.getElementById('campo-hora'), 'error-hora', 'Ya hay una reserva a esa hora.', false);
            return;
        }

        const nuevaReserva = {
            nombre: document.getElementById('campo-nombre').value,
            contacto: document.getElementById('campo-contacto').value,
            fecha: fechaVal,
            hora: horaVal,
            personas: document.getElementById('campo-personas').value,
            zona: document.getElementById('campo-zona').value
        };

        reservas.push(nuevaReserva);
        localStorage.setItem('reservasGuesas', JSON.stringify(reservas));

        formReserva.style.display = 'none';
        resumenReserva.style.display = 'block';
        resumenReserva.innerHTML = `
            <h3>Reserva confirmada</h3>
            <p><strong>Nombre:</strong> ${nuevaReserva.nombre}</p>
            <p><strong>Fecha:</strong> ${nuevaReserva.fecha}</p>
            <p><strong>Hora:</strong> ${nuevaReserva.hora}</p>
            <p><strong>Personas:</strong> ${nuevaReserva.personas} (${nuevaReserva.zona})</p>
            <button id="btn-nueva-reserva" class="btn-ordenar" style="margin-top: 15px;">Hacer otra reserva</button>
        `;

        document.getElementById('btn-nueva-reserva').addEventListener('click', () => {
            formReserva.reset();
            inputs.forEach(input => input.classList.remove('campo-valido', 'campo-invalido'));
            resumenReserva.style.display = 'none';
            formReserva.style.display = 'block';
        });
    });
}
