const modal = document.getElementById('dashboard-modal')

const openModal = () => {
    modal.style.display = 'flex'
} 

const closeModal = (event) => {
    event.preventDefault()
    modal.style.display = 'none'
} 

document.getElementById('modal-button').addEventListener('click', openModal)
document.getElementById('cancel').addEventListener('click', closeModal)