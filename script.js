'use strict';
const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModalFunction = function(){
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closewModalFunction = function(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener('click' , showModalFunction);

closeModal.addEventListener('click' , closewModalFunction);
overlay.addEventListener('click' , closewModalFunction);
document.addEventListener('keydown' , function(e){
  if (e.key === 'Escape' && !modal.classList.contains('hidden')){
    closewModalFunction();
  }
})
  