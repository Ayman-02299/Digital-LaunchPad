let accessBtn= document.getElementById("accessBtn")
let ninePhase= document.getElementById("ninephase")
// let AccessBtn= document.getElementById("AccessBtn")
// let AccessBtn2= document.getElementById("AccessBtn2")

// AccessBtn.addEventListener("click", function(){
//   window.Location.href= 'login.html'
// })
// AccessBtn2.addEventListener("click", function(){
//   window.Location.href= 'login.html'
// })
// Select the heading element

// Select all elements with the class 'apprentice-text'
const apprenticeTexts = document.querySelectorAll('.apprentice-text');

// Create an Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Element is in view, set opacity to 1
      entry.target.style.opacity = '1';
    } else {
      // Element is out of view, reset opacity to 0.25
      entry.target.style.opacity = '0.25';
    }
  });
}, { threshold: 0.5 }); // Trigger when 50% of the element is visible

// Observe each apprentice-text element
apprenticeTexts.forEach(element => observer.observe(element));




accessBtn.addEventListener("click", function(){
  ninePhase.scrollIntoView({behavior: 'smooth'})
})
let accessBtn2= document.getElementById("accessBtn2")
let pricing= document.querySelector(".pricing")
let giveAccess= document.querySelector(".giveAccess")
accessBtn2.addEventListener("click", function(){
  pricing.scrollIntoView({behavior: "smooth"})
})
giveAccess.addEventListener("click", function(){
  pricing.scrollIntoView({behavior: "smooth"})
})



function showFAQ(section) {
  const contents = document.querySelectorAll('.faq-content');
  const buttons = document.querySelectorAll('.tab-button');
  
  // Hide all sections
  contents.forEach(content => {
    content.classList.remove('active');
  });

  // Remove active class from all buttons
  buttons.forEach(button => {
    button.classList.remove('active');
  });

  // Show the selected section and activate the button
  document.getElementById(section).classList.add('active');
  document.querySelector(`button[onclick="showFAQ('${section}')"]`).classList.add('active');
}

function toggleAnswer(questionElement) {
  const answer = questionElement.nextElementSibling;
  const isActive = questionElement.classList.contains('active');
  
  // Close all answers
  document.querySelectorAll('.faq-question.active').forEach(item => {
    item.classList.remove('active');
    item.nextElementSibling.style.display = 'none';
  });

  // Toggle the clicked question
  if (!isActive) {
    questionElement.classList.add('active');
    answer.style.display = 'block';
  }
}
gsap.registerPlugin(ScrollTrigger);

const apprenticeContainers = document.querySelectorAll('.apprentice-text');

apprenticeContainers.forEach((container, index) => {
    // Check if this is not the last container
    if (index < apprenticeContainers.length - 1) {
        const apprenticeText = container.querySelector('.apprentice-text');
        
        gsap.to(apprenticeText, {
            scrollTrigger: {
                trigger: container,
                start: "top top", // When the container reaches the top
                end: "+=80%", // Keep it in place until the next section
                scrub: 0.5, // Control the smoothness of the scrub
                pin: true, // Pin the text while scrolling through the container
                anticipatePin: 1, // Allow for a smoother pinning transition
                // markers: true, // Uncomment for debugging
                onLeave: () => {
                    gsap.to(apprenticeText, { y: "-100%", opacity: 0 });
                },
                onEnterBack: () => {
                    gsap.to(apprenticeText, { y: "0%", opacity: 1 });
                }
            },
            y: "0%", // Keep it in place initially
            opacity: 1 // Ensure it's visible initially
        });
    }
});


// Timeline section

jQuery(document).ready(function ($) {
  function scroll_section(section_class_nm) {
      var $section = $(`.${section_class_nm}`);
      var section_height = $section.outerHeight(true);
      console.log(section_height);
      var browser_height = $(window).innerHeight();
      console.log(browser_height);

      // Getting the offset of the section
      var section_height_offset = $section.offset().top - 200;
      var section_bottom_offset = section_height_offset + section_height;
      console.log(section_height_offset);
      console.log(section_bottom_offset);

      $(window).scroll(function () {
          var scroll_top = $(window).scrollTop();
          console.log(scroll_top);

          if (scroll_top > section_height_offset ) {
              console.log('if');
              $section.addClass(" scroll-active ");
          } else {
              console.log('else');
              $section.removeClass(" scroll-active ");
          }
      });
  }

  // Call scroll_section for each section
  scroll_section('sdsc-scroll-effect-1');
  scroll_section('sdsc-scroll-effect-2');
  scroll_section('sdsc-scroll-effect-3');
  scroll_section('sdsc-scroll-effect-4');
  scroll_section('sdsc-scroll-effect-5');
  scroll_section('sdsc-scroll-effect-6');
  scroll_section('sdsc-scroll-effect-7');
});
