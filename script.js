// Smooth scroll for navbar links
document.querySelectorAll('#navbarSupportedContent a').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Cart button click demo
document.querySelectorAll('#Cart').forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Cart clicked! Add your JS logic here.');
    });
});

// Example: highlight navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0,0,0,0.9)';
    } else {
        navbar.style.backgroundColor = 'rgba(0,0,0,0.7)';
    }
});
