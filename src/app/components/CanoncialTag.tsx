"use client"
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function CanonicalTag() {
  const pathname = usePathname();
  const baseUrl = "https://www.orionsols.com";

  useEffect(() => {
    const canonicalLink = document.querySelector("link[rel='canonical']");
    if (canonicalLink) {
      canonicalLink.setAttribute("href", `${baseUrl}${pathname}`);
    } else {
      const link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", `${baseUrl}${pathname}`);
      document.head.appendChild(link);
    }
  }, [pathname]);

  return null;
}
 