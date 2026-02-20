'use client'

import { useState } from 'react'
import Image from 'next/image'

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  // 🔥 Replace these filenames with your real images inside /public/images
  const photos = [
    {
      src: '/images/IMG_5344.jpg',
      alt: 'Professional portrait',
      title: 'Professional Shoot',
    },
    {
      src: '/images/aesthetic.jpeg',
      alt: 'Office look',
      title: 'Travel',
    },
    {
      src: '/images/headshot.jpeg',
      alt: 'Confident tech look',
      title: 'Headshot',
    },
    {
      src: '/images/gym.jpeg',
      alt: 'Clean headshot',
      title: 'Fitness',
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Beyond Engineering
          </h2>

          <p className="text-lg text-muted-foreground">
            A glimpse beyond the code
          </p>

          <div className="h-[2px] w-16 bg-white/20 mx-auto rounded-full" />
        </div>

        {/* Gallery */}
        <div className="grid md:grid-cols-2 gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative h-80 md:h-[420px] rounded-2xl overflow-hidden border border-white/10 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              {/* Image */}
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />

              {/* Title bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white text-sm tracking-wide opacity-80">
                  {photo.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal viewer */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-5xl w-full h-[70vh] rounded-xl overflow-hidden"
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
                className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-3 rounded-full"
              >
                ✕
              </button>

              {/* Navigation */}
              <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-6">
                <button
                  onClick={() =>
                    setSelectedImage(
                      selectedImage === 0 ? photos.length - 1 : selectedImage - 1
                    )
                  }
                  className="bg-black/60 hover:bg-black/80 text-white px-4 py-2 rounded-lg"
                >
                  Prev
                </button>

                <button
                  onClick={() =>
                    setSelectedImage(
                      selectedImage === photos.length - 1 ? 0 : selectedImage + 1
                    )
                  }
                  className="bg-black/60 hover:bg-black/80 text-white px-4 py-2 rounded-lg"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
