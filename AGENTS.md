# AGENTS.md — Lifabs Rent Landing Page

Baca file ini dulu, lalu `PRD.md` (isi & perilaku) dan `DESIGN-BRIEF.md` (tampilan).

## Tujuan
Landing page satu halaman untuk **Lifabs Rent**, rental motor dengan **1 unit**:
Kawasaki ZX25R 2022 (non ABS). Area layanan: **Sidoarjo – Surabaya**.
Tujuan utama: pengunjung menekan tombol WhatsApp dengan ringkasan order yang
sudah terisi otomatis.

## Stack
- Astro + Tailwind CSS (statis), JS seminimal mungkin
- JS hanya untuk: form order, generator link WhatsApp, estimasi jam kembali
- Bahasa konten: Indonesia
- Deploy target: Cloudflare Pages / Vercel

## Single source of truth
Semua data bisnis ada di `src/data/site.ts`. Jangan hardcode di komponen.

```ts
export const site = {
  name: "Lifabs Rent",
  waNumber: "62XXXXXXXXXX", // TODO: isi dari owner (format 62, tanpa + / 0)
  areaServed: ["Sidoarjo", "Surabaya"],
  pickupAddress: null,       // TODO: tanya owner, boleh tidak ditampilkan
  hours: "TODO",
  available: true,           // owner ubah true/false untuk status unit
  unit: {
    name: "Kawasaki ZX25R",
    year: 2022,
    variant: "Non ABS",
  },
  prices: [
    { hours: 6, price: 300000 },
    { hours: 12, price: 450000 },
    { hours: 24, price: 700000 },
  ],
};
```

## Aturan konten (penting)
- Syarat & ketentuan ditulis di `PRD.md` bagian 4. Salin persis, jangan
  diubah, diringkas, atau dilunakkan.
- Jangan mengarang info (alamat, jam buka, nomor WA, spek tambahan,
  testimoni, jumlah penyewa). Kalau belum ada, pakai `TODO` dan laporkan.
- Harga yang tampil = harga area Sidoarjo. Luar kota ditanyakan via WA.

## Privasi
- **Jangan** buat fitur upload KTP / KK / SIM / foto sosmed di website.
  Dokumen dikirim customer lewat WhatsApp setelah owner mengonfirmasi.
- Tanpa tracker pihak ketiga selain analytics ringan (opsional).

## Aset
- Foto asli unit: `public/images/zx25r-original.jpg` (portrait, latar ramai).
- Hasilkan varian: `zx25r-hero.webp/avif` (cutout atau crop), OG image 1200x630.
- Wajib: width/height eksplisit, `alt` deskriptif, hero di-preload.
- Jangan pakai foto stok. Unit asli adalah nilai jual.

## SEO (wajib)
- Satu H1, hirarki heading rapi
- Title, meta description, canonical, Open Graph, Twitter card
- JSON-LD: LocalBusiness (service area), Product + Offer, FAQPage
- sitemap.xml, robots.txt
- Target Lighthouse mobile >= 95 (Performance, SEO, Accessibility, Best Practices)

## Aturan kerja
- Untuk pekerjaan desain, baca `PRODUCT.md` dan `DESIGN.md` (dibuat Impeccable) dan gunakan skill impeccable. Jika bentrok dengan `DESIGN-BRIEF.md`, tanyakan dulu.
- Jangan tambah dependency tanpa alasan jelas
- Mobile-first; uji di lebar 360px, 390px, 768px, 1280px
- Setelah perubahan: jalankan build dan pastikan tanpa error/warning
- Commit kecil dan terarah
- Kalau ada keputusan yang belum jelas, tulis asumsi di bagian akhir jawaban

## Definition of done
- Build sukses, Lighthouse sesuai target
- Link WA terbuka benar di mobile & desktop, pesan terformat rapi
- Semua S&K tampil lengkap dan persis sesuai PRD
- Tidak ada teks placeholder yang tertinggal di halaman produksi
