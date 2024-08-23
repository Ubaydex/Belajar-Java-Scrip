var a = [];
var i = 0;

do {
    a.push(i);
    i++;
} while (i < 4);

console.log(a); //[0,1,2,3]

var b = [];

var i =5;
while (i < 4) {
    b.push(i);
    i++;
}

//b tidak memiliki element (kosong) karena blok kode tidak pernah dieksekusi
console.log(b);//[]