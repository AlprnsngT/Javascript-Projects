/*
css de main-popup kısmında display 
kısmını değiştirmen gerekiyor

block yaparak arka planı kitleyecek
önüne popup-close gelecek
*/

const button = document.querySelector('button')
const mainPopup = document.querySelector('.main-popup');
const close = document.querySelector('.popup-close');


// button
button.addEventListener('click',()=> {
    mainPopup.style.display='block';

})
// x kapat işareti
close.addEventListener('click',()=> {
    mainPopup.style.display = 'none';
})
// tüm ekrana tıklanma
mainPopup.addEventListener('click',(e)=>{
    if(e.target.className==='main-popup'){
        mainPopup.style.display = 'none';
    }
})