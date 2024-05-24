// aynı işlevi görev birden fazla button olduğu için tekte çözelim
// selector all ile hepsini al
const accordion = document.querySelectorAll(".accordion");

// accordion diye 3 class var ve içerisinde aynı işlevli + - buttonlar var
// bunlardan hangisine tıkladığını anlamak için foreach ile gezelim
accordion.forEach((accordion) => {
    // buttonları al
    const accordionButton = accordion.querySelector(".accordionButton");
    accordionButton.addEventListener("click",()=>{
        accordion.querySelector(".minusIcon").classList.toggle("active");
        accordion.querySelector(".plusIcon").classList.toggle("active");
        accordion.querySelector(".accordionText").classList.toggle("active");
    })
})