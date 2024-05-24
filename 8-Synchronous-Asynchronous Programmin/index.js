// js her şey asynchronous çalışır

console.log(1);
console.log(2);

setTimeout(()=>{
    console.log("JS şu an Asynchronous çalışıyor")
},2000)
console.log(3);
console.log(4);
