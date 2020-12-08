'use strict'


document.addEventListener('DOMContentLoaded', function(){
    if(document.querySelector('.filter')){
        let filterBtn = document.querySelector('.btn-filter');
        let filterClose =  document.querySelector('.filter__btn');
        let filter = document.querySelector('.filter');
        filterBtn.addEventListener('click', function() {
            filter.classList.add('show');
        });
        filterClose.addEventListener('click', function() {
            filter.classList.remove('show');
        });
    }
    let headerCartBtn = document.querySelector('.nav__item--cart');
    let cart = document.querySelector('.cart');
    let cartBtn = document.querySelector('.cart__btn');
    let menuBtn = document.querySelector('.btn-main--catalog');
    let menu = document.querySelector('.header__nav');
    // filterBtn.addEventListener('click', function(){
    //     filter.classList.add('show');
    // })

    headerCartBtn.addEventListener('click', function() {
        cart.classList.add('show');
    });
    cartBtn.addEventListener('click', function() {
        cart.classList.remove('show');
    });
    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('show');
    });

});