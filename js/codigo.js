document.querySelector("#btnCargarTransaccion").addEventListener("click", cargarTransaccion);

function cargarTransaccion()
{
    let transaccionValor = Number(document.querySelector("#txtValorCompraIngresada").value);
    let transaccionEnDolares = document.querySelector("#checkCompraEnDolares").checked;
    let transaccionTipoCambio = Number(document.querySelector("#txtCotizacionDolarIngresada").value);
    let transaccionCategoria = Number(document.querySelector("#slcTipoCompraIngresada").value);
    let transaccionFecha = document.querySelector("#dateFechaDeCompra").value;
}