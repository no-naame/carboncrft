import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function MagneticButton() {
  const navigate = useNavigate();
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    if (!buttonRef.current) return;

    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const maxDistance = Math.min(width, height) / 2;

    if (distance < maxDistance) {
      const scale = (maxDistance - distance) / maxDistance;
      setPosition({
        x: deltaX * scale * 0.2,
        y: deltaY * scale * 0.2,
      });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={buttonRef}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <button
        onClick={() => navigate('/products')}
        className="group relative overflow-hidden rounded-full bg-[#333333] px-8 py-4 transition-all duration-300 hover:pr-14">
        <span className="relative z-10 text-white">
          Get Started
        </span>
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight size={20} />
        </span>
      </button>
    </motion.div>
  );
}