/**
 * 50ten küçük olan öğrencileri tespit et
 * puanları artır
 * yeniden yazdır
 */
const students = [
  { name: "emre", point: 70 },
  { name: "alperen", point: 100 },
  { name: "enes", point: 40 },
  { name: "riza", point: 60 },
  { name: "rıza", point: 30 },
  { name: "dudu", point: 45 },
];
//öğrencileri tespit et -- filter()
let filtered = students.filter((student) => student.point < 50);
console.log("filtreleme:", filtered);
//update işlemi -- map()
let updatePoints = filtered.map((student) => student.point + 15);
console.log("update:", updatePoints);

// bonus
// puan eklediğin halde geçemeyen öğrenciye kanaat kullan

let kanaat = filtered
  .filter((student) => student.point + 15 < 50)
  .map((student) => {
    if (student.point + 15 <= 50) {
      student.point = 49.5;
      return student;
    }
  });
console.log(kanaat[0].name);
