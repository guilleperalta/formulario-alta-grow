document.querySelector('#update_from').value = obtenerFechaConFormato()

document.querySelector('#formulario').addEventListener('submit', (e) => {
    e.preventDefault()
    const formData = new FormData(document.getElementById('formulario'))
    const divResultados = document.createElement('div')
    divResultados.classList.add('listado')
    formData.forEach(function(valor, clave) {
        const span = document.createElement('span')
        span.textContent = clave + ': ' + valor
        divResultados.appendChild(span)
    });
    const contenedorResultados = document.getElementById('resultados')
    contenedorResultados.appendChild(divResultados)
})

function mostrarPlataforma(){
    const plataforma = document.querySelector('#OriginPlatform').value
    if (plataforma == 'flexxus') {
        document.querySelector('.origen.flexxus').classList.remove('d-none')
        document.querySelector('.origen.tiendanube').classList.add('d-none')
    }
    if (plataforma == 'tiendanube') {
        document.querySelector('.origen.flexxus').classList.add('d-none')
        document.querySelector('.origen.tiendanube').classList.remove('d-none')
    }
}

function obtenerFechaConFormato() {
    const fecha = new Date()
    const year = fecha.getFullYear()
    const month = String(fecha.getMonth() + 1).padStart(2, '0')
    const day = String(fecha.getDate()).padStart(2, '0')
    const hours = String(fecha.getHours()).padStart(2, '0')
    const minutes = String(fecha.getMinutes()).padStart(2, '0')
    const seconds = String(fecha.getSeconds()).padStart(2, '0')
    const formatoFecha = `${year}:${month}:${day} ${hours}:${minutes}:${seconds}`
    return formatoFecha
}

function habilitarEquivalencia() {
    const usaTalle = document.querySelector('#talle').value
    if (usaTalle == '1') {
        document.querySelector('#equivalencia option[value="1"]').setAttribute('selected',true)
        document.querySelector('#equivalencia option[value="0"]').removeAttribute('selected')
    }else{
        document.querySelector('#equivalencia option[value="0"]').setAttribute('selected',true)
        document.querySelector('#equivalencia option[value="1"]').removeAttribute('selected')
    }
}

function mostrarPlataformaDestino() {
    const plataformas = document.querySelectorAll('.plataforma')
    const plataformaDestino = document.querySelector('#plataformaDestino').value
    plataformas.forEach(element => {
        element.classList.add('d-none')
    });
    switch (plataformaDestino) {
        case 'MercadoLibre':
            document.querySelector('.plataforma.mercadolibre').classList.remove('d-none')
            break;
        case 'TiendaNube':
            document.querySelector('.plataforma.tiendanube').classList.remove('d-none')
            break;
        case 'Woocommerce':
            document.querySelector('.plataforma.woocommerce').classList.remove('d-none')
            break;
        default:
            break;
    }
}

function agregarDepositoCentral() {
    document.querySelector('#order_warehouse').innerHTML = '<option value="" selected disabled>Seleccionar...</option>'
    const depositos = document.querySelector('#warehouse_list').value
    const depositosSinEspacios = depositos.replace(/ /g, '')
    const depositosSeparados = depositosSinEspacios.split(",")
    const listadoFinal = [...new Set(depositosSeparados)]
    listadoFinal.forEach(deposito => {
        const span = document.createElement('option')
        span.value = deposito
        span.textContent = deposito
        document.querySelector('#order_warehouse').appendChild(span)
    });
}