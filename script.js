'use strict';
const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModalFunction = function(){
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener('click' , showModalFunction);


  