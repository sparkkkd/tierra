/* ****************** AOS ****************** */
AOS.init({
  offset: 50,
  duration: 1000
});

/* ****************** Menu ****************** */
let burgerMenu = document.querySelector('.burger__menu')
let burgerBtn = document.querySelector('.header__burger')
let burgerCloseBtn = document.querySelector('.close__wrapper')

function menuOpen() {
  burgerMenu.classList.add('burger__menu--active')
}

function menuClose() {
  burgerMenu.classList.remove('burger__menu--active')
}

burgerBtn.addEventListener('click', menuOpen)
burgerCloseBtn.addEventListener('click', menuClose)

/* ****************** Rellax (Parallax effect) ****************** */
var rellax = new Rellax('.rellax');

// /* ************************** Story slider ************************** */
// $('.story__slider').slick({
//   slidesToShow: 4,
//   responsive: [{
//       breakpoint: 800,
//       settings: {
//         slidesToShow: 3,
//         initialSlide: 0,
//         arrows: false,
//       }
//     },
//     {
//       breakpoint: 470,
//       settings: {
//         slidesToShow: 2,
//         initialSlide: 0,
//         arrows: false,
//       },
//     }
//   ]
// });

/* ************************** About slider ************************** */
$('.about__slider').slick({
  swipe: false,
  waitForAnimate: false,
  prevArrow: `<button type="button" class="slider__arrow slider-prev about__slider__button about__slider__button-prev"><img src="images/white-arrow.svg" alt=""></button>`,
  nextArrow: `<button type="button"class="slider__arrow slider-next about__slider__button about__slider__button-next"><img src="images/white-arrow.svg" alt=""></button>`,
})

const aboutThumbs = document.querySelectorAll('.about__slider__thumb > div')
let index = 0;

$('.about__slider__thumb > div').click(function () {
  $('.about__slider').slick('slickGoTo', $(this).index())

  aboutThumbs.forEach(item => {
    item.classList.remove('thumb--active')
  })

  this.classList.add('thumb--active')

})

$('body').on('click', '.about__slider__button-prev', function () {
  syncPrevThumb()
})

$('body').on('click', '.about__slider__button-next', function () {
  syncNextThumb()
})

function syncPrevThumb() {

  index--

  if (index < 0) {
    index = aboutThumbs.length - 1
  }

  aboutThumbs.forEach(thumb => {
    thumb.classList.remove('thumb--active')
  })

  console.log(aboutThumbs[index]);
  aboutThumbs[index].classList.add('thumb--active')

}

function syncNextThumb() {

  index++

  if (index > aboutThumbs.length - 1) {
    index = 0
  }

  aboutThumbs.forEach(thumb => {
    thumb.classList.remove('thumb--active')
  })

  aboutThumbs[index].classList.add('thumb--active')

}

/* ************************** Roadmap slider ************************** */
$('.roadmap__slider').slick({
  prevArrow: `<button type="button" class="slider__arrow slider-prev roadmap__slider__button roadmap__slider__button-prev"><img src="images/roadmap/rslide-arrow.svg" alt=""></button>`,
  nextArrow: `<button type="button" class="slider__arrow slider-next roadmap__slider__button roadmap__slider__button-next"><img src="images/roadmap/rslide-arrow.svg" alt=""></button>`,
})

/* ************************** Team slider ************************** */
$('.team__slider').slick({
  prevArrow: `<button type="button" class="slider__arrow slider-prev team__slider__button team__slider__button-prev"><img src="images/roadmap/rslide-arrow.svg" alt=""></button>`,
  nextArrow: `<button type="button" class="slider__arrow slider-next team__slider__button team__slider__button-next"><img src="images/roadmap/rslide-arrow.svg" alt=""></button>`,
})

/* ****************** FAQ Tabs ****************** */
const tabs = document.querySelectorAll('.faq__tab')
const tabButtons = document.querySelectorAll('.faq__tab__question-btn')
const tabAnswers = document.querySelectorAll('.faq__tab__answer')
const answer = document.querySelectorAll('tab-answer')
let tabClicked = false


// tabButtons.forEach((btn) => {
//   btn.addEventListener('click', selectTab)
// })

tabs.forEach((tab) => {
  tab.addEventListener('click', selectTab)
})

function selectTab() {
  const tab = tabAnswers[this.dataset.tab]
  const makeThisActive = !tab.classList.contains('faq__tab__answer--active')

  const activeTab = tabs[this.dataset.tab]
  const makeTabActive = !tabs[this.dataset.tab].classList.contains('faq__tab--active')


  tabButtons.forEach(button => {
    button.classList.remove('faq__tab__question-btn--active')
  })

  tabAnswers.forEach(answer => {
    answer.classList.remove('faq__tab__answer--active')
  })

  tabs.forEach(tab => {
    tab.classList.remove('faq__tab--active')
  })

  // this.classList.toggle('faq__tab__question-btn--active', makeThisActive)
  // tab.classList.toggle('faq__tab__answer--active', makeThisActive)
  activeTab.classList.toggle('faq__tab--active', makeTabActive)
}

/* ************************** Adaptive settings ************************** */
adaptiveSettings()

function adaptiveSettings() {

  const introTitle = document.querySelector('.intro__title')
  const storyTitle = document.querySelector('.story__title')
  const aboutTitle = document.querySelector('.about__title')

  if (window.innerWidth <= 1060) {
    introTitle.innerHTML = `
      THE ONLY WAY <br>
      YOU CAN PREDICT <br>
      THE FUTURE IS TO BUILD IT
    `
  }

  if (window.innerWidth < 1006) {
    storyTitle.innerHTML = `
      We have a story <br>
      to tell
    `
  }

  if (window.innerWidth <= 750) {
    storyTitle.innerHTML = `
      We have a story
      to tell
    `
  }

  if (window.innerWidth <= 600) {
    storyTitle.innerHTML = `
      We have a story <br>
      to tell
    `
  }

  if (window.innerWidth <= 470) {
    storyTitle.innerHTML = `
      We have a story
      to tell
    `
  }

  if (window.innerWidth <= 405) {
    storyTitle.innerHTML = `
      We have a story <br>
      to tell
    `
  }

  if (window.innerWidth <= 1252) {
    aboutTitle.innerHTML = `
      Enterprises <br>
      to suit all tastes
    `
  }

}

/* ************************** Link scrolls ************************** */
linksScroll()

function linksScroll() {

  const anchors = document.querySelectorAll('.scroll-href')

  anchors.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault()

      const blockID = item.dataset.scroll

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })

    })
  })

}

/* ************************** AOS hover fix ************************** */
aosHover()

function aosHover() {
  const aosLink = document.querySelectorAll('.aos-hover')
  console.log(aosLink);
  aosLink.forEach(item => {
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.05)'
    })
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)'
    })
  })
}