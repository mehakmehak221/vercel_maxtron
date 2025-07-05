import {
  SitemapStream,
  streamToPromise,
  SitemapItemLoose,
  EnumChangefreq,
} from "sitemap";
import { createWriteStream, existsSync, mkdirSync } from "fs";
import { resolve } from "path";

const hostname = "https://www.maxtron.ai";

const urls: SitemapItemLoose[] = [
  { url: "/", changefreq: EnumChangefreq.DAILY, priority: 1.0 },
  { url: "/about", changefreq: EnumChangefreq.MONTHLY, priority: 0.8 },
  { url: "/services", changefreq: EnumChangefreq.MONTHLY, priority: 0.8 },
  { url: "/case-studies", changefreq: EnumChangefreq.MONTHLY, priority: 0.8 },
  { url: "/contact", changefreq: EnumChangefreq.MONTHLY, priority: 0.8 },
  // Add additional pages here
];

const publicDir = resolve(__dirname, "public");

// Ensure the public directory exists
if (!existsSync(publicDir)) {
  mkdirSync(publicDir);
}

const sitemapStream = new SitemapStream({ hostname });

const writeStream = createWriteStream(`${publicDir}/sitemap.xml`);
sitemapStream.pipe(writeStream);

urls.forEach((item) => sitemapStream.write(item));

sitemapStream.end();

streamToPromise(sitemapStream)
  .then((data) => console.log("Sitemap generated:", data.toString()))
  .catch((error) => {
    console.error("Error generating sitemap:", error);
  });

writeStream.on("error", (err) => {
  console.error("Write stream error:", err);
});

sitemapStream.on("error", (err) => {
  console.error("Sitemap stream error:", err);
});
