var images = [
      {
      path: "mafate1.jpg"
   }, {
      path: "body1.jpg"
   }, {
      path: "mafate2.jpg"
   }, {
      path: "body2.jpg"
   }
];

var changeImageDelay = 3000,
    imageIndex = 0,
    carouselContainer,
    carouselTimeout;

$(function() {
	carouselContainer = $("#carousel-container");
   carouselContainer.css("background-image", "url(img/" + images[imageIndex].path + ")");

   carouselTimeout = setTimeout(nextCarouselImage, changeImageDelay);

   $("#previous-image-container").on("click", function() {
      clearTimeout(carouselTimeout);
      previousCarouselImage();
   });

   $("#next-image-container").on("click", function() {
      clearTimeout(carouselTimeout);
      nextCarouselImage();
   });
})

function nextCarouselImage() {
   imageIndex++;
   if (imageIndex >= images.length) imageIndex = 0;
   carouselContainer.css("background-image", "url(img/" + images[imageIndex].path + ")");

   carouselTimeout = setTimeout(nextCarouselImage, changeImageDelay);
}

function previousCarouselImage() {
   imageIndex--;
   if (imageIndex < 0) imageIndex = images.length;
   carouselContainer.css("background-image", "url(img/" + images[imageIndex].path + ")");

   carouselTimeout = setTimeout(nextCarouselImage, changeImageDelay);
}