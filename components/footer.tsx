"use client";

import { Bike, Clock, MapPin, Phone } from "lucide-react";
import restaurantData from "@/data/restaurant-data.json";

export function Footer() {
  const { restaurant } = restaurantData;

  return (
    <footer id="contact" className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* About - Wider Column */}
          <div className="lg:col-span-4">
            <h3 className="font-serif text-xl font-bold mb-4">
              {restaurant.name}
            </h3>
            <p className="text-white/80 leading-relaxed mb-6">
              {restaurant.description}
            </p>

            
          </div>

          {/* Hours */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-bold mb-4 flex items-center gap-2">
              <Clock size={20} />
              Horaires
            </h4>
            <div className="space-y-2 text-sm">
              {Object.entries(restaurant.hours).map(([day, hours]) => (
                <div key={day} className="flex justify-between gap-4">
                  <span className="capitalize text-white/80 min-w-[80px]">
                    {day}
                  </span>
                  <span className="text-white/90 font-medium text-right">
                    {hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-5">
            <h4 className="font-serif text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3 mb-6">
              <a
                href={`tel:${restaurant.contact.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
              >
                <Phone size={18} className="flex-shrink-0" />
                <span className="group-hover:underline">
                  {restaurant.contact.phone}
                </span>
              </a>
              <a
                href={`tel:${restaurant.contact.delivery.replace(/\s/g, "")}`}
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
              >
                <Bike size={18} className="flex-shrink-0" />
                <span className="group-hover:underline">
                  Livraison : {restaurant.contact.delivery}
                </span>
              </a>
              <div className="flex items-start gap-3 text-white/80">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="leading-relaxed">
                  {restaurant.contact.address}
                </span>
              </div>
            </div>

            {/* Map */}
            <div className="aspect-video bg-white/10 rounded-lg overflow-hidden max-w-md">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.3412!3d48.8606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUxJzM4LjIiTiAywrAyMCcyOC4zIkU!5e0!3m2!1sfr!2sfr!4v1234567890`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation du restaurant"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/70 text-sm">
          <p>
            © {new Date().getFullYear()} {restaurant.name}. Tous droits
            réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
