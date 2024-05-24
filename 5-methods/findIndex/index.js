// spesifik bir elemanı güncellemek
// veya
// objede bir istediğimiz elemanı güncellemek istiyorsak
// ** istenilen koşul sağlandığında index değeri dönüyor
const points = [70, 25, 35, 10, 75, 80, 27];

// 35i güncelleyelim
// 35in indexini bulalım
const arrayIndex = points.findIndex((point) => point == 35);

//update
console.log(points);
points[arrayIndex] = 100;
console.log(points);

//objede güncelleme
const students = [
  { name: "alperen", point: 100 },
  { name: "enes", point: 85 },
  { name: "emre", point: 0 },
];

const objectIndex = students.findIndex(student=>student.name=="emre");
students[objectIndex].point=100;
console.log(students);