"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Users, Presentation, Lightbulb, MessageSquare, X } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";

const BLUR_URL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOMrgcAAX0A81283nQAAAABJRU5ErkJggg==";

const images = [
  { src: "/images/workshops/gallery-workshop-01.webp", alt: "Financial literacy workshop delivered to students during an interactive session.", blurDataURL: BLUR_URL },
  { src: "/images/workshops/gallery-workshop-02.webp", alt: "RupeeValcore expert delivering a live financial presentation to a classroom.", blurDataURL: BLUR_URL },
  { src: "/images/workshops/gallery-workshop-03.webp", alt: "Large auditorium filled with students learning essential financial literacy concepts.", blurDataURL: BLUR_URL },
  { src: "/images/workshops/gallery-workshop-04.webp", alt: "Live presentation explaining stock market basics and financial planning on screen.", blurDataURL: BLUR_URL },
  { src: "/images/workshops/gallery-workshop-05.webp", alt: "Interactive live Q&A session focused on practical financial decision making.", blurDataURL: BLUR_URL },
];

const stats = [
  { label: "500+ Students Engaged", icon: Users },
  { label: "Interactive Learning Sessions", icon: Presentation },
  { label: "Financial Literacy Workshops", icon: Lightbulb },
  { label: "Live Q&A Discussions", icon: MessageSquare },
];

interface WorkshopGalleryProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  className?: string;
  showStats?: boolean;
}

export default function WorkshopGallery({ 
  title = "Real Learning Experiences", 
  subtitle = "Real financial literacy workshops delivered for students through interactive learning experiences and practical discussions.",
  limit,
  className = "",
  showStats = true
}: WorkshopGalleryProps) {

  const displayImages = limit ? images.slice(0, limit) : images;
  const [selectedImage, setSelectedImage] = useState<{src: string, alt: string} | null>(null);

  return (
    <section className={`section-padding relative bg-transparent overflow-hidden ${className}`}>
      <SectionContainer>
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-black text-3xl md:text-5xl text-foreground mb-6 tracking-tight text-balance">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>

        {/* Horizontal Scrolling Gallery for Mobile / Masonry for Desktop */}
        <div className="flex overflow-x-auto pb-8 -mx-5 px-5 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 snap-x snap-mandatory hide-scrollbar">
          {displayImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`
                relative rounded-[24px] overflow-hidden group bg-muted aspect-[4/3] cursor-pointer snap-center shrink-0 w-[85vw] sm:w-auto
                ${idx === 0 || idx === 3 ? "sm:col-span-2 lg:col-span-2 aspect-[21/9]" : ""}
              `}
              onClick={() => setSelectedImage(img)}
            >
              {/* Skeleton Pulse */}
              <div className="absolute inset-0 bg-muted animate-pulse -z-10" />
              
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={idx === 0}
                quality={85}
                placeholder="blur"
                blurDataURL={img.blurDataURL}
                className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        {showStats && (
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, idx) => (
               <div key={idx} className="glass p-6 rounded-[24px] flex flex-col items-center justify-center text-center gap-4 transition-transform duration-300 hover:-translate-y-1">
                <div className="h-12 w-12 bg-accent/10 rounded-[18px] text-accent flex items-center justify-center">
                  <stat.icon size={24} strokeWidth={1.5} />
                </div>
                <p className="font-heading font-semibold text-sm md:text-base text-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}

      </SectionContainer>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 h-12 w-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-[110]"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-6xl aspect-[4/3] md:aspect-[21/9] rounded-[24px] overflow-hidden bg-muted"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0 bg-muted animate-pulse -z-10" />
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                quality={85}
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
