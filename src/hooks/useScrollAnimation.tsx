
import { useEffect, useRef } from 'react';

type AnimationOptions = {
  threshold?: number;
  rootMargin?: string;
  animationClass: string;
};

export function useScrollAnimation<T extends HTMLElement>(
  options: AnimationOptions = { threshold: 0.2, rootMargin: '0px', animationClass: 'animate-fade-in' }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const { threshold, rootMargin, animationClass } = options;
    const currentRef = ref.current;

    if (!currentRef) return;

    // Initially hide the element
    currentRef.style.opacity = '0';
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when element is in view
            currentRef.style.opacity = '1';
            currentRef.classList.add(animationClass);
            // Stop observing after animation is triggered
            observer.unobserve(currentRef);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return ref;
}
