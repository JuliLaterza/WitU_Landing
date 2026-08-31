import type { Metadata } from "next";

export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://witu.me";
export const siteName = "Wit Ü";
export const defaultOgImage = "/assets/images/encuentro1.webp";

export const seoPages = [
  {
    path: "/",
    priority: 1,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/sumar-evento",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/safety",
    priority: 0.5,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/privacidad",
    priority: 0.3,
    changeFrequency: "yearly" as const,
  },
  {
    path: "/terminos",
    priority: 0.3,
    changeFrequency: "yearly" as const,
  },
  {
    path: "/delete-account",
    priority: 0.2,
    changeFrequency: "yearly" as const,
  },
];

type SeoMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
};

export const buildSeoMetadata = ({
  title,
  description,
  path,
  keywords = [],
  image = defaultOgImage,
}: SeoMetadataInput): Metadata => {
  const canonical = path === "/" ? siteUrl : `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName,
      type: "website",
      locale: "es_AR",
      images: [
        {
          url: image,
          alt: `${siteName} - ${description}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
};
