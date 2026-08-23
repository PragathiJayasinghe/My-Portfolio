import { useEffect, useState } from "react";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Disable on touch / mobile devices
    if (
      typeof window !== "undefined" &&
      (window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window)
    ) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Check if hovering over clickable elements
      const target = e.target;
      if (target && target.closest) {
        const isInteractive = target.closest(
          'a, button, input, textarea, select, [role="button"], .cursor-pointer, .group'
        );
        setIsHovered(!!isInteractive);
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  // Smooth trailing follower ring animation
  useEffect(() => {
    if (isTouchDevice) return;

    let animationFrameId;
    const followCursor = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.16,
        y: prev.y + (position.y - prev.y) * 0.16,
      }));
      animationFrameId = requestAnimationFrame(followCursor);
    };

    animationFrameId = requestAnimationFrame(followCursor);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer Follower Glow Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full transition-transform duration-200 ease-out will-change-transform ${
          isHovered
            ? "w-12 h-12 bg-primary/15 border border-primary shadow-[0_0_25px_rgba(168,85,247,0.6)]"
            : isClicked
            ? "w-7 h-7 bg-primary/25 border border-primary shadow-[0_0_15px_rgba(168,85,247,0.4)]"
            : "w-9 h-9 bg-primary/10 border border-primary/40 shadow-[0_0_15px_rgba(168,85,247,0.3)]"
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
        }}
      />

      {/* Center Precise Dot */}
      <div
        className={`fixed top-0 left-0 rounded-full bg-primary transition-all duration-100 ease-out will-change-transform ${
          isHovered
            ? "w-2.5 h-2.5 bg-white shadow-[0_0_12px_#ffffff]"
            : isClicked
            ? "w-1.5 h-1.5 bg-secondary-foreground"
            : "w-2 h-2 shadow-[0_0_8px_rgba(168,85,247,0.8)]"
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
    </div>
  );
};
