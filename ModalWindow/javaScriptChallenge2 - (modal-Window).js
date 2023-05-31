'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay ');
const buttonCloseModal = document.querySelector('.close-modal');
const buttonOpenModal = document.querySelectorAll('.show-modal');
console.log(buttonOpenModal);

const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for (let i = 0; i < buttonOpenModal.length; i++) {
    buttonOpenModal[i].addEventListener('click', openModal);
}
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
buttonCloseModal.addEventListener('click', closeModal)
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});