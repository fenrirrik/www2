const girl = document.querySelector(".hero-girl");

document.addEventListener("mousemove", (e) => {

    const x =
        (window.innerWidth / 2 - e.clientX) / 80;

    const y =
        (window.innerHeight / 2 - e.clientY) / 80;

    girl.style.transform =
        `translateX(calc(-50% + ${x}px))
         rotate(${y - 6}deg)`;

});


const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }

    });
});

hiddenElements.forEach(el => observer.observe(el));