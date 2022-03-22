
const modalContactForm = document.querySelector('.section-footer')
const contactLink = document.querySelector('.Contact')
contactLink.addEventListener('click', openModalInstructions)
function openModalInstructions() {
    modalContactForm.style.display = 'block';
}

// Close on X
const closeModal = document.querySelector('.closeModal')
closeModal.addEventListener('click', Close)
function Close() {
    modalContactForm.style.display = 'none';
}


// Outside click
// window.addEventListener('click', outsideClick)
// function outsideClick(e) {
//   if (e.target == modalContactForm) {
//     Close();
//   } else Close();
// }