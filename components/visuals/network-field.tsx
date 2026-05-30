const nodes = [
  "left-[8%] top-[18%]",
  "left-[28%] top-[34%]",
  "left-[48%] top-[16%]",
  "left-[66%] top-[42%]",
  "left-[82%] top-[24%]",
  "left-[20%] top-[70%]",
  "left-[54%] top-[76%]",
  "left-[78%] top-[68%]",
];

export function NetworkField() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl"
      aria-hidden="true"
    >
      <div className="technical-grid absolute inset-0 opacity-80" />
      <svg className="absolute inset-0 h-full w-full text-text-main/14">
        <line x1="8%" y1="18%" x2="28%" y2="34%" stroke="currentColor" />
        <line x1="28%" y1="34%" x2="48%" y2="16%" stroke="currentColor" />
        <line x1="48%" y1="16%" x2="66%" y2="42%" stroke="currentColor" />
        <line x1="66%" y1="42%" x2="82%" y2="24%" stroke="currentColor" />
        <line x1="28%" y1="34%" x2="20%" y2="70%" stroke="currentColor" />
        <line x1="66%" y1="42%" x2="54%" y2="76%" stroke="currentColor" />
        <line x1="54%" y1="76%" x2="78%" y2="68%" stroke="currentColor" />
      </svg>
      {nodes.map((position, index) => (
        <span
          key={position}
          className={`absolute grid size-5 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-text-main/15 bg-surface shadow-soft ${position}`}
        >
          <span
            className={`size-2 rounded-full ${
              index % 3 === 0 ? "bg-golden-pollen" : "bg-text-main"
            }`}
          />
        </span>
      ))}
    </div>
  );
}
