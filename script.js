const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);


habilidades.map((item, index)=>{
  
  let habilidadeItem = c('.model .icons').cloneNode(true);

  habilidadeItem.setAttribute('data-key', index);
  habilidadeItem.querySelector('img').src = item.img;
  habilidadeItem.querySelector('p').innerHTML = item.title;

  habilidadeItem.addEventListener('click', (e) =>{
    let key = e.target.closest('.icons').getAttribute('data-key');

      c('.image img').src = habilidades[key].img;
      c('.title').innerHTML = habilidades[key].title;
      c('.level').style.width = habilidades[key].pct;
      c('.porcentagem').innerHTML = habilidades[key].pct;
      c('.desc').innerHTML = habilidades[key].description;

      c('.des-float-habilidade').style.opacity = 0;
        c('.des-float-habilidade').style.display = 'flex';
        setTimeout(() =>{
            c('.des-float-habilidade').style.opacity = 1;
        }, 100)
    
  })

  

  c('.icons-habilidades').append(habilidadeItem);
});


function closeModal() {
  c('.des-float-habilidade').style.opacity = 0;
  setTimeout(() =>{
      c('.des-float-habilidade').style.display = 'none';
  }, 200)
}
c('.button-exit').addEventListener('click', closeModal);




window.onload = function() {
    Particles.init({
      selector: '.background',
        maxParticles:50,
        sizeVariations: 1,
      connectParticles: true
    });
  };

document.querySelector('.menu-mobile').addEventListener('click', ()=>{
    let menu = c('.menu');

    if(menu.style.display == 'none') {
      menu.style.display = 'flex';
    } else {
      menu.style.display = 'none';
    }
    
});


