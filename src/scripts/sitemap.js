"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sitemap_1 = require("sitemap");
var fs_1 = require("fs");
var path_1 = require("path");
var hostname = "https://www.maxtron.ai";
var urls = [
    { url: "/", changefreq: sitemap_1.EnumChangefreq.DAILY, priority: 1.0 },
    { url: "/about", changefreq: sitemap_1.EnumChangefreq.MONTHLY, priority: 0.8 },
    { url: "/services", changefreq: sitemap_1.EnumChangefreq.MONTHLY, priority: 0.8 },
    { url: "/case-studies", changefreq: sitemap_1.EnumChangefreq.MONTHLY, priority: 0.8 },
    { url: "/contact", changefreq: sitemap_1.EnumChangefreq.MONTHLY, priority: 0.8 },
    // Add additional pages 
];
var publicDir = (0, path_1.resolve)(__dirname, "public");
// Ensure the public directory exists
if (!(0, fs_1.existsSync)(publicDir)) {
    (0, fs_1.mkdirSync)(publicDir);
}
var sitemapStream = new sitemap_1.SitemapStream({ hostname: hostname });
var writeStream = (0, fs_1.createWriteStream)("".concat(publicDir, "/sitemap.xml"));
sitemapStream.pipe(writeStream);
urls.forEach(function (item) { return sitemapStream.write(item); });
sitemapStream.end();
(0, sitemap_1.streamToPromise)(sitemapStream)
    .then(function (data) { return console.log("Sitemap generated:", data.toString()); })
    .catch(function (error) {
    console.error("Error generating sitemap:", error);
});
writeStream.on("error", function (err) {
    console.error("Write stream error:", err);
});
sitemapStream.on("error", function (err) {
    console.error("Sitemap stream error:", err);
});
