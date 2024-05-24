/*
 * Map Methodu
 * bir arraydeki elemanların her birini update eder
 * yeni bir arraye atar
 * map kullanırken yeni bir variable oluştur
 */

const points = [70, 25, 35, 10, 75, 80, 27];

const newPoints = points.map((point) => {
  return point + 10;
});
console.log(newPoints);

const students = [
  { name: "alperen", points: 40 },
  { name: "enes", points: 60 },
  { name: "emre", points: 30 },
  { name: "dudu", points: 100 },
];

const newStudentsPoints = students.map((updateStudent) => {
  if (updateStudent.points < 50) {
    // 2.yöntem
    updateStudent.points += 15;
    return updateStudent;
  } else {
    return updateStudent;
  }

  /*
         * students objelerden oluşan bir array olduğu için
         * return olarak obje döndürmemiz gerekiyor
         * eğer düz tanımlar isek :
         * array elemanlarını objeden value'ya döner;
         * return updateStudent.points+15; 

         * 1.yöntem
            return {
                name:updateStudent.name,
                points:updateStudent.points+15
            }
    */
});
console.log(newStudentsPoints);
