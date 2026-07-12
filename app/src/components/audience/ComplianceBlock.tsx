import { ShieldCheck } from "lucide-react";

export default function ComplianceBlock() {
  return (
    <div
      className="max-w-5xl mx-auto glass p-8 md:p-12 rounded-3xl border border-white/10 relative overflow-hidden mt-16 mb-8"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      
      <div className="text-center mb-8">
        <h4 className="font-heading font-black text-3xl md:text-4xl text-foreground mb-4">
          Strictly Educational.
        </h4>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
          RupeeValcore provides financial education and awareness programmes only. We do not offer investment advice, stock recommendations, or portfolio management services.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        {[
          "Education First",
          "No Product Sales",
          "No Commission Model"
        ].map((badge, idx) => (
          <div key={idx} className="flex items-center gap-3 p-4 md:p-5 rounded-2xl bg-white/5 border border-white/10 text-foreground font-semibold">
            <ShieldCheck className="text-accent shrink-0" size={24} />
            <span className="text-base md:text-lg">{badge}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
