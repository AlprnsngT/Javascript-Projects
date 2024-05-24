// ID bulmada vs kullanılır
// koşul true olursa ilk değeri döndürür
const points = [70, 25, 35, 10, 75, 80, 27];

const highPoint = points.find(point=>{
    return point>70;
});
console.log(highPoint);