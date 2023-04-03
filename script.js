const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// modal open function:-
const openModal = () => {
    console.log('Modal is open');
    modal.classList.add('active'); /*jis class me ek component 'modal' hai usme
    'active' naam ka bhi ek component add kardo*/ 
    overlay.classList.add('overlayactive');
}

// modal close function:-
const closeModal = () => {
    modal.classList.remove('active'); /*jis class me ek component 'modal' hai usme
    'active' naam ka component delete kardo*/ 
    overlay.classList.remove('overlayactive');
}