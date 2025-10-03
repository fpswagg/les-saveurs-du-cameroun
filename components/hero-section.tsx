"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section id="accueil" className="relative h-screen flex items-center justify-center overflow-hidden bg-[#1a1410]">
      <div className="absolute inset-0">
        {/* Large decorative circles */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#C85A3C] opacity-10 blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[#D4A574] opacity-15 blur-3xl -translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full bg-[#2F4F2F] opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2" />

        {/* Subtle dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #D4A574 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-[#D4A574] text-sm md:text-base uppercase tracking-[0.3em] mb-4 font-medium">
            Restaurant Camerounais Authentique
          </p>
          <h1 className="font-serif text-3xl md:text-3xl font-bold text-white mb-6 text-balance">
            Les Saveurs du Cameroun
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto text-pretty">
            Voyage culinaire au cœur de l'Afrique. Découvrez l'authenticité de la cuisine camerounaise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Découvrir le Menu
            </Button>
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Réserver une Table
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}>
          <ChevronDown size={32} className="text-white" />
        </motion.div>
      </motion.div>
    </section>
  )
}
