function anim(nombre, animate) {
    let grup_iglesia;
    window.addEventListener("scroll", () => {
        grup_iglesia = document.querySelector(nombre);
        let position_grup_iglesia = grup_iglesia.getBoundingClientRect().top;
        let tamPan_grupIglesia = window.innerHeight / 1;
        if (position_grup_iglesia < tamPan_grupIglesia) {
            grup_iglesia.style.animation = animate;
        }
    })
}

//index | jovenes
anim(".anim-jovenes", "anim-grup-iglesia 3s");

// index | damas
anim(".anim-damas", "anim-grup-iglesia 3s");

// index / caballero
anim(".anim-caballero", "anim-grup-iglesia 3s");


// musica | adoracion
anim(".anim-adoracion", "move1 2s");

// musica |alabanza
anim(".anim-alabanza", "move 2s");

//clases | clase-musical
anim(".anim-move-musica", "move1 2s");

// clases | clase-cdi
anim(".move-anim", "move 2s")



//menu

let bar = document.querySelector(".bar");
let contenedor = document.querySelector('.cont-menureducido');
let lista = document.querySelector('.items-menu');

bar.addEventListener('click', (e) => {
    e.preventDefault();
    contenedor.classList.toggle('menuBarCambio');
    setTimeout(() => {
        lista.classList.toggle('lista-link-cambio');
    }, 800)

})