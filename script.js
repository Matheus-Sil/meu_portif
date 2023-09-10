const c = (el) => document.querySelector(el);
const cs = (el) => document.querySelectorAll(el);


habilidades.map((item, index) => {

  let habilidadeItem = c('.model .icons').cloneNode(true);

  habilidadeItem.setAttribute('data-key', index);
  habilidadeItem.querySelector('img').src = item.img;
  habilidadeItem.querySelector('p').innerHTML = item.title;

  habilidadeItem.addEventListener('click', (e) => {
    let key = e.target.closest('.icons').getAttribute('data-key');

    c('.image img').src = habilidades[key].img;
    c('.title').innerHTML = habilidades[key].title;
    c('.level').style.width = habilidades[key].pct;
    c('.porcentagem').innerHTML = habilidades[key].pct;
    c('.desc').innerHTML = habilidades[key].description;

    c('.container-float').style.opacity = 0;
    c('.container-float').style.display = 'flex';
    setTimeout(() => {
      c('.container-float').style.opacity = 1;
    }, 100)

  })



  c('.icons-habilidades').append(habilidadeItem);
});


function closeModal() {
  c('.container-float').style.opacity = 0;
  setTimeout(() => {
    c('.container-float').style.display = 'none';
  }, 200)
}
c('.button-exit').addEventListener('click', closeModal);


//codigo do andre origami, copiado do codepen, codigo de scroll para links internos, a propriedade no css nao estava funcionando
const menuItems = document.querySelectorAll('.menu a[href^="#"]');

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  // Caso queira o nativo apenas
  // window.scroll({
  // top: to,
  // behavior: "smooth",
  // })
  smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
  event.preventDefault();
  const to = getScrollTopByHref(event.currentTarget) - 80;
  scrollToPosition(to);
}

menuItems.forEach(item => {
  item.addEventListener('click', scrollToIdOnClick);
});
c('.cssbuttons-io a').addEventListener('click', scrollToIdOnClick);


// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 700;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    c('a.active').classList.remove('active');
    item.classList.add('active');
  });
});

window.onload = function () {
  Particles.init({
    selector: '.background',
    maxParticles: 50,
    sizeVariations: 1,
    connectParticles: true
  });
};

function closeMenuMobile() {
  console.log('clicou')
}

const itens = cs('.menu a');

document.querySelector('.menu-mobile').addEventListener('click', () => {
  let menu = c('.menu');


  if (menu.style.display == 'none') {
    menu.style.opacity = 0;
    menu.style.display = 'flex';
    setTimeout(() => {
      menu.style.opacity = 1;
    }, 100);

    itens.forEach(item => {
      item.addEventListener('click', () => {
        menu.style.opacity = 0;
        setTimeout(() => {
          menu.style.display = 'none';
        }, 200)
      })
    })
  } else {
    menu.style.opacity = 0;
    setTimeout(() => {
      menu.style.display = 'none';
    }, 200)
  }



});


