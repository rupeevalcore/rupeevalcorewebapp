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
  return (
    <section id="founder" className="section-padding bg-muted/20 relative overflow-hidden border-y border-border/40">
      <div className="container-rv relative z-10">
        
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-24 items-start mb-24">
          
          {/* Left Column: Formal Portrait & Credentials */}
          <div 
            className="flex flex-col space-y-8"
          >
            <div className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl border border-border shadow-md bg-card">
              <Image
                src="/images/founder-shanthi-chitrarasu.png"
                alt="Shanthi Chitrarasu, Founder of RupeeValcore"
                fill
                className="object-cover object-[55%_45%]"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 70vw, 100vw"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMB/at9nqAAAAAASUVORK5CYII="
              />
            </div>
            
            <div className="border-t-2 border-accent pt-6">
              <h3 className="font-heading font-black text-2xl text-foreground mb-1 tracking-tight">Shanthi Chitrarasu</h3>
              <p className="text-muted-foreground font-semibold tracking-wide uppercase text-sm mb-6">Founder</p>
              
              <div className="space-y-4">
                 <div>
                   <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Role</h4>
                   <p className="text-sm text-foreground font-medium">Financial Educator & Facilitator</p>
                 </div>
                 <div>
                   <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Focus</h4>
                   <p className="text-sm text-foreground font-medium">Core Financial Awareness</p>
                 </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: "Dean's Letter" / Formal Statement */}
          <div 
            className="flex flex-col lg:pt-8"
          >
            <div className="mb-12">
              <h2 className="font-heading font-bold text-sm tracking-widest uppercase text-accent mb-6">A Message from the Founder</h2>
              
              <div className="border-l-4 border-accent pl-8 py-2 mb-10 relative">
                {/* Decorative quote mark */}
                <div className="absolute -top-6 -left-4 text-7xl font-serif text-accent/20 pointer-events-none leading-none">&ldquo;</div>
                
                <p className="text-foreground text-xl md:text-2xl leading-relaxed font-serif text-balance">
                  &ldquo;Shanthi founded RupeeValcore with the objective of improving financial awareness among individuals who have not been exposed to basic money concepts.&rdquo;
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mt-8 border-t border-border/40 pt-12">
              <div>
                <h4 className="font-heading font-bold text-lg text-foreground mb-4">Our Mission</h4>
                <p className="text-muted-foreground text-base leading-relaxed">
                  The programmes are designed to explain financial topics in a simple, structured and easy-to-understand manner. The focus remains strictly on financial education and awareness, equipping you with the tools to navigate your own path.
                </p>
              </div>
              
              <div>
                <h4 className="font-heading font-bold text-lg text-foreground mb-4">Educational Philosophy</h4>
                <p className="text-muted-foreground text-base leading-relaxed">
                  We believe that financial literacy is a fundamental right. Our workshops do not provide investment advice, recommendations, or sell financial products. We empower you to make your own informed decisions through practical, unbiased education.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Leadership Team List - "Faculty" Style */}
        <div 
          className="mt-24 pt-16"
        >
          <div className="flex flex-col items-center justify-center mb-12 text-center">
            <h3 className="font-heading font-black text-3xl text-foreground tracking-tight mb-4">Leadership Team</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core facilitation and operational team ensures every programme is delivered with absolute clarity and institutional standard.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {teamMembers.slice(1).map((member, idx) => (
              <div
                 key={idx}
                 className="flex flex-col p-8 border border-border shadow-sm bg-card hover:shadow-md transition-shadow relative overflow-hidden"
              >
                 {/* Top Accent Line */}
                 <div className="absolute top-0 left-0 w-full h-1 bg-accent/60" />
                 
                 <h4 className="font-heading font-bold text-xl text-foreground mb-1">{member.name}</h4>
                 <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest mb-6">{member.role}</p>
                 <p className="text-foreground/80 leading-relaxed text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
