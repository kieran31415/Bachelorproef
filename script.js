document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("div.container");
    const navLi = document.querySelectorAll(".navbar ul li a");
    
    window.onscroll = () => {
        var current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLi.forEach(a => {
            a.classList.remove("active");
            if (a.getAttribute("href").includes(current)) {
                a.classList.add("active");
            }
        });
    };
});


document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const modal = document.getElementById('modal');
    const modalInfo = document.getElementById('modal-info');
    const closeButton = document.querySelector('.close-button');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            const info = card.getAttribute('data-info');
            modalInfo.innerHTML = info;
            modal.style.display = 'block';
        });
    });

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
