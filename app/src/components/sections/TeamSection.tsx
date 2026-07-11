"use client";

import { motion } from "framer-motion";

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
  return (
    <section id="team" className="section-padding bg-background relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-accent/5 blur-[120px] rounded-full" />
      </div>

      <div className="container-rv relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading font-black text-4xl md:text-5xl text-foreground mb-6"
          >
            Founder & Team
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground"
          >
            Dedicated to financial education and awareness.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-accent/30 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center border border-accent/20 mb-6 group-hover:scale-105 transition-transform">
                <span className="font-heading font-black text-3xl text-accent">{member.avatar}</span>
              </div>
              
              <h3 className="font-heading font-bold text-2xl text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-accent font-medium mb-6">
                {member.role}
              </p>
              
              <div className="text-muted-foreground leading-relaxed flex-grow whitespace-pre-wrap">
                {member.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
