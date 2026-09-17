import { useEffect } from "react";
import { company } from "@/data/company";

interface PageMeta {
  title: string;
  description?: string;
}

export function usePageMeta({ title, description }: PageMeta) {
  useEffect(() => {
    const siteName = company.name;
    document.title = title === siteName ? siteName : `${title} — ${siteName}`;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && description) {
      metaDesc.setAttribute("content", description);
    } else if (description) {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    return () => {
      document.title = siteName;
    };
  }, [title, description]);
}
