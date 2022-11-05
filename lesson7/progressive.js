
//select all the images wih data-src
const imagesToLoad = document.querySelectorAll("img[data-src]");

//parameters set for the IntersectionalObserver
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
} else {// just load All images if not supported
    imagesToLoad.forEach(img => {
        loadImages(img);
    });
}
