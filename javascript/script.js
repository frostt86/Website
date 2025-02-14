function toggleText() {
    var expandableText = document.getElementById("expandableText");
    var expandBtn = document.getElementById("expandBtn");
    if (expandableText.style.display === "none") {
        expandableText.style.display = "inline"; // Show the additional text
        expandBtn.textContent = "Read Less";
    } else {
        expandableText.style.display = "none"; // Hide the additional text
        expandBtn.textContent = "Read More";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const testimonials = document.querySelectorAll(".testimonial");
    let currentIndex = 0;

    // Show the initial testimonial
    testimonials[currentIndex].classList.add("active");

    // Function to display the next testimonial
    function showNextTestimonial() {
        // Hide the current testimonial
        testimonials[currentIndex].classList.remove("active");
        // Move to the next testimonial
        currentIndex = (currentIndex + 1) % testimonials.length;
        // Show the next testimonial
        testimonials[currentIndex].classList.add("active");
        // Remove "active" class from the first testimonial
        if (currentIndex === 0) {
            testimonials[0].classList.remove("active");
        }
    }
    // Add click event listener to the next button
    document.getElementById("nextBtn").addEventListener("click", showNextTestimonial);
});


// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTopBtn").style.display = "block";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
}

function topFunction() {
  // Get the current position of the page
  const currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
  // Calculate the distance to scroll
  const distanceToTop = -currentPosition;
  
  // Set up the animation
  const duration = 500; // Duration of the animation in milliseconds
  const start = performance.now();
  
  // Animate the scrolling
  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;
    
    // Apply easing function for smoother animation
    const easing = function(t) { return t * (2 - t); };
    const progress = easing(timeFraction);
    
    // Scroll the page
    window.scrollTo(0, currentPosition + distanceToTop * progress);
    
    // Continue the animation if not finished
    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}

