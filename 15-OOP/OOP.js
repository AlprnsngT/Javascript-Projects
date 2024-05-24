// bir obje oluşturalım
let userOne = {
  name: "alperen",
  lastName: "songut",
  login() {
    console.log(this.name + " giris yaptı");
  },
  logout() {
    console.log(userOne.name + " çıkış yaptı");
  },
};
console.log(`${userOne.name}
${userOne.lastName}`);
userOne.login();
userOne.logout();

// !soru : her defasında obje tanımlarken böyle key value tek tek mi yazacağım
// ?cevap:hayır class oluşturarak oop özelliğinden faydalanacağız

// obje oluşturmayı generic hale getirelim

class User {
  // constructor sayesinde dışarıdan gönderilen parametreleri yakalayabiliyoruz
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.yas = age;
  }
  login() {
    //template literals kullanma sebebim variable kullanacağım
    return `${this.name} giris yaptı`;
  }
  logout() {
    return `${this.name} ${this.lastName} ${this.yas} sahis çıkış yaptı`;
  }
}

let userTwo = new User("enes", "songut", 28);
let userThree = new User("alperen", "songut", 25);
let userFour = new User("emre", "songut", 35);
console.log(
  userTwo.login(),
  "\n",
  userThree.login(),
  "\n",
  userFour.logout(),
  "\n\n\n\n"
);
//oop özelliği inheritance - admin subClass
class Admin extends User {
    constructor(userName,lastName,age,authorization){
        super();//inheritance yaptığım için kalan parametreleri doğrudan yukarı(parent classa) gönderiyorum
        this.authorization = authorization;
    }
  deleteUser(familyPerson) {
    users = users.filter((user) => {
      familyPerson.name !== user.name;
    });
  }
}
let userFive = new Admin("dudu", "songut", 50);
let users = [userThree, userFour, userTwo, userFive];
userFive.deleteUser(userTwo);
console.log(userOne, userTwo);

//super kullanımı


