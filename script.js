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