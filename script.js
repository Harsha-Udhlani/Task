const cross = document.getElementsByClassName('fi fi-br-cross-small');
//console.log(cross);
cross[0].addEventListener("click", () => {
    let leftElement = document.getElementsByClassName('left');
    leftElement[0].style.display = leftElement[0].style.display === 'none' ? 'block' : 'none';
});
function adjustPageScale() {
    const width = window.innerWidth;

    if (width <= 600) {
        document.body.style.transform = 'scale(0.5)';
    } else if (width <= 700) {
        document.body.style.transform = 'scale(0.75)';
    } else if (width <= 767) {
        document.body.style.transform = 'scale(0.8)';
    } else if (width <= 1600) {
        document.body.style.transform = 'scale(0.9)';
    } else {
        document.body.style.transform = 'scale(1)';
    }

    document.body.style.transformOrigin = '0 0';
}

// Adjust scale on load and resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(adjustPageScale, 200);
});