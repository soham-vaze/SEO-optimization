import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://aiseosolutions.demo/sitemap.xml",
  };
}


// robots.txt automatically generated
//test using http"//localhost:3000/robots.txt