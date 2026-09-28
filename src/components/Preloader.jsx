import { useEffect, useState } from "react";

export const Preloader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // Lock background scroll during preloader
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const startTime = performance.now();
    const duration = 1800; // 1.8 seconds smooth, cinematic load

    let animationFrameId;

    const updateProgress = (currentTime) => {
      const elapsed = currentTime - startTime;
      const fraction = Math.min(elapsed / duration, 1);

      // Ease-out cubic curve for natural acceleration & deceleration
      const eased = 1 - Math.pow(1 - fraction, 3);
      const currentVal = Math.round(eased * 100);

      setProgress(currentVal);

      if (fraction < 1) {
        animationFrameId = requestAnimationFrame(updateProgress);
      } else {
        // Complete — brief pause then trigger luxury slide-up reveal
        setTimeout(() => {
          setIsExiting(true);
          if (onFinish) onFinish();

          // Wait for curtain animation to complete before removing from DOM
          setTimeout(() => {
            setIsFinished(true);
            document.body.style.overflow = originalOverflow;
          }, 850);
        }, 250);
      }
    };

    animationFrameId = requestAnimationFrame(updateProgress);

    return () => {
      cancelAnimationFrame(animationFrameId);
      document.body.style.overflow = originalOverflow;
    };
  }, [onFinish]);

  if (isFinished) return null;

  const getStatusText = (val) => {
    if (val < 25) return "Initializing portfolio...";
    if (val < 60) return "Loading projects & assets...";
    if (val < 90) return "Crafting experience...";
    return "Ready.";
  };

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-background overflow-hidden pointer-events-auto border-b border-primary/20 shadow-[0_20px_40px_rgba(168,85,247,0.15)] transition-transform duration-800 will-change-transform"
      style={{
        transform: isExiting ? "translateY(-100%)" : "translateY(0%)",
        transitionTimingFunction: "cubic-bezier(0.77, 0, 0.175, 1)",
      }}
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-highlight/10 rounded-full blur-[100px]" />
      </div>

      {/* Main Content Container */}
      <div
        className={`relative z-10 flex flex-col items-center text-center px-4 max-w-sm w-full transition-all duration-400 ease-out ${
          isExiting ? "opacity-0 -translate-y-8 scale-95" : "opacity-100 translate-y-0 scale-100"
        }`}
      >
        {/* Animated Brand Monogram */}
        <div className="mb-8">
          <div className="relative inline-flex items-center justify-center">
            <span className="text-4xl sm:text-5xl font-black tracking-tight text-white font-sans">
              JPP<span className="text-primary drop-shadow-[0_0_20px_rgba(168,85,247,0.9)] animate-pulse">.</span>
            </span>
          </div>
          <p className="mt-2 text-xs sm:text-sm font-medium tracking-widest uppercase text-muted-foreground">
            Pragathi Jayasinghe
          </p>
        </div>

        {/* Counter and Progress Section */}
        <div className="w-full space-y-4">
          {/* Numeric Percentage */}
          <div className="flex items-baseline justify-between px-1">
            <span className="text-xs font-medium text-muted-foreground tracking-wide">
              {getStatusText(progress)}
            </span>
            <span className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-primary drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]">
              {progress}
              <span className="text-xs font-normal text-muted-foreground ml-0.5">%</span>
            </span>
          </div>

          {/* Progress Bar Track */}
          <div className="relative w-full h-1.5 sm:h-2 bg-muted/60 rounded-full overflow-hidden p-0.5 border border-border/60">
            {/* Fill Bar */}
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary via-fuchsia-500 to-primary transition-all duration-75 ease-out shadow-[0_0_15px_rgba(168,85,247,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Bottom subtle tag */}
        <div className="mt-10 flex items-center gap-2 text-[11px] uppercase tracking-wider text-muted-foreground/70">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
          <span>Portfolio 2026</span>
        </div>
      </div>
    </div>
  );
};
