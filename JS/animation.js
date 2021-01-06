//index | jovenes

window.addEventListener("scroll", () => {
    let grup_iglesia = document.querySelector(".anim-jovenes");
    let position_grup_iglesia = grup_iglesia.getBoundingClientRect().top;
    let tamPan_grupIglesia = window.innerHeight / 1;
    if (position_grup_iglesia < tamPan_grupIglesia) {
        grup_iglesia.style.animation = "anim-grup-iglesia 3s";
    }
})

// index | damas
window.addEventListener("scroll", () => {
    let grup_iglesia = document.querySelector(".anim-damas");
    let position_grup_iglesia = grup_iglesia.getBoundingClientRect().top;
    let tamPan_grupIglesia = window.innerHeight / 1;
    if (position_grup_iglesia < tamPan_grupIglesia) {
        grup_iglesia.style.animation = "anim-grup-iglesia 3s";
    }
})

// index / caballero
window.addEventListener("scroll", () => {
    let grup_iglesia = document.querySelector(".anim-caballero");
    let position_grup_iglesia = grup_iglesia.getBoundingClientRect().top;
    let tamPan_grupIglesia = window.innerHeight / 1;
    if (position_grup_iglesia < tamPan_grupIglesia) {
        grup_iglesia.style.animation = "anim-grup-iglesia 3s";
    }
})

// musica | adoracion
window.addEventListener("scroll", () => {
    let grup_iglesia = document.querySelector(".anim-adoracion");
    let position_grup_iglesia = grup_iglesia.getBoundingClientRect().top;
    let tamPan_grupIglesia = window.innerHeight / 1;
    if (position_grup_iglesia < tamPan_grupIglesia) {
        grup_iglesia.style.animation = "move 2s";
    }
})

// musica |alabanza
window.addEventListener("scroll", () => {
    let grup_iglesia = document.querySelector(".anim-alabanza");
    let position_grup_iglesia = grup_iglesia.getBoundingClientRect().top;
    let tamPan_grupIglesia = window.innerHeight / 1;
    if (position_grup_iglesia < tamPan_grupIglesia) {
        grup_iglesia.style.animation = "move1 2s";
    }
})


//clase | anim-move-musica
window.addEventListener("scroll", () => {
    let grup_iglesia = document.querySelector(".anim-move-musica");
    let position_grup_iglesia = grup_iglesia.getBoundingClientRect().top;
    let tamPan_grupIglesia = window.innerHeight / 1;
    if (position_grup_iglesia < tamPan_grupIglesia) {
        grup_iglesia.style.animation = "move1 2s";
    }
})

// clase | move-anim
window.addEventListener("scroll", () => {
    let grup_iglesia = document.querySelector(".move-anim");
    let position_grup_iglesia = grup_iglesia.getBoundingClientRect().top;
    let tamPan_grupIglesia = window.innerHeight / 1;
    if (position_grup_iglesia < tamPan_grupIglesia) {
        grup_iglesia.style.animation = "move 2s";
    }
})