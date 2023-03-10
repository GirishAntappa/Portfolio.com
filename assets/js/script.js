// ==========  Menu show y hidden

const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

// =======MENU SHOW =====
// VALIDATE IF CONSTANT EXISTS

if(navToggle){
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('show-menu')
    })
}
// =======MENU hidden =====
// VALIDATE IF CONSTANT EXISTS
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// ============= REMOVE MENU MOBILE ==========*

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // WHEN WE CLICK ON EACH NAV_LINK, WE REMOVE SHOW MENU CLASS
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// <!-- ================= Accordion skills ================ -->
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i=0; i< skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills_open'
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click', toggleSkills)
})

// <!-- ================= Qulification  tabs================ -->
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContent.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tab.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.remove('qualification__active')
    })
})

// <!-- ================= SERVICE MODAL================ -->
const modalView = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button')
    modalCloses = document.querySelectorAll('.services__modal-close')

    let modal = function(modalClick) {
        modalView[modalClick].classList.add('active-modal')
    }

    modalBtns.forEach((modalBtn, i)=> {
        modalBtn.addEventListener('click' ,() =>{
            modal(i)
        })
    })
    modalCloses.forEach((modalClose) => {
        modalClose.addEventListener('click',()=>{
            modalView.forEach((modalViews) => {
                modalViews.classList.remove('active-modal')
            })
        })
    })
// <!-- ================= portfolio swiper ================ -->

let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop:true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
});
// <!-- ================= testimonial swiper ================ -->

let swiperTestimonial = new Swiper(".testimonial__container", {
    loop:true,
    grabCursor:true,
    spaceBetween:48,

    pagination: {
      el: ".swiper-pagination",
      clickable:true,
      dynamicBullets:true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
});

// <!-- ================= SCROLL SECTION ACTIVE LINK ================ -->


const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight =current.offsetHeight
        const sectionTop = current.offsetTop-50
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY<= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href+=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href+=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll' , scrollActive)


// <!-- ================= CHANGE BACKGROUND HEADER ================ -->
function scrollHeader(){
    const nav = document.getElementById('header')

    // When the scrloll is greater than 200viewpoint height, add the scroll-header class to the header tag

    if(this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList,remove('scroll-header')
}

window.addEventListener('scroll' , scrollHeader)


/* <!-- ================= SCROLL UP ================ --> */
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    // When the scrloll is greater than 560 viewpoint height, add the scroll-header class to the header tag
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList,remove('show-scroll')
}

window.addEventListener('scroll' , scrollUp)

/* <!-- ================= DARK LIGHT THEME ================ --> */
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('select-icon')

// we obtain the current theme that the interface has by validating the dark theme
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// we validate if the user previously chose a topic 
if(selectedTheme){
    // if the validation is fullfilld , we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activated or deactivated the theme manually with the button

themeButton.addEventListener('click',() => {
    // add or remove dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
 






























