var a = [];

for (var i = 0; i < 10; i++) {
    a.push(i);
}

console.log(a);
console.log('panjang a = ' + a.length + " elemen");

//gandakan nilai a dan simpan hasilnya dalam array b var b = [];
for (var j = 0; j < a.length; j++) {
    b.push(a[j] * 2);
}

console.log(b);

//cari data bernilai 5 dalam array a dan hentikan pencarian //begitu data ditemukan
var c;

//sintaks alternatif, lebih efisien karena panjang array a //disimpan dalam variabel len

for (var k = 0, len = a.length; k < len; k++) {
    if (a[k] === 5) {
        c = a[k];

        //data ditemukan, hentikan loop dan keluar dari loop break;
    }
}

//perhatikan nilai k terakhir tidak sama dengan //panjang array a
console.log('data: ' + c + ' ditemukan di indeks ' + k);



//for-in
// var list = ['a', 'b', 'c'];
// var message;
// for (var i in list) {

//     message = 'indeks ' + i + ' berisi data ' + list[i];
//     console.log(message);
// };

//for-in juga bisa kita gunakan untuk memproses semua atriut (key)sebuah object seperti contoh berikut: 
var person = {
    'name': 'boss',
    'age': 40,
    'sex': 'male'
}

var message;

for (var attr in person) {

    message = 'atribut ' + attr + ' berisi data ' + person[attr];
    console.log(message);
}