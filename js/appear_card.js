function appearCard() {
    const cards = document.querySelectorAll('.card');
    const triggerBottom = window.innerHeight * 0.85;
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < triggerBottom) {
            card.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', appearCard);
window.addEventListener('load', appearCard);