// burger
const headerBurger = document.querySelector(".header-burger");
const headerList = document.querySelector(".header-list");

headerBurger.addEventListener("click",() => {
  headerBurger.classList.toggle("active");
  headerList.classList.toggle("active");
  document.body.classList.toggle("active");
})
// slides

const slidesRight = document.querySelector(".slider-footer__slides-right");
const slidesLeft = document.querySelector(".slider-footer__slides-left");
const slidesBg = document.querySelectorAll(".slider-footer__slides-bg");
let count = 0;

/* 
img css xossasi beramiz count asosiy qiymat .
*/
function slidesImg() {
  slidesBg.forEach((bg) => {
    bg.style.transform = `translateX(-${count * 100}%)`;
  })
}

/* count img uzunligidan 1 ta kamga kichikinami 
  shunday busa bita oshsin count aks holda count nol teng
*/
function slidesNext() {
  if(count < slidesBg.length - 1) {
    count++
    slidesImg()
  } else {
    count = 0;
    slidesImg()
  }
}
/* count nol kichkinami yoki teng  
  shunday busa count teng bo'lsin img uzunligidan 1 kamga
  aks holda count 1 kam bo'ladi
*/
function slidesPrev() {
  if(count <= 0) {
    count = slidesBg.length - 1;
    slidesImg()
  } else {
    count--
    slidesImg();
  }
}

slidesRight.addEventListener("click", slidesNext);
slidesLeft.addEventListener("click", slidesPrev);




