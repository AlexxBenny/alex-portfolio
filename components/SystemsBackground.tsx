"use client";

export default function SystemsBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <path
          d="M-100 200 C 300 50, 700 450, 1540 100"
          stroke="#2563EB"
          strokeWidth="2"
        />
        <path
          d="M-100 450 C 400 800, 900 200, 1540 600"
          stroke="#2563EB"
          strokeWidth="1.5"
          strokeDasharray="6 6"
        />
        <path
          d="M-100 700 C 500 300, 1000 850, 1540 400"
          stroke="#111111"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
