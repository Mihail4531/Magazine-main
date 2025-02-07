function MobileNav () {
const hamb = document.querySelector("#hamb");
const phone = document.querySelector("#phone");
hamb.addEventListener("click", hambHandler);
function hambHandler(e) {
  e.preventDefault();
  hamb.classList.toggle("active");
  phone.classList.toggle("phone--active");
};
};

export default MobileNav;