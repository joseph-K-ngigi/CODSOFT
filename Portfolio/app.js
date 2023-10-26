let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .nav ul li a');

window.onscroll = () => {
    let currentSection = null;

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            currentSection = id;
        }
    });

    navLinks.forEach(links => {
        let href = links.getAttribute('href').substring(1);

        if (href === currentSection) {
            links.classList.add('active');
        } else {
            links.classList.remove('active');
        }
    });
};
