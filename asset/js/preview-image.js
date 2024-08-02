const galleryItems = document.querySelectorAll(".gallery-item");
const imageModal = document.querySelector("#imageModal");
const modalImage = document.querySelector("#modalImage");
// looping all image
galleryItems.forEach((element) => {
  // apply all event click at image gallery-item
  element.addEventListener("click", function () {
    console.log(this);
    modalImage.src = this.src;
    imageModal.style.display = "flex";
  });
});

imageModal.addEventListener("click", function () {
  imageModal.style.display = "none";
});

// slick
$(".slide-nav").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
});

// Ambil semua elemen dengan kelas 'cards-story'
const cards = document.querySelectorAll(".cards-story");

// Tambahkan event listener 'click' pada setiap elemen
cards.forEach((card) => {
  card.addEventListener("click", () => {
    // Ambil teks di dalam elemen <p> ketika elemen diklik
    const text = card.querySelector("p").textContent;
    const h1 = card.querySelector("h1").textContent;
    console.log(text); // Menampilkan teks di console
    document.querySelector(".judul-story").innerText = h1.trim();
    document.querySelector(".text-story").innerText = text.trim();
  });
});
