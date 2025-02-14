document.addEventListener("DOMContentLoaded", function () {
   
    const thumbnailImages = document.querySelectorAll(".thumbnailImages .images");
    const nextButton = document.getElementById("next");
    const previousButton = document.getElementById("previous");
    let currentIndex = 0;

    
    function showCurrentImage(index) {
        
        thumbnailImages.forEach(function (img) {
            img.classList.remove("clicked");
        });
        
        thumbnailImages[index].classList.add("clicked");
        
        const newImageSrc = thumbnailImages[index].querySelector(".image").getAttribute("src");
        const newDescription = thumbnailImages[index].querySelector(".description").innerHTML;
        
        const mainImage = document.querySelector(".imageGallery .imagesList .images .image");
        const description = document.querySelector(".imageGallery .imagesList .images .description");
        
        mainImage.src = newImageSrc;
        description.innerHTML = newDescription;
    }

    
    nextButton.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % thumbnailImages.length; 
        showCurrentImage(currentIndex);
    });

    
    previousButton.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + thumbnailImages.length) % thumbnailImages.length; 
        showCurrentImage(currentIndex);
    });

    
    thumbnailImages.forEach(function (thumbnail, index) {
        thumbnail.addEventListener("click", function () {
            currentIndex = index;
            showCurrentImage(currentIndex);
        });
    });
});