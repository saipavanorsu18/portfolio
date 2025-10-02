document.addEventListener('DOMContentLoaded', () => {
    let menu = document.querySelector('#menu-btn');
    let navbar = document.querySelector('.navbar');

    menu.onclick = () => {
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    };

    window.onscroll = () => {
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
        
        let header = document.querySelector('.header');
        if (window.scrollY > 0) {
            header.style.backgroundColor = 'var(--dark-bg)';
            header.style.boxShadow = '0 0.5rem 1rem rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'rgba(26, 26, 46, 0.8)';
            header.style.boxShadow = 'none';
        }
    };
});