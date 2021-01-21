var form = document.getElementById('fot-form');



//evento
form.addEventListener("submit", function(e) {
    e.preventDefault();
    var datos = new FormData(form)
    fetch('php/api.php', {
            method: 'POST',
            body: datos
        })
        .then(res => res.json())
        .then(dato => {
            if (dato === 'Error') {
                //mensaje
                let htmlerror = ` <h3>Error Ingrese Email Nuevamente</h3> `;
                form.style.color = "#d34";
                form.innerHTML = htmlerror;
                form.innerHTML += `<br><form id="fot-form">
                <input class="fot-email col-2" type="email" name="correo" placeholder=" Email">
                <input class="fot-boton col-1" type="submit" value="ENVIAR"> 
                </form>`
            } else {
                form.style.color = "#0f9";
                form.innerHTML = datos;
            }

        })
})