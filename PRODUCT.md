# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Penyewa utama adalah pecinta motor lokal di area Sidoarjo–Surabaya yang ingin merasakan Kawasaki ZX25R selama 6, 12, atau 24 jam. Mereka perlu memahami harga, syarat, dan ketersediaan unit sebelum menghubungi owner.

## Product Purpose

Lifabs Rent menyewakan satu unit Kawasaki ZX25R 2022 Non ABS. Situs satu halaman membantu calon penyewa melihat informasi unit dan menyiapkan ringkasan pesanan yang dikirim lewat WhatsApp. Keberhasilan utama adalah calon penyewa memulai percakapan WhatsApp dengan detail pesanan terisi; ketersediaan dan pemesanan tetap dikonfirmasi oleh owner.

## Positioning

Pembeda yang disetujui owner: satu unit ZX25R asli yang ditawarkan, harga dan syarat yang dinyatakan jelas, serta proses pemesanan langsung lewat WhatsApp. Jangan menambahkan klaim keunggulan layanan yang belum terverifikasi.

## Operating Context

- Area layanan: Sidoarjo–Surabaya. Harga yang tercantum berlaku untuk pemakaian di area Sidoarjo; tujuan luar kota diinformasikan lebih dahulu dan biayanya dikonfirmasi owner.
- Kontak WhatsApp owner: +62 858-8777-0846 (`6285887770846` untuk tautan). Jam operasional: 24 jam; masih perlu dikonfirmasi apakah serah-terima unit juga tersedia 24 jam. Alamat pengambilan lengkap: Perum Magersari Permai Blok BB-05. Secara publik tampilkan hanya “Perum Magersari Permai, Sidoarjo”; titik lengkap dikirim lewat WhatsApp setelah booking dikonfirmasi.
- Pilihan durasi dan harga area Sidoarjo: 6 jam Rp300.000, 12 jam Rp450.000, dan 24 jam Rp700.000.
- Calon penyewa memilih durasi, tanggal dan jam ambil, area pemakaian, dan nama; jika luar kota, mereka mengisi tujuan. Situs menghitung estimasi waktu kembali dan membentuk pesan WhatsApp. Pengiriman memerlukan persetujuan syarat dan ketentuan.
- Syarat dan ketentuan yang berlaku tercatat persis di `PRD.md` bagian 4. Dokumen identitas dikirim pelanggan melalui WhatsApp setelah owner mengonfirmasi, bukan diunggah ke situs. Penyewa membawa helm sendiri.
- Status satu unit diatur owner secara manual; situs bukan kalender ketersediaan waktu nyata.

## Capabilities and Constraints

- Situs statis berbahasa Indonesia dengan JavaScript minimal untuk form order, tautan WhatsApp, dan estimasi waktu kembali.
- Data bisnis disimpan terpusat di `src/data/site.ts` saat implementasi dibuat.
- Alamat lengkap disimpan di data, tetapi tidak ditampilkan saat `showFullAddress` bernilai `false` (nilai awal).
- Tidak ada pembayaran online, login, kalender booking waktu nyata, galeri banyak foto, atau fitur multibahasa pada versi pertama.
- Belum diputuskan: layanan antar-jemput dan biayanya, deposit atau jaminan tambahan, tarif luar kota, aturan keterlambatan dan batas kilometer, metode dan waktu pembayaran, serta apakah modifikasi unit boleh disebutkan. Tarif luar kota harus tetap `TODO` sampai owner menetapkannya.

## Brand Commitments

- Nama usaha: Lifabs Rent.
- Gunakan foto unit asli; jangan menggantinya dengan foto stok. `DESIGN-BRIEF.md` adalah arahan visual awal yang diberikan owner, bukan catatan sistem desain hasil Impeccable.

## Evidence on Hand

- `PRD.md` memuat fitur, harga, syarat dan ketentuan, serta pertanyaan terbuka dari owner.
- `AGENTS.md` memuat aturan implementasi dan larangan mengarang informasi bisnis.
- Foto unit asli tersedia di `C:\Users\HP VICTUS\Downloads\zx25r-original.jpg` (960×1280, portrait). Logo asli tersedia di `C:\Users\HP VICTUS\Downloads\logo-lifabs-rent.jpg` (640×641); tidak ada versi PNG Lifabs Rent pada lokasi yang diberikan. Belum ada testimoni atau bukti lain yang boleh digunakan sebagai klaim.

## Product Principles

1. Tampilkan informasi satu unit dan statusnya secara jujur.
2. Jelaskan harga serta syarat sebelum calon penyewa mengirim pesan.
3. Permudah percakapan WhatsApp dengan ringkasan order yang lengkap.
4. Jaga dokumen pribadi di luar situs dan jangan mengarang fakta operasional.

## Accessibility & Inclusion

Brief menetapkan kontras setidaknya AA, label form yang eksplisit, dan target sentuh minimal 44 px.
