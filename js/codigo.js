document.querySelector("#btnCargarTransaccion").addEventListener("click", cargarTransaccion);

function cargarTransaccion()
{
    let transaccionValor = Number(document.querySelector("#txtValorCompraIngresada").value);
    let transaccionEnDolares = document.querySelector("#checkCompraEnDolares").checked;
    let transaccionTipoCambio = Number(document.querySelector("#txtCotizacionDolarIngresada").value);
}