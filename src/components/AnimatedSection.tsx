
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animationClass?: string;
  className?: string;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  animationClass = 'animate-fade-in', 
  className = '',
  delay = 0
}) => {
  const ref = useScrollAnimation<HTMLDivElement>({ animationClass });

  return (
    <div 
      ref={ref} 
      className={className}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
