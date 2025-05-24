let $ = document;
let sliderImgElem = $.querySelector(".img-slider");
let prevBtn = $.querySelector(".prev");
let nextBtn = $.querySelector(".next");

let imgSrcArray = [
  "src/img/30.jfif",
  "src/img/31.jfif",
  "src/img/32.jfif",
  "src/img/33.jfif",
  "src/img/34.jfif",
  "src/img/38.jfif",
];

let imgIndex = 0;

function prevImage() {
  imgIndex--;
  if (imgIndex < 0) {
    imgIndex = imgSrcArray.length - 1;
  }
  sliderImgElem.setAttribute("src", imgSrcArray[imgIndex]);
}
function nextImage() {
  imgIndex++;
  if (imgIndex > imgSrcArray.length - 1) {
    imgIndex = 0;
  }
  sliderImgElem.setAttribute("src", imgSrcArray[imgIndex]);
}

setInterval(nextImage, 5000);

prevBtn.addEventListener("click", prevImage);
nextBtn.addEventListener("click", nextImage);
