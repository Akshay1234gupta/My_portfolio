//active navbar
let nav = document.querySelector('.navbar');
window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        nav.classList.add("scroll-on");
    }
    else {
        nav.classList.remove("scroll-on");
    }
}


//nav hide
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})


const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer.', 'Programmer.', 'Full Stack Developer.', 'Web Developer.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
})

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.', { origin: 'top' });
ScrollReveal().reveal('.container h3', { origin: 'bottom' });

ScrollReveal().reveal('.container h1', { origin: 'left' });
ScrollReveal().reveal('.container p', { origin: 'right' });