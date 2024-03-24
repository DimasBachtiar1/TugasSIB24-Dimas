let endpoint = 'https://crudcrud.com/api/9819ac55d8144d10b248230f898fa0ec/product';

// menampilkan data di tabel
fetch(endpoint)
    .then((response) => response.json())
    .then((res) => {
        let datas = res;

        datas.forEach(data_product => {
            document.getElementById("data_produk").innerHTML +=
            `
            <tr>
                <td> ${data_product.nama_produk} </td>
                <td> ${data_product.jumlah} </td>
                <td> ${data_product.harga} </td>
                <td>
                    <a href="#" class="btn button-edit" onclick="edit_data('${data_product._id}')"> Edit </a>
                    <a href="#" class="btn button-delete" onclick="delete_data('${data_product._id}')"> Delete </a>
                </td>
            </tr>
            `
        });
    })
    .catch((error) => {
        document.querySelector(".error").innerText = error.message;
        document.querySelector(".error").style.display = "block";
    });


// menampilkan data di card
fetch(endpoint)
    .then((response) => response.json())
    .then((res) => {
        let datas = res;

        datas.forEach(product_item => {
            document.getElementById("list-produk").innerHTML +=
            `
            <div class="card">
                <h3> ${product_item.nama_produk} </h3>
                <p> Rp. ${product_item.harga} </p>
                <h5> Stok : ${product_item.jumlah} </h5>
            </div>
            `
        });
    })


// menambah data
function tambah_data(event) {
    event.preventDefault();

    const input_nama_produk = document.getElementById("nama_produk").value;
    const input_jumlah = document.getElementById("jumlah").value;
    const input_harga = document.getElementById("harga").value;

    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nama_produk: input_nama_produk,
            jumlah: input_jumlah,
            harga: input_harga
        })
    })
    .then(response => {
        window.location.reload();
    })
    .catch(error => {
        document.querySelector(".error").innerText = 'Terjadi kesalahan, gagal menambahkan data';
        document.querySelector(".error").style.display = "block";
    });
}



// mengedit data
function edit_data(id_product) {
    document.querySelector(".tambah-data").style.display = "none";
    document.querySelector(".edit-data").style.display = "block";

    // Fetch data produk berdasarkan id
    fetch(`${endpoint}/${id_product}`)
    .then((response) => response.json())
    .then((product) => {
        // Mengisi nilai input pada form edit dengan data produk yang ditemukan
        document.getElementById("id_produk").value = product._id;
        document.getElementById("edit_nama_produk").value = product.nama_produk;
        document.getElementById("edit_jumlah").value = product.jumlah;
        document.getElementById("edit_harga").value = product.harga;
    })
    .catch((error) => {
        console.log('Terjadi kesalahan:', error.message);
    });
}

// mengupdate data
function update_data(event) {
    event.preventDefault();

    const input_nama_produk = document.getElementById("edit_nama_produk").value;
    const input_jumlah = document.getElementById("edit_jumlah").value;
    const input_harga = document.getElementById("edit_harga").value;
    const input_id_produk = document.getElementById("id_produk").value;

    // Perbaiki endpoint fetch untuk update data
    fetch(`${endpoint}/${input_id_produk}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nama_produk: input_nama_produk,
            jumlah: input_jumlah,
            harga: input_harga
        })
    })
    .then(response => {
        window.location.reload();
    })
    .catch(error => {
        document.querySelector(".error").innerText = 'Terjadi kesalahan, gagal mengupdate data';
        document.querySelector(".error").style.display = "block";
    });
}


// menghapus data
function delete_data(id_product) {
    // Perbaiki endpoint fetch untuk menghapus data
    fetch(`${endpoint}/${id_product}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (response.ok) {
            // Jika penghapusan berhasil, reload halaman
            window.location.reload();
        } else {
            // Jika terjadi kesalahan, tampilkan pesan kesalahan
            throw new Error('Terjadi kesalahan saat menghapus data');
        }
    })
    .catch(error => {
        // Tangani kesalahan dan tampilkan pesan kesalahan
        document.querySelector(".error").innerText = error.message;
        document.querySelector(".error").style.display = "block";
    });
}
