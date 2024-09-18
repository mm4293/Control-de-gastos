let listaNombresGastos = [];
let listaValoresGastos = [];

function clickBoton(){
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;

    console.log(nombreGasto);
    console.log(valorGasto);

    console.log(listaNombresGastos);
    console.log(listaValoresGastos);

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    //alert('Click del usuario');
    actualizarListaDeGastos();
}

function actualizarListaDeGastos(){
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);
        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)}
                    <button onclick="eliminarGasto(${posicion});">Eliminar</button>
                    </li>`;
        totalGastos += Number(valorGasto);
        console.log(totalGastos);
    });
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiarCampos();
}

function limpiarCampos(){
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
}

function eliminarGasto(posicion){
    listaNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    actualizarListaDeGastos();
}



