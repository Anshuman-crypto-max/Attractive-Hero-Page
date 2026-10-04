"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();

    mm.add({
      isDesktop: "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      isMobile: "(max-width: 1023px) and (prefers-reduced-motion: no-preference)",
      isReduced: "(prefers-reduced-motion: reduce)"
    }, (context) => {
      let { isDesktop, isMobile, isReduced } = context.conditions as any;

      if (isReduced) {
        const tl = gsap.timeline();
        tl.from(".hero-title-word, .hero-desc, .hero-stat, .hero-visual-entrance", {
          opacity: 0,
          duration: 1.2,
          stagger: 0.2,
          ease: "power2.out",
        });

        gsap.to("#heroVisual", {
          opacity: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "+=1000",
            scrub: true,
            pin: true,
          }
        });
        return;
      }

      // Shared Entrance
      const tl = gsap.timeline();
      
      tl.from(".hero-title-word", {
        y: 50,
        opacity: 0,
        duration: 1.4,
        stagger: 0.15,
        ease: "power3.out",
      })
      .from(".hero-desc", {
        y: 20,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      }, "-=0.9")
      .from(".hero-stat", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      }, "-=0.8");
      
      gsap.from(".hero-visual-entrance", {
        y: 60,
        scale: 0.92,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        delay: 0.2
      });

      if (isDesktop) {
        // Desktop Pinning Scroll Animation
        const scrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "+=1500",
            scrub: 1,
            pin: true,
          }
        });

        scrollTl.to("#heroVisual", {
          xPercent: -5,
          yPercent: 5,
          scale: 0.95,
          rotation: -2,
          ease: "sine.inOut",
        })
        .to("#heroVisual", {
          xPercent: -12,
          yPercent: 12,
          scale: 0.88,
          rotation: -4,
          opacity: 0.7,
          ease: "sine.inOut",
        });
      } else if (isMobile) {
        // Mobile Natural Scroll (No Pinning)
        gsap.to("#heroVisual", {
          yPercent: 15,
          scale: 0.9,
          opacity: 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: container.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          }
        });
      }
    });

  }, { scope: container });

  return (
    <section ref={container} className="relative min-h-screen w-full flex flex-col overflow-hidden bg-[#030303] text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 z-0" />
      <div className="bg-noise opacity-80 z-0" />
      
      {/* Ambient Lighting Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vh] bg-purple-900/15 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vh] bg-blue-900/15 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vh] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#030303]/40 to-[#030303] pointer-events-none z-0" />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-[95rem] mx-auto px-6 lg:px-12 py-16 md:py-20 flex flex-col lg:flex-row items-center justify-center flex-1 h-full min-h-screen">
        
        {/* Left Column: Text & Stats */}
        <div className="w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left z-20 shrink-0">
          
          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] xl:text-[8rem] font-extrabold tracking-[0.1em] md:tracking-[0.25em] uppercase leading-[0.85] mb-6 md:mb-8 flex flex-col">
            <span className="hero-title-word block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-500 pb-2">Welcome</span>
            <span className="hero-title-word block text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-300 to-neutral-700">Itzfizz</span>
          </h1>
          
          {/* Sub-paragraph */}
          <p className="hero-desc max-w-lg text-base md:text-lg lg:text-xl text-neutral-400 font-light mb-12 leading-relaxed">
            Elevating digital experiences with cutting-edge design and seamless scroll-driven interactions. Discover the future of web architecture.
          </p>

          {/* Statistics Section */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full pt-4">
            <div className="hero-stat flex-1 flex flex-col items-center lg:items-start p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
              <span className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-2 tracking-tight">92<span className="text-purple-400">%</span></span>
              <span className="text-[10px] lg:text-xs text-neutral-500 uppercase tracking-widest font-semibold">Satisfaction</span>
            </div>

            <div className="hero-stat flex-1 flex flex-col items-center lg:items-start p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
              <span className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-2 tracking-tight">78<span className="text-blue-400">%</span></span>
              <span className="text-[10px] lg:text-xs text-neutral-500 uppercase tracking-widest font-semibold">Performance</span>
            </div>

            <div className="hero-stat flex-1 flex flex-col items-center lg:items-start p-6 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
              <span className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-2 tracking-tight">4.9<span className="text-purple-400">/5</span></span>
              <span className="text-[10px] lg:text-xs text-neutral-500 uppercase tracking-widest font-semibold">Rating</span>
            </div>
          </div>
        </div>

        {/* Right/Center Column: Visual Area */}
        <div className="w-full lg:w-7/12 flex items-center justify-center lg:justify-end mt-20 lg:mt-0 relative z-10 pointer-events-none">
          {/* Main Visual Image Wrapper for ScrollTrigger */}
          <div 
            id="heroVisual"
            className="relative w-full max-w-[900px] flex items-center justify-center will-change-transform transform-gpu"
          >
             {/* Inner Wrapper for Entrance Animation to avoid conflicts */}
             <div className="hero-visual-entrance relative w-full flex items-center justify-center will-change-transform transform-gpu">
               {/* High-end ambient glow behind the car */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.15)_0%,rgba(37,99,235,0.1)_50%,transparent_100%)] rounded-full blur-[60px] mix-blend-screen" />
               
               {/* The High-Quality Car Visual */}
               <Image 
                 src="/car.jpg" 
                 alt="Sleek Sports Car" 
                 width={1200}
                 height={1200}
                 className="object-contain w-full h-auto drop-shadow-[0_20px_50px_rgba(139,92,246,0.2)] mix-blend-screen"
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 900px"
                 priority
               />
             </div>
          </div>
        </div>

      </div>
    </section>
  );
}
