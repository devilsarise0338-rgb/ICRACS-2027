"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

const images = [
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2070&auto=format&fit=crop",
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          speed={1500}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          className="h-full w-full"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
                style={{ backgroundImage: `url(${src})`, transition: 'transform 10s ease-out' }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-slate-900/70 z-10" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight text-white">
              <span className="text-primary font-extrabold tracking-tight">ICRACS</span> 2027
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mb-4 text-slate-200">
              International Conference on Recent Advances in
            </h2>
            <h3 className="text-xl md:text-2xl font-light text-slate-300">
              Artificial Intelligence, Computer Vision & Smart Systems
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-4 mb-10"
          >
            <div className="flex items-center gap-3 text-slate-300 text-lg">
              <MapPin className="h-6 w-6 text-primary" />
              <span>Poornima Institute of Engineering and Technology, Jaipur</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300 text-lg">
              <Calendar className="h-6 w-6 text-primary" />
              <span>August 27-28, 2027</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300 text-lg">
              <span className="flex h-2 w-2 rounded-full bg-green-500 ml-2" />
              <span className="ml-2 font-medium">Hybrid Mode</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button asChild size="lg" className="h-14 px-8 text-lg rounded-full shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all">
              <Link href="/registration">Register Now</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full bg-white/10 hover:bg-white/20 text-white border-white/30 backdrop-blur-md">
              <Link href="/call-for-papers">Submit Paper</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
