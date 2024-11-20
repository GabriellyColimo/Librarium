const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');
const modal = document.getElementById('bookModal');
const closeModalButton = document.getElementById('closeModal');
const reserveButton = document.getElementById('reserveButton');

mobileMenuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

function openModal(imageSrc, title, summary, isAvailable) {
  document.getElementById('modalBookImage').src = imageSrc;
  document.getElementById('modalBookTitle').innerText = title;
  document.getElementById('modalBookSummary').innerText = summary;

  const availabilityLine = document.getElementById('modalAvailabilityLine');
  const availabilityText = document.getElementById('modalAvailabilityText');

  // Atualiza a linha de disponibilidade e o texto
  if (isAvailable) {
    availabilityLine.className = 'availability-line green'; 
    availabilityText.innerText = 'Disponível';
    reserveButton.classList.remove('disabled'); 
    reserveButton.style.pointerEvents = 'auto'; 
  } else {
    availabilityLine.className = 'availability-line red'; 
    availabilityText.innerText = 'Indisponível';
    reserveButton.classList.add('disabled'); 
    reserveButton.style.pointerEvents = 'none'; 
  }

  modal.style.display = 'block'; 
}

document.querySelectorAll('.book-card').forEach(card => {
    card.addEventListener('click', () => {
      const imageSrc = card.querySelector('.book-image').src;
      const title = card.querySelector('.book-title').innerText;
      const summary = card.getAttribute('data-summary'); 
      const isAvailable = !card.classList.contains('unavailable'); 
  
      console.log('Título:', title); 
      console.log('Resumo:', summary); 
      console.log('Disponível:', isAvailable ? 'Sim' : 'Não'); 
  
      openModal(imageSrc, title, summary, isAvailable); 
    });
});

closeModalButton.addEventListener('click', () => {
  modal.style.display = 'none'; 
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
