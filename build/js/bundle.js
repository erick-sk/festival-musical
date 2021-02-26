document.addEventListener("DOMContentLoaded", function () {
  scrollNav();

  fixNav();
});

function fixNav() {
  const barr = document.querySelector(".header");

  // Register intersection observer
  const observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting) {
      barr.classList.remove("fix");
    } else {
      barr.classList.add("fix");
    }
  });
  // Element to see
  observer.observe(document.querySelector(".about-festival"));
}

function scrollNav() {
  const links = document.querySelectorAll(".main-nav a");

  links.forEach(function (links) {
    links.addEventListener("click", function (e) {
      e.preventDefault();
      const section = document.querySelector(e.target.attributes.href.value);

      section.scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  makeGallery();
});

function makeGallery() {
  const gallery = document.querySelector(".image-gallery");
  for (let i = 1; i <= 12; i++) {
    const image = document.createElement("IMG");
    image.src = `build/img/thumb/${i}.webp`;
    image.dataset.imageId = i;

    // Add function showImage
    image.onclick = showImage;

    const list = document.createElement("LI");
    list.appendChild(image);

    gallery.appendChild(list);
  }
}

function showImage(e) {
  const id = parseInt(e.target.dataset.imageId);

  // Generate image
  const image = document.createElement("IMG");
  image.src = `build/img/grande/${id}.webp`;

  const overlay = document.createElement("DIV");
  overlay.appendChild(image);
  overlay.classList.add("overlay");

  // When click overlay, close image
  overlay.onclick = function () {
    overlay.remove();
  };

  // Button close image
  const closeImage = document.createElement("P");
  closeImage.textContent = "X";
  closeImage.classList.add("btn-close");

  // When click on "X", close image
  closeImage.onclick = function () {
    overlay.remove();
  };

  overlay.appendChild(closeImage);

  // Show in HTML
  const body = document.querySelector("body");
  body.appendChild(overlay);
  body.classList.add(".fix-body");
}
