import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

/**
 * Breadcrumbs — visible navigation + BreadcrumbList JSON-LD structured data.
 *
 * The first item should always be { name: "Home", href: "/" }.
 * The last item represents the current page.
 */
export default function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  if (!items || items.length < 2) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://www.rupeevalcore.in${item.href}`,
    })),
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Visible breadcrumb nav */}
      <nav
        aria-label="Breadcrumb"
        className={`flex items-center flex-wrap gap-1 text-sm text-muted-foreground ${className}`}
      >
        <ol className="flex items-center flex-wrap gap-1" itemScope itemType="https://schema.org/BreadcrumbList">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li
                key={item.href}
                className="flex items-center gap-1"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {index > 0 && (
                  <ChevronRight size={14} className="text-muted-foreground/50 shrink-0" aria-hidden />
                )}
                {isLast ? (
                  <span
                    className="text-foreground font-medium"
                    itemProp="name"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-accent transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.name}</span>
                  </Link>
                )}
                <meta itemProp="position" content={String(index + 1)} />
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
