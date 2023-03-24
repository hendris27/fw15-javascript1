const Math = 70
const Sience = 90
const English = 60
const indonesian = 70
let hasil = (Math + Sience + English + indonesian) / 4;
console.log(Math, "+", Sience, "+", English, "+", indonesian, "=", hasil)

if (hasil >= 90) {
  console.log("A");
} else if (hasil >= 80 && hasil < 90) {
  console.log("B");
} else if (hasil > 70 && hasil < 79) {
  console.log("C");
} else if (hasil > 60 && hasil < 69) {
  console.log("D");
} else if (Math == '' || Sience == '' || English == '' || indonesian == '') {
  console.log("salah isi nilai tidak boleh kosong");
} else {
  console.log("E");
}