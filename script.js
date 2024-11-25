setTimeout(function () {
    alert("Selamat datang di toko online kami");
}, 3000);
const heroText = document.querySelector("#hero h2");
const colors = ["#30833", "#33FF57", "#3357FF"];
let colorIndex = 0;

function changeheroTextColor() {
    heroText.style.color = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

setInterval(changeheroTextColor, 2000);
let currentImageIndex = 0;
const Images = ["img/bg.jpg", "img/shoe1.png", "img/shoe2.png"];

function changeheroTextColor() {
    currentImageIndex = (currentImageIndex + 1) % Image.length;
    document.querySelector(
        "#hero"
    ).style.backgroundImage = `url('${Images[currentImageIndex]}')`;
}

setInterval(changeHeroImage, 2000);
const productImages = document.querySelectorAll(".product-card img");

productImages.forEach((image) => {
    image.addEventListener("click", () => {
    image.style.transform = "scale(1.5)";
    image.style.transition = "transform 0.5s";
  });
  image.addEventListener("mouseleave", () => {
    image.style.transform = "scale(1)";
  });
});

document.querySelectorAll(".cta").forEach(function (button) {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        alert("terimakasih telah membeli produk ini!");
    });
});

const scrollToTopBtn = document.createElement("button")
scrollToTopBtn.textContent = "^";
scrollToTopBtn.id = "scrollToTopBtn";
document.body.appendChild(scrollToTopBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
})

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
})