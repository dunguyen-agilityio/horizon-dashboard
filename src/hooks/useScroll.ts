'use client';

import { useRef } from 'react';

export type WithScroll<T> = T & {
  handleScrollLeft: () => void;
  handleScrollRight: () => void;
};

export default function useScroll<K extends HTMLElement>() {
  const ref = useRef<K>(null);

  const handleScrollRight = () => {
    const element = ref.current;

    if (element) {
      const { scrollWidth, clientWidth, scrollLeft } = element;

      if (scrollWidth > clientWidth && scrollLeft < scrollWidth) {
        element.scrollTo({ left: scrollLeft + clientWidth });
      }
    }
  };

  const handleScrollLeft = () => {
    const element = ref.current;

    if (element) {
      const { scrollWidth, clientWidth, scrollLeft } = element;

      if (scrollWidth > clientWidth && scrollLeft > 0) {
        element.scrollTo({ left: scrollLeft - clientWidth });
      }
    }
  };

  return {
    handleScrollLeft,
    handleScrollRight,
    ref: ref as React.LegacyRef<K>,
  };
}
