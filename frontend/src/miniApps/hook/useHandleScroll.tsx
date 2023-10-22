import { useEffect } from "react";

const useHandleScroll = (callback: any) => {
  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position.
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if the user has scrolled to the bottom of the page.
      if (scrollY + windowHeight >= documentHeight) {
        callback();
      }
    };

    // Attach the scroll event listener.
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Remove the scroll event listener when the component unmounts.
    return () => window.removeEventListener("scroll", handleScroll);
  }, [callback]);
};
export { useHandleScroll };
