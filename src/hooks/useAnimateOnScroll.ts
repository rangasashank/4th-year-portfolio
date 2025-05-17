import { useEffect } from 'react';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const useAnimateOnScroll = (threshold = 0.1) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, x: 0, scale: 1 });
    }
  }, [controls, inView]);

  return [ref, controls];
};