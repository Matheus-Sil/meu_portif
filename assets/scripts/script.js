window.onload = function() {
    Particles.init({
      selector: '.background',
        maxParticles:50,
        sizeVariations: 1,
      connectParticles: true
    });
  };

document.querySelector('.menu-mobile').addEventListener('click', ()=>{
    let menu = document.querySelector('.menu');

    if(menu.style.display == 'none') {
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
    }
    
});