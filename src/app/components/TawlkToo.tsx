'use client';

import { useEffect } from "react";

export default function TawkTo() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/67ca7c83b3f4f5190f867514/1ilnfcp1o";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  return null;
}
