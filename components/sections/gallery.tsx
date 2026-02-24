'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const photos = [
    {
      src: '/images/IMG_5344.jpg',
      alt: 'Professional portrait',
      title: 'Professional',
    },
    {
      src: '/images/aesthetic.jpeg',
      alt: 'Travel look',
      title: 'Travel',
    },
    {
      src: '/images/headshot.jpeg',
      alt: 'Headshot',
      title: 'Headshot',
    },
    {
      src: '/images/gym.jpeg',
      alt: 'Fitness',
      title: 'Fitness',
    },
  ]

  const prevImage = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === 0 ? photos.length - 1 : selectedImage - 1)
  }

  const nextImage = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === photos.length - 1 ? 0 : selectedImage + 1)
  }

  return (
    <section id="gallery" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* 🔥 Section Header */}
        <div className="text-center space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Beyond Engineering
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            A glimpse beyond code — personality, discipline, and lifestyle.
          </p>

          <div className="w-20 h-[2px] mx-auto rounded-full bg-gradient-to-r from-transparent via-[hsl(var(--luxury-purple-2))] to-transparent" />
        </div>

        {/* 🔥 Gallery Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {photos.map((photo, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(index)}
              className="group relative h-80 md:h-[440px] rounded-3xl overflow-hidden cursor-pointer glass-card border border-white/10"
            >
              {/* Image */}
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-110"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition" />

              {/* Gloss hover glow */}
              {/* <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.25),transparent_60%)]" /> */}

              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-sm tracking-widest uppercase opacity-90">
                  {photo.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 🔥 MODAL */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-6 fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative w-full max-w-6xl h-[75vh] rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={photos[selectedImage].src}
                alt={photos[selectedImage].alt}
                fill
                className="object-contain"
              />

              {/* Close */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 neon-btn p-3 rounded-full"
              >
                <X size={18} />
              </button>

              {/* Prev */}
              <button
                onClick={prevImage}
                className="absolute left-6 top-1/2 -translate-y-1/2 neon-btn p-3 rounded-full"
              >
                <ChevronLeft size={22} />
              </button>

              {/* Next */}
              <button
                onClick={nextImage}
                className="absolute right-6 top-1/2 -translate-y-1/2 neon-btn p-3 rounded-full"
              >
                <ChevronRight size={22} />
              </button>

              {/* Caption */}
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <p className="text-white/80 text-sm tracking-widest uppercase">
                  {photos[selectedImage].title}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}