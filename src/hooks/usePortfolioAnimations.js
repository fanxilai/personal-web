import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function usePortfolioAnimations(scopeRef) {
  useLayoutEffect(() => {
    const scope = scopeRef.current;
    if (!scope) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      scope.classList.add("motion-reduced");
      return undefined;
    }

    const ctx = gsap.context(() => {
      const openingEase = "expo.out";
      const scrollEase = "power4.out";

      gsap.set(".opening-curtain", { scaleY: 1, transformOrigin: "top center" });
      gsap.set(".site-header", { y: -84, opacity: 0 });
      gsap.set(".hero-video", { scale: 1.16, filter: "saturate(0.72) contrast(1.14) brightness(0.38)" });
      gsap.set(".hero-context", { y: 34, opacity: 0 });
      gsap.set(".hero-title-compact", {
        y: 96,
        scaleX: 0.82,
        opacity: 0,
        clipPath: "inset(0 100% 0 0)",
        transformOrigin: "left center",
      });
      gsap.set([".hero-summary", ".hero-actions", ".hero-panel", ".scroll-cue"], {
        y: 42,
        opacity: 0,
      });

      const opening = gsap.timeline({ defaults: { ease: openingEase } });
      opening
        .to(".opening-curtain", { scaleY: 0, duration: 1.45, delay: 0.18 })
        .to(".hero-video", { scale: 1.02, filter: "saturate(0.82) contrast(1.08) brightness(0.62)", duration: 2.1 }, 0.1)
        .to(".site-header", { y: 0, opacity: 1, duration: 1.05 }, 0.62)
        .to(".hero-context", { y: 0, opacity: 1, duration: 1.0 }, 0.8)
        .to(
          ".hero-title-compact",
          {
            y: 0,
            scaleX: 1,
            opacity: 1,
            clipPath: "inset(0 0% 0 0)",
            duration: 1.55,
          },
          0.92,
        )
        .to(".hero-summary", { y: 0, opacity: 1, duration: 1.15 }, 1.45)
        .to(".hero-actions", { y: 0, opacity: 1, duration: 1.1 }, 1.62)
        .to(".hero-panel", { y: 0, opacity: 1, duration: 1.2 }, 1.72)
        .to(".scroll-cue", { y: 0, opacity: 1, duration: 0.9 }, 2.2);

      gsap.to(".hero-video", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.9,
        },
      });

      gsap.utils.toArray(".motion-section").forEach((section) => {
        const marquee = section.querySelector(".section-marquee");
        const headingParts = section.querySelectorAll(".section-heading span, .section-heading h2, .section-index, .contact-shell h2");
        const cards = section.querySelectorAll(".motion-card, .carousel-container");
        const media = section.querySelectorAll(".project-media");
        const mediaImages = section.querySelectorAll(".project-media img");

        if (marquee) {
          gsap.set(marquee, {
            y: 130,
            scaleY: 0.72,
            opacity: 0,
            clipPath: "inset(0 0 100% 0)",
            transformOrigin: "left bottom",
          });
        }
        if (headingParts.length) gsap.set(headingParts, { y: 54, opacity: 0, clipPath: "inset(0 0 100% 0)" });
        if (cards.length) {
          gsap.set(cards, {
            y: 90,
            opacity: 0,
            rotateX: 5,
            transformPerspective: 1200,
            transformOrigin: "50% 80%",
            clipPath: "inset(18% 0 0 0 round 12px)",
          });
        }
        if (media.length) gsap.set(media, { clipPath: "inset(0 100% 0 0 round 12px)" });
        if (mediaImages.length) gsap.set(mediaImages, { scale: 1.08, yPercent: 4 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 74%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
          defaults: { ease: scrollEase },
        });

        if (marquee) {
          tl.to(marquee, {
            y: 0,
            scaleY: 1,
            opacity: 0.18,
            clipPath: "inset(0 0 0% 0)",
            duration: 1.25,
          });
        }
        if (headingParts.length) {
          tl.to(headingParts, { y: 0, opacity: 1, clipPath: "inset(0 0 0% 0)", duration: 1.0, stagger: 0.08 }, 0.18);
        }
        if (cards.length) {
          tl.to(cards, { y: 0, opacity: 1, rotateX: 0, clipPath: "inset(0% 0 0 0 round 12px)", duration: 1.18, stagger: 0.13 }, 0.5);
        }
        if (media.length) {
          tl.to(media, { clipPath: "inset(0 0% 0 0 round 12px)", duration: 1.15, stagger: 0.1 }, 0.58);
        }
        if (mediaImages.length) {
          tl.to(mediaImages, { scale: 1, yPercent: 0, duration: 1.4, stagger: 0.08 }, 0.66);
        }

        mediaImages.forEach((image) => {
          gsap.to(image, {
            yPercent: -5,
            ease: "none",
            scrollTrigger: {
              trigger: image.closest(".project-card") || section,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.85,
            },
          });
        });
      });

      ScrollTrigger.refresh();
    }, scope);

    return () => ctx.revert();
  }, [scopeRef]);
}
