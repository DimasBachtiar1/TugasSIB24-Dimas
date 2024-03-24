// Penerapan var let dan const
var name = "Dimas Bachtiar";
var umur = 22;

let status = true;
let lulus = false;

const ukt = 3000000;
const univ = "Universitas Trunojoyo Madura"

document.getElementById("studentInfo").innerHTML = 
`<p>Nama : ${name}</p>
<p>Umur : ${umur}</p>
<p>Status Mahasiswa : ${status ? 'Aktif' : 'Cuti'}</p>
<p>Status Kelulusan : ${lulus ? 'Lulus' : 'Belum Lulus'}</p>
<p>UKT : Rp ${ukt}</p>
<p>Universitas : ${univ}</p>`;


// Penerapan Tipe Data

//object
var dataDiri = {
    nama : 'Ani', //string
    jk : 'Perempuan', 
    umur : 23, //number
    bb : 55.5, //number(decimal)
    tb : 165.5,
    status : false //boolean
}
console.log(dataDiri);

document.getElementById('data').innerHTML= `
    <p>Nama : ${dataDiri.nama}</p>
    <p>Jenis Kelamin : ${dataDiri.jk}</p>
    <p>Umur : ${dataDiri.umur}</p>
    <p>Berat Badan : ${dataDiri.bb}</p>
    <p>Tinggi Badan : ${dataDiri.tb}</p>
    <p>Status Pernikahan : ${dataDiri.status ? 'Sudah Menikah' : 'Belum Menukah'}</p>
`;


// Penerapan Seleksi Kondisi
// if else

let price = 50000
if (price >= 50000){
    document.getElementById('harga').innerText = "Harga Makanan itu Mahal";
}else{
    document.getElementById('harga').innerText = "Harga Makanan itu Murah";
}

// switch

let hari = new Date().getDay();
let namaHari;

switch (hari) {
    case 0:
        namaHari = "Minggu";
        break;
    case 1:
        namaHari = "Senin";
        break;
    case 2:
        namaHari = "Selasa";
        break;
    case 3:
        namaHari = "Rabu";
        break;
    case 4:
        namaHari = "Kamis";
        break;
    case 5:
        namaHari = "Jumat";
        break;
    case 6:
        namaHari = "Sabtu";
        break;

    default:
        namaHari = "Hari tidak valid";
}
document.getElementById('day').innerText="Hari ini adalah " + namaHari;

// Penerapan Looping
// for
let data = ['Adri','Rudi','Ani','Ica','Sulton','Puji'];
let dataMHS = document.getElementById("dataMHS");

for (let i = 0; i < data.length; i++) {
    let listItem = document.createElement('li');
    listItem.innerText = data[i];
    dataMHS.appendChild(listItem); 
}

// while
let data1 = ['Bangkalan','Malang','Banyuangi','Sidoarjo','Gresik'];
let kota = document.getElementById('kota');
let i = 0;

while (i < data1.length) {
    let listItem = document.createElement('li');
    listItem.innerText = data1[i];
    kota.appendChild(listItem);
    i++;
}

// Do while
let data2 = ['Merah','Kuning','Hijau','Biru','Ungu'];
let warna = document.getElementById('warna');
let a = 0;

do{
    let listItem = document.createElement('li');
    listItem.innerText = data2[a];
    warna.appendChild(listItem);
    a++;

} while (a < data2.length)


let status1 = true;
let lulusUjian = true;
let bayarUKT = false;


// Penerapan Operator Logika
//operator logika && (AND)
if (status1 && lulusUjian && bayarUKT) {
    document.getElementById('info').innerHTML = '<p>Status : Aktif dan sudah membayar UKT </p>';
}else{
    document.getElementById('info').innerHTML = '<p>Status : Tidak aktif dan belum membayar UKT</p>';
}

// operator logika || (OR)
let aksesPerpustakaan = true;
if (status1 || aksesPerpustakaan) {
    document.getElementById('info').innerHTML += '<p>Anda memiliki akses untuk meminjam buku di perpustakaan</p>';
}else{
    document.getElementById('info').innerHTML += '<p>Anda tidak memiliki akses untuk meminjam buku di perpustakaan</p>';
}

// operator logika ! (NOT)
let graduate = !status1 && lulusUjian;
if (graduate) {
    document.getElementById('info').innerHTML += '<p>Selamat! anda dinyatakan lulus dan siap untuk mengikuti wisuda</p>';
}else{
    document.getElementById('info').innerHTML += '<p>Maaf, anda belum memenuhi syarat untuk mengikuti wisuda</p>';
}



// Penerapan alert, prompt, dan confirm

function showAlert() {
    alert("Ini adalah contoh pesan alert!");
}

function showPrompt() {
    let name = prompt("Silakan masukkan nama Anda:", "");
    if (name !== null) {
        alert("Halo, " + name + "! Selamat datang di website kami.");
    }
}

function showConfirm() {
    let result = confirm("Apakah Anda yakin ingin melanjutkan?");
    if (result) {
        alert("Anda telah memilih untuk melanjutkan.");
    } else {
        alert("Anda telah membatalkan tindakan.");
    }
}
