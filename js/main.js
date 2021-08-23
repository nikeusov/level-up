$(function(){
    // Слайдер отзывов
    $('.review__slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1141,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 840,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    });
});

// Проверка на валидность
document.getElementById("teleph").addEventListener("teleph", allowOnlyDigits);
function allowOnlyDigits() {  
  if (this.validity.valid) {
    this.setAttribute('current-value', this.value.replace(/[^\d]/g, ""));
  }
  this.value = this.getAttribute('current-value');
}

// Плавная прокрутка до якоря
$(function(){
    $("a[href^='#']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 800, "linear");
        return false;
    });
});

function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
  }

// Таймер на 30 минут цикличный
function initializeClock(id, endtime) {
let clock = document.getElementById(id);
let daysSpan = clock.querySelector(".days");
let hoursSpan = clock.querySelector(".hours");
let minutesSpan = clock.querySelector(".minutes");
let secondsSpan = clock.querySelector(".seconds");

function updateClock() {
    let t = getTimeRemaining(endtime);

    if (t.total <= 0) {
    clearInterval(timeinterval);
    let deadline = new Date(Date.parse(new Date()) + 30 * 60 * 1000);
    initializeClock('countdown', deadline);
    }

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
}

updateClock();
let timeinterval = setInterval(updateClock, 1000);
}
   
let deadline = new Date(Date.parse(new Date()) + 30 * 60 * 1000);
initializeClock("countdown", deadline);