var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);



let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = 'none';
        dots[i].classList.remove('active');
    });
    slides[index].style.display = 'block';
    dots[index].classList.add('active');
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlide(slideIndex);
}

function autoShowSlides() {
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    showSlide(slideIndex);
}

// Initial display
showSlide(slideIndex);

// Auto-change every 5 seconds
setInterval(autoShowSlides, 5000);



function calculateEMI() {
    let loanAmount = document.getElementById('loanAmount').value;
    let interestRate = document.getElementById('interestRate').value;
    let loanTenure = document.getElementById('loanTenure').value;

    if (loanAmount && interestRate && loanTenure) {
        let monthlyInterestRate = (interestRate / 100) / 12;
        let numberOfMonths = loanTenure * 12;

        let emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
            (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

        document.getElementById('emiResult').textContent = emi.toFixed(2);
    } else {
        alert("Please enter all the fields");
    }
}