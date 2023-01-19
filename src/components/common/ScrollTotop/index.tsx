import React, { useState, useEffect } from "react";
import './index.scss';

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 400) {
              setShowTopBtn(true);
          } else {
              setShowTopBtn(false);
          }
      });
  }, []);
  const goToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: "smooth",
      });
  };
  return (
    <>
      {showTopBtn && (
        <div className="top-to-btm" onClick={goToTop}>
            <img src="/img/icons/component_scroll.png" width={48}
            height={48} />
        </div>
      )}
    </>
  );
};
export default ScrollToTop;