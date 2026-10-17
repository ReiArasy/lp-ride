import { site } from "./site";

// Derivatif hanya berlaku untuk foto asli; mengganti src memakai aset baru langsung.
const isOriginal = site.heroImage.src === "/images/zx25r-original.jpg";
const sources = (kind: string, widths: number[], format: string) =>
  widths.map((width) => `/images/zx25r-${kind}-${width}.${format} ${width}w`).join(", ");

export const heroImage = {
  ...site.heroImage,
  mobileAvif: isOriginal ? sources("portrait", [480, 720, 960], "avif") : "",
  mobileWebp: isOriginal ? sources("portrait", [480, 720, 960], "webp") : "",
  desktopAvif: isOriginal ? sources("portrait", [480, 720, 960], "avif") : "",
  desktopWebp: isOriginal ? sources("portrait", [480, 720, 960], "webp") : "",
};
