import React, { useState, useEffect } from 'react';
import './carousel.css'; // Certifique-se de criar este arquivo para estilos

export default function Carousel() {
  const images = [
    { src: "/images/1.png", alt: "Tela Dono 1" },
    { src: "/images/2.png", alt: "Tela Dono 2" },
    { src: "/images/3.png", alt: "Tela Cliente 1" },
    { src: "/images/4.png", alt: "Tela Cliente 2" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // começa o fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(true); // fade in
      }, 500); // duração do fade
    }, 3500);

    return () => clearInterval(interval);
  }, [images.length]);

  function prev() {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      setFade(true);
    }, 500);
  }

  function next() {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 500);
  }

  return (
    <div className="carousel">
      {/* <button onClick={prev} className="nav-button left">‹</button> */}
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
        className="carousel-image"
        style={{ opacity: fade ? 1 : 0 }}
      />
      {/* <button onClick={next} className="nav-button right">›</button> */}
    </div>
  );
}