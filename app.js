function enviarMensaje() {
    let input1 = document.getElementById('input1').value.trim();
    let input2 = document.getElementById('input2').value.trim();

    if (!input1 || !input2) {
        alert("Por favor llena ambos campos");
        return;
    }

    // Validar que solo tenga números
    if (!/^\d+$/.test(input1)) {
        alert("El número de teléfono solo debe contener dígitos.");
        return;
    }

    let numero = encodeURIComponent(input1);
    let mensaje = encodeURIComponent(input2);
    let url = `https://api.whatsapp.com/send?phone=${numero}&text=${mensaje}`;

    window.open(url, '_blank');
}