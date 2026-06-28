import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function usePortfolioAnimations(scopeRef) {
  useLayoutEffect(() => {
    const scope = scopeRef.current;
    if (!scope || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const ctx = gsap.context(() => {
      gsap.from(".utility-bar, .masthead, .primary-nav", {
        y: -16,
        opacity: 0,
        duration: 0.65,
        stagger: 0.08,
        ease: "power2.out",
      });

      gsap.from(".hero-kicker, .hero-intro h1, .hero-intro-footer", {
        y: 28,
        opacity: 0,
        duration: 0.75,
        stagger: 0.1,
        delay: 0.15,
        ease: "power3.out",
      });

      gsap.from(".hero-media, .hero-directory", {
        y: 34,
        opacity: 0,
        duration: 0.85,
        stagger: 0.12,
        delay: 0.35,
        ease: "power3.out",
      });

      gsap.utils.toArray(".motion-section").forEach((section) => {
        const heading = section.querySelector(".section-heading");
        const items = section.querySelectorAll(".motion-item");

        if (heading) {
          gsap.from(heading, {
            y: 24,
            opacity: 0,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: { trigger: section, start: "top 78%", once: true },
          });
        }

        if (items.length) {
          gsap.from(items, {
            y: 28,
            opacity: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: { trigger: section, start: "top 70%", once: true },
          });
        }
      });

      gsap.utils.toArray(".project-figure img, .project-chart img").forEach((image) => {
        gsap.fromTo(
          image,
          { scale: 1.035 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: image,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          },
        );
      });
    }, scope);

    return () => ctx.revert();
  }, [scopeRef]);
}
