"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"
import restaurantData from "@/data/restaurant-data.json"

export function EventsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="evenements" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Événements & Animations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vivez des moments inoubliables au rythme de la culture camerounaise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {restaurantData.events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="overflow-hidden group h-full bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white/90 mb-2">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{event.date}</span>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-white">{event.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">{event.description}</p>
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    En savoir plus
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
