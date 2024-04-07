AOS.init();

const links = document.querySelectorAll(".list a");
links.forEach((link) => {
link.addEventListener("click", (event) => {
event.preventDefault();
document.body.classList.add("fadeOutAnimation");

setTimeout(() => {
    window.location.href = link.href;
}, 1000); 
});});
