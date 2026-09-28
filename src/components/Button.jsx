
export const Button = ({
  className = "",
  size = "default",
  children,
  href,
  as,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20 cursor-pointer transition-all duration-200";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm gap-1.5",
    default: "px-6 py-3 text-base gap-2",
    lg: "px-7 py-3.5 text-[15px] gap-2",
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