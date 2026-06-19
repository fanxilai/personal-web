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
      const scrollEase = "power3.out";

      gsap.set(".opening-curtain", { scaleY: 1, transformOrigin: "top center" });
      gsap.set(".site-header", { y: -36, opacity: 0 });
      gsap.set(".hero-video", { scale: 1.12, yPercent: -3, filter: "saturate(0.74) contrast(1.03) brightness(0.42)" });
      gsap.set(".hero-name", { y: 18, opacity: 0 });
      gsap.set(".hero-title", {
        y: 90,
        scaleX: 0.9,
        opacity: 0,
        clipPath: "inset(0 100% 0 0)",
        transformOrigin: "left center",
      });
      gsap.set([".hero-subtitle", ".hero-summary", ".hero-interest-row span", ".hero-actions", ".hero-meta-panel", ".scroll-cue"], {
        y: 26,
        opacity: 0,
      });

      const opening = gsap.timeline({ defaults: { ease: openingEase } });
      opening
        .to(".opening-curtain", { scaleY: 0, duration: 1.25, delay: 0.12 })
        .to(".hero-video", { scale: 1.02, yPercent: 0, filter: "saturate(0.8) contrast(1.02) brightness(0.56)", duration: 1.9 }, 0.06)
        .to(".site-header", { y: 0, opacity: 1, duration: 0.95 }, 0.42)
        .to(".hero-name", { y: 0, opacity: 1, duration: 0.9 }, 0.72)
        .to(".hero-title", { y: 0, scaleX: 1, opacity: 1, clipPath: "inset(0 0 0 0)", duration: 1.45 }, 0.82)
        .to(".hero-subtitle", { y: 0, opacity: 1, duration: 0.92 }, 1.18)
        .to(".hero-summary", { y: 0, opacity: 1, duration: 1.0 }, 1.32)
        .to(".hero-interest-row span", { y: 0, opacity: 1, duration: 0.86, stagger: 0.06 }, 1.42)
        .to(".hero-actions", { y: 0, opacity: 1, duration: 0.95 }, 1.58)
        .to(".hero-meta-panel", { y: 0, opacity: 1, duration: 1.05 }, 1.36)
        .to(".scroll-cue", { y: 0, opacity: 1, duration: 0.82 }, 1.92);

      gsap.to(".hero-video", {
        yPercent: 8,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });

      gsap.utils.toArray(".motion-section").forEach((section) => {
        const marquee = section.querySelector(".section-marquee");
        const headingText = section.querySelectorAll(".section-heading > span, .section-heading h2, .section-heading p, .section-index, .contact-copy h2");
        const cards = section.querySelectorAll(".motion-card");
        const visuals = section.querySelectorAll(".project-visual");
        const images = section.querySelectorAll(".project-figure img, .project-chart img");

        if (marquee) {
          gsap.set(marquee, {
            y: 86,
            scale: 0.94,
            opacity: 0,
            clipPath: "inset(0 0 100% 0)",
          });
        }

        if (headingText.length) {
          gsap.set(headingText, { y: 42, opacity: 0, clipPath: "inset(0 0 100% 0)" });
        }

        if (cards.length) {
          gsap.set(cards, {
            y: 54,
            opacity: 0,
            clipPath: "inset(12% 0 0 0 round 28px)",
          });
        }

        if (visuals.length) {
          gsap.set(visuals, { clipPath: "inset(0 100% 0 0 round 26px)" });
        }

        if (images.length) {
          gsap.set(images, { scale: 1.06, yPercent: 3 });
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 72%",
            end: "bottom 18%",
            toggleActions: "play none none reverse",
          },
          defaults: { ease: scrollEase },
        });

        if (marquee) {
          tl.to(marquee, {
            y: 0,
            scale: 1,
            opacity: 0.14,
            clipPath: "inset(0 0 0 0)",
            duration: 1.2,
          });
        }

        if (headingText.length) {
          tl.to(headingText, { y: 0, opacity: 1, clipPath: "inset(0 0 0 0)", duration: 0.92, stagger: 0.08 }, 0.12);
        }

        if (cards.length) {
          tl.to(cards, { y: 0, opacity: 1, clipPath: "inset(0 0 0 0 round 28px)", duration: 1.05, stagger: 0.11 }, 0.36);
        }

        if (visuals.length) {
          tl.to(visuals, { clipPath: "inset(0 0 0 0 round 26px)", duration: 1.0, stagger: 0.08 }, 0.44);
        }

        if (images.length) {
          tl.to(images, { scale: 1, yPercent: 0, duration: 1.18, stagger: 0.06 }, 0.5);
        }

        images.forEach((image) => {
          gsap.to(image, {
            yPercent: -4,
            ease: "none",
            scrollTrigger: {
              trigger: image.closest(".project-showcase") || section,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.7,
            },
          });
        });
      });

      ScrollTrigger.refresh();
    }, scope);

    return () => ctx.revert();
  }, [scopeRef]);
}
