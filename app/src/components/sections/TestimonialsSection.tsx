import { Star, Quote } from "lucide-react";

const allTestimonials = [
  {
    text: "The financial literacy workshop completely changed my perspective on managing my income. The sessions were practical and incredibly easy to understand.",
    author: "Rajesh K.",
    role: "IT Professional, Chennai",
    context: "individual",
  },
  {
    text: "Our students benefited immensely from the tailored program. They now understand basic banking and stock market concepts that aren't taught in the standard curriculum.",
    author: "Priya S.",
    role: "School Principal",
    context: "schools",
  },
  {
    text: "The one-on-one sessions helped me demystify mutual funds and tax planning. Highly recommend Rupeevalcore for their unbiased, education-first approach.",
    author: "Arun M.",
    role: "Individual Learner",
    context: "individual",
  },
  {
    text: "A fantastic initiative for corporate wellness. Our employees feel much more confident about their financial decisions after the group workshops.",
    author: "Deepika R.",
    role: "HR Director",
    context: "corporate",
  },
  {
    text: "The placement readiness module gave our final year students a massive advantage. They now understand how to handle their first salary.",
    author: "Dr. Venkat Raman",
    role: "College Placement Officer",
    context: "colleges",
  }
];

export type Testimonial = {
  text: string;
  author: string;
  role: string;
  context?: string;
};

interface TestimonialsSectionProps {
  context?: "all" | "schools" | "colleges" | "corporate" | "individual";
  testimonials?: Testimonial[];
}

export default function TestimonialsSection({ context = "all", testimonials: customTestimonials }: TestimonialsSectionProps) {
  const testimonials = customTestimonials ? customTestimonials : (context === "all"
    ? allTestimonials
    : allTestimonials.filter(t => t.context === context));

  if (testimonials.length === 0) return null;

  return (
    <section className="section-padding overflow-hidden bg-transparent">
      <div className="container-rv">

        <div className="flex flex-col md:flex-row gap-12 items-end justify-between mb-16">
          <div className="max-w-xl">
            <h2 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-6">
              Hear from our learners
            </h2>
            <p className="text-lg text-muted-foreground">
              Real stories from individuals and institutions who have experienced our practical financial education workshops.
            </p>
          </div>
        </div>

        {/* CSS Marquee Carousel */}
        <div className="relative flex overflow-x-hidden w-full pb-8">
          <div className="flex gap-6 animate-marquee">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="glass p-8 rounded-3xl border border-white/5 w-[350px] md:w-[450px] flex-shrink-0 relative group hover:border-accent/30 transition-colors">
                <Quote className="absolute top-6 right-6 text-white/5 w-16 h-16 group-hover:text-accent/10 transition-colors" />
                <div className="flex gap-1 text-accent mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-foreground text-lg mb-8 relative z-10 leading-relaxed">
                  &quot;{t.text}&quot;
                </p>
                <div className="mt-auto relative z-10">
                  <div className="font-heading font-bold text-foreground">{t.author}</div>
                  <div className="text-sm text-accent">{t.role}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Fading Edges */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
