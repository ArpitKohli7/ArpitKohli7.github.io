import React from "react";
import "./PlanetLayer.css";

export default function PlanetLayer() {
  return (
    <div className="planet-layer" aria-hidden="true">
      <div className="earth-wrap">
        {/* Wide corona glow */}
        <div className="earth-corona" />
        {/* Atmosphere ring */}
        <div className="earth-atmosphere" />
        {/* Sphere */}
        <div className="earth-sphere">
          <img
            src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?auto=format&fit=crop&w=1400&q=90"
            alt=""
            className="earth-img"
            draggable="false"
          />
          {/* Only a thin night-side edge — let the photo breathe */}
          <div className="earth-shadow" />
          {/* Sun glint */}
          <div className="earth-highlight" />
        </div>
      </div>
    </div>
  );
}
