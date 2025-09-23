
// NO NO NO TOUCH 

// moon
let lastScrollY = 0;
const moon = document.getElementById('moon');
let moonRotation = 0;

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    const delta = currentScrollY - lastScrollY;
    moonRotation += delta * 0.5;
    moon.style.transform = `rotate(${moonRotation}deg)`;
    lastScrollY = currentScrollY;
});

// stars bg
window.addEventListener('scroll', () => {
    const stars = document.querySelector('.stars');
    const scrolled = window.scrollY;
    stars.style.transform = `translateY(${scrolled * 0.3}px)`;
});

// section
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});

// navigasi
const sections = document.querySelectorAll('.section[id]');
const navItems = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = item.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});


// card project
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.background = 'rgba(255, 255, 255, 0.02)';
    });
});
