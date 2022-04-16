import { useEffect, useState, useRef } from 'react';

export const useScreen = () => {
  const [isScreen, setShow] = useState(false);
  const fromRef = useRef();

  useEffect(() => {
    const element = fromRef.current;

    const onChange = (entries, observer) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setShow(true);
        observer.disconnect();
      } else {
        setShow(false);
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: '100px',
    });

    if (element) observer.observe(element);

    return () => observer && observer.disconnect();
  });

  return { isScreen, fromRef };
};
