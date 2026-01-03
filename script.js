// Smooth scroll for navbar links
document.querySelectorAll('#navbarSupportedContent a').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Cart button demo
const cartBtn = document.getElementById('Cart');
cartBtn.addEventListener('click', () => {
    alert('Cart clicked! Implement your add-to-cart logic here.');
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    navbar.style.backgroundColor = window.scrollY > 50 ? 'rgba(0,0,0,0.9)' : 'rgba(0,0,0,0.7)';
});
