import type { APIRoute } from "astro";
import { site } from "../data/site";

export const prerender = true;

export const GET: APIRoute = ({ url }) => {
  const origin = site.seo.siteUrl || url.origin;
  const homepage = new URL("/", origin).toString();
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${homepage}</loc>
  </url>
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
