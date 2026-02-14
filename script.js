// ===== RANDOM POSITION FLOATING PHOTOS =====
document.querySelectorAll(".floating-photos img").forEach((img, i) => {
  img.style.left = Math.random() * 80 + "%";
  img.style.animationDelay = (i * 3) + "s";
});

// ===== MEMORY POPUP =====
function showMemory(text) {
  const memoryBox = document.getElementById("memory");
  memoryBox.innerText = text;
  memoryBox.style.display = "block";

  setTimeout(() => {
    memoryBox.style.display = "none";
  }, 3000);
}

// ===== LOVE LETTER =====
function openLetter() {
  document.getElementById("letter").style.display = "flex";
}

function closeLetter() {
  document.getElementById("letter").style.display = "none";
}
// 🌿 Falling Lavender Generator
// 🌿 Falling Lavender Generator (TOP → DOWN)
const lavenderImages = ["lavender.png", "flower.png"];

function createLavender() {
  const lavender = document.createElement("img");
  lavender.src = lavenderImages[Math.floor(Math.random() * lavenderImages.length)];

  lavender.style.left = Math.random() * 100 + "vw";
  lavender.style.animationDuration = 15 + Math.random() * 10 + "s";

  const container = document.querySelector(".lavender-fall");
  container.appendChild(lavender);

  setTimeout(() => {
    lavender.remove();
  }, 25000);
}

// create lavender every 2 seconds
setInterval(createLavender, 2000);
function openSurprise() {
  window.location.href = "surprise.html";
}


