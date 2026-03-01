import { useEffect, useRef, useState } from "react";
import clsx from "clsx"; 

export default function ScrollRevealSection({
  children,
  className = "",
  threshold = 0.1,
  delay = "0", 
  duration = "700",
  direction = "up",
  once = false, // animate only once?
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -80px 0px", // little earlier trigger
      },
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  // Map direction to transform classes
  const getTransformClass = () => {
    switch (direction) {
      case "down":
        return "translate-y-[-40px]";
      case "left":
        return "-translate-x-12";
      case "right":
        return "translate-x-12";
      case "up":
      default:
        return "translate-y-10";
    }
  };

  return (
    <div
      ref={ref}
      className={clsx(
        "w-full transition-all ease-out",
        isVisible
          ? `opacity-100 duration-${duration} ${delay ? `delay-${delay}` : ""}`
          : `opacity-0 ${getTransformClass()}`,
        className,
      )}
    >
      {children}
    </div>
  );
}
