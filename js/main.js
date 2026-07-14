document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.header__toggle');
    const menu = document.querySelector('.header__menu');

    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            const isOpen = menu.classList.toggle('active');
            toggle.classList.toggle('active', isOpen);
            toggle.setAttribute('aria-expanded', String(isOpen));
        });

        menu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                toggle.classList.remove('active');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }
});

const portfolioGrid = document.querySelector('.portfolio__grid');

const dots = document.querySelectorAll('.portfolio__dot');

if (portfolioGrid && dots.length) {

    portfolioGrid.addEventListener('scroll', () => {

        const cardWidth = portfolioGrid.querySelector('.portfolio__card').offsetWidth;

        const index = Math.round(
            portfolioGrid.scrollLeft / (cardWidth + 16)
        );

        dots.forEach(dot => {

            dot.classList.remove('active');

        });

        if (dots[index]) {

            dots[index].classList.add('active');

        }

    });

}