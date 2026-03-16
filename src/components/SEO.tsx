import { Helmet } from "react-helmet-async";

const SITE_URL = "https://placasnozap.com.br";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`;

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noindex?: boolean;
}

const SEO = ({
  title,
  description,
  path = "",
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_OG_IMAGE,
  noindex = false,
}: SEOProps) => {
  const canonical = `${SITE_URL}${path === "/" ? "" : path}`;
  const effectiveOgTitle = ogTitle ?? title;
  const effectiveOgDescription = ogDescription ?? description;
  const effectiveOgImage = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage.startsWith("/") ? "" : "/"}${ogImage}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:title" content={effectiveOgTitle} />
      <meta property="og:description" content={effectiveOgDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={effectiveOgImage} />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={effectiveOgTitle} />
      <meta name="twitter:description" content={effectiveOgDescription} />
      <meta name="twitter:image" content={effectiveOgImage} />
    </Helmet>
  );
};

export default SEO;
