/*=============== HOME SPLIT TEXT ===============*/
const { animate, text, stagger } = anime

const { chars: chars1 } = text.split('.home__profession-1', {chars: true})
const { chars: chars2 } = text.split('.home__profession-2', {chars: true})

animate(chars1, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
})

animate(chars2, {
  y: [
    { to: ['100%', '0%'] },
    { to: '-100%', delay: 4000, ease: 'in(3)' }
  ],
  duration: 900,
  ease: 'out(3)',
  delay: stagger(80),
  loop: true,
})
/*=============== SWIPER PROJECTS ===============*/
const swiperProjects = new Swiper('.projects__swiper', {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  grabCursor: true,
  speed: 600,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    display: 3000,
    disableOnInteraction: false,
  }
});

/*=============== WORK TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const targetSelector = tab.dataset.target,
          targetContent = document.querySelector(targetSelector)

    tabContents.forEach((content) => content.classList.remove('work-active'))
    tabs.forEach((t) => t.classList.remove('work-active'))

    tab.classList.add('work-active')
    targetContent.classList.add('work-active')
  })
})
/*=============== SERVICES ACCORDION ===============*/
const serviceButtons = document.querySelectorAll('.services__button')

serviceButtons.forEach(button => {
  const heightInfo = document.querySelector('.services__info')
  heightInfo.style.height = heightInfo.scrollHeight + 'px'

  button.addEventListener('click', () => {
    const servicesCards = document.querySelectorAll('.services__card'),
          currentCard = button.parentNode,
          currentInfo = currentCard.querySelector('.services__info'),
          isCardOpen = currentCard.classList.contains('services-open')

  servicesCards.forEach(card => {
    card.classList.replace('services-open', 'services-close')

    const info = card.querySelector('.services__info')
          info.style.height = '0'
  })

  if(!isCardOpen){
    currentCard.classList.replace('services-close', 'services-open')
    currentInfo.style.height = currentInfo.scrollHeight + 'px'
  }
  })
})
/*=============== TESTIMONIALS OF DUPLICATE CARDS ===============*/


/*=============== COPY EMAIL IN CONTACT ===============*/
const copyBtn = document.getElementById('container-btn'); 
      copyEmail = document.getElementById('contact-email');

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(copyEmail.textContent).then(() => {
        copyBtn.innerHTML = "Email copied <i class='ri-check-line'></i>";
        setTimeout(() => {
            copyBtn.innerHTML = "Copy Email <i class='ri-file-copy-line'></i>";
        }, 2000);
    })
});

/*=============== CURRENT YEAR OF THE FOOTER ===============*/ 
const textYear = document.getElementById('footer-year'),
      currentYear = new Date().getFullYear();

      textYear.textContent = currentYear;
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach(section =>{
        const id = section.id,
              top = section.offsetTop - 50,
              height = section.offsetHeight,
              link = document.querySelector('.nav__menu a[href*=' + id + ']');
        if(!link) return;

        link.classList.toggle('active-link', scrollY > top && scrollY <= top + height);
    })

}
window.addEventListener('scroll', scrollActive);
/*=============== CUSTOM CURSOR ===============*/
const cursor = document.querySelector('.cursor');
let mouseX = 0, mouseY = 0;

const cursorMove = () => {
    cursor.style.left = `${mouseX}px`; 
    cursor.style.top = `${mouseY}px`; 
    cursor.style.transform = 'translate(-50%, -50%)';

    requestAnimationFrame(cursorMove);
}

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

cursorMove();
/* Hide custom cursor on links */
const a = document.querySelectorAll('a');

a.forEach(item => {
    item.addEventListener('mouseover', () => {
        cursor.classList.add('hide-cursor');
    });
    item.addEventListener('mouseleave', () => {
        cursor.classList.remove('hide-cursor');
    })
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 300,
});

sr.reveal('.home__image, .projects__container, work__container, .testimonials__container, .contact__container, .footer__container')
sr.reveal('.home__data', {delay: 900, origin: 'bottom'})
sr.reveal('.home__info', {delay: 1200, origin: 'bottom'})
sr.reveal('.home__social, .home__cv', {delay: 1500})
sr.reveal('.about__data', {origin: 'left'})
sr.reveal('.about__image', {origin: 'right'})
sr.reveal('.services__card', {interval: 100})
