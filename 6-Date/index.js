const date = new Date();
console.log(date);
console.log(typeof date);

console.log("Year: ", date.getFullYear());
console.log("Months: ", date.getMonth() + 1);
console.log("Day: ", date.getDay() + 1);
console.log("Date: ", date.getDate());
console.log("Hours: ", date.getHours());
console.log("Min: ", date.getMinutes());
console.log("Seconds: ", date.getSeconds());
console.log("timeStamp: ", date.getTime());

console.log("Gün-Ay-Yıl", date.toDateString());
console.log("Time: ", date.toTimeString());
console.log("Pc Time: ", date.toLocaleDateString());

const birthDay = new Date("08/10/1998");
const now = new Date();
const diff = now.getTime() - birthDay.getTime();

console.log("Sonuç:", diff);

const min = Math.round(diff / 1000 / 60);
const hours = Math.round(min / 60);
const day = Math.round(hours / 24);
const month = Math.round(day / 30);
const year = Math.round(month / 12);

console.log("min:",min);
console.log("hours:",hours);

console.log("day:",day);

console.log("month:",month);
console.log("year:",year);
