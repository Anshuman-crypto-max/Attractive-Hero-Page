"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContentSections() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Ensure reduce motion handles appropriately (no slide, just fade)
    let mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Reveal sections
      const sections = gsap.utils.toArray(".reveal-section", container.current) as HTMLElement[];
      sections.forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 80,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        });
      });

      // Stagger feature cards
      const featureCards = gsap.utils.toArray(".feature-card", container.current) as HTMLElement[];
      if (featureCards.length > 0) {
        gsap.from(featureCards, {
          opacity: 0,
          y: 50,
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".features-container",
            start: "top 75%",
            toggleActions: "play none none reverse",
          }
        });
      }
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      const allElements = gsap.utils.toArray(".reveal-section, .feature-card", container.current) as HTMLElement[];
      allElements.forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          }
        });
      });
    });

  }, { scope: container });

  return (
    <div ref={container} className="relative w-full z-10 bg-[#030303] text-white">
      {/* 1. About / Introduction */}
      <section className="reveal-section relative py-20 md:py-32 px-6 lg:px-12 max-w-[90rem] mx-auto border-t border-white/[0.05]">
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          <h2 className="text-xs md:text-sm text-purple-400 tracking-[0.3em] uppercase mb-6 font-semibold">The Vision</h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
            We build digital experiences that <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">defy gravity</span>.
          </h3>
          <p className="text-neutral-400 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Our approach combines state-of-the-art frontend architecture with high-end motion design. Every interaction is engineered to feel natural, performant, and unforgettable. Welcome to the new standard of the web.
          </p>
        </div>
      </section>

      {/* 2. Features */}
      <section className="features-container relative py-20 md:py-32 px-6 lg:px-12 bg-white/[0.02] border-y border-white/[0.05]">
        <div className="max-w-[90rem] mx-auto">
          <h2 className="text-xs md:text-sm text-blue-400 tracking-[0.3em] uppercase mb-12 md:mb-16 font-semibold text-center reveal-section">Core Pillars</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            <div className="feature-card p-8 lg:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md shadow-xl hover:bg-white/[0.04] transition-colors duration-500">
              <div className="w-14 h-14 rounded-full bg-purple-500/20 flex items-center justify-center mb-8">
                <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl lg:text-2xl font-semibold mb-4 text-white">Fluid Motion</h4>
              <p className="text-neutral-400 text-sm lg:text-base leading-relaxed">Hardware-accelerated animations and scroll interactions that respond seamlessly to user input without sacrificing performance.</p>
            </div>

            <div className="feature-card p-8 lg:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md shadow-xl hover:bg-white/[0.04] transition-colors duration-500">
              <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mb-8">
                <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h4 className="text-xl lg:text-2xl font-semibold mb-4 text-white">Modern Architecture</h4>
              <p className="text-neutral-400 text-sm lg:text-base leading-relaxed">Built on the robust Next.js App Router for optimal SEO, server-side rendering, and scalable codebase structure.</p>
            </div>

            <div className="feature-card p-8 lg:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md shadow-xl hover:bg-white/[0.04] transition-colors duration-500">
              <div className="w-14 h-14 rounded-full bg-indigo-500/20 flex items-center justify-center mb-8">
                <svg className="w-6 h-6 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-xl lg:text-2xl font-semibold mb-4 text-white">Premium Aesthetics</h4>
              <p className="text-neutral-400 text-sm lg:text-base leading-relaxed">Carefully crafted glassmorphism, refined typography, and meticulous spacing designed to wow users at first glance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Call to Action */}
      <section className="reveal-section relative py-24 md:py-40 px-6 lg:px-12 text-center overflow-hidden">
        {/* Subtle background glow for CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[60vw] h-[60vh] bg-purple-900/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-0" />
        
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">Ready to Elevate?</h2>
          <p className="text-neutral-400 mb-10 md:mb-12 text-base md:text-xl font-light">Let's turn your ambitious ideas into an unparalleled digital reality.</p>
          <button className="px-8 md:px-10 py-4 md:py-5 bg-white text-black font-semibold rounded-full text-base md:text-lg hover:scale-105 hover:bg-neutral-200 transition-[transform,background-color] duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            Start a Project
          </button>
        </div>
      </section>
    </div>
  );
}
