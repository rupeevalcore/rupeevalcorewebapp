"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    name: "Shanthi Chitrarasu",
    role: "Founder",
    avatar: "S",
    description: "Shanthi founded RupeeValcore with the objective of improving financial awareness among individuals who have not been exposed to basic money concepts.\n\nThe programmes are designed to explain financial topics in a simple, structured and easy-to-understand manner.\n\nThe focus remains strictly on financial education and awareness without providing investment advice, recommendations or financial products."
  },
  {
    name: "Chitrarasu P",
    role: "Operations & Administration",
    avatar: "C",
    description: "Responsible for workshop coordination, operational support, scheduling and institutional communication across schools, colleges and organizations."
  },
  {
    name: "Manikandan C",
    role: "Trainer",
    avatar: "M",
    description: "Responsible for educational session delivery, facilitation, simplified explanations and participant interaction through structured discussions and question-and-answer sessions."
  }
];

export default function TeamSection() {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <section id="founder" className="section-padding bg-transparent relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/5 blur-[80px] rounded-full" />
      </div>

      <div className="container-rv relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start mb-24">
          
          {/* Left Column: Image and Credentials */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col space-y-6"
          >
            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden border border-border/50 shadow-xl bg-muted/10">
              {/* Replace with actual founder image later */}
              <div className="absolute inset-0 flex items-center justify-center bg-accent/5 text-accent/30 font-heading text-xl">
                Photograph Placeholder
              </div>
            </div>
            <div>
              <h3 className="font-heading font-black text-3xl text-foreground mb-1">Shanthi Chitrarasu</h3>
              <p className="text-accent font-semibold tracking-wide uppercase text-sm mb-6">Founder</p>
              
              <div className="space-y-3">
                 <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">Credentials</h4>
                 <p className="text-sm text-foreground border-l-2 border-accent/40 pl-3">Financial Educator</p>
                 <p className="text-sm text-foreground border-l-2 border-accent/40 pl-3">Workshop Facilitator</p>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column: Story & Philosophy */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 flex flex-col space-y-12 lg:pt-8"
          >
            <div>
              <h4 className="font-heading font-bold text-2xl text-foreground mb-4">The Story</h4>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Shanthi founded RupeeValcore with the objective of improving financial awareness among individuals who have not been exposed to basic money concepts.
              </p>
            </div>
            
            <div className="h-px w-full bg-border/40" />
            
            <div>
              <h4 className="font-heading font-bold text-2xl text-foreground mb-4">Our Mission</h4>
              <p className="text-muted-foreground text-lg leading-relaxed">
                The programmes are designed to explain financial topics in a simple, structured and easy-to-understand manner. The focus remains strictly on financial education and awareness.
              </p>
            </div>

            <div className="h-px w-full bg-border/40" />
            
            <div>
              <h4 className="font-heading font-bold text-2xl text-foreground mb-4">Educational Philosophy</h4>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We believe that financial literacy is a fundamental right. Our workshops do not provide investment advice, recommendations, or sell financial products. We empower you to make your own informed decisions through practical, unbiased education.
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Leadership Team List */}
        <motion.div 
          initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 pt-16 border-t border-border/40"
        >
          <h3 className="font-heading font-black text-3xl text-foreground mb-12 text-center">Leadership Team</h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.slice(1).map((member, idx) => (
              <div
                 key={idx}
                 className="p-8 border border-border/40 rounded-2xl bg-transparent transition-colors hover:bg-muted/10"
              >
                 <h4 className="font-heading font-bold text-xl text-foreground mb-1">{member.name}</h4>
                 <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-4">{member.role}</p>
                 <p className="text-muted-foreground leading-relaxed text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
