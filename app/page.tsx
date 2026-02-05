"use client";

import { motion } from "framer-motion";
import { Instagram, Leaf, Cpu } from "lucide-react";
import Link from "next/link";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-6 py-12 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-5">
        <Leaf className="w-32 h-32 text-foreground" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-5">
        <Cpu className="w-28 h-28 text-foreground" />
      </div>

      <main className="max-w-2xl w-full text-center z-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <LogoText />
        </motion.div>

        {/* Main message */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl text-foreground mb-6 leading-tight"
        >
          Algo hermoso está creciendo...
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-muted-foreground text-lg sm:text-xl mb-4 max-w-lg mx-auto leading-relaxed"
        >
          Combinamos la sabiduría de la carpintería tradicional con la
          innovación tecnológica para crear espacios perfectos para la niñes.
        </motion.p>

        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-display text-sm tracking-widest uppercase text-muted-foreground/70 mb-12"
        >
          Mobiliario evolutivo y funcional
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-24 h-px bg-border mx-auto mb-12"
        />

        {/* Features preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 text-sm text-muted-foreground"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <Leaf className="w-5 h-5 text-foreground/70" />
            </div>
            <span>Fabricado Artesanalmente</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <span className="text-foreground/70 font-serif text-lg">M</span>
            </div>
            <span>Filosofía Montessori</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <Cpu className="w-5 h-5 text-foreground/70" />
            </div>
            <span>Experiencia digital</span>
          </div>
        </motion.div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link
            href="https://www.instagram.com/raicesybits/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors font-display text-sm tracking-wide"
          >
            <Instagram className="w-5 h-5" />
            Seguinos en Instagram
          </Link>
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-xs text-muted-foreground/50"
        >
          Próximamente desde Mardel
        </motion.p>
      </main>
    </div>
  );
}

function LogoText() {
  return (
    <div className="flex items-center justify-center gap-1">
      <span className="font-serif text-4xl sm:text-5xl md:text-6xl text-foreground tracking-tight">
        Raíces
      </span>
      <span className="font-display text-3xl sm:text-4xl md:text-5xl text-muted-foreground font-light mx-2">
        &
      </span>
      <span className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground font-bold tracking-tight">
        Bits
      </span>
    </div>
  );
}
