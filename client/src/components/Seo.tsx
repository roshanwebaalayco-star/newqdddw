import { useEffect } from "react";

interface JsonLdConfig {
  type: string;
  data: Record<string, unknown>;
}

interface SeoProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  jsonLd?: JsonLdConfig[];
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  const element = document.head.querySelector<HTMLMetaElement>(selector) ?? document.createElement("meta");
  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
  if (!element.parentElement) {
    document.head.appendChild(element);
  }
}

export function Seo({ title, description, canonical, ogImage, jsonLd }: SeoProps) {
  useEffect(() => {
    document.title = title;

    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });

    if (ogImage) {
      upsertMeta('meta[property="og:image"]', { property: "og:image", content: ogImage });
      upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: ogImage });
    }

    if (canonical) {
      let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = canonical;
    }

    const jsonLdElements: HTMLScriptElement[] = [];
    if (jsonLd?.length) {
      jsonLd.forEach((entry) => {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.text = JSON.stringify({
          "@context": "https://schema.org",
          "@type": entry.type,
          ...entry.data,
        });
        document.head.appendChild(script);
        jsonLdElements.push(script);
      });
    }

    return () => {
      jsonLdElements.forEach((script) => {
        if (script.parentElement) {
          script.parentElement.removeChild(script);
        }
      });
    };
  }, [title, description, canonical, ogImage, JSON.stringify(jsonLd)]);

  return null;
}
