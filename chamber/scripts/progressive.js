//select only the images wih data-src so that it only affects the discover page
const imagesToLoad = document.querySelectorAll("img[data-src]");

const imageOptions = {
    threshold: 1,
    rootMargin:  '0px 0px 50px 0px',   
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach(item => {
                if (item.isIntersecting) {
                    loadImages(item.target);
                    imageObserver.unobserve(item.target);
                }
        });
    }, imageOptions);


imagesToLoad.forEach(img => {
    imageObserver.observe(img);
});
} else {
    imagesToLoad.forEach(img => {
        loadImages(img);
    });
}