export default function Button({
  className = "",
  disabled,
  children,
  ...props
}) {
  return (
    <button
      {...props}
      className={
        `rounded px-3 py-2 transition ${disabled && "opacity-25"} ` + className
      }
      disabled={disabled}
    >
      {children}
    </button>
  );
}
