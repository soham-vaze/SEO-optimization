import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://aiseosolutions.demo",
    },
    {
      url: "https://aiseosolutions.demo/services",
    },
    {
      url: "https://aiseosolutions.demo/blog",
    },
    {
      url: "https://aiseosolutions.demo/about",
    },
    {
      url: "https://aiseosolutions.demo/contact",
    },
  ];
}

//test: http://localhost:3000/sitemap.xml