const faBars = document.querySelector(".fa-bars");
const sidebar = document.querySelector(".sidebar");
const faxmark = document.querySelector(".fa-xmark");

faBars.addEventListener("click",()=>{
    // ad ile ekleme yapaiblirdik ama toggle daha iyi bu durumlarda
    // toggle eğer böyle bir class varsa kaldırır
    // yoksa ekler
    // double click işlemmleri için uygun
    sidebar.classList.toggle("showSidebar");
})
faxmark.addEventListener("click",()=>{
    sidebar.classList.remove("showSidebar");
})
