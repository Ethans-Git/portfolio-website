let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.links a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active')
                document.querySelector('.links a[href*=' + id + ']').classList.add('active');
                console.log(document.querySelector('.links a[href*=' + id + ']').classList);
            })
        }
    })
}

let intro = document.querySelector(".intro");
let header = document.querySelector(".header");
window.addEventListener("DOMContentLoaded", ()=>{

    setTimeout(()=>{
        intro.style.top = '-170vh'
    }, 500);

    setTimeout(()=>{
        header.style.animation = "appear 0.8s linear";
        header.style.opacity = "1";
    }, 1400);
})