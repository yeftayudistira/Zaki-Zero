# Zaki Zero

Project Statistika Semester 2
![Logo](https://unnes.ac.id/lppm/wp-content/uploads/sites/16/2015/08/Logo-Transparan-Warna-1-225x300.png)

## Authors

- [@yeftayudistira](https://github.com/yeftayudistira)


# APLIKASI KLASIFIKASI TEKS AI DAN MANUSIA 

## Latar Belakang

Di era digital ini, teknologi kecerdasan buatan (AI) seperti GPT-3 membawa banyak manfaat dalam kehidupan manusia, seperti otomatisasi pembuatan konten, layanan pelanggan dan penerjemah bahasa. Namun, kemampuannya dalam memproduksi teks yang hampir tak dapat dibedakan dari tulisan manusia menimbulkan tantangan baru  dalam hal deteksi dan verifikasi teks, hal ini berdampak pada berbagai bidang terutama dalam jurnalisme, akademik, dan keamanan siber. Masalah ini membuat pengembangan alat untuk membedakan antara teks yang dihasilkan oleh AI dan teks yang ditulis oleh manusia menjadi penting.

## Implementasi

Kita memanfaatkan TF-IDF untuk menghitung frekuensi kemunculan setiap kata dalam dokumen (term frequency) dan membandingkannya dengan seberapa sering kata tersebut muncul di semua dokumen (inverse document frequency) untuk memberikan skor yang lebih tinggi pada kata-kata yang unik dan informatif dalam konteks tertentu. Setelah teks dikonversi menjadi vektor TF-IDF, langkah berikutnya adalah melatih model machine learning menggunakan algoritma Logistic Regression (untuk membedakan antara teks yang dihasilkan oleh manusia dan teks yang dihasilkan oleh AI). Model ini dilatih dengan menyediakan vektor TF-IDF dari teks yang telah dilabeli sebelumnya (sebagai teks manusia atau teks AI) sebagai input dan label klasifikasi sebagai output.
