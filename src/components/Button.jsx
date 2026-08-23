
export const Button = ({
  className = "",
  size = "default",
  children,
  href,
  as,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 cursor-pointer transition-all";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const classes = `${baseClasses} ${sizeClasses[size] || sizeClasses.default} ${className}`;

  if (href || as === "a") {
    return (
      <a href={href} className={classes} {...props}>
        <span className="relative flex items-center justify-center gap-2">
          {children}
        </span>
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};