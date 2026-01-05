export const BackgroundGrid = () => {
  return (
    <div
      className="fixed inset-0 z-0 opacity-[0.05] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }}
      aria-hidden="true"
    />
  );
};
