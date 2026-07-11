"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Users, Presentation, Lightbulb, MessageSquare, X } from "lucide-react";

const BLUR_URL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOMrgcAAX0A81283nQAAAABJRU5ErkJggg=="; // Solid dark blue/gray

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
  limit?: number; // Optional limit to only show a few images (for Schools page)
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
    <section className={`section-padding relative bg-transparent/50 overflow-hidden ${className}`}>
      <div className="container-rv relative z-10">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading font-black text-3xl md:text-5xl text-foreground mb-6 tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                {subtitle}
              </p>
            )}
          </motion.div>
        </div>

        {/* Gallery Grid — Premium 5-image layout */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {/* Row 1: First image spans full width (hero panoramic view) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.7, ease: "easeOut" }}
            className="relative rounded-3xl overflow-hidden border border-white/10 group bg-white/5 aspect-[21/9] cursor-pointer"
            onClick={() => setSelectedImage(displayImages[0])}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-background to-muted -z-10" />
            <Image
              src={displayImages[0].src}
              alt={displayImages[0].alt}
              fill
              priority
              placeholder="blur"
              blurDataURL={displayImages[0].blurDataURL}
              className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.03]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>

          {/* Row 2: Three equal columns */}
          {displayImages.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {displayImages.slice(1, 4).map((img, idx) => (
                <motion.div
                  key={idx + 1}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (idx + 1) * 0.12, duration: 0.6, ease: "easeOut" }}
                  className="relative rounded-3xl overflow-hidden border border-white/10 group bg-white/5 aspect-[4/3] cursor-pointer"
                  onClick={() => setSelectedImage(img)}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-background to-muted -z-10" />
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    placeholder="blur"
                    blurDataURL={img.blurDataURL}
                    className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>
          )}

          {/* Row 3: Last image spans full width (if 5 images) */}
          {displayImages.length > 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
              className="relative rounded-3xl overflow-hidden border border-white/10 group bg-white/5 aspect-[21/9] cursor-pointer"
              onClick={() => setSelectedImage(displayImages[4])}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-background to-muted -z-10" />
              <Image
                src={displayImages[4].src}
                alt={displayImages[4].alt}
                fill
                placeholder="blur"
                blurDataURL={displayImages[4].blurDataURL}
                className="object-cover transition-transform duration-[800ms] ease-out group-hover:scale-[1.03]"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          )}
        </div>

        {/* Optional Stats overlay (Premium Addition) */}
        {showStats && (
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (idx * 0.1), duration: 0.5 }}
                className="glass p-6 rounded-2xl flex flex-col items-center justify-center text-center gap-4 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="p-3 bg-accent/10 rounded-xl text-accent">
                  <stat.icon size={24} strokeWidth={1.5} />
                </div>
                <p className="font-heading font-semibold text-sm md:text-base text-foreground">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        )}

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/50 hover:text-white transition-colors z-[110]"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-6xl aspect-[4/3] md:aspect-[21/9] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
