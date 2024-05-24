/* 
 * FILTER METHODU
 * filtreleme için kullanılır
 * arrow function olarak tanımlanır
 * return edilir
 * orijinal dizinin bir alt kümesi olarak yeni dizi oluşur
 * bir variable atama yap
*/

const points = [70, 25, 35, 10, 75, 80, 27];
const studentsPassed = points.filter((point) => {
  return point > 50;
});
console.log(studentsPassed);

const students = [
  { name: "alperen", passed: true },
  { name: "enes", passed: false },
  { name: "emre", passed: true },
  { name: "dudu", passed: false },
];

const passingStudents = students.filter(students =>students.passed);

console.log(passingStudents);
