"use client";

import { Clock, MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
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

            {/* Social Media */}
            <div>
              <h4 className="font-serif text-base font-bold mb-3">
                Suivez-nous
              </h4>
              <div className="flex gap-4">
                <a
                  href={restaurant.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href={restaurant.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href={restaurant.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="TikTok"
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="currentColor"
                  >
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                  </svg>
                </a>
              </div>
            </div>
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
                href={`tel:${restaurant.contact.phone}`}
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
              >
                <Phone size={18} className="flex-shrink-0" />
                <span className="group-hover:underline">
                  {restaurant.contact.phone}
                </span>
              </a>
              <a
                href={`mailto:${restaurant.contact.email}`}
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group break-all"
              >
                <Mail size={18} className="flex-shrink-0" />
                <span className="group-hover:underline">
                  {restaurant.contact.email}
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
