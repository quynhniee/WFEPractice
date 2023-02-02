const showPic = document.querySelector('.gallery')
const galleryImages = document.querySelectorAll('.container .gallery__img')
const mainImg = document.getElementById('main-img')
var n = galleryImages.length
var currentIndex = 0;

for (let i = 0; i < n; i++) {
    galleryImages[i].addEventListener("click", () => {
        currentIndex = i
        showImage()
    })
}
function showImage () {
    showPic.classList.remove('hide')
    mainImg.src = galleryImages[currentIndex].src
}

document.querySelector('.close').addEventListener("click", () => {showPic.classList.add('hide')})

document.querySelector('.next').addEventListener("click", () => {
    currentIndex = nextImage(currentIndex)
    showImage()
})

document.querySelector('.prev').addEventListener("click", () => {
    currentIndex = prevImage(currentIndex)
    showImage()
})

function nextImage (i) {
    if (i == n - 1)  return 0;
    else return i+1;
}
function prevImage (i) {
    if (i == 0) return n - 1;
    else    return i - 1;
}

document.addEventListener("keydown", (e) => {
    if (e.keyCode == 27)  showPic.classList.add('hide')  
})