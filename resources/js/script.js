// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Course card hover effects
const courseBoxes = document.querySelectorAll('.course-box');
courseBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.transform = 'translateY(-10px)';
        box.style.transition = 'transform 0.3s ease';
        box.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    });

    box.addEventListener('mouseleave', () => {
        box.style.transform = 'translateY(0)';
        box.style.boxShadow = 'none';
    });
});

// Back to top button
const backToTopButton = document.createElement('button');
backToTopButton.className = 'back-to-top';
backToTopButton.innerHTML = '<i class="fas fa-chevron-up"></i>';
backToTopButton.setAttribute('aria-label', 'Back to top');
document.body.appendChild(backToTopButton);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'flex';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Newsletter form validation
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('newsletter-email').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (emailRegex.test(email)) {
            alert('Thank you for subscribing!');
            newsletterForm.reset();
        } else {
            alert('Please enter a valid email address.');
        }
    });
} 