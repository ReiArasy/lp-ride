# DESIGN.md — Lifabs Rent

## Arah
**Minimalism bernuansa sporty.** Sedikit elemen, banyak ruang kosong, satu
motor sebagai bintang. Sentuhan editorial hanya di tipografi (angka harga
besar, heading tegas), bukan di layout majalah.

## Warna (ambil nilai persis dari file logo asli)
| Token | Nilai | Pakai untuk |
|---|---|---|
| `--ink` | `#111111` | teks utama, tombol sekunder |
| `--paper` | `#FFFFFF` | latar utama |
| `--paper-2` | `#F5F6F7` | section selang-seling, kartu |
| `--accent` | cyan logo (~`#1AA7EC`) | CTA, harga terpilih, link |
| `--signal` | merah logo (~`#E3262E`) | hanya aksen kecil: badge, peringatan denda |
| `--muted` | `#6B7280` | teks pendukung |

Aturan: cyan = aksi, merah = peringatan/status. Merah tidak dipakai untuk tombol.
Cek kontras teks di atas cyan (kemungkinan perlu teks hitam atau cyan lebih gelap).

## Tipografi
- Heading: font sans lebar/italic ala racing (Sora, Space Grotesk, atau Exo 2), bobot 700–800, boleh italic miring seperti logo
- Body: Inter atau DM Sans
- Angka harga: besar (clamp 40–72px), tabular nums
- Self-host font, subset Latin, `font-display: swap`

## Foto unit
Foto asli: ZX-25R hitam, tampak samping-3/4 kanan, portrait 3:4. Latar
**ramai** (rumah, pagar, sangkar burung, paving warna-warni, paddock stand
merah) dan bentrok dengan gaya minimalis.

Perlakuan:
1. **Opsi A (disarankan)**: cutout motor, transparan (WebP/PNG), taruh di
   atas latar putih/abu muda dengan bayangan lembut di bawah roda. Paddock
   stand ikut dihapus dari cutout. Di belakang motor, teks besar "ZX25R"
   outline/abu sangat tipis sebagai elemen tipografi.
2. **Opsi B**: crop ketat ke motor + overlay gradien putih di sisi atas dan
   bawah. Cepat, tapi latar tetap terlihat.
3. **Opsi C (terbaik jangka panjang)**: foto ulang landscape 3:2, dinding
   polos, cahaya pagi/sore, sisi samping dan 3/4 depan.

Karena foto portrait: di mobile hero memakai foto penuh lebar; di desktop
layout dua kolom (teks kiri, motor kanan). Hindari memaksa foto portrait
jadi banner lebar.

## Layout
- Container maks 1120px, gutter 16px (mobile) / 24px (desktop)
- Jarak antar section lega (72–120px desktop, 48–72px mobile)
- Hero mobile: motor di atas, H1, harga mulai dari, CTA
- Kartu harga: 3 kolom desktop, tumpuk di mobile; kartu 24 jam diberi label
  "Paling hemat"; kartu terpilih = border cyan
- S&K: dua kolom (Syarat | Ketentuan), highlight "Tanpa sewa helm" dan
  "Denda Rp5.000.000" dengan badge merah kecil
- Tombol WA sticky bawah di mobile (tinggi >= 48px), hilang saat form terlihat

## Komponen
Navbar, Badge status, Hero, PriceCard, OrderForm, SpecList, TermsBlock,
FAQ (accordion `<details>`), Footer, StickyWA.

## Gerak
Minimal: fade/slide-up halus saat scroll, hover kartu, transisi pilih durasi.
Hormati `prefers-reduced-motion`.

## Aksesibilitas
- Kontras AA, fokus terlihat, label form eksplisit
- Target sentuh >= 44px
- `alt` foto deskriptif, contoh: "Kawasaki ZX25R hitam 2022 non ABS siap disewa di Sidoarjo"

## Performa
- Hero WebP/AVIF, `fetchpriority="high"`, ukuran eksplisit
- Tanpa library animasi/carousel
- Target LCP < 2,5 detik di 4G
