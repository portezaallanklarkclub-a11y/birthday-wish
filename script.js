function unrollScroll() {
    const seal = document.getElementById('seal-container');
    const scroll = document.getElementById('scroll');

    // 1. Hide the seal
    seal.style.display = 'none';

    // 2. Show the scroll element (still "closed" height)
    scroll.style.display = 'flex';

    // 3. Small delay to allow the browser to register the flex display before animating
    setTimeout(() => {
        scroll.classList.add('scroll-open');
    }, 100);
}
