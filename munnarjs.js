const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementsByClassName("close")[0];

// Add event listeners to all images
document.querySelectorAll(".image-item img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
  });
});

// Close modal
closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = event => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
