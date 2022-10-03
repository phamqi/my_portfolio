import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

LazyLoad.propTypes = {
  src: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

function LazyLoad({
  src,
  placeholder = "",
  alt = "img",
  className = "lz_img",
}) {
  const ref = useRef();
  useEffect(() => {
    const lazyLoad = ref.current.getAttribute("lazy-load");
    if ("IntersectionObserver" in window) {
      const obServer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          entry.target.src = lazyLoad;
          obServer.unobserve(entry.target);
          ref.current.removeAttribute("lazy-load");
        }
      });
      obServer.observe(ref.current);
    } else {
      const windowHeight = window.innerHeight;
      const imgLocation = ref.current.getBoundingClientRect().top - 200;
      window.addEventListener("scroll", function () {
        if (window.scrollY + windowHeight > imgLocation) {
          ref.current.setAttribute("src", lazyLoad);
          ref.current.removeAttribute("lazy-load");
        }
      });
    }
  }, []);
  return (
    <img
      className={className}
      ref={ref}
      src={placeholder}
      lazy-load={src}
      alt={alt}
    />
  );
}

export default LazyLoad;
