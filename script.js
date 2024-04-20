/* escritura de frase */

let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 70,
});

typewriter
    .pauseFor(1000)
    .typeString('"Transformando ideas en una experiencia digital impresionante.')
    .typeString('¡Creemos algo increíble!"')
    .pauseFor(200)
    .deleteChars(10)
    .start();

/* menu responsive */

function toggleMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav-box") {
        x.className += " responsive";
    } else {
        x.className = "nav-box";
    }
}

/* scroll progresivo */

// Agrega un controlador de eventos de clic a todos los enlaces de navegación
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault(); // Evita el comportamiento predeterminado del enlace
      
      const targetId = this.getAttribute('href'); // Obtiene el ID de la sección objetivo
      const targetSection = document.querySelector(targetId); // Encuentra la sección objetivo
      
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' }); // Desplaza suavemente hasta la sección objetivo
      }
    });
  });