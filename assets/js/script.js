
// import axios from 'axios'

// const baseApi = "http://hrd-adminweb";
// const masterApiKeyHeader = {
//   headers: { "master-api": "db588403f0a1d3b897442a28724166b4" },
// };

// axios.get(
//     `${baseApi}/api/company/department/section/30`,
//     masterApiKeyHeader
//   ).then(res => {
//     console.log(res);
//   })

$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

  // <!-- emailjs to mail contact form data -->
  // <!-- emailjs to mail contact form data -->

});


var typed = new Typed(".typing-text", {
    strings: ["coding", "web development", "sql development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});


document.addEventListener('DOMContentLoaded', function() {
    // Get the modal elements
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");
    var closeButton = document.getElementsByClassName("close-button")[0];

    // Get all project images
    var projectImages = document.querySelectorAll('.project-image');

    // Loop through all images and add click event listeners
    projectImages.forEach(function(img) {
        img.addEventListener('click', function() {
            modal.style.display = "block"; // Show the modal
            modalImage.src = this.getAttribute('data-image'); // Set modal image source
            captionText.innerHTML = this.alt; // Set modal caption from image alt text
        });
    });

    // When the user clicks on <span> (x), close the modal
    closeButton.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // When the user clicks anywhere outside of the image, close the modal
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Optional: Close modal with Escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === "Escape" || event.key === "Esc") {
            if (modal.style.display === "block") {
                modal.style.display = "none";
            }
        }
    });
});

// sending email
const contactForm = document.getElementById('contact-form');
const submitButton = document.getElementById('submitButton');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    submitButton.disabled = true;
    submitButton.innerHTML = 'Sending... <i class="fa fa-spinner fa-spin"></i>';

    const formData = new FormData(this); // 'this' refers to the form element

    // Prepare template parameters for EmailJS
    const templateParams = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('subject') || 'N/A', 
        message: formData.get('message')
    };
    console.log(templateParams);
    
    // Send the email using EmailJS
    emailjs.send(
        "donneltagalog@gmail.com",
        "template_wu8aofm",
        // "template_htgz0dj",
        templateParams
    )
    .then(function(response) {
        // Success callback
        console.log('SUCCESS!', response.status, response.text);
        alert('Thank you! Your message has been sent successfully.');
        contactForm.reset(); 

        // Reset button state
        submitButton.disabled = false;
        submitButton.innerHTML = 'Submit <i class="fa fa-paper-plane"></i>';
    }, function(error) {
        // Error callback
        console.error('FAILED...', error);
        alert('Oops! Something went wrong. Please try again later.');

        // Reset button state
        submitButton.disabled = false;
        submitButton.innerHTML = 'Submit <i class="fa fa-paper-plane"></i>';
    });
});