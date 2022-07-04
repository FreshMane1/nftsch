// swapping reviews

const leftButton = document.getElementById('leftButton');
const rightButton = document.getElementById('rightButton');
const reviewsWrapper = document.getElementById('reviews__wrapper');
const reviewsWidth = reviewsWrapper.scrollWidth / reviewsWrapper.childElementCount;

function checkScrollEndStart(){
    const scrolled = reviewsWrapper.scrollLeft;
    if(scrolled == 0){
        leftButton.classList.remove('active');
        leftButton.classList.add('inactive');
    }
    if(scrolled != 0){
        leftButton.classList.remove('inactive');
        leftButton.classList.add('active');
    }
    if(reviewsWrapper.scrollWidth - reviewsWrapper.clientWidth <= scrolled){
        rightButton.classList.remove('active');
        rightButton.classList.add('inactive');
    }
    else{
        rightButton.classList.remove('inactive');
        rightButton.classList.add('active');
    }
}

function swapReviews(e){
    reviewsWrapper.scrollBy(reviewsWidth * (this.id == 'leftButton' ? -1 : 1), 0);
    checkScrollEndStart();
}

checkScrollEndStart();

leftButton.addEventListener('click', swapReviews);
rightButton.addEventListener('click', swapReviews);

// showing burger menu
const burger = document.getElementById('burger');
const burgerMenu = document.querySelector('.burger__menu');

function openBurgerMenu(){
    if(this == burger || burger.classList.contains('opened')){
        burger.classList.toggle('opened');
        burgerMenu.classList.toggle('burger__menu__closed');
    }
    else{return null;}
}

burger.addEventListener('click', openBurgerMenu);

// up-button
const upButton = document.getElementById('up-button');

function goUp(e){
    window.scrollTo(0, 0);
}

upButton.addEventListener('click', goUp);