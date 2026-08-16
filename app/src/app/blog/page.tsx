import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { blogArticles } from "@/lib/blog-content";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export const metadata: Metadata = {
  title: "Financial Literacy Articles & Guides | RupeeValcore",
  description:
    "Practical financial literacy articles for school students, college graduates, employees and individuals in India. Learn money management, salary planning, tax basics, and financial wellbeing.",
  openGraph: {
    title: "Financial Literacy Articles & Guides | RupeeValcore",
    description:
      "Practical financial literacy guides for school students, college graduates, employees and individuals in India.",
    url: "https://www.rupeevalcore.in/blog",
    siteName: "RupeeValcore",
    locale: "en_IN",
    type: "website",
  },
  alternates: { canonical: "https://www.rupeevalcore.in/blog" },
};

const audienceLabels: Record<string, string> = {
  schools: "For Schools",
  colleges: "For College Students",
  corporate: "For Employees",
  individual: "For Individuals",
};

const audienceColors: Record<string, string> = {
  schools: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
  colleges: "text-blue-500 bg-blue-500/10 border-blue-500/20",
  corporate: "text-cyan-500 bg-cyan-500/10 border-cyan-500/20",
  individual: "text-orange-500 bg-orange-500/10 border-orange-500/20",
};

export default function BlogIndexPage() {
  return (
    <>
      <div className="container-rv pt-20 pb-2">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Financial Literacy Articles", href: "/blog" },
          ]}
        />
      </div>

      <section className="section-padding bg-transparent">
        <SectionContainer>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block text-xs font-heading font-bold uppercase tracking-widest text-accent mb-3">
              Financial Education
            </span>
            <h1 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-6">
              Financial Literacy Articles & Guides
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Practical, non-advisory financial education for school students, college graduates,
              working professionals and individuals. No product selling. No hidden agenda. Just useful
              financial knowledge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogArticles.map((article) => (
              <article
                key={article.slug}
                className="glass p-8 rounded-3xl border border-white/5 hover:border-accent/30 transition-colors flex flex-col group"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border ${
                      audienceColors[article.audience]
                    }`}
                  >
                    {audienceLabels[article.audience]}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock size={12} />
                    {article.readingTimeMinutes} min read
                  </span>
                </div>

                <h2 className="font-heading font-bold text-xl text-foreground mb-4 leading-snug group-hover:text-accent transition-colors">
                  <Link href={`/blog/${article.slug}`}>{article.title}</Link>
                </h2>

                <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <div className="text-xs font-medium text-foreground">{article.author}</div>
                    <div className="text-xs text-muted-foreground">
                      {new Date(article.publishedDate).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all"
                    aria-label={`Read ${article.title}`}
                  >
                    <BookOpen size={14} />
                    Read article
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-20 glass p-8 md:p-12 rounded-3xl border border-accent/20 text-center">
            <h2 className="font-heading font-black text-2xl md:text-3xl text-foreground mb-4">
              Want Practical Financial Literacy for Your Organisation?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              RupeeValcore conducts financial literacy workshops for schools, colleges, companies
              and individuals in Chennai. Education-only. No products sold.
            </p>
            <Link
              href="/"
              className="btn-accent inline-flex items-center gap-2"
            >
              Find the Right Program <ArrowRight size={16} />
            </Link>
          </div>
        </SectionContainer>
      </section>
    </>
  );
}
