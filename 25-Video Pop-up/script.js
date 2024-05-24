const watchButton = document.querySelector("button");
const main = document.querySelector(".mainContainer");
const watchVideo = document.querySelector(".videoContainer");
const close = document.querySelector(".close");
const video = document.querySelector("video");
watchButton.addEventListener("click",()=>{
    main.classList.add("active");
    watchVideo.classList.remove("active");
});
close.addEventListener("click",()=>{
    main.classList.remove("active");
    watchVideo.classList.add("active");
    video.pause();
    video.currentTime = 0;
});