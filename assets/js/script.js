
$('.portfolio-slider').owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000,
    responsiveClass: true,
    center: true,
    dots: false,
    responsive: {
        0: {
            items: 3.5,
            margin: 30,

        },
        640: {
            items: 4.5,
            margin: 35,
        },
        1024: {
            items: 5,
            margin: 115,
        }
    }
});

$('.instagram-slider').owlCarousel({
    responsiveClass: true,
    nav: true,
    dots: false,
    margin: 22,
    responsive: {
        0: {
            items: 1,
        },
        640: {
            items: 4.6,
        },
        1024: {
            items: 4.6,
        }
    }
});

const video = document.getElementById("video");
const circlePlayButton = document.getElementById("circle-play-b");

function togglePlay() {
    if (video.paused || video.ended) {
        video.play();
    } else {
        video.pause();
    }
}

circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
    circlePlayButton.style.opacity = 0;
});
video.addEventListener("pause", function () {
    circlePlayButton.style.opacity = 1;
});

const instavideo = document.querySelector(".insta-video");
const instacirclePlayButton = document.querySelector(".insta-play-icon");

function instatogglePlay() {
    if (instavideo.paused || instavideo.ended) {
        instavideo.play();
    } else {
        instavideo.pause();
    }
}

instacirclePlayButton.addEventListener("click", instatogglePlay);
instavideo.addEventListener("playing", function () {
    instacirclePlayButton.style.opacity = 0;
});
instavideo.addEventListener("pause", function () {
    instacirclePlayButton.style.opacity = 1;
});