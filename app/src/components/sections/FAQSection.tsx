"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

const allFaqs = [
  {
    q: "Who can attend the financial literacy workshops?",
    a: "Our programs are tailored for different audiences. We have specific modules for school students, college goers, corporate employees, and individuals. No prior financial knowledge is required for the beginner levels.",
    context: ["all"]
  },
  {
    q: "Do you offer online sessions or only in-person in Chennai?",
    a: "We offer both! While we conduct in-person group sessions across schools, colleges, and corporates in Chennai, all our workshops and 1-to-1 sessions are also available online for participants anywhere.",
    context: ["all", "schools", "colleges", "corporate", "individual"]
  },
  {
    q: "Are you selling any financial products or mutual funds?",
    a: "Absolutely not. Rupeevalcore operates strictly on an 'Education First' model. We do not sell insurance, mutual funds, or any financial products, nor do we earn commissions. Our sole focus is unbiased financial education.",
    context: ["all", "schools", "colleges", "corporate", "individual"]
  },
  {
    q: "How do the school programs align with the curriculum?",
    a: "Our modules align with the NEP 2020 guidelines emphasizing life skills and financial literacy. We teach practical concepts like banking, saving, and basic economics in an age-appropriate, gamified format.",
    context: ["schools"]
  },
  {
    q: "Do you offer placement readiness programs for final year students?",
    a: "Yes. Our college modules specifically focus on transition-to-workplace finances, including salary structuring, taxation basics, and starting an investment journey early.",
    context: ["colleges"]
  },
  {
    q: "Can the workshops be customized for our employees?",
    a: "Yes, we tailor the corporate financial wellness programs based on the demographic of your employees. We cover everything from tax planning to mutual funds and retirement basics.",
    context: ["corporate"]
  },
  {
    q: "How can I book a session for my organization?",
    a: "You can click on 'Find The Right Program' or reach out to us via WhatsApp. We will schedule a quick consultation to understand your audience and customize the curriculum accordingly.",
    context: ["all", "schools", "colleges", "corporate"]
  },
  {
    q: "How does the 1-to-1 family session work?",
    a: "Family sessions are private online or offline consultations where we assess your current financial awareness and educate you on building robust financial frameworks without selling any products.",
    context: ["individual"]
  }
];

interface FAQSectionProps {
  context?: "all" | "schools" | "colleges" | "corporate" | "individual";
  faqs?: {q: string, a: string}[];
}

export default function FAQSection({ context = "all", faqs: customFaqs }: FAQSectionProps) {
  const faqs = customFaqs ? customFaqs : allFaqs.filter(faq => faq.context.includes(context));

  if (faqs.length === 0) return null;

  return (
    <section id="faq" className="section-padding bg-transparent/50 relative">
      <div className="container-rv max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our financial literacy programs.
          </p>
        </div>

        <div>
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <Accordion.Item
                key={i}
                value={`item-${i}`}
                className="glass rounded-2xl border border-white/5 overflow-hidden transition-all data-[state=open]:border-accent/30"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex flex-1 items-center justify-between w-full p-6 font-heading font-bold text-left text-lg text-foreground group">
                    {faq.q}
                    <ChevronDown
                      className="text-muted-foreground transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180 group-data-[state=open]:text-accent shrink-0 ml-4"
                      aria-hidden
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                  <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                    {faq.a}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}
