// burger
const headerBurger = document.querySelector(".header-burger");
const headerList = document.querySelector(".header-list")


headerBurger.addEventListener("click",() => {
  headerBurger.classList.toggle("active");
  headerList.classList.toggle("active");
  document.body.classList.toggle("active");
})

