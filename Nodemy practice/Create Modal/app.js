const showModal = document.querySelector(".show__modal__btn")
const closeIcon = document.querySelector('.modal__header i')
const closeButton = document.querySelector('.modal__footer button')
const modal = document.querySelector('.modal')
showModal.addEventListener("click", () => {
    modal.classList.remove('hide')
})

function closeModal (...args) {
    args.forEach(e => 
    e.addEventListener("click", () => {
        modal.classList.toggle('hide')
    }))
}
closeModal(closeButton, closeIcon)
