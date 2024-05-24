let sayilar = [2, 5, 8, 11, 15, 17];
let sayilar2 = [];
for (i = 0; i < sayilar.length; i++) {
  if (sayilar[i] > 10) {
    sayilar2.push(sayilar[i] * 5);
  }
}
console.log(sayilar2);

let dizi = [3, 6, 11, 17, 18];
for (i = 0; i < dizi.length; i++) {
  if (dizi[i] > 5) {
    console.log("5ten büyük eleman vardır");
    break;
  } else if(i == dizi.length-1) {
    console.log("5ten büyük eleman mevcut değil");
  }
}
let newArray = [2,3,4];
let result = 1;
newArray.forEach(num=>{
    result*=num;
})
console.log(result + "\n");

const number = [1,2,3]
const number2 = number.map(num=>{return num*2;})
console.log(number2)
// number = number.forEach(num=>{
//     console.log(num*2);
// })

