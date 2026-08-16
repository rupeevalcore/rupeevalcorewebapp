import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Calendar } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { blogArticles, getArticleBySlug, type BlogSection } from "@/lib/blog-content";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found | RupeeValcore" };
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    author: {
      "@type": "Organization",
      name: "RupeeValcore Education Team",
      url: "https://www.rupeevalcore.in",
    },
    publisher: {
      "@type": "Organization",
      name: "RupeeValcore",
      logo: {
        "@type": "ImageObject",
        url: "https://www.rupeevalcore.in/icon.png",
      },
    },
    datePublished: article.publishedDate,
    dateModified: article.updatedDate ?? article.publishedDate,
    url: article.canonicalUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.canonicalUrl,
    },
  };

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      url: article.canonicalUrl,
      siteName: "RupeeValcore",
      locale: "en_IN",
      type: "article",
      publishedTime: article.publishedDate,
      modifiedTime: article.updatedDate ?? article.publishedDate,
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
    },
    alternates: { canonical: article.canonicalUrl },
    other: {
      "application/ld+json": JSON.stringify(articleSchema),
    },
  };
}

function renderSection(section: BlogSection, idx: number) {
  switch (section.type) {
    case "h2":
      return (
        <h2
          key={idx}
          className="font-heading font-bold text-2xl md:text-3xl text-foreground mt-12 mb-6"
        >
          {section.heading}
        </h2>
      );
    case "h3":
      return (
        <h3 key={idx} className="font-heading font-semibold text-xl text-foreground mt-8 mb-4">
          {section.heading}
        </h3>
      );
    case "paragraph":
      return (
        <p key={idx} className="text-muted-foreground leading-relaxed mb-6 text-base md:text-lg">
          {section.text}
        </p>
      );
    case "ul":
      return (
        <ul key={idx} className="space-y-3 mb-8 ml-0">
          {section.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-muted-foreground text-base md:text-lg">
              <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div
          key={idx}
          className="glass border border-accent/20 rounded-2xl p-6 md:p-8 my-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-10 translate-x-1/2 -translate-y-1/2" />
          <p className="text-foreground font-medium leading-relaxed text-base">
            {section.text}
          </p>
        </div>
      );
    case "disclaimer":
      return (
        <div
          key={idx}
          className="border-l-2 border-muted pl-6 my-10"
        >
          <p className="text-muted-foreground text-sm leading-relaxed italic">
            <strong className="not-italic font-semibold text-foreground/70">Disclaimer: </strong>
            {section.text}
          </p>
        </div>
      );
    default:
      return null;
  }
}

const audiencePageMap: Record<string, { href: string; label: string }> = {
  schools: { href: "/schools", label: "Financial Literacy Programs for Schools" },
  colleges: { href: "/colleges", label: "Financial Literacy Workshops for College Students" },
  corporate: { href: "/corporate-financial-wellness", label: "Corporate Financial Wellness Programs" },
  individual: { href: "/individual-learning", label: "Personal Finance Education & Mentoring" },
};

export default async function BlogArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const relatedPage = audiencePageMap[article.audience];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    author: {
      "@type": "Organization",
      name: "RupeeValcore Education Team",
      url: "https://www.rupeevalcore.in",
    },
    publisher: {
      "@type": "Organization",
      name: "RupeeValcore",
      logo: {
        "@type": "ImageObject",
        url: "https://www.rupeevalcore.in/icon.png",
      },
    },
    datePublished: article.publishedDate,
    dateModified: article.updatedDate ?? article.publishedDate,
    url: article.canonicalUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.canonicalUrl,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="container-rv pt-20 pb-2">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Financial Literacy Articles", href: "/blog" },
            { name: article.title, href: `/blog/${article.slug}` },
          ]}
        />
      </div>

      <section className="section-padding bg-transparent">
        <SectionContainer className="max-w-3xl">
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-12"
          >
            <ArrowLeft size={14} />
            All Financial Literacy Articles
          </Link>

          {/* Article header */}
          <header className="mb-12">
            <h1 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight mb-8">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground pb-8 border-b border-border/50">
              <div className="flex items-center gap-2 font-medium text-foreground">
                <div className="h-8 w-8 rounded-full bg-accent/15 text-accent font-heading font-black text-xs flex items-center justify-center border border-accent/30">
                  RV
                </div>
                {article.author}
              </div>
              <span className="text-border">·</span>
              <span className="flex items-center gap-1.5">
                <Calendar size={13} />
                {new Date(article.publishedDate).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
              <span className="text-border">·</span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} />
                {article.readingTimeMinutes} min read
              </span>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-8 font-medium">
              {article.excerpt}
            </p>
          </header>

          {/* Article body */}
          <div className="article-body">
            {article.content.map((section, idx) => renderSection(section, idx))}
          </div>

          {/* Related program CTA */}
          {relatedPage && (
            <div className="mt-16 glass border border-accent/20 rounded-3xl p-8 md:p-10 text-center">
              <h2 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-4">
                Ready to learn more?
              </h2>
              <p className="text-muted-foreground mb-8">
                RupeeValcore provides practical financial literacy workshops and mentoring.
                Education-only. No products sold.
              </p>
              <Link
                href={relatedPage.href}
                className="btn-accent inline-flex items-center gap-2"
              >
                {relatedPage.label}
                <ArrowRight size={16} />
              </Link>
            </div>
          )}

          {/* Back to blog */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              <ArrowLeft size={14} />
              Back to all articles
            </Link>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
