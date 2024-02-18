document.addEventListener('DOMContentLoaded', function () {
    const allImages = document.querySelectorAll('.image');
    const showButton = document.getElementById('showButton');

    showButton.addEventListener('click', function () {
      // Toggle the visibility of all images
      allImages.forEach(image => {
        image.style.display = (image.style.display === 'none' || image.style.display === '') ? 'block' : 'none';
      });

      // Toggle the visibility of the button
      showButton.style.display = 'none';
    });
  });



  function sendEmail() {
    var emailAddress = 'nickolandermilan30@gmail.com';
  
    var mailtoLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(emailAddress);
  
    // Open Gmail compose window
    window.location.href = mailtoLink;
  }


 // Function to check if an element is in viewport
 function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to handle scroll animations
function handleScrollAnimations() {
  var animatedElements = document.querySelectorAll('.animate-scroll');
  
  animatedElements.forEach(function(element) {
    if (isInViewport(element)) {
      element.classList.add('animate');
    } else {
      element.classList.remove('animate');
    }
  });
}

// Listen for scroll events and trigger animations
window.addEventListener('scroll', handleScrollAnimations);


function animateProgressLabels() {
  // Kunin ang lahat ng element na may class na 'progress-label'
  var progressLabels = document.querySelectorAll('.progress-label');

  // Iterarate sa bawat progress label
  progressLabels.forEach(function (label) {
      // Kunin ang target percentage mula sa text content
      var targetPercent = parseInt(label.textContent);
      var currentPercent = 0;
      var isAnimated = false;

      // Gumawa ng function para sa animation
      function animate() {
          // Update ang kasalukuyang percentage
          label.textContent = currentPercent + "%";

          // Tumigil ang animation kung naabot na ang target percentage
          if (currentPercent >= targetPercent) {
              return;
          } else {
              // Tumakbo papunta sa target percentage
              currentPercent++;
              // Tawagan ang sarili nito gamit ang setTimeout
              setTimeout(animate, 10);
          }
      }

      // I-check kung nasa loob na ng viewport ang element
      function checkIfInViewport() {
          var rect = label.getBoundingClientRect();
          var inViewport = rect.top <= window.innerHeight && rect.bottom >= 0;

          // Kung nasa loob na ng viewport at hindi pa animated, i-animate
          if (inViewport && !isAnimated) {
              isAnimated = true;
              animate();
          }
      }

      // Tumawag sa checkIfInViewport tuwing nag-scroll
      window.addEventListener('scroll', checkIfInViewport);
      // Tawagan ang checkIfInViewport sa simula
      checkIfInViewport();
  });
}

// I-tawag ang function kapag ang DOM ay naka-ready
document.addEventListener("DOMContentLoaded", function () {
  animateProgressLabels();
});


 function typeText(element, text) {
    let index = 0;
    const intervalId = setInterval(() => {
      element.innerHTML += text[index];
      index++;
      if (index === text.length) {
        clearInterval(intervalId);
      }
    }, 100); // 100 milliseconds interval, you can adjust this as needed
  }

  document.addEventListener("DOMContentLoaded", function () {
    const aboutElements = document.querySelectorAll(".About");
    aboutElements.forEach((element) => {
      const textToType = element.textContent;
      element.textContent = ""; // Clear existing text
      typeText(element, textToType);
    });
  });


  