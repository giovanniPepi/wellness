const shitBtn = document.querySelector("#shitBtn");
const goodBtn = document.querySelector("#goodBtn");

shitBtn.addEventListener ("click", () => {
    location.href="./pages/bad.html";
});
goodBtn.addEventListener("click", () => { 
    location.href="./pages/good.html";
})