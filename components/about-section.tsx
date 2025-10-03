"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Flame, Heart, Users } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Flame,
      title: "Recettes Authentiques",
      description: "Préparées selon les traditions ancestrales camerounaises",
    },
    {
      icon: Heart,
      title: "Ingrédients Frais",
      description: "Sélectionnés avec soin pour une qualité optimale",
    },
    {
      icon: Users,
      title: "Ambiance Conviviale",
      description: "Un accueil chaleureux dans un cadre authentique",
    },
  ]

  return (
    <section id="saveurs" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Une Expérience Culinaire Unique</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Découvrez l'authenticité de la cuisine camerounaise dans un cadre chaleureux et convivial. Chaque plat
            raconte une histoire, chaque saveur évoque une tradition.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                <feature.icon size={32} />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-pretty">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
