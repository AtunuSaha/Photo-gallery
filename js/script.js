function pickImage() {
    const options = [
      "bacon_in_the_woods.png",
      "munising.jpg",
      "bacon_near_the_fort.png",
      "hollow_tree.png",
      "lake_view.JPG",
      "bend_in_the_road.png",
      "BaconGallupPark.jpg"
    ];
    const randomImg = "images/" + options[Math.floor(Math.random() * options.length)];
    const img = document.querySelector("#header_img");
  
    if (img) {
      img.setAttribute("src", randomImg);
      img.setAttribute("alt", "Random image of spring in Michigan");
    }
  }
  
  function setImages() {
    const options = [
      "bacon_in_the_woods.png",
      "bacon_near_the_fort.png",
      "hollow_tree.png",
      "lake_view.JPG",
      "bend_in_the_road.png",
      "BaconGallupPark.jpg"
    ];
    const currentImages = document.querySelectorAll(".flex img");
  
    for (let i = 0; i < currentImages.length; i++) {
      console.log("Image " + i);
      const randomImg = "images/" + options[Math.floor(Math.random() * options.length)];
      currentImages[i].src = randomImg;
      currentImages[i].setAttribute("tabindex", "0");
    }
  }
  
  function addTabIndexToImages() {
    const images = document.querySelectorAll("img");
    for (let i = 0; i < images.length; i++) {
      images[i].setAttribute("tabindex", "0");
    }
    console.log("Tabindex added to all images");
  }
  
  function addImageEventListeners() {
    const images = document.querySelectorAll("img");
    const mainImage = document.querySelector("#header_img");
  
    images.forEach((img) => {
      img.addEventListener("mouseover", () => {
        if (mainImage) {
          mainImage.src = img.src;
          mainImage.alt = img.alt;
        }
      });
  
      img.addEventListener("mouseleave", () => {
        if (mainImage) {
          mainImage.src = "";
          mainImage.alt = "Brown Labradoodle sitting next to a statue.";
        }
      });
  
      img.addEventListener("focus", () => {
        if (mainImage) {
          mainImage.src = img.src;
          mainImage.alt = img.alt;
        }
      });
  
      img.addEventListener("blur", () => {
        if (mainImage) {
          mainImage.src = "";
          mainImage.alt = "Brown Labradoodle sitting next to a statue.";
        }
      });
    });
  
    console.log("Event listeners added to images");
  }
  
  window.onload = function () {
    if (document.querySelector("#header_img")) {
      pickImage();
    }
  
    if (document.querySelector(".flex")) {
      setImages();
    }
  
    addTabIndexToImages();
    addImageEventListeners();
  
    console.log("Page loaded and all scripts executed.");
  };
  