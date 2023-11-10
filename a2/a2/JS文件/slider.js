document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;

    function showSlides() {
        let slider = document.getElementById("slider");
        if (slider) {
            let slides = slider.getElementsByTagName("img");

            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slideIndex++;
            if (slideIndex >= slides.length) {
                slideIndex = 0;
            }

            slides[slideIndex].style.display = "block";
            setTimeout(showSlides, 5000);
        }
    }

    showSlides();
});
