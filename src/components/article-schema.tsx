/**
 * Article Schema Component
 * 
 * Generates JSON-LD structured data for articles/tutorials/projects
 * to improve SEO and enable rich snippets in search results.
 */

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  category?: "Project" | "Tutorial" | "Workshop" | "Documentation";
  keywords?: string[];
}

export function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  category = "Documentation",
  keywords = [],
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description: description,
    url: url,
    author: {
      "@type": "Person",
      "@id": "https://docs.dipakrathod.me/#person",
      name: "Dipak Rathod",
      url: "https://dipakrathod.me",
    },
    publisher: {
      "@type": "Person",
      "@id": "https://docs.dipakrathod.me/#person",
      name: "Dipak Rathod",
    },
    inLanguage: "en-US",
    articleSection: category,
    keywords: keywords.length > 0 ? keywords : undefined,
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || datePublished || new Date().toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
