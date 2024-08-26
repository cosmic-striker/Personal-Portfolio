// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Project Card Effect
document.querySelectorAll('.project').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.backgroundColor = '#2e2e2e';
    });
    card.addEventListener('mouseout', () => {
        card.style.backgroundColor = '#1e1e1e';
    });
});
