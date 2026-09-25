console.log('Hello world<3');

var burgerOpenButton = document.querySelectorAll('.nav-burger_button');
var burgerCloseButton = document.querySelector('.close-burger_button')
var burgerMenu = document.querySelector('.burger-menu');


for (var i = 0; i < burgerOpenButton.length; i++){
    burgerOpenButton[i].addEventListener('click', function(evt){
    evt.preventDefault()

    burgerMenu.classList.remove('hidden');

    });
}


console.log(burgerOpenButton)

burgerCloseButton.addEventListener('click', function(evt){
    evt.preventDefault();

    burgerMenu.classList.add('hidden');
})


