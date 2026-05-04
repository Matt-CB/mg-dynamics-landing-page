import React, { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>(0);
  
  const endX = useRef(-100);
  const endY = useRef(-100);
  const _x = useRef(-100);
  const _y = useRef(-100);

  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Disable custom cursor on touch devices where fine pointer is not available
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      endX.current = e.clientX;
      endY.current = e.clientY;
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const documentMouseLeave = () => setIsVisible(false);
    const documentMouseEnter = () => setIsVisible(true);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;
      const isClickable = 
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer';
        
      setIsHovering(!!isClickable);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.documentElement.addEventListener('mouseleave', documentMouseLeave);
    document.documentElement.addEventListener('mouseenter', documentMouseEnter);
    window.addEventListener('mouseover', onMouseOver);

    const animate = () => {
      _x.current += (endX.current - _x.current) * 0.15;
      _y.current += (endY.current - _y.current) * 0.15;

      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform = `translate3d(${_x.current}px, ${_y.current}px, 0)`;
      }
      requestRef.current = requestAnimationFrame(animate);
    };
    // Initialize position slightly offset so it slides in
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.documentElement.removeEventListener('mouseleave', documentMouseLeave);
      document.documentElement.removeEventListener('mouseenter', documentMouseEnter);
      window.removeEventListener('mouseover', onMouseOver);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div style={{ mixBlendMode: 'difference' }} className={`pointer-events-none fixed inset-0 z-[9999] overflow-hidden transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'} hidden md:block`}>
      <div
        ref={cursorOutlineRef}
        className="absolute top-0 left-0 will-change-transform"
      >
        <div className={`w-8 h-8 -ml-4 -mt-4 rounded-full transition-all duration-300 ease-out flex items-center justify-center ${isHovering ? 'scale-[1.2] bg-white border-transparent' : 'scale-100 border-[1px] border-white'}`}>
        </div>
      </div>
      <div
        ref={cursorDotRef}
        className="absolute top-0 left-0 will-change-transform"
      >
        <div className={`w-1.5 h-1.5 -ml-[3px] -mt-[3px] bg-white rounded-full transition-all duration-300 ease-out ${isHovering ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
      </div>
    </div>
  );
}
