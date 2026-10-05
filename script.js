console.log('Hello world<3');

var burgerOpenButton = document.querySelectorAll('.nav-burger_button');
var burgerCloseButton = document.querySelector('.close-burger_button')
var burgerMenu = document.querySelector('.burger-menu');

var laptopBrandsOpenButton = document.querySelector('.brands-button');
var laptopBrands = document.querySelector('.hidden-content');

var desktopBrands = document.querySelector('.desktop-hidden_content');
var desktopBrandsOpenButton = document.querySelector('.desktop-brands_button');

console.log(desktopBrandsOpenButton)

for (var i = 0; i < burgerOpenButton.length; i++){
    burgerOpenButton[i].addEventListener('click', function(evt){
    evt.preventDefault()

    burgerMenu.classList.remove('hidden');

    });
}



burgerCloseButton.addEventListener('click', function(evt){
    evt.preventDefault();

    burgerMenu.classList.add('hidden');
});




laptopBrandsOpenButton.addEventListener('click', function(evt) {
    evt.preventDefault();

    if (laptopBrandsOpenButton.textContent === 'Показать все') {
        laptopBrands.classList.remove('hidden-brands');
        laptopBrandsOpenButton.classList.add('brands-button--open');
        laptopBrandsOpenButton.textContent = 'Скрыть';
        
    } else {
        laptopBrands.classList.add('hidden-brands');
        laptopBrandsOpenButton.classList.remove('brands-button--open');
        laptopBrandsOpenButton.textContent = 'Показать все';
    }

    
});


desktopBrandsOpenButton.addEventListener('click', function(evt) {
    evt.preventDefault();

    if (desktopBrandsOpenButton.textContent === 'Показать все') {
        desktopBrands.classList.remove('hidden-brands');
        desktopBrandsOpenButton.classList.add('desktop-brands_button--open');
        desktopBrandsOpenButton.textContent = 'Скрыть';

        console.log(desktopBrandsOpenButton);
    } else {
        desktopBrands.classList.add('hidden-brands');
        desktopBrandsOpenButton.classList.remove('desktop-brands_button--open');
        desktopBrandsOpenButton.textContent = 'Показать все';
    }
});


 

const swiper = new Swiper('.swiper', {
  
  direction: 'horizontal',
  loop: true,

  slidesPerView: 'auto',
    spaceBetween: 0,

 
  pagination: {
    el: '.swiper-pagination',
  },
});



