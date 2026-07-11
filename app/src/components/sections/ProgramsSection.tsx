"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, User, ChevronRight } from "lucide-react";

const audiences = [
  { photoPos: "top left", title: "For Schools", desc: "Build early financial habits for students.", link: "/schools", color: "text-emerald-500", glow: "from-emerald-500/20" },
  { photoPos: "top right", title: "For Colleges", desc: "Prepare students for real-world finances.", link: "/colleges", color: "text-sapphire-500", glow: "from-sapphire-500/20" },
  { photoPos: "bottom left", title: "For Corporates", desc: "Enhance employee financial wellness.", link: "/corporate-financial-wellness", color: "text-cyan-500", glow: "from-cyan-500/20" },
  { photoPos: "bottom right", title: "For Individuals", desc: "1-on-1 personalized financial literacy.", link: "/individual-learning", color: "text-orange-500", glow: "from-orange-500/20" },
];

const levels = [
  { name: "Beginner", desc: "Default path. No prior knowledge required.", active: true },
  { name: "Intermediate", desc: "Optional progression. Deeper concepts.", active: false },
  { name: "Advanced", desc: "Custom institutional programs.", active: false },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="section-padding bg-background relative">
      <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
      <div className="container-rv relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading font-black text-4xl md:text-5xl text-foreground mb-6">
              Tailored Programs
            </h2>
            <p className="text-lg text-muted-foreground">
              We design our workshops to fit the specific needs of different audiences, from school students to working professionals.
            </p>
          </motion.div>
        </div>

        {/* Audiences Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {audiences.map((aud, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link 
                href={aud.link}
                className="block glass p-8 rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-300 group h-full relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${aud.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full`} />
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity translate-x-4 group-hover:translate-x-0 z-10">
                  <ChevronRight className={aud.color} />
                </div>
                
                <div className="relative w-full aspect-[4/3] mb-6 rounded-2xl overflow-hidden shadow-2xl group-hover:scale-105 transition-transform duration-500">
                  <div 
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url('/collage_photos.jpg')`,
                      backgroundSize: '200% 200%',
                      backgroundPosition: aud.photoPos
                    }}
                  />
                </div>
                
                <h3 className="font-heading font-bold text-xl text-foreground mb-3 relative z-10">{aud.title}</h3>
                <p className="text-muted-foreground relative z-10">{aud.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Levels & Formats */}
        <div className="grid lg:grid-cols-2 gap-12">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl border border-white/5"
          >
            <h3 className="font-heading font-bold text-2xl text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm">1</span>
              Learning Levels
            </h3>
            <div className="space-y-4">
              {levels.map((lvl, i) => (
                <div key={i} className={`p-5 rounded-2xl border ${lvl.active ? 'border-accent bg-accent/5' : 'border-white/5 bg-white/5'}`}>
                  <h4 className={`font-heading font-bold mb-1 ${lvl.active ? 'text-accent' : 'text-foreground'}`}>{lvl.name}</h4>
                  <p className="text-sm text-muted-foreground">{lvl.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-3xl border border-white/5 flex flex-col"
          >
            <h3 className="font-heading font-bold text-2xl text-foreground mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm">2</span>
              Delivery Formats
            </h3>
            
            <div className="grid gap-6 flex-1">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent border border-white/5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary text-accent"><Users size={24} /></div>
                  <h4 className="font-heading font-bold text-xl text-foreground">Group Sessions</h4>
                </div>
                <p className="text-muted-foreground">Interactive workshops designed for Schools, Colleges, and Corporates. Focuses on peer learning and group activities.</p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent border border-white/5">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary text-accent"><User size={24} /></div>
                  <h4 className="font-heading font-bold text-xl text-foreground">1-to-1 Sessions</h4>
                </div>
                <p className="text-muted-foreground">Personalized attention for Individuals, Families, and Professionals focusing on specific financial awareness needs.</p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
