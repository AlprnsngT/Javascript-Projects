/** sort
 * ilk eleman ikinciden büyükse return 1 döner
 * a-b=positive
 * yer değiştirir
 * ikinci eleman birinciden büyükse return -1 döner
 * a-b=negative
 * yer değiştirmez
 * iki elemanda eşitse return 0
 * a-b=0
 * yer değiştirmez
 * 2 yöntem vardır
 */

const points = [70, 25, 35, 10, 75, 80, 27];
points.sort((a,b)=>b-a);
console.log(points);

const students = [
  { name: "emre", point: 0 },
  { name: "alperen", point: 100 },
  { name: "enes", point: 85 },
];
// 1.yöntem sort

//a ilk eleman b ikinci elemans
let ascList = students.sort((a, b) => {
  if (a.point > b.point) {
    return 1;
  } else if (a.point == b.point) {
    return 0;
  } else {
    return -1;
  }
});
console.log(ascList);

// 2.yöntem sort
let descList = students.sort((a,b)=>b.point-a.point);
console.log(descList);

/**
 * reverse()
 * indexlere göre elemanları ters çevirme
 */

let newAscList = descList.reverse();
console.log("newAscList:",newAscList);