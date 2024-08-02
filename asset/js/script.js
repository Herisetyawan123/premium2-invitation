// open invitation
const openInvitation = document.getElementById("open-invitation");
const coverInvitation = document.getElementById("cover-invitation");

openInvitation.addEventListener("click", () => {
  coverInvitation.classList.toggle("hidden");

  document.querySelector("main").classList.toggle("overflow-y-hidden");
  document.querySelector("main").classList.toggle("h-[100vh]");
  toggleAudio();
  console.log("opened");
});

// slider
const slider = document.querySelector(".slider-inner");
const slides = document.querySelectorAll(".slide");
const slidesToShow = 3; // Number of slides to show at once
let currentIndex = 0;

// Clone slides for infinite effect
const firstClone = slider.innerHTML;
slider.innerHTML = firstClone + slider.innerHTML + firstClone;

// Adjust the currentIndex to start from the first original slide
currentIndex = slides.length;

slider.style.transform = `translateX(-${currentIndex * (100 / slidesToShow)}%)`;

// Function to move to the next slide
const moveToNextSlide = () => {
  if (currentIndex >= slides.length * 2) {
    currentIndex = slides.length;
    slider.style.transition = "none";
    slider.style.transform = `translateX(-${
      currentIndex * (100 / slidesToShow)
    }%)`;
    setTimeout(() => {
      slider.style.transition = "transform 0.3s ease-in-out";
      currentIndex++;
      slider.style.transform = `translateX(-${
        currentIndex * (100 / slidesToShow)
      }%)`;
    }, 0);
  } else {
    currentIndex++;
    slider.style.transform = `translateX(-${
      currentIndex * (100 / slidesToShow)
    }%)`;
  }
};

// Auto slide
let autoSlideInterval = setInterval(moveToNextSlide, 3000); // Change slide every 3 seconds

// Function to move to the previous slide
const moveToPrevSlide = () => {
  if (currentIndex <= 0) {
    currentIndex = slides.length;
    slider.style.transition = "none";
    slider.style.transform = `translateX(-${
      currentIndex * (100 / slidesToShow)
    }%)`;
    setTimeout(() => {
      slider.style.transition = "transform 0.3s ease-in-out";
      currentIndex--;
      slider.style.transform = `translateX(-${
        currentIndex * (100 / slidesToShow)
      }%)`;
    }, 0);
  } else {
    currentIndex--;
    slider.style.transform = `translateX(-${
      currentIndex * (100 / slidesToShow)
    }%)`;
  }
};

document.querySelector(".prev").addEventListener("click", () => {
  clearInterval(autoSlideInterval); // Stop auto slide on manual navigation
  moveToPrevSlide();
  autoSlideInterval = setInterval(moveToNextSlide, 3000); // Restart auto slide
});

document.querySelector(".next").addEventListener("click", () => {
  clearInterval(autoSlideInterval); // Stop auto slide on manual navigation
  moveToNextSlide();
  autoSlideInterval = setInterval(moveToNextSlide, 3000); // Restart auto slide
});

// audio controll
const audio = document.getElementById("myAudio");
const playIcon = document.getElementById("playIcon");
const pauseIcon = document.getElementById("pauseIcon");

function toggleAudio() {
  if (audio.paused) {
    audio.play();
    playIcon.classList.add("hidden");
    pauseIcon.classList.remove("hidden");
  } else {
    audio.pause();
    playIcon.classList.remove("hidden");
    pauseIcon.classList.add("hidden");
  }
}
