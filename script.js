// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Fade-in Effect on Scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.about, .contact');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 50) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initial Styles for Scroll Animation
document.querySelectorAll('.about, .contact').forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease-in-out';
});
