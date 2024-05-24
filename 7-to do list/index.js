const addForm = document.querySelector(".add");
const list = document.querySelector(".todos"); //ul ye erişim için classı todos yapmıştık

// ! search classının altındaki classa erişebilmek için bir boşluk bırak
const search = document.querySelector(".search input");

const generateTemplate = (todo) => {
  /**
   * girilen değeri buraya göndereceğiz
   * girilen değeri li formatına çevireceğiz
   * ul içerisine ekleyeceğiz
   * ul içerisine git bir li etiketini kopyala
   */
  const html = `
  <li class="list-group-item d-flex justify-content-between align-items:center">
    <span>${todo}</span>
    <i class="fa-solid fa-trash delete"></i>
    </li>
`;
  list.innerHTML += html; // ! += yazmazsak bütün listeyi silip yazar
};

addForm.addEventListener("submit", (e) => {
  e.preventDefault(); // sayfa yenilenmesi engellendi

  // ! test ederken başlangıçta space girilirse
  // bu durumu dikkate almalıyız

  const todo = addForm.add.value.trim(); //forma girilen değere erişebilmek için name=add vermiştik

  // todo ile aldığımız değeri li içerisine göndermeliyiz
  // ! Kontrolleri yap
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset(); // forma girilen değerin temizlenmesi için
  }
});

// SILME ISLEMI
// iconlara delete ile ulaşabiliriz
list.addEventListener("click", (e) => {
  // target tıkladığım bloğu seçiyor - li etiketini
  if (e.target.classList.contains("delete")) {
    // parent olayını kullanıcaz
    // iconu ifadesinin parentini kaldır dersek
    // li etiketini kaldırır bizim de istediğimiz o
    e.target.parentElement.remove();
  }
});

// FILTER ISLEMI

// ara kısmına erişmem gerekiyor
// search labeline de name kısmına verdiğim değer ile içerisine erişebilirim
// canlı bir filtreleme işlemi olacağından dolayı
// key up eventini kullanmalıyız

const filterTodos = (term) => {
  // term içerisinde gelen veriyi list elemanları üzerinde arayacağız
  // fakat her bir li etiketine nasıl erişebiliriz
  // ! Cevap: li etiketi yerine ul etiketine erişip children ile her li etiketini ulaşılabilir
  // !! Not: innerHtml içerisi collection olduğu için forEach kullanılmıyordu
  // !!! Çözüm: Array.from() kullanmak
  Array.from(list.children)
  .filter((todo) => !todo.textContent.toLowerCase().includes(term)) // term içermiyorsa css'deki filtere classını ekle
  .forEach(todo=>todo.classList.add("filtered"));

  // Sorun
  // ? search yaparken filtreleme başarılı fakat labeli temizlediğinde eski elemanlar gelmiyor
  // ! Çözüm: içermeyenlere add yaparken içerenlere de remove yapmalıyız
  Array.from(list.children)
  .filter((todo) => todo.textContent.includes(term)) // term içermiyorsa css'deki filtere classını ekle
  .forEach(todo=>todo.classList.remove("filtered"));
};

search.addEventListener("keyup", (e) => {
  // normalde name etiketine erişip öyle geçiş yapmam gerekiyordu
  // fakat search tanımlarken classın içerisindeki input dediğimiz için
  // doğrudan value dyebilirim

  // ? Yeni sorun- büyük küçük harf durumu
  // * Çözümü ise alırken ve kontrol ederken lowerCase yap
  const term = search.value.trim().toLowerCase();
  filterTodos(term);
});
