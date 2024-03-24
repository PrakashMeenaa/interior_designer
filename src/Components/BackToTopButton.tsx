"use client";
import React, { useEffect, useState } from "react";

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const progressPath = document.querySelector<SVGPathElement>(".progress-wrap path");
    if (!progressPath) return;

    const pathLength = progressPath.getTotalLength();

    progressPath.style.transition = "none";
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength.toString();
    progressPath.getBoundingClientRect();
    progressPath.style.transition = "stroke-dashoffset 10ms linear";

    const updateProgress = () => {
      const scroll = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress.toString();

      if (scroll > 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress);

    const handleScrollToTop = (event: MouseEvent) => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };

    const progressWrap = document.querySelector<HTMLDivElement>(".progress-wrap");
    if (progressWrap) {
      progressWrap.addEventListener("click", handleScrollToTop);
    }

    return () => {
      window.removeEventListener("scroll", updateProgress);
      if (progressWrap) {
        progressWrap.removeEventListener("click", handleScrollToTop);
      }
    };
  }, []);

  return (
    <div
      className="progress-wrap flex relative"
      style={{
        position: "fixed",
        right: "40px",
        bottom: "40px",
        height: "50px",
        width: "50px",
        cursor: "pointer",
        display: isVisible ? "block" : "none",
        borderRadius: "50px",
        boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.2)",
        zIndex: 10000,
        transform: "translateY(15px)",
        transition: "all 200ms linear",
      }}
    >
      <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
        <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{ fill: "none", stroke: "#816330", strokeWidth: "4", boxSizing: "border-box", transition: "all 200ms linear" }} />
      </svg>
      <div className="absolute top-[35%] left-[35%]">
        <svg fill="#816330" height="16px" width="16px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 330 330" xmlSpace="preserve">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              id="XMLID_224_"
              d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
            ></path>{" "}
          </g>
        </svg>
      </div>
    </div>
  );
};

export default BackToTopButton;
