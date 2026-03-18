
import { useEffect, useState } from "react";

export default function useCountUp(target, duration = 600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (target == null) return;

    let start = 0;
    const increment = Math.max(1, Math.ceil(target / (duration/20)));

    const interval = setInterval(() => {
      start += increment;

      if (start >= target) {
        setValue(target);
        clearInterval(interval);
      } else {
        setValue(start);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [target, duration]);

  return value;
}