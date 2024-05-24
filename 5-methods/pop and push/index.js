// push dizi sonuna ekler
// pop dizi sonundan eleman siler

const points = [70, 25, 35, 10, 75, 80, 27];
points.push(100);
console.log(points);
let i = 0;
while (i < 3) {
  i++;
  points.pop();
  console.log(points);
}
