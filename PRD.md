# PRD — Landing Page Lifabs Rent

## 1. Ringkasan
Satu halaman, satu motor, satu aksi: **chat WhatsApp untuk sewa**.
Unit: Kawasaki ZX25R 2022 non ABS. Area: Sidoarjo – Surabaya.

## 2. Struktur halaman
1. **Navbar**: logo + tombol "Sewa via WA"
2. **Hero**: foto ZX25R, H1, harga mulai Rp300.000, badge status, CTA
3. **Harga**: 3 kartu (6 / 12 / 24 jam)
4. **Order via WA**: form singkat + tombol kirim
5. **Tentang & unit**: cerita singkat usaha, spek singkat
6. **Syarat & ketentuan**: tampil jelas, bukan tersembunyi
7. **FAQ**
8. **Area & kontak**: Sidoarjo – Surabaya, jam operasional, footer
+ Tombol WA sticky di mobile

## 3. Harga
Berlaku untuk penggunaan area **Sidoarjo**.

| Durasi | Harga | Per jam (info kecil) |
|---|---|---|
| 6 jam | Rp300.000 | Rp50.000 |
| 12 jam | Rp450.000 | Rp37.500 |
| 24 jam | Rp700.000 | Rp29.167 |

Kartu 24 jam diberi label "Paling hemat". Catatan di bawah kartu:
"Harga untuk area Sidoarjo. Pemakaian luar kota, infokan tujuan terlebih dahulu."

## 4. Syarat & ketentuan (salin persis)

**Syarat**
- SIM C (aktif)
- KTP
- KK
- Foto sosmed aktif
- Sepeda motor + STNK sesuai KTP

**Ketentuan**
- Dilarang wheelie & burnout.
- Harga di atas adalah harga untuk penggunaan di area Sidoarjo.
- Untuk penggunaan luar kota, infokan tujuan terlebih dahulu.
- BBM harus sesuai saat terima unit. Jika tidak sesuai, dikenakan charge Rp100.000/bar.
- Tidak ada persewaan helm. Gunakan helm sendiri.
- Pelanggaran ketentuan dikenakan denda Rp5.000.000.

Catatan UI: "Tidak ada sewa helm" dan "Denda Rp5.000.000" tampil sebagai
highlight (ikon/badge), bukan hanya poin biasa.

## 5. Form order WA

| Field | Tipe | Catatan |
|---|---|---|
| Durasi | pilihan 6/12/24 jam | terisi otomatis saat kartu harga diklik |
| Tanggal ambil | date | tidak boleh tanggal lampau |
| Jam ambil | time | |
| Area pemakaian | pilihan: "Dalam Sidoarjo" / "Luar kota" | jika luar kota, muncul input "Tujuan" (wajib) |
| Nama | text | |
| Setuju S&K | checkbox wajib | membawa helm sendiri, sudah baca S&K |

Otomatis dihitung: harga sesuai durasi dan **estimasi jam kembali**
(jam ambil + durasi, tampilkan hari berikutnya bila lewat tengah malam).
Untuk "Luar kota", tampilkan: "Harga akan dikonfirmasi owner sesuai tujuan."

Tombol dinonaktifkan sampai field wajib + checkbox terisi.

### Template pesan WA
Link: `https://wa.me/{waNumber}?text={encodeURIComponent(pesan)}`

```
Halo Lifabs Rent, saya mau sewa motor:

Unit          : Kawasaki ZX25R 2022 (Non ABS)
Durasi        : 12 jam
Harga         : Rp450.000
Tanggal ambil : Sabtu, 17 Oktober 2026
Jam ambil     : 08.00
Estimasi kembali: Sabtu, 17 Oktober 2026 pukul 20.00
Area pemakaian: Dalam Sidoarjo
Nama          : Budi

Saya sudah membaca syarat & ketentuan dan akan membawa helm sendiri.
Mohon konfirmasi ketersediaan unit. Terima kasih!
```

Varian luar kota: baris area menjadi `Luar kota (tujuan: Malang)` dan baris
harga menjadi `Rp450.000 (area Sidoarjo, mohon info biaya luar kota)`.

## 6. Status ketersediaan
`site.available`:
- `true` → badge "Tersedia"
- `false` → badge "Sedang disewa", CTA berubah "Tanya jadwal kosong" (pesan WA tetap bisa dikirim)

## 7. Copy utama (draft, boleh disesuaikan)
- **H1**: Sewa Kawasaki ZX25R Sidoarjo – Surabaya
- **Subheadline**: Sport 250cc 4 silinder, unit tunggal terawat. Sewa 6, 12, atau 24 jam. Booking cepat via WhatsApp.
- **CTA utama**: Sewa via WhatsApp
- **Tentang**: TODO dari owner (cerita singkat, sejak kapan, kondisi unit, servis berkala)

## 8. FAQ (draft)
1. Dokumen apa yang dibutuhkan? → daftar syarat
2. Apakah bisa dipakai ke luar kota? → bisa, infokan tujuan dulu, harga bisa berbeda
3. Apakah tersedia helm? → tidak, bawa helm sendiri
4. Bagaimana aturan BBM? → sama seperti saat terima; selisih Rp100.000/bar
5. Apa saja yang dilarang? → wheelie & burnout, denda Rp5.000.000
6. Bagaimana cara booking? → isi form, kirim WA, tunggu konfirmasi, kirim dokumen via WA
7. Apakah unit ABS? → unit Non ABS

## 9. SEO
**Keyword utama**: sewa zx25r sidoarjo, rental zx25r surabaya
**Sekunder**: sewa motor sport sidoarjo, rental motor sport surabaya, sewa ninja 250 4 silinder

- Title: `Sewa ZX25R Sidoarjo – Surabaya | 6/12/24 Jam | Lifabs Rent`
- Meta description: `Sewa Kawasaki ZX25R 2022 di Sidoarjo & Surabaya. Mulai Rp300.000 / 6 jam. Booking cepat via WhatsApp. Cek syarat & harga di sini.`
- JSON-LD:
  - `LocalBusiness` dengan `areaServed` Sidoarjo & Surabaya. Alamat lengkap hanya jika owner setuju dipublikasikan
  - `Product` + `Offer` x3 (harga IDR)
  - `FAQPage`
- Open Graph image 1200x630 berisi motor + nama + harga mulai dari

**Di luar kode (sampaikan ke owner)**: buat Google Business Profile sebagai
*service-area business*, samakan nama/telepon dengan website, minta ulasan
dari penyewa.

## 10. Di luar cakupan (v1)
Pembayaran online, login, booking kalender real-time, galeri banyak foto,
multi-bahasa.

## 11. Pertanyaan terbuka untuk owner
- Nomor WA, jam operasional
- Alamat pengambilan: boleh dipublikasikan atau cukup "area Sidoarjo"?
- Ada layanan antar-jemput? Biayanya?
- Deposit/jaminan selain STNK? (S&K saat ini hanya menyebut motor + STNK)
- Biaya luar kota: ada tarif tetap atau per kasus?
- Aturan keterlambatan (overtime)? Batas KM?
- Pembayaran: transfer / tunai, kapan dibayar?
- Boleh menyebut modifikasi (knalpot) di deskripsi unit?
