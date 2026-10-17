const siteContent = {
  name: "Lifabs Rent",
  waNumber: "6285887770846",
  waDisplay: "+62 858-8777-0846",
  areaServed: ["Sidoarjo", "Surabaya"],
  pickupAddress: "Perum Magersari Permai Blok BB-05",
  publicPickupAddress: "Perum Magersari Permai, Sidoarjo",
  showFullAddress: false,
  pickupNote:
    "Titik ambil lengkap dikirim lewat WhatsApp setelah booking dikonfirmasi.",
  // TODO: Konfirmasi ke owner apakah serah-terima unit juga tersedia 24 jam.
  hours: "24 jam",
  available: true,
  heroSummary:
    "Satu Kawasaki ZX25R 2022, pilihan 6–24 jam, booking langsung lewat WhatsApp.",
  heroTitle: "Sewa ZX25R",
  heroImage: {
    src: "/images/zx25r-original.jpg",
    alt: "Kawasaki ZX25R hitam 2022 Non ABS milik Lifabs Rent",
    objectPosition: "50% 68%",
    tabletObjectPosition: "50% 68%",
  },
  // TODO: Tarif luar kota belum ditetapkan dan harus dikonfirmasi owner.
  outOfTownRate: null,
  // TODO: Isi setelah owner memberikan cerita singkat usaha.
  about:
    "TODO: Cerita singkat Lifabs Rent, sejak kapan beroperasi, kondisi unit, dan informasi servis berkala menunggu konfirmasi owner.",
  unit: {
    name: "Kawasaki ZX25R",
    year: 2022,
    variant: "Non ABS",
    alt: "Kawasaki ZX25R hitam 2022 Non ABS milik Lifabs Rent",
  },
  prices: [
    { hours: 6, price: 300000, perHour: 50000, featured: false },
    { hours: 12, price: 450000, perHour: 37500, featured: false },
    { hours: 24, price: 700000, perHour: 29167, featured: true },
  ],
  pricingNote:
    "Harga untuk area Sidoarjo. Luar kota infokan tujuan dulu.",
  usageAreas: ["Dalam Sidoarjo", "Luar kota"],
  terms: {
    fuelChargePerBar: 100000,
    penaltyAmount: 5000000,
    requirements: [
      "SIM C (aktif)",
      "KTP",
      "KK",
      "Foto sosmed aktif",
      "Sepeda motor + STNK sesuai KTP",
    ],
    conditions: [
      "Dilarang wheelie & burnout.",
      "Harga di atas adalah harga untuk penggunaan di area Sidoarjo.",
      "Untuk penggunaan luar kota, infokan tujuan terlebih dahulu.",
      "BBM harus sesuai saat terima unit. Jika tidak sesuai, dikenakan charge Rp100.000/bar.",
      "Tidak ada persewaan helm. Gunakan helm sendiri.",
      "Pelanggaran ketentuan dikenakan denda Rp5.000.000.",
    ],
    helmetHighlight: "Tanpa sewa helm",
    penaltyHighlight: "Denda Rp5.000.000",
  },
  faqs: [
    {
      question: "Dokumen apa yang dibutuhkan?",
      answer:
        "SIM C aktif, KTP, KK, foto sosmed aktif, serta sepeda motor + STNK sesuai KTP.",
    },
    {
      question: "Apakah bisa dipakai ke luar kota?",
      answer:
        "Bisa. Infokan tujuan terlebih dahulu karena harga pemakaian luar kota bisa berbeda.",
    },
    {
      question: "Apakah tersedia helm?",
      answer: "Tidak. Penyewa harus membawa helm sendiri.",
    },
    {
      question: "Bagaimana aturan BBM?",
      answer:
        "BBM harus sama seperti saat menerima unit. Jika tidak sesuai, dikenakan charge Rp100.000/bar.",
    },
    {
      question: "Apa saja yang dilarang?",
      answer:
        "Wheelie dan burnout dilarang. Pelanggaran ketentuan dikenakan denda Rp5.000.000.",
    },
    {
      question: "Bagaimana cara booking?",
      answer:
        "Isi form, kirim pesan WhatsApp, tunggu konfirmasi, lalu kirim dokumen melalui WhatsApp setelah owner mengonfirmasi.",
    },
    {
      question: "Apakah unit ABS?",
      answer: "Tidak. Unit ini adalah varian Non ABS.",
    },
  ],
  seo: {
    title: "Sewa ZX25R Sidoarjo – Surabaya | 6/12/24 Jam | Lifabs Rent",
    description:
      "Sewa Kawasaki ZX25R 2022 di Sidoarjo & Surabaya. Mulai Rp300.000 / 6 jam. Booking cepat via WhatsApp. Cek syarat & harga di sini.",
    keywords: [
      "sewa zx25r sidoarjo",
      "rental zx25r surabaya",
      "sewa motor sport sidoarjo",
      "rental motor sport surabaya",
      "sewa ninja 250 4 silinder",
    ],
    // TODO: Set PUBLIC_SITE_URL ke domain produksi saat deploy.
    siteUrl: import.meta.env.PUBLIC_SITE_URL || null,
    ogImage: "/images/og-lifabs-rent.jpg",
  },
} as const;

// Semua konsumen hanya menerima copy yang siap terbit, termasuk JSON-LD dan data form.
export const isPublished = (value: unknown): value is string =>
  typeof value === "string" && value.trim().length > 0 && !/\bTODO\b/i.test(value);

function publishable<T>(value: T): T {
  if (typeof value === "string") return (isPublished(value) ? value : "") as T;
  if (Array.isArray(value)) return value.map(publishable).filter((item) => item !== "") as T;
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, publishable(item)])) as T;
  }
  return value;
}

export const site = publishable(siteContent);
export type Site = typeof site;
