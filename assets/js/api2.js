let endpoint = 'https://crudcrud.com/api/c9949c1c47fa4731905cff3d3e816e39/product/';

// menampilkan data di tabel
fetch(endpoint)
    .then((response) => response.json())
    .then((res) => {
        let datas = res;

        datas.forEach(data_product => {
            document.getElementById("data-produk").innerHTML +=
            `
            <tr>
                <td> ${data_product.nama_produk} </td>
                <td> ${data_product.jumlah} </td>
                <td> ${data_product.harga} </td>
                <td>
                    <a href="#" class="btn btn-sm btn-primary" onclick="edit_data('${data_product._id}')" data-toggle="modal" data-target="#edit-produk"> <i class="fas fa-edit"></i> </a>
                    <a href="#" class="btn btn-sm btn-danger" onclick="get_data('${data_product._id}')" data-toggle="modal" data-target="#hapus-produk"> <i class="fas fa-trash"></i> </a>
                </td>
            </tr>
            `
        });
    })

// menambah data
// menampilkan data di tabel
fetch(endpoint)
    .then((response) => response.json())
    .then((res) => {
        let datas = res;

        datas.forEach(data_product => {
            document.getElementById("data-product").innerHTML +=
            `
            <tr>
                <td> ${data_product.nama_produk} </td>
                <td> ${data_product.jumlah} </td>
                <td> ${data_product.harga} </td>
                <td>
                    <a href="#" class="btn btn-sm btn-primary" onclick="edit_data('${data_product._id}')" data-toggle="modal" data-target="#edit-produk"> <i class="fas fa-edit"></i> </a>
                    <a href="#" class="btn btn-sm btn-danger" onclick="get_data('${data_product._id}')" data-toggle="modal" data-target="#hapus-produk"> <i class="fas fa-trash"></i> </a>
                </td>
            </tr>
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
        window.location.reload(); // reload halaman setelah menambahkan data
    })
    .catch(error => {
        console.error('Error:', error);
    });
}


// mengedit data
function edit_data(id_product) {
    fetch(endpoint)
    .then((response) => response.json())
    .then((res) => {
        let datas = res;

        const product = datas.find(data => data._id === id_product);
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

    fetch(`${endpoint}${input_id_produk}`, {
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
function get_data(id_product) {
    // Bersihkan konten modal sebelum menambahkan konten baru
    document.getElementById("delete-produk").innerHTML = "";

    fetch(endpoint)
    .then((response) => response.json())
    .then((res) => {
        let datas = res;

        const product = datas.find(data => data._id === id_product);

        // Tambahkan konten modal
        document.getElementById("delete-produk").innerHTML +=
        `
        <div class="modal-header">
            <h4 class="modal-title">Hapus Data Produk</h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            Apakah anda yakin untuk menghapus produk '${product.nama_produk}' ?
        </div>
        <div class="modal-footer justify-content-between">
            <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
            <button type="submit" class="btn btn-primary" onclick="delete_data('${product._id}')">Yes</button>
        </div>
        `;
    })
    .catch((error) => {
        console.log('Terjadi kesalahan:', error.message);
    });
}


function delete_data(id_product) {
    fetch(`${endpoint}${id_product}`, {
        method: 'DELETE',
    })
    .then(response => {
        window.location.reload();
    })
}