// Fungsi untuk menangani pengiriman form
function submitForm() {
    // Mencegah pengiriman form secara default
    event.preventDefault();

    // Mengambil nilai input
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Untuk tujuan demo, kita hanya menampilkan data di console dan menunjukkan konfirmasi
    console.log('Nama: ' + name);
    console.log('Email: ' + email);
    console.log('Pesan: ' + message);

    // Menampilkan pesan konfirmasi kepada pengguna
    var confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.style.display = 'block';

    // Menyembunyikan form setelah pengiriman
    document.getElementById('kritikSaranForm').reset();
    
    return false; // Menghindari reload halaman
  }