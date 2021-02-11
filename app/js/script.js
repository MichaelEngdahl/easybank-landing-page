const btnHamburger = document.querySelector("#btnHamburger")
const header = document.querySelector(".header")
const overlay = document.querySelector(".overlay")
const fadeElems = document.querySelectorAll(".has-fade")
const body = document.querySelector("body")

btnHamburger.addEventListener('click', () => {
  console.log("click hamburger")

  if(header.classList.contains('open')) { // Close burger menu
    body.classList.remove('noScroll')
    header.classList.remove('open')
    fadeElems.forEach((element) => {
      element.classList.remove('fade-in')
      element.classList.add('fade-out')
    })
  } else { // Open burger menu
    body.classList.add('noScroll')
    header.classList.add('open')
    fadeElems.forEach(function(element) {
      element.classList.remove('fade-out')
      element.classList.add('fade-in')
    })
  }
})