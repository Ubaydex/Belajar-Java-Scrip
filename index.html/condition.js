let mhs = {
    name: "Fulan",
    age: 20,
    major: "TRMG",
    skills: ['Sysadmin' , 'OOP', 'Design'],
    poor: true,
}

// // console.log('Mahasiswa  boleh daftar : '  + (mhs.age > 17)); // true

// if (mhs.major == "TRMG") {
//     console.log(mhs.name + " Jurusan TRMG");
// } else if (mhs.major == "TRKJ") {
//     console.log(mhs.name + " Jurusan TRKJ");
// } else if (mhs.major == "TRPL"){
//     console.log(mhs.name + " Jurusan TRPL");
// } else {
//     console.log(mhs.name + " Jurusan  " + mhs.major);
// }

// console.log(mhs.major == " TRPL " ? mhs.name + " Jurusan TRPL " mhs.name + " bukan TRPL ");


// switch (mhs.major) {
//     case "TRPL":
//         console.log(mhs.name + " Jurusan TRMG");
//     case "TRKJ":
//         console.log(mhs.name + " Jurusan TRKJ");
//     case "TRMG":
//         console.log(mhs.name + " Jurusan TRPL");
//         break;
//     default:
//         console.log(mhs.name + "Bukan anak IDN");
// }
//kriteria : umur kurang dari 21, miskin, skill lebih dari 2
function cekKelulusan(peserta) {
    let name = peserta.name;
    let age = peserta.age;
    let poor = peserta.poor;
    let skills = peserta.skills;
    console.log("function jalan" , peserta )
    if (age < 21 && poor == true && skills.length > 2) {

        // pesertan lulus
        console.log(name + " kamu lulus");

    } else if (age < 21 || poor == true || skills.length > 2) {
        console.log(name + " Peserta harus nonton youtube WPU dulu");
    //     // peserta hampir lulus
    } else {
        console.log(name + " Peserta tidak lulus");
        // peserta tidak lulus
    // console.log(name + " kamu tidak lulus");

    
}
}
cekKelulusan(mhs)
