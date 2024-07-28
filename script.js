const wrapper = document.querySelector(".card-swiper-container");
const cardsWrapper = document.querySelector(".swiper-wrapper");

const prevButton = document.querySelector(".pre-btn");
const nextButton = document.querySelector(".nxt-btn");



let pressed = false;
let startX = 0;
let scrollLeft = 0;

wrapper.addEventListener("mousedown", function (e) {
  e.preventDefault();
  pressed = true;
  startX = e.clientX;
  scrollLeft = wrapper.scrollLeft;
  this.style.cursor = "grabbing";
});

prevButton.addEventListener("click", () => {
  wrapper.scrollBy({
    left: -300, 
    behavior: 'smooth'
  });
});

nextButton.addEventListener("click", () => {
  wrapper.scrollBy({
    left: 300, 
    behavior: 'smooth'
  });
});

wrapper.addEventListener("mouseleave", function () {
  pressed = false;
  wrapper.style.cursor = "grab";
});

window.addEventListener("mouseup", function () {
  pressed = false;
  wrapper.style.cursor = "grab";
});

wrapper.addEventListener("mousemove", function (e) {
  if (!pressed) return;
  e.preventDefault();
  const x = e.clientX;
  const walk = (x - startX) * 2; 
  wrapper.scrollLeft = scrollLeft - walk;
});

wrapper.addEventListener("touchstart", function (e) {
  pressed = true;
  startX = e.touches[0].clientX;
  scrollLeft = wrapper.scrollLeft;
});

wrapper.addEventListener("touchend", function () {
  pressed = false;
});

wrapper.addEventListener("touchmove", function (e) {
  if (!pressed) return;
  const x = e.touches[0].clientX;
  const walk = (x - startX) * 2; 
  wrapper.scrollLeft = scrollLeft - walk;
});


hamburgerContainer.addEventListener("click", function () {
  this.classList.toggle("active");

  const navDropdown = document.querySelector(".navbar-dropdown-section");

  if (navDropdown) {
    navDropdown.classList.toggle("active");
  }
});


document
  .querySelector(".button-menu-trigger")
  .addEventListener("click", function () {
    const menuItems = document.querySelector(".button-menu-items");
    const menuIcon = document.querySelector(".button-menu-icon");
    menuItems.classList.toggle("show");
    menuIcon.classList.toggle("active");

    const buttonIcon = document.querySelector(".icon-inactive");
    const buttonActiveIcon = document.querySelector(".icon-active");

    buttonIcon.classList.toggle("show");
    buttonActiveIcon.classList.toggle("hide");
  });

  document.querySelectorAll('.selection-item').forEach(item => {
    item.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      document.querySelectorAll('.selection-item').forEach(el => el.classList.remove('active'));
      
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
  
  

  
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function () {

        const dropdown = document.querySelector('.navbar-dropdown');
        
        const isActive = item.classList.contains('active');

        document.querySelectorAll('.nav-item').forEach(el => {
            el.classList.remove('active');
        });
        dropdown.classList.remove('active');

        if (!isActive) {
            item.classList.add('active');
            dropdown.classList.add('active');
        }
    });
});

document.querySelector('.navbar-dropdown').classList.remove('active');



const openOverlay = () => {
  overlay.classList.add('show');
  document.body.classList.add('overlay-active');
};

const closeOverlay = () => {
  overlay.classList.remove('show');
  document.body.classList.remove('overlay-active');
};

openButton.addEventListener('click', openOverlay);
closeButton.addEventListener('click', closeOverlay);