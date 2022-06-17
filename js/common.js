/* здесь объявлены глобальные переменные */

let burgerIcon = document.querySelector('.header__burgerIcon');
let burgerContainer = document.querySelector('.header__burgerContainer');

/*****************************************/


window.onresize = function() {

  closeBurgerMenu();

}

/* сработает когда сформируется HTML */

document.addEventListener('DOMContentLoaded', function() {

  burgerMenuSetting();

  loadPage();

});

/**********************************************/


/* сработает при прокрутке сраницы */

document.addEventListener('scroll', function(event) {

  closeBurgerMenu();

});

/**********************************************/


/* бургер меню */

function burgerMenuSetting() {
  if (burgerIcon == null) {
    console.log('не найден класс "header__burgerIcon"')
  } else {
    burgerIcon.addEventListener('click', function () {
      burgerIcon.classList.toggle('active');
      burgerContainer.classList.toggle('active');
    })
  }

  if (burgerContainer == null) {
    console.log('не найден класс "header__burgerContainer"')
  } else {
    burgerContainer.addEventListener('click', function (e) {
      if (e.target === burgerContainer || e.target.tagName === "A" || e.target.parentElement.tagName === "A") {
        closeBurgerMenu();
      }
    })
  }
}

function closeBurgerMenu() {
  burgerIcon.classList.remove('active');
  burgerContainer.classList.remove('active');
}

/*********************/