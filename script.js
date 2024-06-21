document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userName = document.getElementById('userName').value.trim();
    if (userName !== '') {
        document.getElementById('result').innerHTML = 'Sedang memeriksa khodam...';

        // Simulasi proses memeriksa khodam (contoh penggunaan setTimeout)
        setTimeout(() => {
            const randomItems = ['Kulkas', 'Seblak Ceker', 'Badut Mixue', 'Tutup Botol', 'Kamera', 'Lemari', 'Kardus', 'Ayam Goreng', 'Meja', 'Naga Hitam', 'Buaya', 'Bunga Mawar', 'Kucing', 'Kasur', 'Jerapah', 'Gajah', 'Ultraman', 'Upin&Ipin', 'Kipas Angin', 'Jam', 'Tahu Gejrot', 'Polisi Tidur', 'Bus', 'Handphone', 'Warung', 'Boncabe', 'Sambal', 'Kecap', 'Kura-Kura Ninja', 'Ulet'];
            const randomIndex = Math.floor(Math.random() * randomItems.length);
            const randomKhodam = randomItems[randomIndex];
            document.getElementById('result').innerHTML = `Khodam ${userName} Adalah: ${randomKhodam}`;

            // Tampilkan tombol reset dan sembunyikan tombol cek
            document.getElementById('cekButton').style.display = 'none';
            document.getElementById('resetButton').style.display = 'inline-block';
        }, 2000); // Contoh simulasi waktu proses 2 detik (2000 milidetik)
    } else {
        document.getElementById('result').textContent = 'Silakan masukkan nama Anda terlebih dahulu.';
    }
});

document.getElementById('resetButton').addEventListener('click', function() {
    // Reset form
    document.getElementById('nameForm').reset();
    document.getElementById('result').textContent = '';

    // Sembunyikan tombol reset dan tampilkan tombol cek
    document.getElementById('cekButton').style.display = 'inline-block';
    document.getElementById('resetButton').style.display = 'none';
});
