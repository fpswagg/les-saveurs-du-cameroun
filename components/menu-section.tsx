"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Flame } from "lucide-react"
import restaurantData from "@/data/restaurant-data.json"

export function MenuSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCategory, setSelectedCategory] = useState("Tous")

  const categories = ["Tous", "Entrées", "Plats Principaux", "Desserts"]

  const filteredMenu =
    selectedCategory === "Tous"
      ? restaurantData.menu
      : restaurantData.menu.filter((item) => item.category === selectedCategory)

  return (
    <section id="menu" ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Notre Menu</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Des plats traditionnels préparés avec passion et authenticité
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-foreground hover:bg-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMenu.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer h-full bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    {item.spicy && (
                      <Badge className="bg-primary text-primary-foreground">
                        <Flame size={14} className="mr-1" />
                        Épicé
                      </Badge>
                    )}
                    {item.vegetarian && <Badge className="bg-secondary text-secondary-foreground">Végétarien</Badge>}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-serif text-xl font-bold text-foreground">{item.name}</h3>
                    <span className="font-serif text-lg font-bold text-primary">{item.price}€</span>
                  </div>
                  <p className="text-muted-foreground text-pretty leading-relaxed">{item.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
