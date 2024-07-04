window.onscroll = function() { FixedNav() };

var navbar = document.getElementById('navbar');
var headerWrapperSlide = document.querySelector('.header-wrapper-slide');
var sticky = navbar.offsetTop + 600;


function FixedNav() {
    if (window.pageYOffset >= sticky) {
        headerWrapperSlide.classList.add('sticky');
    } 
    if (window.pageYOffset == 0) {
        headerWrapperSlide.classList.remove('sticky');
    }
}

// slide
let slideIndex = 0;
let slideTimeout;


function showSlides() {
    let i;
    let slides = document.getElementsByClassName('slides');
    let dots = document.getElementsByClassName('dot');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    slideTimeout = setTimeout(showSlides, 4000);
}

function currentSlide(n) {
    clearTimeout(slideTimeout);
    slideIndex = n;
    let i;
    let slides = document.getElementsByClassName('slides');
    let dots = document.getElementsByClassName('dot');
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function showSlides2(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }

function plusSlides(n) {
    clearTimeout(slideTimeout);
    showSlides2(slideIndex += n);
}

showSlides();


// tab 
function openTab(evt, tagId) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tagId).style.display = "grid";
    evt.currentTarget.className += " active";
}

document.getElementById('defaultOpen').click();

// carousel 
const carousel = document.querySelector('.carousel');
const items = Array.from(document.querySelectorAll('.carousel-item'));
const itemWidth = 100/6; // Adjust width + padding + border + margin-right
const maxVisibleItems = 6;
let currentIndex = 0;

function moveNext() {
    if (currentIndex < items.length) {
        const newItem = items[currentIndex].cloneNode(true);
        carousel.appendChild(newItem);
        items.push(newItem);
        currentIndex++;
    }
    updateCarousel();
}

function movePrev() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        const newItem = items[items.length - 1].cloneNode(true);
        carousel.insertBefore(newItem, items[0]);
        items.unshift(newItem);
    }
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * itemWidth;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Initialize the carousel by cloning items to make it circular
for (let i = 0; i < maxVisibleItems; i++) {
    moveNext();
}


// copy 
function copyText() {
    // Lấy phần tử input field
    const inputField = document.getElementById('bank-number-value');
    
    // Chọn văn bản trong input field
    inputField.select();
    inputField.setSelectionRange(0, 99999); // Dành cho thiết bị di động

    // Sao chép văn bản đã chọn
    try {
        document.execCommand('copy');
        // Hiển thị thông báo thành công
        const message = document.getElementById('message');
        message.textContent = 'Đã sao chép văn bản: ' + inputField.value;
    } catch (err) {
        // Xử lý lỗi nếu không thể sao chép
        console.error('Không thể sao chép văn bản: ', err);
    }
}

