function calcularTotal() {
    const precios = [20, 15, 100];
    const descuentos = [0, 0, 0.5];
    const iva = 0.16;

    let cantidades = [
        parseInt(document.getElementById('Momocore').value),
        parseInt(document.getElementById('PatrickCore').value),
        parseInt(document.getElementById('Tiaracore').value)
    ];

    
    let subtotal = 0;
    for (let i = 0; i < precios.length; i++) {
        subtotal += precios[i] * cantidades[i] * (1 - descuentos[i]);
    }

    let totalIva = subtotal * iva;
    let total = subtotal + totalIva;

    document.getElementById('result').innerHTML = `
        <p>Subtotal: $${subtotal.toFixed(2)}</p>
        <p>IVA (16%): $${totalIva.toFixed(2)}</p>
        <p>Total a pagar: $${total.toFixed(2)}</p>
    `;
}